import { useEffect,useState } from "react";
import { supabase } from "../lib/supabase";

type Review = {
  id: string;
  name: string;
  review: string;
  rating: number;
  is_approved: boolean;
  created_at: string;
};

export default function AdminReviews(){

const [reviews,setReviews] = useState<Review[]>([]);

useEffect(()=>{
fetchReviews();
},[]);

const fetchReviews = async () =>{

const {data} = await supabase
.from("reviews")
.select("*")
.order("created_at",{ascending:false});

setReviews((data ?? []) as Review[]);

};

const approve = async(id:string)=>{

await supabase
.from("reviews")
.update({is_approved:true})
.eq("id",id);

fetchReviews();

};
const disapprove = async (id: string) => {
    const { error } = await supabase
      .from("reviews")
      .update({ is_approved: false })
      .eq("id", id);
  
    if (error) {
      console.error(error);
      alert("Disapprove failed");
      return;
    }
  
    fetchReviews();
  };

const remove = async(id:string)=>{

await supabase
.from("reviews")
.delete()
.eq("id",id);

fetchReviews();

};

return(

<div className="max-w-5xl mx-auto py-20">

<h1 className="text-3xl font-bold mb-10">
Manage Reviews
</h1>

{reviews.map((r)=>(
<div key={r.id} className="border p-4 mb-4">

<h3 className="font-bold">{r.name}</h3>

<p>{r.review}</p>

<p className="text-sm text-gray-500">
Rating: {r.rating}
</p>

<div className="flex gap-2 mt-3">

{!r.is_approved && (
<button
onClick={() => approve(r.id)}
className="bg-green-500 text-white px-3 py-1 rounded"
>
Approve
</button>
)}

{r.is_approved && (
<button
onClick={() => disapprove(r.id)}
className="bg-yellow-500 text-white px-3 py-1 rounded"
>
Disapprove
</button>
)}

<button
onClick={() => remove(r.id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Delete
</button>

</div>

</div>
))}

</div>

);

}