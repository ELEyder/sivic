import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"; // Ajusta la ruta según tu estructura
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await login(email, password);
      navigate("/admin");
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };

  return (
    <section className={styles.home}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>BIENVENIDO</h1>
        
        <input
          type="email"
          placeholder="Correo"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Contraseña"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        
        {error && <p className={styles.error}>{error}</p>}
        
        <button 
          type="submit" 
          className={styles.button}
          disabled={loading}
        >
          {loading ? "CARGANDO..." : "INGRESAR"}
        </button>

      </form>
    </section>
  );
};

export default Login;