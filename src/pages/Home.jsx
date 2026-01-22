import { Link } from "react-router-dom"


      export const Home=()=> {
        return(
            <>
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bienvenue à l'Église Lumière
          </h2>
          <p className="text-lg mb-8">
            Une famille, une foi, une espérance
          </p>
          <Link
            to="/events"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Voir les événements
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Culte</h3>
            <p>Chaque dimanche à 09h00</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Prière</h3>
            <p>Mardi & Vendredi à 17h30</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Jeunesse</h3>
            <p>Samedi à 15h00</p>
          </div>
        </div>
      </section>
    </>
        )
}
