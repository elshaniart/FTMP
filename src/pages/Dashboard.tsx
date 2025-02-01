import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import useUser from "@/hooks/useUser";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    navigate("/login");
  };

  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Sidebar userEmail={user?.email} signOut={signOut} />
      <div className="ml-64 h-screen w-full"></div>
    </div>
  );
};

export default Dashboard;
