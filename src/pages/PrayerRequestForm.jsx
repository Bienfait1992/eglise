import React, { useState } from "react";

export default function PrayerRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prayerType: "",
    prayerDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: envoyer formData vers backend ou service email
    console.log("Prayer request:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      prayerType: "",
      prayerDetails: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {!submitted ? (
        <>
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Formulaire de Requête de Prière
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Remplissez ce formulaire pour nous faire part de vos besoins de prière.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Entrez votre nom"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Courriel
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="exemple@mail.com"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="+243 8XX XXX XXX"
              />
            </div>

            {/* Type de Prière */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Type de prière
              </label>
              <select
                name="prayerType"
                value={formData.prayerType}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Sélectionnez un type...</option>
                <option value="guérison">Guérison</option>
                <option value="famille">Famille</option>
                <option value="travail">Travail</option>
                <option value="paix intérieure">Paix intérieure</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Détails de la requête */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Détails de votre prière
              </label>
              <textarea
                name="prayerDetails"
                value={formData.prayerDetails}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Partagez vos besoins avec nous…"
              ></textarea>
            </div>

            {/* Soumission */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Soumettre ma demande de prière
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-600">
            Merci ! Votre requête a été envoyée.
          </h3>
          <p className="mt-2 text-gray-700">
            Nous prierons pour vous et reviendrons vers vous si nécessaire.
          </p>
        </div>
      )}
    </div>
  );
}
