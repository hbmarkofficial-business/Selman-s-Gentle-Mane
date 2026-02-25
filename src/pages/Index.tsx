import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Gersthofen | Selman's Gentle Mane</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Selman's Gentle Mane in Gersthofen für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Gersthofen, Selman's Gentle Mane"
        />
        <link rel="canonical" href="https://gentlemane.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Selman's Gentle Mane | Premium Barbershop Gersthofen" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Gersthofen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentlemane.de" />
        <meta property="og:image" content="https://gentlemane.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Selman's Gentle Mane | Premium Barbershop Gersthofen" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://gentlemane.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Selman's Gentle Mane",
            "image": "https://gentlemane.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Augsburger Str. 78",
              "addressLocality": "Gersthofen",
              "postalCode": "86368",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.4251",
              "longitude": "10.8714"
            },
            "url": "https://gentlemane.de",
            "telephone": "+49 162 8695284",
            "openingHours": "Di-Fr 10:00-18:30, Sa 09:00-15:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/selmansgentlemane",
              "https://www.instagram.com/selmansgentlemane"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
