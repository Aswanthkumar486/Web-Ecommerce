/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

// Import your new e-commerce JSON data
import shopData from '../data/data.json';
import ShopSection from '@/components/ShopSection';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

export async function getStaticProps() {
  return {
    props: {
      siteData: shopData.site,
      navbarData: shopData.navbar,
      heroData: shopData.hero,
      aboutData: shopData.about,
      servicesData: shopData.services,
      portfolioData: shopData.portfolio,
      clientsData: shopData.clients,
      footerData: shopData.contact,
      linksData:shopData.links || []
      // Footer uses contact data
    },
  };
}

export default function Home({
  siteData,
  navbarData,
  heroData,
  aboutData,
  servicesData,
  portfolioData,
  clientsData,
  footerData,
  linksData
}) {
  return (
    <>
      <Head>
        <title>{siteData.name} | {siteData.tagline}</title>
        <meta
          name="description"
          content="Premium e-commerce store delivering quality products with style and convenience."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Pass both site info and navbar menu */}
      <Navbar data={{ ...navbarData, site: siteData }} />

      <Hero data={heroData} />
      <ShopSection />
      <About data={aboutData} />
      <Services data={servicesData} />
      <Portfolio data={portfolioData} />
<Blog />
      <Reviews data={clientsData} />
      <Contact />
      <Footer data={footerData} data2={linksData} />
    </>
  );
}

