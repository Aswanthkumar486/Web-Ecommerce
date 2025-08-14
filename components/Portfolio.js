export default function Portfolio({ data }) {
  if (!data) return null;

  return (
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.collections.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
