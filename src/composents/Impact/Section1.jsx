import React from "react";

export default function SectionImpact() {
  const impactData = [
    {
      axe: "Agriculture",
      activites: "Domaines de 5-6 ha, puits solaires, semences certifiées",
      cibles: "50 ha aménagés, 200 ménages",
      resultat: "Autonomie alimentaire, 150 tonnes de récoltes par an",
    },
    {
      axe: "Social",
      activites: "Recensement numérique, kits, suivi sanitaire",
      cibles: "1 500 familles, 500 kits",
      resultat: "Base de vulnérabilité opérationnelle, ciblage sans erreur",
    },
    {
      axe: "Éducation",
      activites: "Ateliers numériques, micro-entrepreneuriat, guides",
      cibles: "300 jeunes, 15 micro-entreprises",
      resultat: "Insertion professionnelle, baisse du chômage des jeunes",
    },
    {
      axe: "Gouvernance",
      activites: "Audits annuels, rapports financiers, réunions",
      cibles: "100 % conformité, 4 rapports par an",
      resultat: "Confiance des bailleurs, pérennité",
    },
  ];

  return (
    <div className="w-full font-sans bg-[#F9F6EE]">
      
      {/* 1. En-tête de la section (Bandeau vert émeraude) */}
      <section className="bg-emerald-950 py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            Impact
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/80 max-w-3xl">
            Objectifs mesurables à 24 mois. Ce sont des cibles prévisionnelles, suivies par des rapports trimestriels.
          </p>
        </div>
      </section>

      {/* 2. Tableau des impacts */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-stone-200/70">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-900 text-white text-sm uppercase tracking-wider">
                    <th className="py-5 px-6 font-bold">Axe</th>
                    <th className="py-5 px-6 font-bold">Activités majeures</th>
                    <th className="py-5 px-6 font-bold">Cibles</th>
                    <th className="py-5 px-6 font-bold">Résultat attendu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200/60 text-sm sm:text-base text-slate-700">
                  {impactData.map((row, index) => (
                    <tr
                      key={index}
                      className="transition-colors hover:bg-stone-50/80"
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
                    </tr>
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