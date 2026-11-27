import { SITE_URL } from "@/utils/seoBlogs";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const BUSINESS = {
  name: "Move Mate Relocations NZ",
  phone: "+64278555700",
  phoneDisplay: "+64 27 855 5700",
  email: "info@movematerelocations.co.nz",
  nzbn: "9429053867063",
  street: "10 Pa Ariki Road",
  locality: "Te Kauwhata",
  region: "Waikato",
  postalCode: "3710",
  country: "NZ",
  latitude: -37.4158242,
  longitude: 175.1532926,
  facebook: "https://www.facebook.com/profile.php?id=61593218276561",
  logo: `${SITE_URL}${bp}/full_logo.jpeg`,
  url: `${SITE_URL}${bp}/`,
};

/** Areas served. Towns match the published local guides; regions cover the base area. */
export const AREAS_SERVED = [
  "Te Kauwhata",
  "Huntly",
  "Hamilton",
  "Mokau",
  "Auckland",
  "Tauranga",
  "Waikato",
  "Bay of Plenty",
  "New Zealand",
];

export const jsonLdString = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${BUSINESS.url}#business`,
  name: BUSINESS.name,
  url: BUSINESS.url,
  image: BUSINESS.logo,
  logo: BUSINESS.logo,
  description:
    "House, office, warehouse, intercity, single item and furniture movers based in Te Kauwhata, Waikato, serving Waikato, Auckland, Bay of Plenty and New Zealand-wide.",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  identifier: { "@type": "PropertyValue", propertyID: "NZBN", value: BUSINESS.nzbn },
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  areaServed: AREAS_SERVED.map((name) => ({
    "@type": name === "New Zealand" ? "Country" : name === "Waikato" || name === "Bay of Plenty" ? "AdministrativeArea" : "City",
    name,
  })),
  sameAs: [BUSINESS.facebook],
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    contactType: "customer service",
    areaServed: "NZ",
    availableLanguage: "English",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BUSINESS.url}#website`,
  url: BUSINESS.url,
  name: BUSINESS.name,
  inLanguage: "en-NZ",
  publisher: { "@id": `${BUSINESS.url}#business` },
};
