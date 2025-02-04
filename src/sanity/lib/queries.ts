

//import {client} from "@/sanity/lib/client"
import { groq } from "next-sanity";
export const chefs =groq`*[_type == "chef"]`;
export const all =groq`*[_type == "chef"][0..7]`;


// const query = await client.fetch(
//     `*[_type == "food" && "chef" in tags]{
//         _id,
//       name,
//       price,
//       discountPercentage,
//       tags,
//       "imageUrl": image.asset->url
//     }`
// );