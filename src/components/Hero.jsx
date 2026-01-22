import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import PrayerRequestForm from "../pages/PrayerRequestForm";

export const Hero = () => {
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);

  return (
    <>
     <section
  className="relative text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/images (3).jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Contenu */}
  <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
      Bienvenue à <br />
      <span className="text-yellow-300">l'Église Mont de Sion</span>
    </h1>

    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
      Une famille unie dans la foi, l’amour et l’espérance en Jésus-Christ.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button
        className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        onClick={() => setIsPrayerModalOpen(true)}
      >
        Ma requête de prière
      </button>

      <Link
        to="/contact"
        className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
      >
        Nous contacter
      </Link>
    </div>
  </div>
</section>


      {/* MODAL */}
      <Modal
        isOpen={isPrayerModalOpen}
        onClose={() => setIsPrayerModalOpen(false)}
      >
        <PrayerRequestForm />
      </Modal>
    </>
  );
};
