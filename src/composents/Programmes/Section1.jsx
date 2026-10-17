import React from "react";
import { motion } from "motion/react";

export default function SectionProgrammes() {
  const programmes = [
    {
      number: "01",
      title: "Aménagement foncier et autonomie agricole",
      subtitle:
        "Acquisition, découpage et viabilisation de domaines de 5 à 6 hectares et plus.",
      points: [
        "Zones de cultures vivrières et maraîchères avec irrigation solaire",
        "Élevage et agroforesterie pour régénérer les sols",
        "Habitats communautaires éco-responsables pour les familles",
      ],
    },
    {
      number: "02",
      title: "Recensement, cartographie et inclusion",
      subtitle:
        "Enquêtes de terrain rigoureuses pour identifier les bénéficiaires prioritaires.",
      points: [
        "Registre numérique pour garantir qu'aucune aide ne soit détournée ou dupliquée",
        "Ciblage des orphelins, mères célibataires et personnes âgées",
        "Distribution de kits de subsistance et suivi sanitaire",
      ],
    },
    {
      number: "03",
      title: "Éducation, digitalisation et jeunesse",
      subtitle:
        "Centres communautaires d'apprentissage pour l'insertion socio-professionnelle.",
      points: [
        "Formations au commerce en ligne, bureautique et projets numériques",
        "Alphabétisation fonctionnelle et comptabilité simplifiée pour les coopératives",
        "Édition et distribution de guides pratiques",
      ],
    },
    {
      number: "04",
      title: "Tourisme durable et intégré",
      subtitle:
        "Allier la participation communautaire, les retombées économiques locales, la préservation de l'environnement et la valorisation culturelle.",
      points: [
        "Implication active et participation des communautés locales",
        "Valorisation du patrimoine culturel et préservation de l'environnement",
        "Génération de retombées économiques pour un développement territorial responsable",
      ],
    },
    {
      number: "05",
      title: "Gouvernance et conformité légale",
      subtitle: "Une rigueur juridique et comptable exemplaire sous la supervision de Djamadjibeye Samson.",
      points: [
        "Rédaction conforme des statuts, règlement intérieur et charte d'éthique",
        "Comptabilité conforme aux standards SYSCOHADA/ONG",
        "Audits annuels et rapports trimestriels pour renforcer la confiance des bailleurs",
      ],
    },
  ];

  return (
    <div className="w-full font-sans bg-[#F9F6EE]">
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="bg-emerald-950 py-16 lg:py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            Nos programmes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/80 max-w-2xl">
            Cinq axes complémentaires pour un développement local durable et harmonieux
          </p>
        </div>
      </motion.section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {programmes.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              key={index}
              className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/70 transition-all duration-300 hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-3">
                <span className="text-3xl sm:text-4xl font-extrabold font-serif text-[#C28E38]">
                  {item.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="lg:col-span-7 bg-[#FAF6EE] rounded-2xl p-5 sm:p-6 border border-stone-200/50 space-y-3">
                {item.points.map((point, pIndex) => (
                  <div key={pIndex} className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-[#C28E38] mt-2 shrink-0"></span>
                    <p className="text-sm sm:text-base text-slate-700 font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}