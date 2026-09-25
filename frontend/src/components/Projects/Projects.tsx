
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaSearch,
  FaFilter,
  FaTimes,
  FaStar,
} from "react-icons/fa";

import api from "../../services/api";
import type { Project } from "../../types";

/* =========================================================
   FALLBACK PROJECTS
   ========================================================= */

const fallbackProjects: Project[] = [
  {
    _id: "fleetdash",
    slug: "fleetdash",

    title: "FleetDash",

    description:
      "A full-stack fleet management platform for monitoring vehicles, drivers, trips, analytics and real-time tracking.",

    category: "MERN Stack",

    // Kept because Project type currently requires image.
    // It is NOT displayed in the UI.
    image: "/projects/fleet-dash.png",

    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Socket.io",
      "Tailwind CSS",
    ],

    features: [
      "Fleet Dashboard",
      "Vehicle Management",
      "Driver Management",
      "Live Tracking",
      "Analytics",
      "Alerts",
    ],

    featured: true,

    liveDemo: "#",
    github: "#",
  },

  {
    _id: "syncdoc",
    slug: "syncdoc",

    title: "SyncDoc",

    description:
      "A collaborative document platform that allows multiple users to edit documents in real time with modern web technologies.",

    category: "MERN Stack",

    // Kept because Project type currently requires image.
    // It is NOT displayed in the UI.
    image: "/projects/sync-doc.png.png",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Yjs",
      "JWT",
    ],

    features: [
      "Real-time Collaboration",
      "Document Management",
      "Authentication",
      "Live Editing",
      "Version History",
      "PDF Export",
    ],

    featured: true,

    liveDemo: "#",
    github: "#",
  },

  {
    _id: "url-shortener",
    slug: "url-shortener",

    title: "URL Shortener",

    description:
      "A full-stack URL shortening application that converts long URLs into short, shareable links with a simple and responsive interface.",

    category: "MERN Stack",

    // Kept because Project type currently requires image.
    // It is NOT displayed in the UI.
    image: "/projects/url-shortener.png.png",

    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Tailwind CSS",
    ],

    features: [
      "URL Shortening",
      "Custom Short URLs",
      "Copy Short URL",
      "Responsive UI",
      "API Integration",
      "URL Management",
    ],

    featured: true,

    liveDemo: "#",
    github: "#",
  },
];

/* =========================================================
   PROJECTS COMPONENT
   ========================================================= */

const Projects = () => {
  const [projects, setProjects] =
    useState<Project[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [search, setSearch] =
    useState<string>("");

  const [category, setCategory] =
    useState<string>("All");

  const [error, setError] =
    useState<string>("");

  /* =======================================================
     FETCH PROJECTS
     ======================================================= */

  useEffect(() => {
    let mounted = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await api.get("/projects");

        const data =
          response.data?.data;

        if (
          mounted &&
          Array.isArray(data) &&
          data.length > 0
        ) {
          setProjects(data);
        } else if (mounted) {
          setProjects(fallbackProjects);
        }
      } catch (err) {
        console.error(
          "Failed to fetch projects:",
          err
        );

        if (mounted) {
          setProjects(fallbackProjects);

          setError(
            "Showing fallback projects because the API is currently unavailable."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  /* =======================================================
     CATEGORIES
     ======================================================= */

  const categories = useMemo(() => {
    const uniqueCategories =
      projects
        .map(
          (project) =>
            project.category
        )
        .filter(Boolean);

    return [
      "All",
      ...Array.from(
        new Set(uniqueCategories)
      ),
    ];
  }, [projects]);

  /* =======================================================
     FILTER PROJECTS
     ======================================================= */

  const filteredProjects =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      return projects.filter(
        (project) => {
          const matchesSearch =
            !query ||
            project.title
              .toLowerCase()
              .includes(query) ||
            project.description
              .toLowerCase()
              .includes(query) ||
            project.category
              .toLowerCase()
              .includes(query) ||
            project.technologies.some(
              (technology) =>
                technology
                  .toLowerCase()
                  .includes(query)
            ) ||
            project.features.some(
              (feature) =>
                feature
                  .toLowerCase()
                  .includes(query)
            );

          const matchesCategory =
            category === "All" ||
            project.category ===
              category;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      projects,
      search,
      category,
    ]);

  /* =======================================================
     CLEAR FILTERS
     ======================================================= */

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background Decoration */}

      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

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
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Featured{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            A collection of full-stack
            and frontend applications
            built using modern web
            technologies.
          </p>
        </motion.div>

        {/* =================================================
            SEARCH + FILTER
        ================================================= */}

        {!loading && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          >

            {/* Search */}

            <div className="relative w-full lg:max-w-md">

              <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search projects..."
                aria-label="Search projects"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-10 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() =>
                    setSearch("")
                  }
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                >
                  <FaTimes />
                </button>
              )}

            </div>

            {/* Category Filters */}

            <div className="flex flex-wrap items-center gap-2">

              <div className="mr-1 hidden items-center gap-2 text-sm text-slate-500 sm:flex">
                <FaFilter />

                <span>
                  Filter:
                </span>
              </div>

              {categories.map(
                (item) => {
                  const isActive =
                    category ===
                    item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setCategory(
                          item
                        )
                      }
                      className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                        isActive
                          ? "bg-cyan-500 text-slate-950"
                          : "border border-white/10 bg-white/5 text-slate-400 hover:border-cyan-400/30 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  );
                }
              )}

            </div>
          </motion.div>
        )}

        {/* =================================================
            API ERROR
        ================================================= */}

        {!loading && error && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mb-8 rounded-xl border border-yellow-400/20 bg-yellow-400/5 px-4 py-3 text-center text-sm text-yellow-300"
          >
            {error}
          </motion.div>
        )}

        {/* =================================================
            LOADING
        ================================================= */}

        {loading && (
          <ProjectSkeleton />
        )}

        {/* =================================================
            PROJECTS
        ================================================= */}

        {!loading && (
          <>
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">

                  {filteredProjects.map(
                    (
                      project,
                      index
                    ) => (
                      <ProjectCard
                        key={
                          project._id ||
                          project.slug
                        }
                        project={
                          project
                        }
                        index={
                          index
                        }
                      />
                    )
                  )}

                </AnimatePresence>
              </motion.div>
            ) : (
              <EmptyState
                onClear={
                  clearFilters
                }
              />
            )}
          </>
        )}

        {/* =================================================
            RESULT COUNT
        ================================================= */}

        {!loading &&
          filteredProjects.length > 0 && (
            <p className="mt-8 text-center text-xs text-slate-600">
              Showing{" "}
              {
                filteredProjects.length
              }{" "}
              of{" "}
              {projects.length}{" "}
              projects
            </p>
          )}

      </div>
    </section>
  );
};

