export default function EventCard({ title, date, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p>{description}</p>
    </div>
  )
}
