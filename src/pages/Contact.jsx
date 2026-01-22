export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded h-32"
        />
        <button className="bg-blue-700 text-white px-6 py-3 rounded">
          Envoyer
        </button>
      </form>
    </div>
  )
}
