import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

export default function SectionContact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  // Protection Anti-Spam (Champ piège caché)
  const [honeypot, setHoneypot] = useState("");

  // États pour l'expérience utilisateur
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Détection des robots (Si le champ honeypot est rempli, on bloque)
    if (honeypot !== "") {
      console.warn("Spam détecté !");
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    // 2. clés EmailJS :
    const SERVICE_ID = "service_tp7drgc";
    const TEMPLATE_ID = "template_ixd2f16";
    const PUBLIC_KEY = "lPuBodGvKxK1ECyzL";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nom: formData.nom,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: "success",
            text: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
          });
          setFormData({ nom: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Erreur EmailJS :", error);
          setStatusMessage({
            type: "error",
            text: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par e-mail.",
          });
        },
      );
  };

  return (
    <div className="w-full font-sans bg-[#F9F6EE]">
      {/* 1. En-tête de la section */}
      <motion.section
        initial={{ opacity: 0, y: -100 }} // État de départ (invisible et plus bas)
        whileInView={{ opacity: 1, y: 0 }} // État une fois visible à l'écran
        viewport={{ once: false }} // L'animation ne se joue qu'une seule fois
        transition={{ duration: 0.5 }}
        className="bg-emerald-950 py-16 lg:py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            Contact
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/80 max-w-2xl">
            Bailleur, partenaire, bénévole ou presse : écrivez-nous.
          </p>
        </div>
      </motion.section>

      {/* 2. Contenu principal */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Colonne Gauche : Coordonnées */}
            <motion.div
              initial={{ opacity: 0, x: 100 }} // État de départ (invisible et plus bas)
              whileInView={{ opacity: 1, x: 0 }} // État une fois visible à l'écran
              viewport={{ once: false }} // L'animation ne se joue qu'une seule fois
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/70">
                <h3 className="text-lg font-bold text-emerald-900 mb-3">
                  Téléphone
                </h3>
                <div className="space-y-1 text-slate-700 text-base">
                  <p>
                    <a
                      href="tel:+23598490208"
                      className="hover:text-emerald-700 transition-colors"
                    >
                      +235 98 49 02 08
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+23563737363"
                      className="hover:text-emerald-700 transition-colors"
                    >
                      +235 63 73 73 63
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/70">
                <h3 className="text-lg font-bold text-emerald-900 mb-3">
                  E-mail
                </h3>
                <p className="text-slate-700 text-base">
                  <a
                    href="mailto:samsondjamadji1@gmail.com"
                    className="hover:text-emerald-700 transition-colors break-all"
                  >
                    fondationjunior70@gmail.com
                  </a>
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/70">
                <h3 className="text-lg font-bold text-emerald-900 mb-3">
                  Siège
                </h3>
                <p className="text-slate-700 text-base">
                  N'Djamena et régions rurales du Tchad
                </p>
              </div>
            </motion.div>

            {/* Colonne Droite : Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -100 }} // État de départ (invisible et plus bas)
              whileInView={{ opacity: 1, x: 0 }} // État une fois visible à l'écran
              viewport={{ once: false }} // L'animation ne se joue qu'une seule fois
              transition={{ duration: 0.9 }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-stone-200/70">
                {/* Notification de statut */}
                {statusMessage && (
                  <div
                    className={`mb-6 p-4 rounded-2xl text-sm font-medium ${
                      statusMessage.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Champ Honeypot (Masqué pour l'utilisateur, piège à bots) */}
                  <input
                    type="text"
                    name="website_honeypot"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-bold text-slate-900 mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom complet"
                      className="w-full rounded-2xl border border-stone-300 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
                    />
                  </div>

                  {/* E-mail */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-slate-900 mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre.email@exemple.com"
                      className="w-full rounded-2xl border border-stone-300 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-béold text-slate-900 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Écrivez votre message ici..."
                      className="w-full rounded-2xl border border-stone-300 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-emerald-900 py-4 text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
