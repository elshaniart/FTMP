import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    navigate("/login");
  };

  return (
    <div>
      <h1>Logged in</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Dashboard;
