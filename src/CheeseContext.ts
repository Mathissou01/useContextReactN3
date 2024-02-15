import { createContext } from "react";

type Cheese = {
  name: string;
  photo: string;
  isAdmin?: boolean;
};

type CheeseContextType = {
  cheeses: Cheese[];
  isSelected: boolean;
};

export const CheeseContext = createContext<CheeseContextType>({
  cheeses: [],
  isSelected: false,
});
