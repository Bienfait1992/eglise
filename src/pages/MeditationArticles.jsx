import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecentMeditations from "./RecentMeditations";
import { FaFacebookF, FaWhatsapp, FaLink } from "react-icons/fa";


const meditations = [
  {
    id: 1,
    title: "Vivre dans la paix de Dieu",
    date: "15 Janvier 2026",
    image: "/images/1.jpg",
    summary:
      "Découvrez comment expérimenter la paix de Dieu dans chaque domaine de votre vie, même au milieu des difficultés.",
  },
  {
    id: 2,
    title: "La prière qui transforme",
    date: "08 Janvier 2026",
    image: "/images/2.jpg",
    summary:
      "Une méditation profonde sur le pouvoir de la prière et sur la manière dont elle change nos cœurs et nos circonstances.",
  },
  {
    id: 3,
    title: "Marcher dans la foi au quotidien",
    date: "01 Janvier 2026",
    image: "/images/3.jpg",
    summary:
      "Apprenez à développer une foi solide et constante en toutes saisons de la vie.",
  },
];

export default function MeditationArticles() {
  const [copiedId, setCopiedId] = useState(null);

  const copyLink = (id) => {
    navigator.clipboard.writeText(
      `${window.location.origin}/meditations/${id}`
    );
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      {/* Titre page */}
      <section className="text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-2">
          Méditations & Articles
        </h2>
        <p className="text-gray-600">
          Inspiration, réflexions bibliques et croissance spirituelle.
        </p>
      </section>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles */}
        <section className="lg:col-span-2 grid grid-cols-1 gap-8">
          {meditations.map((med) => (
            <div
              key={med.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={med.image}
                alt={med.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {med.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{med.date}</p>
                <p className="text-gray-700 mb-4">{med.summary}</p>

                {/* Ligne actions */}
                <div className="flex justify-between items-center mt-4">
                  {/* Gauche */}
                  <Link
                    to={`/meditations/${med.id}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Lire la suite
                  </Link>

                  {/* Droite : partage */}
                  <div className="flex items-center gap-4 relative">
                    Partager
                   

                    {/* Facebook */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/meditations/${med.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      <FaFacebookF size={18} />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/?text=${window.location.origin}/meditations/${med.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-green-600 transition"
                    >
                      <FaWhatsapp size={18} />
                    </a>
                    <h5 className="font-extralight text-sm">Copier lien</h5>
                     {/* Copier lien */}
                    <button
                      onClick={() => copyLink(med.id)}
                      className="text-gray-500 hover:text-blue-600 transition relative"
                    >
                      <FaLink size={18} />

                      {copiedId === med.id && (
                        <span className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          Lien copié
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar */}
        <section className="lg:col-span-1">
          <RecentMeditations />
        </section>
      </div>
    </div>
  );
}
