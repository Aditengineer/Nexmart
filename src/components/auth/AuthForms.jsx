import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { useAuth } from "../../hooks/useCart";
import "./AuthForms.css";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>Welcome Back</h2>
      <p className="auth-subtitle">Sign in to your account</p>

      {error && <div className="auth-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="auth-divider">or</div>

      <Button
        type="button"
        variant="outline"
        size="lg"
        fullWidth
        onClick={handleGoogleLogin}
        disabled={loading}
      >
        🔵 Sign in with Google
      </Button>

      <p className="auth-footer">
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
    </div>
  );
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, loginWithGoogle, loading } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await register(email, password, name);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    setError("");
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>Create Account</h2>
      <p className="auth-subtitle">Join Nexmart today</p>

      {error && <div className="auth-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <div className="auth-divider">or</div>

      <Button
        type="button"
        variant="outline"
        size="lg"
        fullWidth
        onClick={handleGoogleSignup}
        disabled={loading}
      >
        🔵 Sign up with Google
      </Button>

      <p className="auth-footer">
        Already have an account? <Link to="/login">Sign in here</Link>
      </p>
    </div>
  );
};
