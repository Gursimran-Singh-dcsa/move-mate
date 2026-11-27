export type ServiceDetail = {
  slug: string;
  title: string;
  /** SEO-targeted page title (without the site-name template suffix). */
  seoTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  included: string[];
  idealFor: string[];
  howItWorks: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "house-relocation",
    title: "House Relocation",
    seoTitle: "House Movers in Waikato, Auckland & Bay of Plenty",
    description:
      "Careful house movers from Te Kauwhata serving Waikato, Auckland and Bay of Plenty. Packing help, loading, transport and unloading for homes of every size. Get a free quote.",
    image: "/house_relocation.jpeg",
    imageAlt: "Move Mate Relocations crew loading household furniture for a house move",
    intro:
      "Moving house is a big job, and we treat it that way. Our crew handles everything from wrapping furniture and loading the truck to unloading and placing items in your new home, so you can focus on the rest of your move. We move one-bedroom flats through to large family homes, locally around Waikato and across to Auckland and Bay of Plenty.",
    included: [
      "Furniture wrapping and protection for floors, doorways and walls",
      "Careful loading, tie-down and unloading",
      "Disassembly and reassembly of beds and larger furniture",
      "Appliance moves, including washing machines and fridges",
      "Packing help and moving supplies on request",
    ],
    idealFor: [
      "Flats, townhouses and family homes",
      "Rural and lifestyle property moves",
      "Moves with tight access or stairs",
    ],
    howItWorks: [
      "Tell us about your move with the quote form or a quick call.",
      "We confirm the crew size, truck and time needed, then send your quote.",
      "On the day we protect, load, transport and unload, placing furniture where you want it.",
    ],
    faq: [
      {
        question: "How much does a house move cost?",
        answer:
          "The price depends on how much you are moving, the distance, access at both ends and the time needed. Send us the details through the quote form and we will give you a clear quote.",
      },
      {
        question: "Can you help with packing?",
        answer:
          "Yes. We can help pack and prepare your belongings so everything is ready to load and travels safely.",
      },
      {
        question: "Which areas do you cover for house moves?",
        answer:
          "We are based in Te Kauwhata and regularly move homes around Waikato, Hamilton, Huntly, Auckland, Tauranga and Mokau, as well as intercity moves across New Zealand.",
      },
    ],
  },
  {
    slug: "office-relocation",
    title: "Office Relocation",
    seoTitle: "Office Movers in Waikato & Auckland",
    description:
      "Organised office relocation for Waikato and Auckland businesses. Desks, equipment, filing and furniture moved with minimal downtime. Request a quote from Move Mate Relocations.",
    image: "/office_relocation.jpeg",
    imageAlt: "Office furniture and equipment being moved by Move Mate Relocations",
    intro:
      "A good office move keeps your team working. We plan the move with you, label and move desks, chairs, filing and equipment, and set everything up in the new space so you can get back to business quickly. We work after hours and on weekends where needed to limit downtime.",
    included: [
      "Desks, chairs, filing cabinets and meeting room furniture",
      "Careful handling of computers, screens and office equipment",
      "Labelling by room or desk so setup is quick",
      "After-hours and weekend moves on request",
      "Disassembly and reassembly of workstations",
    ],
    idealFor: [
      "Small and medium businesses",
      "Clinics, studios and professional offices",
      "Shared workspaces and start-ups",
    ],
    howItWorks: [
      "Share your floor plan, headcount and preferred move date.",
      "We agree a plan and labelling system with you.",
      "Our crew moves and sets up each workstation in the new office.",
    ],
    faq: [
      {
        question: "Can you move us outside business hours?",
        answer:
          "Yes. We can schedule evening and weekend office moves so your team loses as little working time as possible.",
      },
      {
        question: "Do you move IT equipment?",
        answer:
          "We carefully move computers, screens and peripherals. For servers and network gear we recommend your IT provider handles disconnection and reconnection while we handle transport.",
      },
    ],
  },
  {
    slug: "warehouse-relocation",
    title: "Warehouse Relocation",
    seoTitle: "Warehouse Relocation & Stock Movers in Waikato",
    description:
      "Warehouse relocation for stock, racking contents and equipment around Waikato, Auckland and Bay of Plenty. Planned, efficient moves from Move Mate Relocations.",
    image: "/warehouse_relocation.jpeg",
    imageAlt: "Warehouse stock and equipment being loaded onto a Move Mate truck",
    intro:
      "Moving a warehouse takes planning to keep orders flowing. We move pallets, boxed stock, shelving contents and equipment efficiently and safely, working with your schedule so downtime stays short.",
    included: [
      "Boxed stock and palletised goods",
      "Shelving contents and equipment",
      "Staged moves to keep your operation running",
      "Loading and unloading at both ends",
    ],
    idealFor: [
      "Retail and e-commerce stock rooms",
      "Trade and workshop contents",
      "Businesses moving to a larger or smaller site",
    ],
    howItWorks: [
      "Tell us the volume, access and timeline.",
      "We plan the move in stages that suit your operation.",
      "Our team loads, transports and unloads so you can reopen quickly.",
    ],
    faq: [
      {
        question: "Can you do the move in stages?",
        answer:
          "Yes. We can move stock and equipment in stages so part of your operation keeps running while the rest relocates.",
      },
      {
        question: "Do you move heavy equipment?",
        answer:
          "Tell us what you need moved and the weights involved. We will confirm the crew and equipment required before quoting.",
      },
    ],
  },
  {
    slug: "intercity-relocation",
    title: "Intercity Relocation",
    seoTitle: "Intercity Movers New Zealand | Hamilton, Auckland, Tauranga",
    description:
      "Intercity movers for Hamilton, Auckland, Tauranga and across New Zealand. Safe long-distance transport for homes, offices and single items. Get a Move Mate quote.",
    image: "/intercity_relocation.jpeg",
    imageAlt: "Move Mate Relocations truck on an intercity move",
    intro:
      "Long-distance moves need good coordination. We plan pick-up and delivery times with you, load carefully and drive your belongings directly to their new destination, whether that is a few hours away or the other end of the country.",
    included: [
      "Direct transport from pick-up to delivery",
      "Secure loading to protect items over long distances",
      "Coordinated pick-up and delivery times",
      "Home, office and single item intercity moves",
    ],
    idealFor: [
      "Families relocating between cities",
      "Students and young professionals",
      "Businesses opening a second site",
    ],
    howItWorks: [
      "Tell us where you are moving from and to, and your preferred dates.",
      "We confirm the plan and your quote.",
      "We load, transport and deliver, keeping you updated on timing.",
    ],
    faq: [
      {
        question: "Which routes do you cover?",
        answer:
          "We regularly move between Waikato, Hamilton, Auckland and Tauranga, and take intercity jobs across New Zealand. Ask us about your specific route.",
      },
      {
        question: "How long does an intercity move take?",
        answer:
          "It depends on the distance and load. We confirm the pick-up and delivery window in your quote.",
      },
    ],
  },
  {
    slug: "single-item-movers",
    title: "Single Item Movers",
    seoTitle: "Single Item Movers in Waikato, Auckland & Bay of Plenty",
    description:
      "Need one item moved? Single item movers for pianos, couches, fridges and more around Waikato, Auckland and Bay of Plenty. Quick quotes from Move Mate Relocations.",
    image: "/single_item_movers.jpeg",
    imageAlt: "Move Mate Relocations crew carrying a single large item",
    intro:
      "Only have one big item to move? We handle single large, heavy or valuable pieces with proper lifting, protection and secure transport, without you having to book a full house move.",
    included: [
      "Couches, beds, wardrobes and tables",
      "Fridges, washing machines and appliances",
      "Pianos and other heavy or awkward items",
      "Marketplace and second-hand purchase pick-ups",
    ],
    idealFor: [
      "Facebook Marketplace and Trade Me purchases",
      "Items too big for your own vehicle",
      "Gifts and furniture deliveries",
    ],
    howItWorks: [
      "Tell us what you are moving, where it is and where it is going.",
      "We confirm a quote.",
      "We collect, protect and deliver the item.",
    ],
    faq: [
      {
        question: "Can you move something I bought online?",
        answer:
          "Yes. We can collect from the seller and deliver to you. Send the pick-up and delivery addresses with your quote request.",
      },
      {
        question: "Is there a minimum job size?",
        answer:
          "No. Whether it is one item or a full load, send us the details and we will quote it.",
      },
    ],
  },
  {
    slug: "furniture-removalists",
    title: "Furniture Removalists",
    seoTitle: "Furniture Removalists & Movers in Hamilton, Auckland, Tauranga",
    description:
      "Furniture removalists for Hamilton, Huntly, Auckland, Tauranga and Waikato. Bulky furniture and individual pieces moved with care. Request a Move Mate Relocations quote.",
    image: "/furniture_removalists.jpeg",
    imageAlt: "Move Mate Relocations removalists loading furniture onto a truck",
    intro:
      "From a full lounge suite to a single wardrobe, our removalists handle bulky furniture with care. We wrap and protect pieces, take them apart where needed, and deliver them safely to your chosen address.",
    included: [
      "Lounge suites, dining sets and bedroom furniture",
      "Wrapping and protection to prevent marks and scratches",
      "Disassembly and reassembly where needed",
      "Local deliveries and furniture store pick-ups",
    ],
    idealFor: [
      "Moving furniture between homes",
      "Furniture shop deliveries and pick-ups",
      "Downsizing and rearranging",
    ],
    howItWorks: [
      "Send us a list or photos of the furniture.",
      "We confirm the crew, truck and quote.",
      "We wrap, load, transport and place your furniture.",
    ],
    faq: [
      {
        question: "Do you take furniture apart and put it back together?",
        answer:
          "Yes, we can disassemble and reassemble beds, tables and wardrobes as part of the move.",
      },
      {
        question: "Which towns do you serve?",
        answer:
          "We run local furniture moves in Hamilton, Huntly, Te Kauwhata, Auckland and Tauranga, and travel further for larger jobs.",
      },
    ],
  },
];

export const serviceBySlug = new Map(serviceDetails.map((s) => [s.slug, s]));
export const servicePath = (slug: string) => `/services/${slug}/`;
