import React from "react";
import { Divider } from "semantic-ui-react";
import Layout from "@components/Layout/Layout";
import CartItemList from "@components/CartItemList";
import CartSummary from "@components/CartSummary";
import { useCart, useCartMutations } from "@store/Cart";

const CartPage = () => {
  const { items, subTotal } = useCart();
  const { removeFromCart } = useCartMutations();

  return (
    <Layout>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <Divider />
      <CartSummary totalAmount={subTotal} />
    </Layout>
  );
};

export default CartPage;
