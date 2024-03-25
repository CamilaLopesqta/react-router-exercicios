import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToProfilePage } from "../Routes/coordinator";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => goToHome(navigate)}>
        Ir para a Página Inicial
      </button>
      <button onClick={() => goToProfilePage(navigate, "Camila", "2407")}>
        Ir para a Página de Perfil
      </button>
    </div>
  );
};

export default Header;
