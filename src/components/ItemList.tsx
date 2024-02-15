import React, { useContext } from "react";
import Item from "./Item";
import { CheeseContext } from "../CheeseContext";
import "./ItemList.css";

const ItemList = () => {
    const { cheeses } = useContext(CheeseContext);

    return (
        <div className="item-list-container">
            <h1 className="item-list-heading">Fromages</h1>
            <div className="item-list">
                {cheeses.map((cheese) => (
                    <Item cheese={cheese} key={cheese.name} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
