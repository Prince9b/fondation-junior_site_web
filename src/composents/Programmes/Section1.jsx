import React from "react";

export default function SectionProgrammes() {
  const programmes = [
    {
      number: "01",
      title: "Aménagement foncier et autonomie agricole",
      subtitle: "Acquisition, découpage et viabilisation de domaines de 5 à 6 hectares et plus.",
      points: [
        "Cultures vivrières et maraîchères avec irrigation solaire",
        "Élevage et agroforesterie pour régénérer les sols",
        "Habitats communautaires éco-responsables",
      ],
    },
    {
      number: "02",
      title: "Recensement, cartographie et inclusion",
      subtitle: "Enquêtes de terrain pour identifier les bénéficiaires prioritaires.",
      points: [
        "Registre numérique sans doublon ni détournement",
        "Orphelins, mères célibataires, personnes âgées",
        "Kits de subsistance et suivi sanitaire",
      ],
    },
    {
      number: "03",
      title: "Éducation, digitalisation et jeunesse",
      subtitle: "Centres communautaires d'apprentissage pour l'insertion professionnelle.",
      points: [
        "Commerce en ligne, bureautique, projets numériques",
        "Alphabétisation fonctionnelle et comptabilité simplifiée",
        "Édition de guides pratiques",
      ],
    },
    {
      number: "04",
      title: "Gouvernance et conformité légale",
      subtitle: "Une rigueur juridique et comptable exemplaire.",
      points: [
        "Statuts, règlement intérieur, charte d'éthique",
        "Comptabilité SYSCOHADA/ONG",
        "Audits annuels et rapports trimestriels",
      ],
    },
  ];

  return (
    <div className="w-full font-sans bg-[#F9F6EE]">
      
      {/* 1. En-tête de la section (Bandeau vert émeraude) */}
      <section className="bg-emerald-950 py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            Nos programmes 
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/80 max-w-2xl">
            Quatre axes complémentaires, de la terre cultivée à la gouvernance des fonds
          </p>
        </div>
      </section>

      {/* 2. Liste des programmes */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {programmes.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/70 transition-all duration-300 hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Colonne Gauche : Numéro et Titre principal */}
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

              {/* Colonne Droite : Sous-éléments / Points clés */}
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

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}