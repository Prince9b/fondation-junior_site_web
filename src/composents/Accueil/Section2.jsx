import React from "react";
import { motion } from "motion/react";

export default function Section2() {
  const objectifs = [
    {
      stat: "50 Ha",
      title: "Terres agricoles aménagées",
      description:
        "Viabilisation de domaines de 5 à 6 hectares et plus, équipés de puits solaires.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V11.25m0 0a3.375 3.375 0 003.375-3.375M12 11.25a3.375 3.375 0 00-3.375-3.375M12 11.25V3.75m0 0a3.375 3.375 0 013.375 3.375M12 3.75a3.375 3.375 0 00-3.375-3.375"
        />
      ),
    },
    {
      stat: "200",
      title: "Ménages producteurs",
      description:
        "Transformation de l'assistance humanitaire passive en un levier d'autonomie économique durable.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      ),
    },
    {
      stat: "1 500",
      title: "Familles enregistrées",
      description:
        "Création d'un registre numérique fiable pour garantir un ciblage sans erreur ni détournement des kits.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0Zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Z"
        />
      ),
    },
    {
      stat: "300",
      title: "Jeunes formés au numérique",
      description:
        "Ateliers d'apprentissage et d'entrepreneuriat jeune pour favoriser l'insertion professionnelle.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
        />
      ),
    },
    {
      stat: "Intégré",
      title: "Tourisme durable",
      description:
        "Participation communautaire, valorisation culturelle et préservation environnementale pour un développement responsable.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-.996l-3.869 1.934M9 6.75l-4.875 2.438c-.381.19-.622.58-.622 1.006v10.662c0 .836.88 1.38 1.628.996l3.869-1.934M9 6.75l6-3m0 0l6 3m-6-3v8.25"
        />
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-900 py-16 lg:py-24 text-white"
    >
      <div className="absolute -top-28 -right-28 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Feuille de route
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight text-white">
            Nos objectifs à 24 mois
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/80">
            Un plan d'action mesurable et structuré pour générer un impact social et économique durable.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {objectifs.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col sm:flex-row items-start gap-5 rounded-2xl bg-white/5 p-6 sm:p-8 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-950/50 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="shrink-0 rounded-xl bg-emerald-500/20 border border-emerald-400/30 p-3.5 text-emerald-300 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white">
                <svg
                  aria-hidden="true"
                  className="size-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  {item.icon}
                </svg>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-amber-400">
                    {item.stat}
                  </span>
                  <span className="text-xs text-emerald-200/60 uppercase tracking-wider font-semibold">
                    — Cible
                  </span>
                </div>
                <h3 className="mt-1 text-xl font-bold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-emerald-100/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}