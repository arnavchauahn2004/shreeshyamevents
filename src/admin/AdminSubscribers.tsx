import { useEffect,useState } from "react";
import { supabase } from "../lib/supabase";

type Subscriber = {
  id: string;
  email: string;
  created_at: string;
};

export default function AdminSubscribers(){

const [subs,setSubs] = useState<Subscriber[]>([]);

useEffect(()=>{
fetchSubs();
},[]);

const fetchSubs = async () =>{

const {data} = await supabase
.from("subscribers")
.select("*")
.order("created_at",{ascending:false});

setSubs((data ?? []) as Subscriber[]);

};

const remove = async(id:string)=>{

await supabase
.from("subscribers")
.delete()
.eq("id",id);

fetchSubs();

};

return(

<div className="max-w-4xl mx-auto py-20">

<h1 className="text-3xl font-bold mb-10">
Subscribers
</h1>

{subs.map((s)=>(
<div
key={s.id}
className="flex justify-between border p-3 mb-3"
>

<p>{s.email}</p>

<button
onClick={()=>remove(s.id)}
className="text-red-500"
>
Delete
</button>

</div>
))}

</div>

);

}