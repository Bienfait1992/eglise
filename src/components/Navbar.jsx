// import { Link } from "react-router-dom"

// export default function Navbar() {
//   return (
//    <nav className="bg-white shadow-md  w-full border-b border-gray-200">
//   <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//     <h1 className="text-2xl font-bold text-blue-700">
//       Église Mont de Sion
//     </h1>
//     <div className="space-x-6 font-medium">
//       <Link to="/" className="hover:text-blue-600">Accueil</Link>
//       <Link to="/events" className="hover:text-blue-600">A propos</Link>
//       <Link to="/events" className="hover:text-blue-600">Meditation</Link>
//       <Link to="/events" className="hover:text-blue-600">Rehoboth</Link>
//       <Link to="/events" className="hover:text-blue-600 bg-blue-700 p-2 text-white rounded-lg">Offrande</Link>
//       <Link to="/events" className="hover:text-blue-600  bg-gray-200 p-2  rounded-lg">Rendez-vous</Link>
//       <Link to="/events" className="hover:text-blue-600">Événements</Link>
//       <Link to="/contact" className="hover:text-blue-600">Contact</Link>
//     </div>
//   </div>
// </nav>

//   )
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full border-b border-gray-200 sticky top-0 z-50 p-2">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Titre */}
        {/* <h1 className="text-2xl font-bold text-blue-700">
          Église Mont de Sion
        </h1> */}
        <img
         src="/JhQrVGHP.jpg"
        alt={name}
        className="w-32 h-32 rounded-full object-cover "
      />

        {/* Hamburger button visible jusqu’à lg (<1024px) */}
        <button
          className="text-gray-600 lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">&#10005;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>

        {/* Menu Desktop visible à partir de lg */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <Link to="/about" className="hover:text-blue-600">A propos</Link>
          <Link to="/meditations" className="hover:text-blue-600">Meditation</Link>
          <Link to="/rehoboth" className="hover:text-blue-600">Rehoboth</Link>
          <Link to="/offrandes" className="hover:text-blue-600 bg-blue-700 text-white px-3 py-2 rounded-lg">Offrande</Link>
          <Link to="/rendezvous" className="hover:text-blue-600 bg-gray-200 px-3 py-2 rounded-lg">Rendez-vous</Link>
          <Link to="/events" className="hover:text-blue-600">Événements</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>

      {/* Menu Mobile / Tablette jusqu’à lg */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-2 font-medium bg-white border-t border-gray-200">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Accueil</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">A propos</Link>
          <Link to="/meditation" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Meditation</Link>
          <Link to="/rehoboth" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Rehoboth</Link>
          <Link to="/offrande" onClick={() => setIsOpen(false)} className="block hover:text-blue-600 bg-blue-700 text-white px-3 py-2 rounded-lg">Offrande</Link>
          <Link to="/rendezvous" onClick={() => setIsOpen(false)} className="block hover:text-blue-600 bg-gray-200 px-3 py-2 rounded-lg">Rendez-vous</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Événements</Link>
          {/* <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Requette priere</Link> */}
        </div>
      )}
    </nav>
  );
}
