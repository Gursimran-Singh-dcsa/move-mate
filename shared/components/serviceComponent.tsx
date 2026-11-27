import Image from "next/image";
import Link from "next/link";

const ServiceComponent = ({
  imagePath,
  imageAlt,
  title,
  description,
  slug,
}: {
  imagePath: string;
  title: string;
  description: string;
  imageAlt: string;
  slug?: string;
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
        {slug ? (
          <div className="px-6 pb-4 bg-gray-100 text-center">
            <Link
              href={`/services/${slug}/`}
              className="text-sm font-bold text-primary hover:underline"
            >
              Learn more about {title} →
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceComponent;
