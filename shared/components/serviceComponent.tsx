import Image from "next/image";

const ServiceComponent = ({
  imagePath,
  imageAlt,
  title,
  description,
  hashtags = [],
}: {
  imagePath: string;
  title: string;
  description: string;
  imageAlt: string;
  hashtags?: string[];
}) => {
  return (
    <div className="mx-auto cursor-pointer rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300 h-full">
      <div className="w-full rounded overflow-hidden shadow-lg h-full flex flex-col">
        <Image
          src={imagePath}
          alt={imageAlt}
          width={400}
          height={200}
          className="w-full object-cover rounded-t-lg"
          loading="lazy"
        />
        <div className="px-6 py-4 bg-gray-100 flex-1">
          <div className="font-bold text-xl mb-2 text-primary text-center">
            {title}
          </div>
          <p className="text-gray-700 text-base text-center">{description}</p>
        </div>
        {hashtags.length ? (
          <div className="px-6 pt-4 pb-2 bg-gray-100">
            {hashtags.map((hashtag) => (
              <span
                key={hashtag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {hashtag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceComponent;
