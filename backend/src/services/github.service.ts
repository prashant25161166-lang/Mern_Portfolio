import axios, {
  AxiosError,
} from "axios";

interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
}

interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface GithubResponse {
  profile: {
    username: string;
    name: string | null;
    bio: string | null;
    avatar: string;
    profileUrl: string;
    followers: number;
    following: number;
    publicRepositories: number;
    location: string | null;
  };

  repositories: {
    id: number;
    name: string;
    url: string;
    description: string | null;
    language: string | null;
    stars: number;
    forks: number;
    updatedAt: string;
  }[];
}

/*
|--------------------------------------------------------------------------
| GitHub API Client
|--------------------------------------------------------------------------
*/

const githubApi = axios.create({
  baseURL: "https://api.github.com",

  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "MERN-Portfolio",
  },

  timeout: 10000,
});

/*
|--------------------------------------------------------------------------
| Simple in-memory cache
|--------------------------------------------------------------------------
*/

let cachedGithubData: GithubResponse | null = null;

let cacheTimestamp = 0;

// 10 minutes
const CACHE_DURATION = 10 * 60 * 1000;

/*
|--------------------------------------------------------------------------
| Get GitHub Data
|--------------------------------------------------------------------------
*/

export const getGitHubProfile =
  async (): Promise<GithubResponse> => {
    const username =
      process.env.GITHUB_USERNAME;

    const token =
      process.env.GITHUB_TOKEN;

    /*
    |--------------------------------------------------------------------------
    | Check username
    |--------------------------------------------------------------------------
    */

    if (!username) {
      throw new Error(
        "GITHUB_USERNAME is not defined in .env"
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Return cached data
    |--------------------------------------------------------------------------
    */

    const now = Date.now();

    if (
      cachedGithubData &&
      now - cacheTimestamp <
        CACHE_DURATION
    ) {
      console.log(
        "📦 Returning cached GitHub data"
      );

      return cachedGithubData;
    }

    /*
    |--------------------------------------------------------------------------
    | Request Headers
    |--------------------------------------------------------------------------
    */

    const headers: Record<
      string,
      string
    > = {
      Accept:
        "application/vnd.github+json",

      "X-GitHub-Api-Version":
        "2022-11-28",

      "User-Agent":
        "MERN-Portfolio",
    };

    /*
    |--------------------------------------------------------------------------
    | Add token if available
    |--------------------------------------------------------------------------
    */

    if (token) {
      headers.Authorization =
        `Bearer ${token}`;
    }

    /*
    |--------------------------------------------------------------------------
    | Fetch profile
    |--------------------------------------------------------------------------
    */

    try {
      console.log(
        `🐙 Fetching GitHub profile: ${username}`
      );

      const userResponse =
        await githubApi.get<GitHubUser>(
          `/users/${username}`,
          {
            headers,
          }
        );

      /*
      |--------------------------------------------------------------------------
      | Fetch repositories
      |--------------------------------------------------------------------------
      */

      const reposResponse =
        await githubApi.get<
          GitHubRepository[]
        >(
          `/users/${username}/repos`,
          {
            params: {
              per_page: 10,
              sort: "updated",
              direction: "desc",
              type: "owner",
            },

            headers,
          }
        );

      /*
      |--------------------------------------------------------------------------
      | Format response
      |--------------------------------------------------------------------------
      */

      const githubData: GithubResponse = {
        profile: {
          username:
            userResponse.data.login,

          name:
            userResponse.data.name,

          bio:
            userResponse.data.bio,

          avatar:
            userResponse.data.avatar_url,

          profileUrl:
            userResponse.data.html_url,

          followers:
            userResponse.data.followers,

          following:
            userResponse.data.following,

          publicRepositories:
            userResponse.data.public_repos,

          location:
            userResponse.data.location,
        },

        repositories:
          reposResponse.data.map(
            (repo) => ({
              id: repo.id,

              name: repo.name,

              url: repo.html_url,

              description:
                repo.description,

              language:
                repo.language,

              stars:
                repo.stargazers_count,

              forks:
                repo.forks_count,

              updatedAt:
                repo.updated_at,
            })
          ),
      };

      /*
      |--------------------------------------------------------------------------
      | Save cache
      |--------------------------------------------------------------------------
      */

      cachedGithubData =
        githubData;

      cacheTimestamp =
        Date.now();

      console.log(
        "✅ GitHub data loaded successfully"
      );

      return githubData;
    } catch (error) {
      const axiosError =
        error as AxiosError<{
          message?: string;
        }>;

      /*
      |--------------------------------------------------------------------------
      | Rate Limit
      |--------------------------------------------------------------------------
      */

      if (
        axiosError.response
          ?.status === 403
      ) {
        const remaining =
          axiosError.response
            .headers[
            "x-ratelimit-remaining"
          ];

        const reset =
          axiosError.response
            .headers[
            "x-ratelimit-reset"
          ];

        console.error(
          "❌ GitHub API rate limit exceeded"
        );

        /*
        | If old cached data exists,
        | use it instead of breaking UI.
        */

        if (cachedGithubData) {
          console.log(
            "⚠️ Using cached GitHub data"
          );

          return cachedGithubData;
        }

        const resetDate = reset
          ? new Date(
              Number(reset) * 1000
            )
          : null;

        throw new Error(
          `GitHub API rate limit exceeded. ` +
          `Remaining: ${remaining ?? 0}. ` +
          `${
            resetDate
              ? `Try again after ${resetDate.toLocaleTimeString()}.`
              : "Please try again later."
          }`
        );
      }

      /*
      |--------------------------------------------------------------------------
      | User not found
      |--------------------------------------------------------------------------
      */

      if (
        axiosError.response
          ?.status === 404
      ) {
        throw new Error(
          `GitHub user "${username}" was not found.`
        );
      }

      /*
      |--------------------------------------------------------------------------
      | Unauthorized
      |--------------------------------------------------------------------------
      */

      if (
        axiosError.response
          ?.status === 401
      ) {
        throw new Error(
          "GitHub authentication failed. Check GITHUB_TOKEN."
        );
      }

      /*
      |--------------------------------------------------------------------------
      | Other GitHub errors
      |--------------------------------------------------------------------------
      */

      const githubMessage =
        axiosError.response
          ?.data?.message;

      console.error(
        "GitHub API Error:",
        githubMessage ||
          axiosError.message
      );

      /*
      |--------------------------------------------------------------------------
      | Fallback cache
      |--------------------------------------------------------------------------
      */

      if (cachedGithubData) {
        console.log(
          "⚠️ Returning previously cached GitHub data"
        );

        return cachedGithubData;
      }

      throw new Error(
        githubMessage ||
          "Unable to fetch GitHub information."
      );
    }
  };