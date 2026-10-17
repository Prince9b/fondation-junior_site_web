import React from "react";
import { motion } from "motion/react";

export default function SectionPartenaires() {
  const cofinancementData = [
    {
      poste: "Aménagement foncier et eau",
      bailleurs: "75 %",
      fondation: "25 %",
    },
    {
      poste: "Équipements pédagogiques et IT",
      bailleurs: "85 %",
      fondation: "15 %",
    },
    {
      poste: "Opérations de terrain et cartographie",
      bailleurs: "80 %",
      fondation: "20 %",
    },
    {
      poste: "Audit, suivi et évaluation",
      bailleurs: "70 %",
      fondation: "30 %",
    },
  ];

  const garanties = [
    {
      title: "Transparence comptable",
      description:
        "Relevés bancaires du projet et rapports visés par un commissaire aux comptes.",
    },
    {
      title: "Inspection sans préavis",
      description:
        "Accès permanent des bailleurs aux chantiers et aux centres de formation.",
    },
    {
      title: "Tolérance zéro",
      description:
        "Aucun conflit d'intérêts ni détournement dans la chaîne de distribution.",
    },
  ];

  return (
    <div className="w-full font-sans bg-[#F9F6EE]">
      {/* 1. En-tête de la section (Bandeau vert émeraude) */}
      <motion.section
        initial={{ opacity: 0, y: -100 }} // État de départ (invisible et plus bas)
        whileInView={{ opacity: 1, y: 0 }} // État une fois visible à l'écran
        viewport={{ once: false }} // L'animation ne se joue qu'une seule fois
        transition={{ duration: 0.5 }}
        className="bg-emerald-950 py-16 lg:py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            Partenaires et bailleurs
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/80 max-w-2xl">
            Un co-financement à effet de levier et des engagements de
            redevabilité vérifiables.
          </p>
        </div>
      </motion.section>

      {/* 2. Contenu principal : Tableau de co-financement et cartes */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Titre de sous-section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Plan de co-financement
            </h3>
          </div>

          {/* Tableau détaillé */}
          <motion.div
            initial={{ opacity: 0, y: 100 }} // État de départ (invisible et plus bas)
            whileInView={{ opacity: 1, y: 0 }} // État une fois visible à l'écran
            viewport={{ once: false }} // L'animation ne se joue qu'une seule fois
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl bg-white shadow-sm border border-stone-200/70"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-900 text-white text-sm uppercase tracking-wider">
                    <th className="py-5 px-6 font-bold">Poste</th>
                    <th className="py-5 px-6 font-bold text-center">
                      Bailleurs
                    </th>
                    <th className="py-5 px-6 font-bold text-center">
                      Fondation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200/60 text-sm sm:text-base text-slate-700">
                  {cofinancementData.map((row, index) => (
                    <tr
                      key={index}
                      className="transition-colors hover:bg-stone-50/80"
                    >
                      <td className="py-5 px-6 font-medium text-slate-900">
                        {row.poste}
                      </td>
                      <td className="py-5 px-6 text-center text-slate-600">
                        {row.bailleurs}
                      </td>
                      <td className="py-5 px-6 text-center font-semibold text-emerald-800">
                        {row.fondation}
                      </td>
                    </tr>
                  ))}
                  {/* Ligne de budget total pondéré */}
                  <tr className="bg-[#EFE9DD] font-bold text-slate-900">
                    <td className="py-5 px-6">Budget total pondéré</td>
                    <td className="py-5 px-6 text-center text-emerald-900">
                      77,5 %
                    </td>
                    <td className="py-5 px-6 text-center text-amber-700">
                      22,5 %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 3. Cartes de garanties / redevabilité */}
          <motion.div
            initial={{ opacity: 0, y: 100 }} // État de départ (invisible et plus bas)
            whileInView={{ opacity: 1, y: 0 }} // État une fois visible à l'écran
            viewport={{ once: false }} // L'animation ne se joue qu'une seule fois
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3 pt-6"
          >
            {garanties.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/70 transition-all duration-300 hover:shadow-md"
              >
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* 4. Bouton d'action final */}
          <div className="pt-8 text-center">
            <a
              href="#dossier"
              className="inline-flex items-center justify-center rounded-full bg-[#D48B16] hover:bg-[#B87710] px-8 py-4 text-base font-bold text-slate-950 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Recevoir le dossier de partenariat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
