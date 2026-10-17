import React from "react";
import { motion } from "motion/react";

export default function SectionImpact() {
  const impactData = [
    {
      axe: "Tourisme durable",
      activites:
        "Participation communautaire, valorisation culturelle et environnementale",
      cibles: "Sites pilotes et intégrés identifiés",
      resultat:
        "Retombées économiques locales et développement territorial responsable",
    },
    {
      axe: "Social",
      activites: "Recensement numérique, kits de subsistance, suivi sanitaire",
      cibles: "1 500 familles enregistrées • 500 kits distribués",
      resultat:
        "Base de données vulnérabilité opérationnelle & ciblage à 100% sans erreur",
    },
    {
      axe: "Éducation",
      activites:
        "Ateliers numériques, micro-entrepreneuriat, édition de guides",
      cibles: "300 jeunes formés • 15 micro-entreprises créées",
      resultat:
        "Insertion professionnelle effective & réduction du chômage des jeunes",
    },
    {
      axe: "Agriculture",
      activites:
        "Viabilisation de domaines de 5-6 Ha, puits solaires, semences certifiées",
      cibles: "50 hectares aménagés • 200 ménages producteurs",
      resultat:
        "Autonomie alimentaire des zones cibles & 150 tonnes de récoltes/an",
    },
    {
      axe: "Gouvernance",
      activites: "Audits annuels, rapports financiers, réunions de bureau",
      cibles: "100% de conformité légale • 4 rapports trimestriels/an",
      resultat:
        "Confiance renforcée des bailleurs et pérennité de la structure",
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
            Impact
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/80 max-w-3xl">
            Indicateurs de performance (KPIs) et cibles prévisionnelles
            mesurables à 24 mois.
          </p>
        </div>
      </motion.section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-stone-200/70">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-900 text-white text-sm uppercase tracking-wider">
                    <th className="py-5 px-6 font-bold">Axe stratégique</th>
                    <th className="py-5 px-6 font-bold">Activités majeures</th>
                    <th className="py-5 px-6 font-bold">Cibles & KPIs</th>
                    <th className="py-5 px-6 font-bold">
                      Résultat attendu à 24 mois
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200/60 text-sm sm:text-base text-slate-700">
                  {impactData.map((row, index) => (
                    <motion.tr
                      key={index}
                      className="transition-colors hover:bg-stone-50/80"
                      initial={{ opacity: 0, y: -100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8 }}
                    >
                      <td className="py-6 px-6 font-bold text-slate-900">
                        {row.axe}
                      </td>
                      <td className="py-6 px-6 text-slate-600">
                        {row.activites}
                      </td>
                      <td className="py-6 px-6 font-medium text-emerald-800">
                        {row.cibles}
                      </td>
                      <td className="py-6 px-6 text-slate-600">
                        {row.resultat}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
