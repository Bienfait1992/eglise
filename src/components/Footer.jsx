// import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-6 mt-16 ">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl">
        
//         {/* Texte */}
//         <p className="text-sm text-center md:text-left">
//           © {new Date().getFullYear()} Église Mont de Sion. Tous droits réservés.
//         </p>

//         {/* Réseaux sociaux */}
//         <div className="flex gap-4 mt-4 md:mt-0">
//           <a
//             href="#"
//             className="hover:text-blue-500 transition"
//             aria-label="Facebook"
//           >
//             <FaFacebookF size={18} />
//           </a>

//           <a
//             href="#"
//             className="hover:text-pink-500 transition"
//             aria-label="Instagram"
//           >
//             <FaInstagram size={18} />
//           </a>

//           <a
//             href="#"
//             className="hover:text-red-500 transition"
//             aria-label="YouTube"
//           >
//             <FaYoutube size={18} />
//           </a>

//           <a
//             href="#"
//             className="hover:text-green-500 transition"
//             aria-label="WhatsApp"
//           >
//             <FaWhatsapp size={18} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   )
// }


import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="container mx-auto px-4 max-w-7xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">Accueil</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">À propos</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Ministères</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Événements</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Nous contacter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Nous contacter</h4>
            <p className="text-sm">
              📍 Adresse : Kinshasa, RDC <br />
              📞 Téléphone : +243 000 000 000 <br />
              ✉️ Email : info@eglise.com
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Recevez nos actualités et événements.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-3 py-2 rounded-md text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md font-semibold">
                S'abonner
              </button>
            </div>
          </div>

         

        </div>
        
      </div>
       {/* Réseaux sociaux + Texte */}
          <div className="flex  justify-between border-t-2 border-gray-50 mt-2 max-w-7xl m-auto">
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} Église Mont de Sion. Tous droits réservés.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-blue-500 transition" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>

              <a href="#" className="hover:text-pink-500 transition" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>

              <a href="#" className="hover:text-red-500 transition" aria-label="YouTube">
                <FaYoutube size={18} />
              </a>

              <a href="#" className="hover:text-green-500 transition" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
    </footer>
  )
}
