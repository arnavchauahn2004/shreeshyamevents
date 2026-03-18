import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function AdminLogin() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    setLoading(false);

    if(error){
      alert(error.message);
      return;
    }

    navigate("/admin/dashboard");

  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white shadow-xl rounded-lg p-8 w-[350px]">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Admin email"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>

    </div>

  );
}