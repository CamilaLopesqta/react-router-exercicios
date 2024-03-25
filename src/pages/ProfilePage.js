import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProfilePage() {
  const params = useParams();

  return (
    <section>
      <Header />
      <h1>Página de perfil de {params.name}.</h1>
      <h2>Esse é o id {params.id} de {params.name}.</h2>
    </section>
  );
}

export default ProfilePage;
