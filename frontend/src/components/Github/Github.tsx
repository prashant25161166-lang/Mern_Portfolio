import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaUsers,
  FaBook,
  FaExternalLinkAlt,
  FaSpinner,
  FaSearch,
  FaRedo,
  FaMapMarkerAlt,
} from "react-icons/fa";

import api from "../../services/api";

import type {
  GithubData,
  GithubRepository,
} from "../../types";

const Github = () => {
  const [github, setGithub] =
    useState<GithubData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const fetchGithub = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await api.get("/github");

      if (!response.data?.success) {
        throw new Error(
          response.data?.message ||
            "Unable to load GitHub information."
        );
      }

      setGithub(response.data.data);
    } catch (err: any) {
      console.error(
        "Failed to load GitHub data:",
        err
      );

      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to load GitHub information."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithub();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Search repositories
  |--------------------------------------------------------------------------
  */

  const filteredRepositories =
    useMemo(() => {
      if (!github) return [];

      const query =
        search.trim().toLowerCase();

      if (!query) {
        return github.repositories;
      }

      return github.repositories.filter(
        (repo) =>
          repo.name
            .toLowerCase()
            .includes(query) ||
          repo.description
            ?.toLowerCase()
            .includes(query) ||
          repo.language
            ?.toLowerCase()
            .includes(query)
      );
    }, [github, search]);

  /*
  |--------------------------------------------------------------------------
  | Format date
  |--------------------------------------------------------------------------
  */

  const formatDate = (
    date: string
  ) => {
    return new Date(
      date
    ).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section
      id="github"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Open Source
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            GitHub{" "}
            <span className="text-cyan-400">
              Activity
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Explore my development projects,
            repositories and open-source work.
          </p>
        </motion.div>

        {/* Loading */}

        {loading && (
          <GithubSkeleton />
        )}

        {/* Error */}

        <AnimatePresence>
          {!loading && error && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              className="mx-auto max-w-xl rounded-3xl border border-red-400/20 bg-red-400/5 p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-400/10 text-red-400">
                <FaGithub size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                GitHub Unavailable
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {error}
              </p>

              <button
                onClick={fetchGithub}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <FaRedo />
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub Content */}

        {!loading &&
          !error &&
          github && (
            <>
              {/* Profile Card */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                  {/* Profile */}

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <img
                      src={
                        github.profile.avatar
                      }
                      alt={`${github.profile.username} GitHub profile`}
                      className="h-24 w-24 rounded-2xl border border-white/10 object-cover shadow-xl"
                    />

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-white">
                          {github.profile
                            .name ||
                            github.profile
                              .username}
                        </h3>

                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                          @
                          {
                            github
                              .profile
                              .username
                          }
                        </span>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                        {github.profile
                          .bio ||
                          "MERN Stack Developer building modern web applications."}
                      </p>

                      {github.profile
                        .location && (
                        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                          <FaMapMarkerAlt className="text-cyan-400" />

                          {
                            github
                              .profile
                              .location
                          }
                        </div>
                      )}
                    </div>
                  </div>

                  {/* GitHub Button */}

                  <a
                    href={
                      github.profile
                        .profileUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
                  >
                    <FaGithub />

                    View GitHub

                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>

                {/* Stats */}

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:grid-cols-4">

                  <GithubStat
                    icon={<FaBook />}
                    value={
                      github.profile
                        .publicRepositories
                    }
                    label="Repositories"
                  />

                  <GithubStat
                    icon={<FaUsers />}
                    value={
                      github.profile
                        .followers
                    }
                    label="Followers"
                  />

                  <GithubStat
                    icon={<FaUsers />}
                    value={
                      github.profile
                        .following
                    }
                    label="Following"
                  />

                  <GithubStat
                    icon={
                      <FaCodeBranch />
                    }
                    value={
                      github.repositories
                        .length
                    }
                    label="Recent Projects"
                  />
                </div>
              </motion.div>

              {/* Repository Toolbar */}

              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Recent Repositories
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Showing{" "}
                    {
                      filteredRepositories.length
                    }{" "}
                    repositories
                  </p>
                </div>

                <div className="relative w-full sm:max-w-xs">
                  <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                  <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target
                          .value
                      )
                    }
                    placeholder="Search repositories..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              {/* Repository Cards */}

              {filteredRepositories.length >
              0 ? (
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {filteredRepositories
                    .slice(0, 9)
                    .map(
                      (
                        repo,
                        index
                      ) => (
                        <RepositoryCard
                          key={repo.id}
                          repo={repo}
                          index={index}
                          formatDate={
                            formatDate
                          }
                        />
                      )
                    )}
                </div>
              ) : (
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
                  <FaSearch className="mx-auto text-2xl text-slate-600" />

                  <p className="mt-4 text-slate-400">
                    No repositories found.
                  </p>
                </div>
              )}

              {/* Bottom CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-10 text-center"
              >
                <a
                  href={
                    github.profile
                      .profileUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  <FaGithub />

                  Explore All Projects

                  <FaExternalLinkAlt
                    size={12}
                  />
                </a>
              </motion.div>
            </>
          )}
      </div>
    </section>
  );
};

/*
|--------------------------------------------------------------------------
| Repository Card
|--------------------------------------------------------------------------
*/

interface RepositoryCardProps {
  repo: GithubRepository;
  index: number;
  formatDate: (
    date: string
  ) => string;
}

const RepositoryCard = ({
  repo,
  index,
  formatDate,
}: RepositoryCardProps) => {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -6,
      }}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-500/5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
          <FaGithub className="text-xl text-cyan-400" />
        </div>

        <FaExternalLinkAlt
          size={13}
          className="text-slate-600 transition group-hover:text-cyan-400"
        />
      </div>

      <h3 className="mt-5 truncate text-lg font-bold text-white">
        {repo.name}
      </h3>

      <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-slate-400">
        {repo.description ||
          "GitHub repository and development project."}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />

          {repo.language || "Code"}
        </span>

        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <FaStar />

            {repo.stars}
          </span>

          <span className="flex items-center gap-1">
            <FaCodeBranch />

            {repo.forks}
          </span>
        </span>
      </div>

      <p className="mt-3 text-xs text-slate-600">
        Updated{" "}
        {formatDate(repo.updatedAt)}
      </p>
    </motion.a>
  );
};

/*
|--------------------------------------------------------------------------
| Stats
|--------------------------------------------------------------------------
*/

interface GithubStatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
}

const GithubStat = ({
  icon,
  value,
  label,
}: GithubStatProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <div>
        <p className="text-xl font-bold text-white">
          {value}
        </p>

        <p className="text-xs text-slate-500">
          {label}
        </p>
      </div>
    </div>
  );
};

/*
|--------------------------------------------------------------------------
| Loading Skeleton
|--------------------------------------------------------------------------
*/

const GithubSkeleton = () => {
  return (
    <div className="animate-pulse">

      <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="h-24 w-24 rounded-2xl bg-white/10" />

          <div className="flex-1">
            <div className="h-6 w-48 rounded bg-white/10" />

            <div className="mt-4 h-4 max-w-xl rounded bg-white/10" />

            <div className="mt-2 h-4 max-w-md rounded bg-white/10" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:grid-cols-4">
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <div
              key={index}
              className="h-12 rounded-xl bg-white/5"
            />
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({
          length: 6,
        }).map((_, index) => (
          <div
            key={index}
            className="h-64 rounded-2xl border border-white/10 bg-white/[0.03]"
          />
        ))}
      </div>
    </div>
  );
};

export default Github;