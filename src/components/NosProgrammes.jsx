export default function NosProgrammes() {
  const programmes = [
    {
      title: "Cultes dominicaux",
      description: "Adoration, louange et prédication pour toute la famille le dimanche matin.",
    },
    {
      title: "Prière & Études bibliques",
      description: "Rencontres de prière et étude de la Parole les mardis et vendredis.",
    },
    {
      title: "Groupes de jeunes",
      description: "Réunions dédiées à la jeunesse pour grandir dans la foi et l’amitié.",
    },
    {
      title: "École du dimanche",
      description: "Programme spirituel pour enfants et jeunes afin de mieux connaître la Bible.",
    },
    {
      title: "Jeûne & Intercession",
      description: "Journées spéciales pour intensifier la prière et rechercher Dieu ensemble.",
    },
  ];

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-6">Nos programmes</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programmes.map((prog, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-blue-700 mb-2">
              {prog.title}
            </h4>
            <p className="text-gray-700">{prog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
