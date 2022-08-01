import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)
  
  const handleClick = function(inCart) {

    setInCart(!inCart)

  }

  const cartClass = inCart ? "in-cart" : "";
  const bttnText = inCart ? "Remove from Cart" : "Add to Cart";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => handleClick(inCart)} className="add">{bttnText}</button>
    </li>
  );
}

export default Item;
