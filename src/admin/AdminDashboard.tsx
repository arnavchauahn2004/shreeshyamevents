import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

export default function AdminDashboard(){

const navigate = useNavigate();

useEffect(()=>{

const checkSession = async () => {

const { data } = await supabase.auth.getSession();

if(!data.session){
navigate("/admin");
}

};

checkSession();

},[navigate]);

const logout = async () =>{

await supabase.auth.signOut();

navigate("/admin");

};

return(

<div className="max-w-5xl mx-auto py-20">

<h1 className="text-3xl font-bold mb-10">
Admin Dashboard
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<Link to="/admin/gallery" className="p-6 bg-white shadow rounded hover:shadow-xl">
Manage Gallery
</Link>

<a
href="/admin/reviews"
className="p-6 bg-white shadow rounded hover:shadow-xl transition"
>
Manage Reviews
</a>

<a
href="/admin/subscribers"
className="p-6 bg-white shadow rounded hover:shadow-xl transition"
>
Subscribers
</a>

</div>

<button
onClick={logout}
className="mt-10 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
>
Logout
</button>

</div>

);

}