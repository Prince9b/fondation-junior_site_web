import React from "react";

export default function Section1() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Conteneur principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Texte et Appels à l'action */}
          <div className="max-w-xl text-left">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800">
              ONG de Développement Rural · Tchad
            </span>

            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              De l'assistance à <span className="text-emerald-700">l'autonomie</span> durable
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Terres viabilisées, familles recensées, jeunes formés au numérique : nous accompagnons les communautés rurales du Tchad vers l'indépendance économique et la prospérité.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-emerald-700/20 transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg"
              >
                Découvrir nos programmes
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900"
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* Illustration vectorielle moderne et épurée */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-8 border border-emerald-100 shadow-xl shadow-emerald-900/5">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="w-full h-auto text-emerald-700 max-h-[380px] mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 10.5V11.25m-15 0V19.5m7.5-10.5h.008v.008H12V9Zm0 3h.008v.008H12V12Zm0 3h.008v.008H12V15Z"
                />
              </svg>
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-emerald-800 italic">
                  "Transformer durablement les terres et les vies au Tchad"
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}