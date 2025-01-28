import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import useUser from "@/hooks/useUser";

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    navigate("/login");
  };

  return (
    <div className="">
      <h1>Logged in as {user?.email}</h1>
      <button onClick={signOut} className="btn">
        Sign out
      </button>
    </div>
  );
};

export default Dashboard;
