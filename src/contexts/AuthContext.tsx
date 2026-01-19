import { createContext, type ReactNode,  useState } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Services";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo
      ? JSON.parse(usuarioSalvo)
      : {
          id: 0,
          nome: "",
          usuario: "",
          senha: "",
          foto: "",
          token: ""
        };
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login("/usuarios/logar", usuarioLogin, (dados: UsuarioLogin) => {
        setUsuario(dados);
        localStorage.setItem("usuario", JSON.stringify(dados));
      });
    } catch (error) {
      alert("Os dados do usuário estão inconsistentes!");
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
    });
    localStorage.removeItem("usuario");
  }

  return (
    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
