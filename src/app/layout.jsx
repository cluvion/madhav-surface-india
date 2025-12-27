import "./globals.css";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import ComprehensiveFooter from "@/components/comprehensive-footer";
// import NavbarDemo from "@/components/header1";
import FloatingContact from "@/components/floating-contact";
// import CustomCursor from "@/components/custom-cursor";
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "@/lib/seo";
import Script from "next/script";

export const metadata = generateSEOMetadata({});

export default function RootLayout({ children }) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Vend+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LKJCW8CSBW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LKJCW8CSBW');
          `}
        </Script>

        {/* <CustomCursor /> */}
        <HeroHeader />
        <FloatingContact />
        {/* <NavbarDemo/> */}
        {children}
        <Footer />
        {/* <ComprehensiveFooter /> */}
      </body>
    </html>
  );
}
