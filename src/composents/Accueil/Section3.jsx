import React from "react";

export default function Section3() {
  const axes = [
    {
      title: "Agriculture & Irrigation",
      description:
        "Aménagement des terres fertiles et accès aux systèmes d'irrigation pour une production pérenne.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V11.25m0 0a3.375 3.375 0 003.375-3.375M12 11.25a3.375 3.375 0 00-3.375-3.375M12 11.25V3.75m0 0a3.375 3.375 0 013.375 3.375M12 3.75a3.375 3.375 0 00-3.375 3.375"
        />
      ),
    },
    {
      title: "Compétences Numériques",
      description:
        "Formation de la jeunesse aux outils digitaux pour ouvrir de nouvelles opportunités économiques.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
        />
      ),
    },
    {
      title: "Autonomie Durable",
      description:
        "Transformation de l'aide d'urgence en outils de production autonomes pour les familles.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      ),
    },
    {
      title: "Gouvernance Transparente",
      description:
        "Gestion éthique, rigoureuse et traçable des ressources au service des communautés.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      ),
    },
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24 text-slate-800">
      {/* Container Principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Partie Haute : Constat & Problématique */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 uppercase tracking-wide">
              Le Constat
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl leading-tight">
              Des terres fertiles, des familles sans moyens de produire.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Face aux défis alimentaires et économiques, notre engagement consiste à fournir aux communautés locales les outils indispensables pour révéler tout le potentiel de leurs terres.
            </p>
          </div>

          {/* Points clés avec icônes */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm border border-slate-100 transition hover:shadow-md">
              <div className="shrink-0 rounded-lg bg-emerald-50 p-3 text-emerald-600">
                <svg
                  aria-hidden="true"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 leading-snug">
                  Au Tchad, des milliers d'hectares restent inexploités faute d'irrigation et d'infrastructures, pendant que l'aide humanitaire est mal répartie et que les jeunes manquent d'accès aux compétences numériques.
                </h3>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm border border-slate-100 transition hover:shadow-md">
              <div className="shrink-0 rounded-lg bg-emerald-50 p-3 text-emerald-600">
                <svg
                  aria-hidden="true"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 leading-snug">
                  Fondée par <span className="text-emerald-700 font-bold">Djamadjibeye Samson</span>, expert en aménagement du territoire, la Fondation Junior transforme l'assistance passive en moyens de production durables, avec une gouvernance transparente.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Partie Basse : Les 4 axes d'intervention */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Nos Priorités
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Quatre axes d'intervention
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {axes.map((axe, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/30"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <svg
                    aria-hidden="true"
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    {axe.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {axe.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {axe.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}