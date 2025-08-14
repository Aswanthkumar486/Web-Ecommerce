import Link from 'next/link';

export default function Navbar({ data }) {
  if (!data) return null;

  return (
    <nav className="fixed w-full z-50 shadow-lg py-2 bg-purple-700">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={data.site.logo} alt={data.site.name} className="h-10 w-10 rounded-full" />

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {data.menu.map((item, idx) => (
            <Link key={idx} href={item.link}>
              <span className="cursor-pointer font-bold text-white hover:border-b-2 hover:border-white pb-1">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href={data.ctaButton.link}>
            <span className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              {data.ctaButton.text}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
