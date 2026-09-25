import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaExclamationTriangle,
  FaArrowLeft,
} from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="w-full max-w-lg text-center"
      >
        {/* Icon */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
        >
          <FaExclamationTriangle size={30} />
        </motion.div>

        {/* Error */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Error
        </p>

        {/* 404 */}
        <h1 className="mt-4 text-8xl font-black tracking-tight text-white">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md leading-7 text-slate-400">
          Sorry, the page you are looking for doesn't
          exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            <FaHome />
            Back Home
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/10"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;