/* =========================================================
   PROJECT CARD
   ========================================================= */

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({
  project,
  index,
}: ProjectCardProps) => {
  return (
    <motion.article
      layout

      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      exit={{
        opacity: 0,
        scale: 0.95,
      }}

      transition={{
        duration: 0.45,
        delay:
          index * 0.05,
      }}

      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
    >

      {/* =================================================
          PROJECT HEADER
          NO IMAGE
      ================================================= */}

      <div className="flex items-center justify-between px-6 pt-6">

        {/* Category */}

        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          {project.category}
        </span>

        {/* Featured */}

        {project.featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
            <FaStar size={10} />
            Featured
          </span>
        )}

      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="p-6">

        {/* Title */}

        <div className="mb-3 flex items-center gap-2">

          <FaCode className="shrink-0 text-cyan-400" />

          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>

        </div>

        {/* Description */}

        <p className="line-clamp-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        {project.technologies?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">

            {project.technologies
              .slice(0, 6)
              .map(
                (technology) => (
                  <span
                    key={
                      technology
                    }
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                )
              )}

          </div>
        )}

        {/* =================================================
            FEATURES
        ================================================= */}

        {project.features?.length > 0 && (
          <div className="mt-5">

            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Key Features
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2">

              {project.features
                .slice(0, 4)
                .map(
                  (feature) => (
                    <span
                      key={
                        feature
                      }
                      className="text-xs text-slate-400"
                    >
                      • {feature}
                    </span>
                  )
                )}

            </div>

          </div>
        )}

        {/* =================================================
            PROJECT LINKS
        ================================================= */}

        {(project.liveDemo &&
          project.liveDemo !== "#") ||
        (project.github &&
          project.github !== "#") ? (

          <div className="mt-7 flex gap-3">

            {/* Live Demo */}

            {project.liveDemo &&
              project.liveDemo !== "#" && (
                <a
                  href={
                    project.liveDemo
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Live Demo

                  <FaExternalLinkAlt
                    size={11}
                  />
                </a>
              )}

            {/* GitHub */}

            {project.github &&
              project.github !== "#" && (
                <a
                  href={
                    project.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <FaGithub />

                  GitHub
                </a>
              )}

          </div>

        ) : (

          <div className="mt-7">

            <span className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-slate-500">
              Links coming soon
            </span>

          </div>

        )}

      </div>

    </motion.article>
  );
};

/* =========================================================
   PROJECT SKELETON
   ========================================================= */

const ProjectSkeleton = () => {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

      {Array.from({
        length: 6,
      }).map((_, index) => (

        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
        >

          {/* No image skeleton */}

          <div className="space-y-4 p-6">

            <div className="h-6 w-24 animate-pulse rounded-full bg-white/5" />

            <div className="h-5 w-2/3 animate-pulse rounded bg-white/5" />

            <div className="h-12 animate-pulse rounded bg-white/5" />

            <div className="flex gap-2">

              <div className="h-6 w-16 animate-pulse rounded bg-white/5" />

              <div className="h-6 w-20 animate-pulse rounded bg-white/5" />

              <div className="h-6 w-14 animate-pulse rounded bg-white/5" />

            </div>

            <div className="h-10 animate-pulse rounded-xl bg-white/5" />

          </div>

        </div>

      ))}

    </div>
  );
};

/* =========================================================
   EMPTY STATE
   ========================================================= */

interface EmptyStateProps {
  onClear: () => void;
}

const EmptyState = ({
  onClear,
}: EmptyStateProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center"
    >

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
        <FaSearch />
      </div>

      <h3 className="mt-5 text-xl font-bold text-white">
        No projects found
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Try changing your search
        or category filter.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-6 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Clear Filters
      </button>

    </motion.div>
  );
};

export default Projects;
