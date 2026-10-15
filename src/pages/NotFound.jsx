import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full font-sans bg-[#F9F6EE] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Illustration & Badge 404 */}
        <div className="relative inline-block">
          {/* Badge Chiffre 404 */}
          <span className="text-8xl sm:text-9xl font-black tracking-widest text-emerald-950/10 font-serif select-none">
            404
          </span>
          
          {/* Icone / Illustration centrale */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-emerald-900/10 p-6 backdrop-blur-sm border border-emerald-900/20 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-12 sm:size-16 text-emerald-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Message d'erreur */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Page introuvable
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
            Oups ! La page que vous cherchez n'existe pas ou a été déplacée. Il semble que vous vous soyez perdu en chemin.
          </p>
        </div>

        {/* Action : Retour à l'accueil */}
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 hover:bg-emerald-800 px-8 py-4 text-base font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Retourner à l'accueil
          </Link>
        </div>

      </div>
    </div>
  );
}