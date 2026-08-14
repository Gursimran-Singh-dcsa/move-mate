import ServicesComponent from "./serviceComponent";

export const Services = () => {
  return (
    <div
      id="services"
      className="max-w-8xl mx-auto flex flex-col items-center justify-center gap-6 py-8 bg-midnight-blue text-white"
    >
      <div className="text-3xl font-bold underline">What We Move</div>
      <div className="max-w-3xl text-center">
        Our Packers and Movers division provides reliable, efficient, and
        hassle-free relocation solutions. We handle every move with care and
        professionalism, ensuring your belongings reach their destination safely
        and on time.
      </div>
      {/* <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[100%] p-6 gap-6"> */}
      <div
        className="
    flex
    flex-nowrap
    items-stretch
    overflow-x-auto
    scrollbar-hide
    gap-6
    p-6
    w-full
    md:grid
    md:grid-cols-3
  "
      >
        {[
          {
            imagePath: "/house_relocation.jpeg",
            imageAlt: "House Relocation",
            title: "House Relocation",
            hashtags: ["#house", "#relocation", "#moving"],
            description:
              "We provide comprehensive house relocation services, ensuring a smooth and stress-free move for your family.",
          },
          {
            imagePath: "/office_relocation.jpeg",
            imageAlt: "Office Relocation",
            title: "Office Relocation",
            hashtags: ["#office", "#relocation", "#moving"],
            description:
              "We provide comprehensive office relocation services, ensuring a smooth and stress-free move for your business.",
          },
          {
            imagePath: "/warehouse_relocation.jpeg",
            imageAlt: "Warehouse Relocation",
            title: "Warehouse Relocation",
            hashtags: ["#warehouse", "#relocation", "#moving"],
            description:
              "We provide comprehensive warehouse relocation services, ensuring a smooth and stress-free move for your business.",
          },
          {
            imagePath: "/intercity_relocation.jpeg",
            imageAlt: "Intercity Relocation",
            title: "Intercity Relocation",
            hashtags: ["#intercity", "#relocation", "#moving"],
            description:
              "We provide comprehensive intercity relocation services, ensuring a smooth and stress-free move for your family.",
          },
          {
            imagePath: "/single_item_movers.jpeg",
            imageAlt: "Single Item Movers",
            title: "Single Item Movers",
            hashtags: ["#single", "#item", "#moving", "#movers"],
            description:
              "We provide reliable single item moving services, ensuring your valuable items are transported safely and efficiently.",
          },
          {
            imagePath: "/furniture_removalists.jpeg",
            imageAlt: "Furniture Removalists",
            title: "Furniture Removalists",
            hashtags: ["#furniture", "#removalists", "#moving"],
            description:
              "We provide professional furniture removalist services, ensuring your furniture is moved safely and efficiently.",
          },
        ].map((image, index) => (
          <ServicesComponent key={index} {...image} />
        ))}
      </div>
    </div>
  );
};
