import { useContext } from "react";
import { UserContext } from "../UserContext";

const User = () => {
  const { user, login } = useContext(UserContext);

  if (!user) {
    return <button onClick={login}>Connexion</button>;
  }

  return <div>Utilisateur: {user?.name}</div>;
};

export default User;
