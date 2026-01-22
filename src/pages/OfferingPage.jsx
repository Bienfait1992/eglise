import React, { useState } from "react";
import { FaMobileAlt, FaUniversity, FaCreditCard } from "react-icons/fa";

export default function OfferingPage() {
  const [service, setService] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [description, setDescription] = useState("");
  const [method, setMethod] = useState("mobile");

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">

      {/* En-tête */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-blue-700">
          Offrandes & Dons
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          « Chacun donne comme il l’a résolu dans son cœur, sans tristesse ni contrainte,
          car Dieu aime celui qui donne avec joie. »
          <br />
          <span className="font-semibold">2 Corinthiens 9:7</span>
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Formulaire */}
        <section className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">
            Faire une offrande
          </h2>

          {/* Service */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Choisir le service
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Sélectionner --</option>
              <option value="offrande">Offrande</option>
              <option value="dime">Dîme</option>
              <option value="don">Don spécial</option>
            </select>
          </div>

          {/* Montant + Devise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Montant
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ex: 50"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Devise
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD</option>
                <option value="CDF">CDF</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Description (optionnel)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Offrande de reconnaissance"
              rows={3}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Méthode */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Méthode de paiement
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setMethod("mobile")}
                className={`flex items-center justify-center gap-2 border rounded-lg py-3 transition ${
                  method === "mobile"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaMobileAlt />
                Mobile Money
              </button>

              <button
                type="button"
                onClick={() => setMethod("bank")}
                className={`flex items-center justify-center gap-2 border rounded-lg py-3 transition ${
                  method === "bank"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaUniversity />
                Virement
              </button>

              <button
                type="button"
                onClick={() => setMethod("card")}
                className={`flex items-center justify-center gap-2 border rounded-lg py-3 transition ${
                  method === "card"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaCreditCard />
                Carte
              </button>
            </div>
          </div>

          {/* Bouton */}
          <button
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
          >
            Continuer le paiement
          </button>
        </section>

        {/* Informations */}
        <section className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              Pourquoi donner ?
            </h3>
            <p className="text-gray-700">
              Vos offrandes soutiennent l’œuvre de Dieu à travers l’enseignement,
              l’évangélisation et l’action sociale.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 space-y-2">
            <h4 className="font-semibold text-gray-800">
              Moyens disponibles
            </h4>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Mobile Money (M-Pesa, Airtel, Orange)</li>
              <li>Virement bancaire</li>
              <li>Carte bancaire</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
