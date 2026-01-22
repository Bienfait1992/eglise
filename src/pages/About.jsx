import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import HistoryCarousel from "../components/HistoryCarousel";

export default function About() {
  const [openSections, setOpenSections] = useState([]);

  const toggle = (section) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const useAutoHeight = (isOpen) => {
    const ref = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
      if (isOpen) {
        setHeight(`${ref.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }, [isOpen]);

    return { ref, height };
  };

  const histoireOpen = openSections.includes("histoire");
  const croyancesOpen = openSections.includes("croyances");
  const missionOpen = openSections.includes("mission");

  const histoire = useAutoHeight(histoireOpen);
  const croyances = useAutoHeight(croyancesOpen);
  const mission = useAutoHeight(missionOpen);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">

      {/* Section de bienvenue */}
      <section className="text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
          À propos de nous
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Bienvenue à l'Église Lumière ! Nous sommes une communauté dédiée à
          adorer Dieu, grandir dans la foi et servir notre ville avec amour
          et compassion. Nous croyons en une foi vivante qui transforme nos
          vies et notre monde.
        </p>
      </section>

      {/* Histoire + Carousel */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <HistoryCarousel
          images={[
            "/images/hq720.jpg",
            "/images/images (1).jpg",
            "/images/images (2).jpg",
            "/images/images (3).jpg",
            "/images/images.jpg",
          ]}
        />

        <div>
          {/* Notre Histoire */}
          <h3
            className={`flex justify-between items-center text-2xl font-bold mb-4 cursor-pointer border p-2 shadow-md
              ${histoireOpen ? "bg-blue-600 text-white" : "bg-white text-blue-700"}
              hover:bg-blue-600 hover:text-white`}
            onClick={() => toggle("histoire")}
          >
            Notre Histoire
            <ChevronDown
              className={`transition-transform duration-300 ${
                histoireOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </h3>

          <div
            ref={histoire.ref}
            style={{ height: histoire.height }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <p className="text-gray-700 mt-4">
              Fondée en [année], l'Église Lumière a commencé comme un petit groupe
              de croyants désireux d’adorer Dieu ensemble. Au fil des années, notre
              famille s’est agrandie, et nous avons servi des milliers de personnes
              à travers des cultes, des programmes communautaires et des actions sociales.
              Chaque étape de notre parcours a été guidée par la foi, la prière et
              l’engagement de suivre Jésus-Christ.
            </p>
          </div>

          {/* Nos Croyances */}
          <div className="mt-4">
            <h3
              className={`flex justify-between items-center text-2xl font-bold mb-4 cursor-pointer border p-2 shadow-md
                ${croyancesOpen ? "bg-blue-600 text-white" : "bg-white text-blue-700"}
                hover:bg-blue-600 hover:text-white`}
              onClick={() => toggle("croyances")}
            >
              Nos Croyances
              <ChevronDown
                className={`transition-transform duration-300 ${
                  croyancesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </h3>

            <div
              ref={croyances.ref}
              style={{ height: croyances.height }}
              className="overflow-hidden transition-all duration-500 ease-in-out"
            >
              <ul className="text-gray-700 px-4 list-disc space-y-2">
                <li>Nous croyons en un seul Dieu, Père, Fils et Saint-Esprit.</li>
                <li>Nous croyons que la Bible est la parole inspirée de Dieu.</li>
                <li>Nous croyons que Jésus-Christ est notre Sauveur et Seigneur.</li>
                <li>Nous croyons à la puissance de la prière et de la vie transformée.</li>
              </ul>
            </div>
          </div>

          {/* Mission & Vision */}
          <section className="mt-4">
            <h3
              className={`flex justify-between items-center text-2xl font-bold mb-4 cursor-pointer border p-2 shadow-md
                ${missionOpen ? "bg-blue-600 text-white" : "bg-white text-blue-700"}
                hover:bg-blue-600 hover:text-white`}
              onClick={() => toggle("mission")}
            >
              Notre Mission & Vision
              <ChevronDown
                className={`transition-transform duration-300 ${
                  missionOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </h3>

            <div
              ref={mission.ref}
              style={{ height: mission.height }}
              className="overflow-hidden transition-all duration-500 ease-in-out"
            >
              <div className="text-gray-700">
                <p className="mb-3">
                  La mission de l'Église Lumière est de proclamer l’Évangile de Jésus-Christ,
                  d’édifier les croyants et d’apporter l’amour de Dieu à notre communauté.
                  Nous croyons en une église vivante, active et engagée dans la transformation
                  des vies par la parole et l’action.
                </p>
                <p>
                  Notre vision est d’être un lieu où chacun se sent accueilli, où chaque
                  cœur est encouragé, et où la présence de Dieu est ressentie dans chaque
                  service, chaque rencontre et chaque ministère.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Équipe / Leadership */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-start">
          <div className="flex">
            <img
              src="/images/hq720.jpg"
              alt="Pasteur principal"
              className="w-full h-full object-cover shadow-lg rounded-lg"
            />
          </div>

          <div>
            <h2 className="mb-2 font-medium">Pateur Titulaire</h2>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              Apotre PAUL BOEMBA
            </h4>
            <p className="text-gray-700 text-md sm:text-lg text-justify">
              Pasteur titulaire de l’Église Lumière, appelé à conduire la communauté
              dans la foi, l’amour et l’unité. Il est engagé dans l’enseignement
              biblique, la prière et l’accompagnement spirituel des membres.
              <br />
              <span className="text-blue-700 font-semibold">
                Mission : </span>
              guider l’église vers une vie transformée par la parole de Dieu.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
