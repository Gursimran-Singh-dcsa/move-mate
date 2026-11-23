export type SeoBlog = {
  slug: string;
  keyword: string;
  city: string;
  image: string;
  imageAlt: string;
  /** CSS object-position for cropped card/hero images (default "center"). */
  imagePosition?: string;
  /** Extra meta keywords for this article (merged with the defaults). */
  keywords?: string[];
  /** Headline numbers shown as a "job at a glance" strip. */
  stats?: Array<{ label: string; value: string }>;
  /** Long-form article body, rendered before the planning section. */
  sections?: Array<{ heading: string; paragraphs: string[] }>;
  /** Extra photos shown inside the article. */
  gallery?: Array<{ src: string; alt: string; caption: string }>;
  title: string;
  description: string;
  intro: string;
  planningTitle: string;
  planningPoints: string[];
  checklistTitle: string;
  checklistItems: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const seoBlogs: SeoBlog[] = [
  {
    slug: "4-bedroom-house-move-mokau-to-waikura-valley",
    keyword: "4 bedroom house movers Mokau",
    city: "Mokau",
    image: "/blog/4-bedroom-house-move-mokau-to-waikura-valley-crew-loading-in-rain.jpeg",
    imageAlt:
      "Move Mate Relocations crew member loading the truck in the rain during a 4 bedroom house move from Mokau to Waikura Valley",
    imagePosition: "50% 28%",
    keywords: [
      "Mokau to Waikura Valley furniture movers",
      "Mokau furniture movers",
      "Waikura Valley furniture movers",
      "Mokau to Waikura Valley house movers",
      "Mokau to Waikura Valley removalists",
      "4 bedroom house movers Mokau",
      "4 bedroom house move Waikura Valley",
      "house movers Mokau",
      "removalists Mokau",
      "rural furniture movers New Zealand",
      "affordable furniture movers Waikato",
      "furniture movers in the rain NZ",
      "cheap house movers Mokau",
      "furniture removal Mokau",
    ],
    title:
      "4 Bedroom House Move from Mokau to Waikura Valley: On Time, Rain or Shine",
    description:
      "How Move Mate Relocations moved a 4 bedroom house from Mokau to Waikura Valley in heavy rain: on time, zero damaged items and a cost-effective rate.",
    intro:
      "Rain was forecast, the roads were wet, and the client had a full 4 bedroom house to move from Mokau to Waikura Valley. We loaded on time, arrived on time and delivered every item undamaged, at a rate that kept the move affordable.",
    stats: [
      { label: "Job", value: "4 bedroom house" },
      { label: "Route", value: "Mokau to Waikura Valley" },
      { label: "Pick-up", value: "1 hour" },
      { label: "Travel to destination", value: "45 minutes" },
      { label: "Damaged items", value: "0" },
      { label: "Conditions", value: "Heavy rain" },
    ],
    sections: [
      {
        heading: "Moving a 4 bedroom house from Mokau to Waikura Valley",
        paragraphs: [
          "A 4 bedroom house means beds, wardrobes, couches, a dining setup, appliances and dozens of boxes. Add a rural route and rainy weather and most people expect delays. This move was a good reminder of why careful planning matters more than the forecast.",
          "Our Move Mate Relocations team picked up in Mokau and delivered to Waikura Valley on the day we promised, with the whole house loaded, secured and unloaded as planned.",
        ],
      },
      {
        heading: "Rain could not stop us",
        paragraphs: [
          "It rained throughout the move. Rather than pausing, we adjusted: furniture blankets went on first, items were wrapped before they left the house, and our crew kept a steady loading rhythm so nothing sat exposed longer than it had to.",
          "The result was a move that finished on time, with every box, mattress and piece of furniture arriving dry and undamaged.",
        ],
      },
      {
        heading: "1 hour to pick up, 45 minutes to your new home",
        paragraphs: [
          "Pick-up took about 1 hour, and the drive to the Waikura Valley destination took about 45 minutes. We arrived at the new site on schedule, even on a narrow, wet country road.",
          "Clear timing matters when you are moving a family. You should know when the truck will be loaded, when it will arrive and when you can start settling in.",
        ],
      },
      {
        heading: "Zero damaged items",
        paragraphs: [
          "Every item was blanket-wrapped or boxed, then secured in the truck with ratchet straps and load bars so nothing could shift on the road. That is how a rainy move across rural roads ends with zero packages damaged.",
          "If you are comparing house movers in Mokau, ask how they secure the load. It makes the difference between a smooth delivery and a broken wardrobe.",
        ],
      },
      {
        heading: "Cost-effective house moving without cutting corners",
        paragraphs: [
          "Good service does not have to cost more. We kept this 4 bedroom move cost-effective through efficient loading, sensible truck planning and no unnecessary extras, while still delivering careful, reliable work.",
          "Every move is different, so we quote based on volume, distance and access. You will get a clear price before the truck arrives.",
        ],
      },
    ],
    gallery: [
      {
        src: "/blog/4-bedroom-house-move-mokau-to-waikura-valley-truck-in-rain.jpeg",
        alt: "Move Mate Relocations truck on a wet gravel country road on the way from Mokau to Waikura Valley",
        caption:
          "On the road: the truck on a narrow, wet country road, arriving at the new home right on schedule.",
      },
      {
        src: "/blog/4-bedroom-house-move-mokau-to-waikura-valley-secured-load.jpeg",
        alt: "Furniture and boxes secured with ratchet straps inside the Move Mate Relocations truck",
        caption:
          "Secured for the road: wrapped furniture and boxes strapped in place for a damage-free delivery.",
      },
    ],
    planningTitle: "How we keep a 4 bedroom house move on schedule in rainy weather",
    planningPoints: [
      "Plan the loading order so large furniture goes in first and boxes fill the gaps.",
      "Wrap furniture in blankets and keep boxes sealed before they leave the house.",
      "Secure every layer with ratchet straps so the load stays stable on wet, narrow roads.",
      "Check access at both ends, including gravel driveways and rural roads, before move day.",
    ],
    checklistTitle: "Rainy-day moving checklist",
    checklistItems: [
      "Seal and label every box by room so unloading is quick.",
      "Keep towels, keys and essentials in a bag you carry yourself.",
      "Clear a dry path from the door to the truck where you can.",
      "Confirm the pick-up time and the expected travel time with your movers.",
    ],
    faq: [
      {
        question: "Do you move houses in the rain?",
        answer:
          "Yes. Rain does not stop us. We use furniture blankets, wrap items before they leave the house and secure the load properly, so your belongings arrive dry and undamaged.",
      },
      {
        question: "How long does a 4 bedroom house move take?",
        answer:
          "It depends on volume, access and distance. On our Mokau to Waikura Valley job, pick-up took about 1 hour and the drive to the destination took about 45 minutes.",
      },
      {
        question: "Do you service rural areas like Mokau and Waikura Valley?",
        answer:
          "Yes. We regularly handle rural and country-road moves and plan access and routes in advance.",
      },
      {
        question: "How do I get a quote for a 4 bedroom house move?",
        answer:
          "Call us, email us or fill in our quote form with your pick-up and drop-off locations and a rough list of items, and we will get back to you with a clear price.",
      },
    ],
  },
  {
    slug: "hamilton-furniture-movers",
    keyword: "Hamilton furniture movers",
    city: "Hamilton",
    image: "/house_relocation.jpeg",
    imageAlt: "Movers carrying furniture during a Hamilton house relocation",
    title: "Hamilton Furniture Movers: Reliable Local and Intercity Relocation",
    description:
      "Discover how Move Mate Relocations supports Hamilton families and businesses with careful furniture moving, packing, and stress-free delivery.",
    intro:
      "Hamilton moves often involve suburban access, shared driveways, and carefully timed handovers. Our Hamilton team plans around these details to reduce delays and protect your larger furniture pieces.",
    planningTitle: "How we plan Hamilton furniture moves",
    planningPoints: [
      "Site check for narrow entries, stair turns, and driveway loading space.",
      "Time-window planning to avoid school and commuter congestion in busy zones.",
      "Protective wrapping approach for timber furniture and soft upholstery.",
    ],
    checklistTitle: "Hamilton move-day checklist",
    checklistItems: [
      "Label fragile cartons by room and unloading priority.",
      "Reserve lift or parking access with your property manager early.",
      "Keep keys, chargers, and medicines in a personal essentials bag.",
    ],
    faq: [
      {
        question:
          "Do you handle heavy furniture in multi-level Hamilton homes?",
        answer:
          "Yes. We use a measured lifting and positioning approach for stairs, landings, and tight corners to move large items safely.",
      },
      {
        question: "Can you combine local and intercity delivery from Hamilton?",
        answer:
          "Yes. We can coordinate same-job local pickups and onward transport for intercity destinations when scheduled in advance.",
      },
    ],
  },
  {
    slug: "tauranga-furniture-movers",
    keyword: "Tauranga furniture movers",
    city: "Tauranga",
    image: "/furniture_removalists.jpeg",
    imageAlt: "Furniture removalists loading a truck in Tauranga",
    title: "Tauranga Furniture Movers: Safe, Affordable, and On-Time Service",
    description:
      "Looking for Tauranga furniture movers? Learn how our team handles home and office relocations with secure transport and flexible scheduling.",
    intro:
      "Tauranga relocations can include coastal humidity, apartment access constraints, and fast-changing traffic conditions. We prepare with route planning and furniture protection tailored to these local conditions.",
    planningTitle: "What makes Tauranga moves different",
    planningPoints: [
      "Moisture-aware wrapping for delicate finishes and fabric items.",
      "Loading sequence built for apartment lifts and restricted access times.",
      "Route planning around port-side and peak-hour congestion points.",
    ],
    checklistTitle: "Tauranga pre-move essentials",
    checklistItems: [
      "Disconnect and secure appliances at least one day before loading.",
      "Pack balcony and outdoor items separately for faster unloading.",
      "Confirm property access codes and lift booking windows.",
    ],
    faq: [
      {
        question: "Do you move office furniture in Tauranga CBD?",
        answer:
          "Yes. We support office relocations and can plan after-hours or staged moves to reduce operational downtime.",
      },
      {
        question: "Can you move single large items in Tauranga?",
        answer:
          "Yes. We provide single-item moving for couches, beds, dining sets, and other oversized furniture.",
      },
    ],
  },
  {
    slug: "huntly-furniture-movers",
    keyword: "Huntly furniture movers",
    city: "Huntly",
    image: "/single_item_movers.jpeg",
    imageAlt: "Movers handling a single large item in Huntly",
    title: "Huntly Furniture Movers: Trusted Moving Support for Every Home",
    description:
      "Need Huntly furniture movers you can rely on? Explore our approach to careful loading, transport, and setup for a smooth moving day.",
    intro:
      "Huntly customers often need practical, budget-conscious moving support with clear communication and predictable timing. Our team focuses on efficient loading and careful transport for both short and long-haul moves.",
    planningTitle: "Our Huntly moving approach",
    planningPoints: [
      "Simple, transparent planning based on inventory and property layout.",
      "Secure tie-down methods for mixed loads and household essentials.",
      "Flexible scheduling for family and work commitments.",
    ],
    checklistTitle: "Huntly move preparation list",
    checklistItems: [
      "Group boxes by room and mark priority unpack items clearly.",
      "Defrost fridges and drain appliances before pickup day.",
      "Take quick photos of cable setups for easy reinstallation later.",
    ],
    faq: [
      {
        question: "Do you offer affordable moving options in Huntly?",
        answer:
          "Yes. We provide right-sized moving solutions so you only pay for the level of support your relocation needs.",
      },
      {
        question: "Can you help with packing and furniture placement?",
        answer:
          "Yes. We can assist with packing support and place major furniture where you need it at delivery.",
      },
    ],
  },
  {
    slug: "auckland-furniture-movers",
    keyword: "Auckland furniture movers",
    city: "Auckland",
    image: "/office_relocation.jpeg",
    imageAlt: "Office relocation team moving equipment in Auckland",
    title: "Auckland Furniture Movers: Professional Solutions for Busy Moves",
    description:
      "Move Mate Relocations helps Auckland customers relocate homes, offices, and single furniture items with efficient logistics and friendly service.",
    intro:
      "Auckland moves require tight coordination around traffic, limited parking, and building access rules. We manage timing, handling, and logistics so your move stays efficient in a high-demand city environment.",
    planningTitle: "Auckland moving logistics we prioritize",
    planningPoints: [
      "Pickup and delivery slots aligned with access and parking restrictions.",
      "Smart load sequencing for multi-stop or split-delivery relocations.",
      "Careful wrapping and handling for premium furniture and electronics.",
    ],
    checklistTitle: "Auckland moving checklist",
    checklistItems: [
      "Request loading-zone access from building management early.",
      "Pack room-by-room and keep high-value items documented.",
      "Prepare a first-night box with essentials for immediate setup.",
    ],
    faq: [
      {
        question: "Do you handle same-day Auckland furniture moves?",
        answer:
          "When scheduling allows, yes. We can organize responsive move windows for urgent local relocations.",
      },
      {
        question: "Can you relocate both residential and commercial furniture?",
        answer:
          "Yes. We regularly support household and office furniture relocation projects across Auckland.",
      },
    ],
  },
];

export const seoBlogBySlug = new Map(seoBlogs.map((item) => [item.slug, item]));

export const SITE_URL = "https://movematerelocations.co.nz";

export const blogPath = (slug: string) => `/blog/${slug}/`;
