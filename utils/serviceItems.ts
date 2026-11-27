const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const items = [
  {
    imagePath: `${bp}/house_relocation.jpeg`,
    imageAlt: "House Relocation",
    title: "House Relocation",
    slug: "house-relocation",
    hashtags: ["#house", "#relocation", "#moving"],
    description:
      "Moving to a new home? Our team carefully handles your household belongings from packing and loading through to safe delivery.",
  },
  {
    imagePath: `${bp}/office_relocation.jpeg`,
    imageAlt: "Office Relocation",
    title: "Office Relocation",
    slug: "office-relocation",
    hashtags: ["#office", "#relocation", "#moving"],
    description:
      "Keep your business move organised with our office relocation service, covering desks, equipment, furniture and other workplace essentials.",
  },
  {
    imagePath: `${bp}/warehouse_relocation.jpeg`,
    imageAlt: "Warehouse Relocation",
    title: "Warehouse Relocation",
    slug: "warehouse-relocation",
    hashtags: ["#warehouse", "#relocation", "#moving"],
    description:
      "Relocating a warehouse requires careful planning. We transport stock, equipment and other warehouse contents safely and efficiently.",
  },
  {
    imagePath: `${bp}/intercity_relocation.jpeg`,
    imageAlt: "Intercity Relocation",
    title: "Intercity Relocation",
    slug: "intercity-relocation",
    hashtags: ["#intercity", "#relocation", "#moving"],
    description:
      "Planning a move between cities? We coordinate long-distance transportation to get your belongings to their new destination safely and on time.",
  },
  {
    imagePath: `${bp}/single_item_movers.jpeg`,
    imageAlt: "Single Item Movers",
    title: "Single Item Movers",
    slug: "single-item-movers",
    hashtags: ["#single", "#item", "#moving", "#movers"],
    description:
      "Only need one item moved? We handle large, heavy or valuable pieces with careful loading, secure transportation and reliable delivery.",
  },
  {
    imagePath: `${bp}/furniture_removalists.jpeg`,
    imageAlt: "Furniture Removalists",
    title: "Furniture Removalists",
    slug: "furniture-removalists",
    hashtags: ["#furniture", "#removalists", "#moving"],
    description:
      "From bulky furniture to individual pieces, our removalists provide careful handling and dependable transportation to your chosen destination.",
  },
];
