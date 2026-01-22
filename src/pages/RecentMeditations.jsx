import React from "react";
import { Link } from "react-router-dom";

const recentMeditations = [
  {
    id: 1,
    title: "Marcher avec Jésus aujourd’hui",
    date: "21 Janvier 2026",
    image: "/images/1.jpg",
  },
  {
    id: 2,
    title: "Trouver la paix au milieu des tempêtes",
    date: "18 Janvier 2026",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    title: "Grandir dans la foi chaque matin",
    date: "15 Janvier 2026",
    image: "/images/3.jpg",
  },
];

export default function RecentMeditations() {
  return (
    <div className="space-y-6">
      <h1 className="font-extrabold text-2xl text-blue-700">
        Méditations récentes
      </h1>

      {recentMeditations.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-lg p-4 flex items-start gap-4 hover:shadow-xl transition"
        >
          {/* Image circulaire */}
          <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texte aligné en haut */}
          <div>
            <h3 className="font-medium text-blue-700 leading-tight">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{item.date}</p>

            <Link
              to={`/meditations/${item.id}`}
              className="text-sm text-blue-600 font-semibold hover:underline mt-1 inline-block"
            >
              Lire la suite
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
