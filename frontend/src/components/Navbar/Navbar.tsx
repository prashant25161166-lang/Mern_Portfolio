import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaArrowRight,
} from "react-icons/fa";

import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks";

import { toggleTheme } from "../../redux/themeSlice";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Services", href: "#services" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(
    (state) => state.theme.mode
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState("home");
  const [scrolled, setScrolled] = useState(false);

  /*
   * Scroll detection
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
   * Active section detection
   */
  useEffect(() => {
    const sectionIds = navItems.map((item) =>
      item.href.substring(1)
    );

    const sections = sectionIds
      .map((id) =>
        document.getElementById(id)
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    if (!sections.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(
              (entry) => entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );

          if (visible.length > 0) {
            setActiveSection(
              visible[0].target.id
            );
          }
        },
        {
          root: null,
          rootMargin:
            "-20% 0px -60% 0px",
          threshold: [0.1, 0.25, 0.5],
        }
      );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Smooth navigation
   */
  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const id = href.substring(1);
    const target =
      document.getElementById(id);

    if (!target) {
      return;
    }

    setActiveSection(id);
    setIsOpen(false);

    const navbarHeight = 80;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    /*
     * Update only the hash.
     * This prevents unwanted paths such as:
     *
     * /prashantsharmaps7417@gmail.com#home
     *
     * and keeps:
     *
     * /#home
     */
    window.history.replaceState(
      null,
      "",
      `#${id}`
    );
  };

  /*
   * Logo navigation
   */
  const handleLogoClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setIsOpen(false);
    setActiveSection("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      "#home"
    );
  };

  /*
   * Theme toggle
   */
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  /*
   * Close menu when Escape is pressed
   */
  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /*
   * Prevent body scrolling when mobile menu is open
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-slate-950/90 shadow-xl shadow-black/10 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="group relative text-xl font-bold tracking-wide"
          >
            <span className="text-white">
              MERN
            </span>

            <span className="text-cyan-400">
              Portfolio
            </span>

            <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const sectionId =
                item.href.substring(1);

              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(event) =>
                    handleNavigation(
                      event,
                      item.href
                    )
                  }
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute bottom-0.5 left-2 right-2 h-0.5 rounded-full bg-cyan-400"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Theme */}
            <button
              type="button"
              onClick={handleThemeToggle}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              title={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:border-cyan-400/40 hover:text-cyan-400"
            >
              <motion.span
                key={theme}
                initial={{
                  rotate: -90,
                  scale: 0.5,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {theme === "dark" ? (
                  <FaSun />
                ) : (
                  <FaMoon />
                )}
              </motion.span>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/Prashant Sharma 7417720228"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-300 transition-all hover:-translate-y-0.5 hover:text-cyan-400"
            >
              <FaGithub size={19} />
            </a>

            {/* LinkedIn */}
            <a
              href="#contact"
              onClick={(event) =>
                handleNavigation(
                  event,
                  "#contact"
                )
              }
              aria-label="LinkedIn / Contact"
              className="text-slate-300 transition-all hover:-translate-y-0.5 hover:text-cyan-400"
            >
              <FaLinkedin size={19} />
            </a>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(event) =>
                handleNavigation(
                  event,
                  "#contact"
                )
              }
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Let's Talk

              <FaArrowRight
                size={11}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() =>
              setIsOpen((previous) => !previous)
            }
            aria-label={
              isOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white transition hover:border-cyan-400/40 hover:text-cyan-400 lg:hidden"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.7,
                }}
              >
                {isOpen ? (
                  <FaTimes />
                ) : (
                  <FaBars />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-6 py-5">
                <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto">
                  {navItems.map(
                    (item, index) => {
                      const sectionId =
                        item.href.substring(1);

                      const isActive =
                        activeSection ===
                        sectionId;

                      return (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              index * 0.03,
                          }}
                          onClick={(event) =>
                            handleNavigation(
                              event,
                              item.href
                            )
                          }
                          className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                            isActive
                              ? "bg-cyan-400/10 text-cyan-400"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            {item.name}

                            {isActive && (
                              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            )}
                          </div>
                        </motion.a>
                      );
                    }
                  )}
                </div>

                {/* Mobile Actions */}
                <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={
                      handleThemeToggle
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <FaSun />
                    ) : (
                      <FaMoon />
                    )}
                  </button>

                  <a
                    href="https://github.com/Prashant Sharma- 7417720228"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="#contact"
                    onClick={(event) =>
                      handleNavigation(
                        event,
                        "#contact"
                      )
                    }
                    className="ml-auto inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Let's Talk
                    <FaArrowRight size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;