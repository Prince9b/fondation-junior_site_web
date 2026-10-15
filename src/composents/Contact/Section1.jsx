import React, { useState } from "react";

export default function SectionContact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log("Données transmises :", formData);
    alert("Votre message a été envoyé avec succès !");
    setFormData({ nom: "", email: "", message: "" });
  };

  return (
    <div className="w-full font-sans bg-[#F9F6EE]">
      
      {/* 1. En-tête de la section (Bandeau vert émeraude) */}
      <section className="bg-emerald-950 py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
            Contact
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/80 max-w-2xl">
            Bailleur, partenaire, bénévole ou presse : écrivez-nous.
          </p>
        </div>
      </section>

      {/* 2. Contenu principal : Informations de contact & Formulaire */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Colonne Gauche : Cartes d'informations de contact */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Téléphone */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/70 transition-all duration-300 hover:shadow-md">
                <h3 className="text-lg font-bold text-emerald-900 mb-3">
                  Téléphone
                </h3>
                <div className="space-y-1 text-slate-700 text-base">
                  <p>
                    <a href="tel:+23598490208" className="hover:text-emerald-700 transition-colors">
                      +235 98 49 02 08
                    </a>
                  </p>
                  <p>
                    <a href="tel:+23563737363" className="hover:text-emerald-700 transition-colors">
                      +235 63 73 73 63
                    </a>
                  </p>
                </div>
              </div>

              {/* E-mail */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/70 transition-all duration-300 hover:shadow-md">
                <h3 className="text-lg font-bold text-emerald-900 mb-3">
                  E-mail
                </h3>
                <p className="text-slate-700 text-base">
                  <a href="mailto:samsondjamadji1@gmail.com" className="hover:text-emerald-700 transition-colors break-all">
                    samsondjamadji1@gmail.com
                  </a>
                </p>
              </div>

              {/* Siège */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/70 transition-all duration-300 hover:shadow-md">
                <h3 className="text-lg font-bold text-emerald-900 mb-3">
                  Siège
                </h3>
                <p className="text-slate-700 text-base">
                  N'Djamena et régions rurales du Tchad
                </p>
              </div>

            </div>

            {/* Colonne Droite : Formulaire de contact */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-stone-200/70">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Champ Nom */}
                  <div>
                    <label htmlFor="nom" className="block text-sm font-bold text-slate-900 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom complet"
                      className="w-full rounded-2xl border border-stone-300 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
                    />
                  </div>

                  {/* Champ E-mail */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre.email@exemple.com"
                      className="w-full rounded-2xl border border-stone-300 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
                    />
                  </div>

                  {/* Champ Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Écrivez votre message ici..."
                      className="w-full rounded-2xl border border-stone-300 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-emerald-900 py-4 text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg"
                  >
                    Envoyer le message
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}