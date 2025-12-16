import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Village Fete Insurance UK 2025 | Community Event Insurance from £66",
    template: "%s | Village Fete Insurance UK"
  },
  description: "Village fete insurance UK - get instant quotes for community events, church fetes, charity fundraisers & school events. Public liability insurance from specialist UK providers. Cover from £66 per event.",
  keywords: [
    "village fete insurance",
    "village fete insurance uk",
    "community event insurance",
    "church fete insurance",
    "charity fundraiser insurance",
    "school fete insurance",
    "parish council insurance",
    "village hall insurance",
    "public liability community events",
    "event cancellation insurance",
    "fete insurance uk",
    "community event cover"
  ],
  authors: [{ name: "Village Fete Insurance UK" }],
  creator: "Village Fete Insurance UK",
  publisher: "Village Fete Insurance UK",
  metadataBase: new URL("https://villagefeteinsurance.quest"),
  alternates: {
    canonical: "https://villagefeteinsurance.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://villagefeteinsurance.quest",
    siteName: "Village Fete Insurance UK",
    title: "Village Fete Insurance UK 2025 | Community Event Insurance",
    description: "Village fete insurance UK - get instant quotes for community events, church fetes, charity fundraisers & school events. Public liability and event cancellation cover from specialist providers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Village Fete Insurance UK | Community Event Cover",
    description: "Village fete insurance from UK specialists. Instant quotes for community events, church fetes, and charity fundraisers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://villagefeteinsurance.quest/#website",
  name: "Village Fete Insurance UK",
  alternateName: ["Community Event Insurance UK", "Church Fete Insurance", "Village Hall Event Insurance"],
  url: "https://villagefeteinsurance.quest",
  description: "Village fete insurance UK comparison service. Get public liability and event cancellation insurance for community events, church fetes, charity fundraisers & school events from specialist UK insurers.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    name: "Village Fete Insurance UK",
    url: "https://villagefeteinsurance.quest"
  }
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://villagefeteinsurance.quest/#service",
  name: "Village Fete Insurance UK Comparison",
  alternateName: "Community Event Insurance Comparison",
  description: "Compare village fete insurance UK quotes from specialist providers. Find public liability & event cancellation insurance for community events, church fetes, charity fundraisers, school events & parish council events.",
  provider: {
    "@type": "Organization",
    name: "Village Fete Insurance UK"
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  },
  serviceType: "Village Fete Insurance Comparison",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free village fete insurance quotes UK"
  }
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Village Fete Insurance",
      item: "https://villagefeteinsurance.quest"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-slate-900 text-white`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
