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
    <div>
      <h2>Login</h2>
      <br />
      {message && <span>{message}</span>}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          type="password"
          placeholder="Password"
        />
        <button type="submit">Log In</button>
      </form>
      <span>Don't have an account?</span>
      <Link to={"/register"}>Register.</Link>
    </div>
  );
};

export default Login;
