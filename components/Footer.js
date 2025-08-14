import React from "react";

export default function Footer({ data, data2 }) {
  return (
    <footer className="px-6 bg-purple-600 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-white">

      {/* Top section: logo & description, links, contact */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-white/30 pb-6">

        {/* Logo & description */}
        <div className="md:max-w-96">
          {data.logo && (
            <img src={data.logo} alt={data.title} className="h-10 w-auto" />
          )}

          {data.description && (
            <p className="mt-6 text-md text-white">{data.description}</p>
          )}
        </div>

        {/* Links & Contact */}
        <div className="flex-1 flex items-start md:justify-end gap-20">

          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2 list-">
              {data.links?.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
            <div className="text-sm space-y-2">
              {data.phone && <p>📞 {data.phone}</p>}
              {data.email && <p>✉️ {data.email}</p>}
              {data.address && <p>📍 {data.address}</p>}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {data.social?.facebook && (
                <a href={data.social.facebook} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                </a>
              )}
              {data.social?.instagram && (
                <a href={data.social.instagram} target="_blank" rel="noopener noreferrer">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                </a>
              )}
              {data.social?.linkedin && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        © {new Date().getFullYear()}{" "}
        <a href="#" className="underline">
          {data.title}
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
}
