export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section
      className="h-[600px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: `url(${data.backgroundImage})`, fontFamily:'Bebas Neue', }}
  >
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{data.headline}</h1>
      <p className="mt-4 text-lg md:text-xl">{data.subheadline}</p>
      <div className="mt-6 flex gap-4">
        <a href={data.cta.primary.link} className="bg-purple-600 px-6 py-3 rounded-lg">
          {data.cta.primary.text}
        </a>
        <a href={data.cta.secondary.link} className="bg-white text-purple-700 px-6 py-3 rounded-lg">
          {data.cta.secondary.text}
        </a>
      </div>
    </section>
  );
}
