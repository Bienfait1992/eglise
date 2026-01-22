import { useState } from "react";
import EventCard from "../components/EventCard";
import CollegePastoral from "../components/CollegePastoral";
import NosProgrammes from "../components/NosProgrammes";

const events = [
  {
    title: "Veillée de prière",
    date: "20 Janvier 2026 - 22h00",
    description: "Une nuit de prière et d’adoration",
  },
  {
    title: "Séminaire des couples",
    date: "02 Février 2026 - 14h00",
    description: "Renforcer les foyers chrétiens",
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState("college");

  return (
    <div className="max-w-7xl mx-auto  py-16 px-6">
       {/* ÉVÉNEMENTS */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">Événements à venir</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
      {/* Titre */}
      {/* <h2 className="text-3xl font-bold mb-10">Nos événements & ministères</h2> */}

      {/* MENU */}
      <div className="flex flex-wrap gap-4 mb-10  mt-12 bg-gray-200 p-4 rounded-xl justify-center">
        <TabButton
          active={activeTab === "college"}
          onClick={() => setActiveTab("college")}
          label="Collège pastoral"
        />
        <TabButton
          active={activeTab === "programmes"}
          onClick={() => setActiveTab("programmes")}
          label="Nos programmes"
        />
        <TabButton
          active={activeTab === "cellules"}
          onClick={() => setActiveTab("cellules")}
          label="Nos cellules"
        />
        <TabButton
          active={activeTab === "extensions"}
          onClick={() => setActiveTab("extensions")}
          label="Nos extensions"
        />
      </div>

      {/* CONTENU */}
      {activeTab === "college" && <CollegePastoral />}


     {activeTab === "programmes" && <NosProgrammes />}


      {activeTab === "cellules" && (
        <section>
          <h3 className="text-2xl font-semibold mb-4">Nos cellules</h3>
          <p className="text-gray-700">
            Les cellules sont des groupes de maison favorisant la communion,
            l’enseignement et la prière en petits groupes.
          </p>
        </section>
      )}

      {activeTab === "extensions" && (
        <section>
          <h3 className="text-2xl font-semibold mb-4">Nos extensions</h3>
          <p className="text-gray-700">
            Nos extensions représentent les différentes implantations et œuvres
            de l’Église dans d’autres zones et villes.
          </p>
        </section>
      )}

     
    </div>
  );
}

/* Bouton d’onglet réutilisable */
function TabButton({ label, active, onClick }) {
 return (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-lg font-semibold transition ${
      active
        ? "bg-blue-700 text-white"
        : "text-gray-600 hover:bg-blue-100 hover:text-blue-700"
    }`}
  >
    {label}
  </button>
  
);

}
