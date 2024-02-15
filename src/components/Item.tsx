import { useContext } from "react";
import { UserContext } from "../UserContext";
import { CheeseContext } from "../CheeseContext";

type Cheese = {
  name: string;
  photo: string;
  isAdmin?: boolean;
};

const Item = ({ cheese }: { cheese: Cheese }) => {
  const { isSelected } = useContext(CheeseContext);
  const { user } = useContext(UserContext);

  if (cheese.isAdmin === true && user?.isAdmin !== true) {
    return (
      <div
        style={{
          border: "2px solid purple",
            borderRadius: "50px",
          minHeight: "7rem",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
            flexDirection: "row",
          justifyContent: "center",
        }}
      >
        Tu n'as pas accès ici
      </div>
    );
  }

  return (
    <div
      style={{
        border: isSelected ? "1px solid yellow" : "1px solid white",
        minHeight: "8rem",
        marginBottom: "2rem",
      }}
    >
      <img
        src={cheese.photo}
        alt={cheese.name}
        style={{ height: "8rem", width: "auto" }}
      />
      <h2>{cheese.name}</h2>
    </div>
  );
};

export default Item;
