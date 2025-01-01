import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { Blog } from '@/app/components/Products'
import CommentSection from '@/app/components/Comment'

interface Params {
    params: {slug: string}
}

const BlogPost = async (params:Params) => {

    const {slug} = params.params
  
  const data:Blog = await client.fetch(`
     *[_type == "blog" && slug.current == $slug ]{
      heading,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url
    
      }`,{slug})

    return (
   <main>
    {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-16 flex flex-col items-center rounded-2xl hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer "
          >
            <Image
              src={item.imageUrl || "/default-image.jpg"}
              alt={item.heading || "Default Image"}
              width={100}
              height={100}
              className="w-32 h-32 object-cover mb-4 rounded-2xl"
            />
            <h1 className="text-lg font-bold mb-2">{item.heading}</h1>
            <p className="text-center mb-4">{item.description}</p>
            <CommentSection />
            
          </div>
        ))}
   </main>
  )
}

export default BlogPost