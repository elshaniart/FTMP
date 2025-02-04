import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import useUser from "@/hooks/useUser";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    navigate("/login");
  };

  useEffect(() => {
    const servr = async () => {
      await axios
        .get(import.meta.env.VITE_DEFAULT_URL)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };

    servr();
  }, []);

  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Sidebar userEmail={user?.email} signOut={signOut} />
      <div className="ml-64 h-screen w-full"></div>
    </div>
  );
};

export default Dashboard;
