import useUser from "@/hooks/useUser";
import { supabase } from "@/utils/supabaseClient";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useUser();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  };

  return (
    <div className="">
      <div className="flex gap-2 justify-end p-2">
        {user ? (
          <div className="flex items-center gap-4">
            <p>Logged in as: {user?.email}</p>
            <button onClick={signOut} className="btn-alt">
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <Link to={"/register"} className="btn">
              Register
            </Link>
            <Link to={"/login"} className="btn-alt">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
