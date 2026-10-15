import React from "react";

export default function Section1() {
  const piliers = [
    {
      title: "Autonomie",
      description: "Donner des moyens de produire plutôt que distribuer une aide ponctuelle.",
    },
    {
      title: "Transparence",
      description: "Audits annuels, rapports trimestriels et comptes conformes SYSCOHADA/ONG.",
    },
    {
      title: "Inclusion",
      description: "Priorité aux orphelins, mères célibataires, personnes âgées et jeunes sans emploi.",
    },
  ];

  return (
    <div className="w-full font-sans bg-[#F9F6EE]">
      
      {/* 1. En-tête de la section (Bandeau vert) */}
      <section className="bg-emerald-950 py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            À propos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/80 max-w-2xl">
            Une organisation née du constat des inégalités et de l'accès difficile aux ressources durables au Tchad.
          </p>
        </div>
      </section>

      {/* 2. Contenu principal (Vision + Photo + Piliers + Fondateur) */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Bloc Vision & Illustration */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Texte de la vision */}
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800">
                Notre vision
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight leading-tight">
                Transformer l'assistance humanitaire passive en levier d'autonomie économique durable.
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Nous dotons les communautés rurales de moyens de production agricoles viabilisés, de formations adaptées et d'un cadre de gouvernance transparent.
              </p>
            </div>

            {/* Espace Photo / Illustration */}
            <div className="relative">
              <div className=" w-full h-full flex flex-col items-center justify-center p-6 text-center">
                {/* <svg
                  className="size-12 text-stone-400 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg> */}
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <img src="https://images.unsplash.com/photo-1758873268695-1b55590e507a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
                </span>
              </div>
            </div>

          </div>

          {/* 3. Grille des 3 Piliers (Autonomie, Transparence, Inclusion) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {piliers.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-sm border border-stone-200/60 transition-all duration-300 hover:shadow-md hover:border-emerald-300"
              >
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* 4. Carte du Fondateur (Djamadjibeye Samson) */}
          <div className="rounded-3xl bg-[#EFE9DD] border border-stone-300/70 p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              {/* Avatar Initiales */}
              <div className="shrink-0 size-20 rounded-full bg-emerald-900 text-white flex items-center justify-center text-2xl font-bold tracking-wider shadow-md">
                DS
              </div>

              {/* Informations du fondateur */}
              <div className="space-y-2">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Djamadjibeye Samson
                  </h4>
                  <p className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">
                    Fondateur et Directeur Général
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Diplômé en aménagement du territoire, il met son expertise de la structuration foncière au service de la sécurité alimentaire et de l'inclusion sociale.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}