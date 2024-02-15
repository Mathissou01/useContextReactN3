import { useState } from "react";
import "./App.css";
import { CheeseContext } from "./CheeseContext";
import { UserContextProvider } from "./UserContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemScreen from "./components/ItemScreen";

const cheeses = [
  {
    name: "BLEU",
    photo:
      "https://t4.ftcdn.net/jpg/00/71/66/69/360_F_71666993_tv6fg6VaVkbffuRA7KphW2S1eC9cm0XV.jpg",
    isAdmin: false,
  },
  {
    name: "CAMEMBERT",
    photo:
      "https://parolesdefromagers.com/wp-content/uploads/2023/08/pate-persillee.png",
    isAdmin: true,
  },
  {
    name: "GOUDA",
    photo:
      "https://t4.ftcdn.net/jpg/00/71/66/69/360_F_71666993_tv6fg6VaVkbffuRA7KphW2S1eC9cm0XV.jpg",
    isAdmin: true,
  },
  {
    name: "CANTAL",
    photo:
      "https://parolesdefromagers.com/wp-content/uploads/2023/08/pate-persillee.png",
  },
];

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const value = { cheeses, isSelected };

  return (
    <CheeseContext.Provider value={value}>
      <UserContextProvider>
        <div className="body">
          <Header />
          <ItemScreen />
        </div>
      </UserContextProvider>
      <Footer onClick={() => setIsSelected(true)} />
    </CheeseContext.Provider>
  );
}

export default App;
