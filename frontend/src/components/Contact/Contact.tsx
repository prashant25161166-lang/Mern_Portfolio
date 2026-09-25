import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

import api from "../../services/api";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] =
    useState<ContactForm>(initialForm);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name) {
      newErrors.name = "Name is required.";
    } else if (name.length < 2) {
      newErrors.name =
        "Name must be at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!subject) {
      newErrors.subject =
        "Subject is required.";
    } else if (subject.length < 3) {
      newErrors.subject =
        "Subject must be at least 3 characters.";
    }

    if (!message) {
      newErrors.message =
        "Message is required.";
    } else if (message.length < 10) {
      newErrors.message =
        "Message must be at least 10 characters.";
    } else if (message.length > 1000) {
      newErrors.message =
        "Message cannot exceed 1000 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setSuccess("");
    setError("");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        "/contact",
        {
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }
      );

      if (response.data?.success) {
        setSuccess(
          response.data.message ||
            "Your message has been sent successfully!"
        );

        setForm(initialForm);
        setErrors({});

        window.setTimeout(() => {
          setSuccess("");
        }, 6000);
      } else {
        setError(
          response.data?.message ||
            "Unable to send your message."
        );
      }
    } catch (err: unknown) {
      console.error(
        "Contact form error:",
        err
      );

      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "Unable to send your message. Please try again."
        );
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

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
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Let's{" "}
            <span className="text-cyan-400">
              Work Together
            </span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Have a project, internship opportunity,
            freelance requirement, or just want to
            say hello? Send me a message.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-8">

              <div className="mb-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                  <FaEnvelope size={20} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Contact Information
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  I'm open to internship opportunities,
                  freelance projects, and full-time
                  MERN Stack Developer roles.
                </p>
              </div>

              <div className="space-y-5">

                <ContactInfo
                  icon={<FaEnvelope />}
                  title="Email"
                  value="prashantsharmaps7417@gmail.com"
                  href="mailto:prashantsharmaps7417@gmail.com"
                />

                <ContactInfo
                  icon={<FaLinkedin />}
                  title="LinkedIn"
                  value="LinkedIn Profile"
                  href="https://www.linkedin.com/in/prashant-sharma-480166384/"
                />

                <ContactInfo
                  icon={<FaGithub />}
                  title="GitHub"
                  value="Prashant Sharma 7417720228"
                   href="https://github.com/Prashant Sharma 7417720228"
                />

                <ContactInfo
                  icon={<FaMapMarkerAlt />}
                  title="Location"
                  value="Ghaziabad, Uttar Pradesh, India"
                />

              </div>

              {/* Social Links */}
              <div className="mt-10 border-t border-white/10 pt-7">

                <p className="mb-4 text-sm font-semibold text-slate-300">
                  Find me online
                </p>

                <div className="flex gap-3">

                  <a
                    href="https://github.com/Prashant Sharma 7417720228"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/prashant-sharma-480166384/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
            >

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <InputField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  error={errors.name}
                  onChange={handleChange}
                />

                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                />

              </div>

              {/* Subject */}
              <div className="mt-5">
                <InputField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="Project / Job Opportunity"
                  value={form.subject}
                  error={errors.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="mt-5">

                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <span
                    className={`text-xs ${
                      form.message.length > 900
                        ? "text-red-400"
                        : "text-slate-500"
                    }`}
                  >
                    {form.message.length}/1000
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1000}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(
                    errors.message
                  )}
                  className={`w-full resize-none rounded-xl border bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-1 ${
                    errors.message
                      ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/30"
                      : "border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/30"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 flex items-center gap-2 text-xs text-red-400">
                    <FaExclamationCircle />
                    {errors.message}
                  </p>
                )}

              </div>

              {/* Success / Error */}
              <AnimatePresence mode="wait">

                {success && (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-300"
                  >
                    <FaCheckCircle
                      className="mt-0.5 shrink-0"
                      size={18}
                    />

                    <div>
                      <p className="font-semibold">
                        Message Sent!
                      </p>

                      <p className="mt-1 text-emerald-300/80">
                        {success}
                      </p>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    key="error"
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 10,
                    }}
                    className="mt-5 flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-4 text-sm text-red-300"
                  >
                    <FaExclamationCircle
                      className="mt-0.5 shrink-0"
                      size={18}
                    />

                    <div>
                      <p className="font-semibold">
                        Unable to Send
                      </p>

                      <p className="mt-1 text-red-300/80">
                        {error}
                      </p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition hover:-translate-y-0.5 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
                    Send Message
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-slate-600">
                Your information is only used to respond
                to your message.
              </p>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-1 ${
          error
            ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/30"
            : "border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/30"
        }`}
      />

      {error && (
        <p className="mt-2 flex items-center gap-2 text-xs text-red-400">
          <FaExclamationCircle />
          {error}
        </p>
      )}
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

const ContactInfo = ({
  icon,
  title,
  value,
  href,
}: ContactInfoProps) => {
  const content = (
    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-slate-500">
          {title}
        </p>

        <p className="mt-1 text-sm text-slate-300">
          {value}
        </p>
      </div>

    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={
        href.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel={
        href.startsWith("http")
          ? "noreferrer"
          : undefined
      }
      className="block transition hover:opacity-80"
    >
      {content}
    </a>
  );
};

export default Contact;