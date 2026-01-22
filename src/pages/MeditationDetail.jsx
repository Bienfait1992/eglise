import React from "react";
import { useParams, Link } from "react-router-dom";

// Exemple de données (à remplacer, idéalement venant d'une API)
const meditations = [
  {
    id: "1",
    title: "Vivre dans la paix de Dieu",
    date: "15 Janvier 2026",
    image: "/assets/meditation1.jpg",
    content: `
      <p>
        La paix de Dieu dépasse toute compréhension humaine. Elle ne dépend pas des circonstances,
        mais de la présence constante de Dieu dans nos vies. Même dans les tempêtes, nous pouvons
        expérimenter cette paix qui garde nos cœurs et nos pensées en Jésus-Christ.
      </p>
      <p>
        Lorsque nous plaçons notre confiance en Lui et remettons nos soucis entre Ses mains,
        nous découvrons une sérénité que le monde ne peut offrir. La Bible dit que “la paix de Dieu,
        qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Christ Jésus”.
      </p>
      <p>
        Priez chaque jour pour recevoir cette paix. Elle fortifie, restaure, et illumine votre marche
        avec le Seigneur.
      </p>
    `,
  },
  {
    id: "2",
    title: "La prière qui transforme",
    date: "08 Janvier 2026",
    image: "/assets/meditation2.jpg",
    content: `
      <p>
        La transformation commence par un cœur humble devant Dieu.
        Quand nous venons devant Lui avec sincérité, la prière change nos pensées,
        influence nos choix et renouvelle notre esprit.
      </p>
      <p>
        La prière n’est pas seulement une liste de requêtes, mais une conversation
        profonde avec notre Père céleste, qui nous enseigne, nous corrige et nous guide.
      </p>
    `,
  },
];

export default function MeditationDetail() {
  const { id } = useParams();

  const meditation = meditations.find((med) => med.id === id);

  if (!meditation) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center text-gray-700">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Article non trouvé</h2>
        <Link to="/meditations" className="text-blue-600 hover:underline">
          Retour aux méditations
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-8">
      {/* Titre et date */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-blue-700">
          {meditation.title}
        </h1>
        <p className="text-sm text-gray-500">{meditation.date}</p>
      </div>

      {/* Image */}
      {meditation.image && (
        <img
          src={meditation.image}
          alt={meditation.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      )}

      {/* Contenu */}
      <div
        className="prose prose-lg text-gray-800"
        dangerouslySetInnerHTML={{ __html: meditation.content }}
      />

      {/* Bouton de retour */}
      <div className="text-center">
        <Link
          to="/meditations"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          ← Retour aux méditations
        </Link>
      </div>
    </div>
  );
}
