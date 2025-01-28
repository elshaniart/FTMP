import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error?.message);
      setPassword("");
      return;
    }

    if (data) {
      navigate("/dashboard");
      return;
    }
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-8 bg-gray-100 text-black rounded-lg w-96">
        <h2 className="text-center font-bold text-3xl">Login</h2>
        <br />
        {message && <span>{message}</span>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <p className="text-lg font-semibold">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            type="email"
            placeholder="Email"
            className="input"
          />
          <p className="text-lg font-semibold">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            type="password"
            placeholder="Password"
            className="input"
          />
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
        <div className="flex gap-2 mt-2">
          <span>Don't have an account?</span>
          <Link to={"/register"} className="text-blue-400 font-semibold">
            Register.
          </Link>
        </div>
        <button onClick={signInWithGoogle} className="btn-alt w-full mt-4">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
