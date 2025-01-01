import { client } from "@/sanity/lib/client";
import { Image } from "next-sanity/image";
import Link from "next/link";

export interface Blog {
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
}

const Products = async () => {
  const data: Blog[] = await client.fetch(`
    *[_type == "blog"]{
      heading,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }
  `);

  return (
    <div className="bg-green-600 p-8 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-4 flex flex-col items-center rounded-2xl hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer"
          >
            <Image
              src={item.imageUrl || "/default-image.jpg"}
              alt={item.heading || "Default Image"}
              width={100}
              height={100}
              className="w-32 h-32 object-cover mb-4 rounded-2xl"
            />
            <h1 className="text-lg font-bold mb-2">{item.heading}</h1>
            {/* <p className="text-center mb-4">{item.description}</p> */}
            <Link href={`/blogs/${item.slug}`}>
            <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Read More
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
