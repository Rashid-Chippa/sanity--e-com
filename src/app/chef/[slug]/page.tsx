import { client } from "@/sanity/lib/client";
import { Chef } from "../../../../types/chefs";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ChefsPageProps {
    params :Promise < {slug : string}>

}
async function getChef(slug :string ): Promise<Chef   > {
    return client.fetch(
        groq`*[_type == "chef" && slug.current ==$slug][0] {
            _id,
            name,
            image,
            experience,
            description,
            _type
        }`,{slug}
    )
}

export default async function ChefPage({params} : ChefsPageProps) {
    const {slug}  = await params;
    const chef = await getChef(slug);
    return (
        <div className="max-w-7xl mx-auto px4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                { chef.image && (
                <Image 
                src={urlFor(chef.image).url()} 
                alt={chef.name} 
                width={500}
                height={500}
                className="rounded-lg shadow-md"/>
                )}    
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-3xl font-bold">{chef.name}</h1>
                    <p className="text-gray-500">{chef.experience} years of experience</p>
                    <p className="text-gray-500">{chef.description}</p>
                </div>
            </div>
            </div>
    )
}