import React from "react";
import { motion } from "motion/react";

export default function Section4() {
  const garanties = [
    {
      title: "Transparence comptable",
      description:
        "Relevés bancaires du projet et rapports financiers visés par un commissaire aux comptes.",
    },
    {
      title: "Inspection sans préavis",
      description:
        "Accès permanent des bailleurs aux chantiers agricoles et aux centres de formation.",
    },
    {
      title: "Tolérance zéro",
      description:
        "Aucun conflit d'intérêts ni détournement dans la chaîne de distribution de l'aide.",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* Première partie : Un partenariat transparent */}
      <motion.section
        initial={{ opacity: 0, y: 100 }} // État de départ (invisible et plus bas)
        whileInView={{ opacity: 1, y: 0 }} // État une fois visible à l'écran
        viewport={{ once: false }} // L'animation ne se joue qu'une seule fois
        transition={{ duration: 1 }}
        className="bg-[#f5f0e6] py-16 lg:py-24 text-slate-800"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Colonne Gauche : Titre, explication et jauge */}
            <motion.div
              initial={{ opacity: 0, y: -100 }} // État de départ (invisible et plus bas)
              whileInView={{ opacity: 1, y: 0 }} // État une fois visible à l'écran
              viewport={{ once: false }} // L'animation ne se joue qu'une seule fois
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
                Un partenariat transparent et à effet de levier
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                La fondation apporte 20 à 25 % du budget en fonds propres et en
                nature : terrains et main-d'œuvre communautaire.
              </p>

              {/* Jauge de répartition budgétaire */}
              <div className="mt-8">
                <div className="flex h-12 w-full overflow-hidden rounded-xl text-xs font-bold shadow-sm">
                  {/* Part Bailleurs */}
                  <div className="flex items-center justify-start bg-emerald-800 px-4 text-white w-[77.5%]">
                    <span>Bailleurs 77,5 %</span>
                  </div>
                  {/* Part Fondation */}
                  <div className="flex items-center justify-center bg-amber-500 px-2 text-slate-950 w-[22.5%]">
                    <span>22,5 %</span>
                  </div>
                </div>
                <p className="mt-2.5 text-xs text-slate-500 italic">
                  Part moyenne pondérée du plan pluriannuel. Apport de la
                  fondation en orange.
                </p>
              </div>
            </motion.div>

            {/* Colonne Droite : Cartes de garanties */}
            <div className="space-y-4">
              {garanties.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/60 transition-all duration-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Deuxième partie : Agissez avec nous (CTA) */}
      <motion.section
        initial={{ opacity: 0, y: 100 }} // État de départ (invisible et plus bas)
        whileInView={{ opacity: 1, y: 0 }} // État une fois visible à l'écran
        viewport={{ once: false }} // L'animation ne se joue qu'une seule fois
        transition={{ duration: 1 }}
        className="bg-[#FAF8F5] py-16 lg:py-24 text-center border-t border-stone-200/50"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Agissez avec nous
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Bailleur, partenaire, bénévole ou donateur : chaque contribution
            devient une terre cultivée, une famille suivie, un jeune formé.
          </p>

          <div className="mt-8">
            <a
              href="#partenariat"
              className="inline-flex items-center justify-center rounded-full bg-[#d48b16] hover:bg-[#b87710] px-8 py-4 text-base font-bold text-slate-950 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Télécharger le dossier de partenariat
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
