export default function Services({ data }) {
  if (!data) return null;

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <p className="mt-2 text-gray-600">{data.description}</p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          {data.offerings.map((item, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <img src={item.icon} alt={item.title} className="h-16 mx-auto mb-4" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
