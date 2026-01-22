import React, { useState } from "react";
import Modal from "./Modal";
import PrayerRequestForm from "../pages/PrayerRequestForm";

export default function PrayerRequestModalWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bouton pour ouvrir le modal */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
      >
        Demander une prière
      </button>

      {/* Le modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <PrayerRequestForm />
      </Modal>
    </>
  );
}
