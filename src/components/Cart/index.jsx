import React, { useEffect } from "react";
import { StyledCart } from "../../styles/cart";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";

export const Cart = ({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
  notification,
}) => {
  const removeProduct = (id) => {
    const newList = currentSale.filter((product) => id != product.id);

    newList.length > 0
      ? setCurrentSale(newList) || notification("remove")
      : setCurrentSale([]) || notification("remove");
  };

  useEffect(() => {
    const value = currentSale.reduce((pre, cur) => pre + cur.price, 0);
    setCartTotal(value);
  }, [currentSale]);

  return (
    <StyledCart>
      <div className="cart-title">
        <h3>Carrinho de compras</h3>
      </div>
      {currentSale.length > 0 ? (
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
        <div className="cart-no-item">
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      )}
    </StyledCart>
  );
};
