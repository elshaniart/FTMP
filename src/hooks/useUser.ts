// hooks/useUser.js
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { User } from "@supabase/supabase-js";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching user session:", error);
      }

      setUser(session?.user || null);
      setLoading(false); // Mark loading as complete
    };

    fetchUser();

    // Subscribe to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      setLoading(false); // Ensure loading state updates on auth change
    });

    // Cleanup the subscription on component unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, loading }; // Return both user and loading state
};

export default useUser;
