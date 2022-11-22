import React, { useEffect } from "react";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";

export const Cart = ({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) => {
  const removeProduct = (id) => {
    const newList = currentSale.filter((product) => id != product.id);

    newList.length > 0 ? setCurrentSale(newList) : setCurrentSale(null);
  };

  if (currentSale) {
    useEffect(() => {
      const value = currentSale.reduce((pre, cur) => pre + cur.price, 0);
      setCartTotal(value);
    }, [currentSale]);
  }

  return (
    <div>
      <div>
        <h3>Carrinho de compras</h3>
      </div>
      {currentSale ? (
        <>
          <ul>
            {currentSale.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                removeProduct={removeProduct}
              />
            ))}
          </ul>
          <CartTotal
            currentSale={currentSale}
            cartTotal={cartTotal}
            setCurrentSale={setCurrentSale}
          />
        </>
      ) : (
        <div>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      )}
    </div>
  );
};
