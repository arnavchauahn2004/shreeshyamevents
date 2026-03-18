import { useState,useEffect } from "react";
import { supabase } from "../lib/supabase";

type GalleryRow = {
id: string;
title: string;
category: string;
type: "photo" | "video";
url: string;
created_at?: string | null;
};

export default function AdminGallery(){

const [file,setFile] = useState<File | null>(null);
const [title,setTitle] = useState("");
const [category,setCategory] = useState("");
const [type,setType] = useState<"photo"|"video">("photo");
const [tab,setTab] = useState<"photos"|"videos"|"upload">("photos");

const [gallery,setGallery] = useState<GalleryRow[]>([]);
const photos = gallery.filter(item => item.type === "photo");
const videos = gallery.filter(item => item.type === "video");

useEffect(()=>{
fetchGallery();
},[]);

const fetchGallery = async () => {

const {data} = await supabase
.from("gallery")
.select("*")
.order("created_at",{ascending:false});

setGallery(data || []);

};

const upload = async () => {

if(!file) return;

const fileName = `${Date.now()}-${file.name}`;

await supabase.storage
.from("gallery")
.upload(fileName,file);

const {data} = supabase.storage
.from("gallery")
.getPublicUrl(fileName);

await supabase.from("gallery").insert([
{
title,
category,
type,
url:data.publicUrl
}
]);

alert("Uploaded");
fetchGallery();

};

const deleteMedia = async(id:string,url:string)=>{

const fileName = url.split("/").pop();

if(!fileName) return;

await supabase.storage
.from("gallery")
.remove([fileName]);

await supabase
.from("gallery")
.delete()
.eq("id",id);

fetchGallery();

};

return(

<div className="max-w-6xl mx-auto py-20">

<h1 className="text-3xl font-bold mb-10">
Gallery Manager
</h1>
<div className="flex gap-4 mb-8">

<button
onClick={()=>setTab("photos")}
className={`px-5 py-2 rounded ${tab==="photos"?"bg-amber-600 text-white":"bg-gray-200"}`}
>
Photos
</button>

<button
onClick={()=>setTab("videos")}
className={`px-5 py-2 rounded ${tab==="videos"?"bg-amber-600 text-white":"bg-gray-200"}`}
>
Videos
</button>

<button
onClick={()=>setTab("upload")}
className={`px-5 py-2 rounded ${tab==="upload"?"bg-amber-600 text-white":"bg-gray-200"}`}
>
Upload
</button>

</div>
<h2 className="text-2xl font-semibold mb-4">Upload</h2>

{tab==="upload" && (

<div className="mb-10 space-y-3">

<input
type="text"
placeholder="Title"
className="border p-2 w-full"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
type="text"
placeholder="Category"
className="border p-2 w-full"
onChange={(e)=>setCategory(e.target.value)}
/>

<select
className="border p-2 w-full"
onChange={(e)=>setType(e.target.value === "video" ? "video" : "photo")}
>
<option value="photo">Photo</option>
<option value="video">Video</option>
</select>

<input
type="file"
onChange={(e)=>setFile(e.target.files?.[0] || null)}
/>

<button
onClick={upload}
className="bg-amber-600 text-white px-6 py-2 rounded"
>
Upload
</button>


</div>
)}
{tab==="photos" && (

<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4">

{photos.map((item)=>(

<div key={item.id} className="border rounded overflow-hidden">

<img
src={item.url}
className="h-28 sm:h-32 md:h-36 w-full object-cover"
/>

<button
onClick={()=>deleteMedia(item.id,item.url)}
className="text-red-500 text-sm w-full py-1"
>
Delete
</button>

</div>

))}

</div>

)}
{tab==="videos" && (

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">

{videos.map((item)=>(

<div key={item.id} className="border rounded overflow-hidden">

<video
src={item.url}
className="h-32 w-full object-cover"
controls
/>

<button
onClick={()=>deleteMedia(item.id,item.url)}
className="text-red-500 text-sm w-full py-1"
>
Delete
</button>

</div>

))}

</div>

)}

</div>

);

}