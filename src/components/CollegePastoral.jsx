export default function CollegePastoral() {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4">Collège pastoral</h3>

      <p className="text-gray-700 mb-10 max-w-3xl">
        Le collège pastoral est composé des serviteurs de Dieu appelés à
        conduire, enseigner et accompagner l’Église dans la vision divine.
      </p>

      {/* Grille des pasteurs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        
        <PastorCard
          image="/images/hq720.jpg"
          name="Pasteur Jean Mukendi"
          role="Pasteur principal"
        />

        <PastorCard
          image="/images/images (3).jpg"
          name="Pasteur Samuel K."
          role="Pasteur assistant"
        />

        <PastorCard
          image="/images/images (1).jpg"
          name="Pasteur Marie Nzambe"
          role="Responsable enseignement"
        />

        <PastorCard
          image="/images/images.jpg"
          name="Pasteur David L."
          role="Responsable intercession"
        />

        <PastorCard
          image="src/assets/images/images (2).jpg"
          name="Pasteur Ruth M."
          role="Responsable évangélisation"
        />
      </div>
    </section>
  );
}

/* Sous-composant interne */
function PastorCard({ image, name, role }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-72 h-72 rounded-full object-cover "
      />
      <h4 className="mt-4 text-lg font-semibold">{name}</h4>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}
