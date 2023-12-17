import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import RightPanel from "./rightPanel";
import LeftPanel from "./leftPanel";

const Shop = (props) => {
  const { items } = props;
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [coupon, setCoupon] = useState(0);

  const addItem = (item) => {
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      var newItems = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.quantity++;
          cartItem.totalPrice = cartItem.price * cartItem.quantity;
        }
        return cartItem;
      });
      setCart(newItems);
      calcSubTotal(newItems, coupon);
    } else {
      item.quantity = 1;
      item.totalPrice = item.price * item.quantity;
      const newItems = [...cart, item];
      setCart(newItems);
      calcSubTotal(newItems, coupon);
    }
  };

  const removeItem = (item) => {
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      var filteredItems = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.quantity--;
          cartItem.totalPrice = cartItem.price * cartItem.quantity;
          return cartItem;
        } else {
          return cartItem;
        }
      });
      var cartFiltered = filteredItems.filter(
        (cartItem) => cartItem.quantity !== 0
      );
      setCart(cartFiltered);
      calcSubTotal(cartFiltered, coupon);
    }
  };

  const calcSubTotal = (newCart, tempCoupon) => {
    if (newCart !== undefined && newCart !== null && newCart !== []) {
      var subTotal = 0;
      newCart.map((item) => {
        subTotal += item.totalPrice;
      });
      if (tempCoupon === 15) {
        subTotal = subTotal - subTotal * 0.15;
      } else if (tempCoupon === 25) {
        subTotal = subTotal - subTotal * 0.25;
      }
      setSubTotal(subTotal);
    }
  };

  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
    calcSubTotal(cart, event.target.value);
  };

  return (
    <div>
      <Grid className="GridRoot">
        <LeftPanel items={items} addItem={addItem} removeItem={removeItem} />
        <Divider orientation="vertical" />
        <RightPanel
          cart={cart}
          coupon={coupon}
          handleCouponChange={handleCouponChange}
          subTotal={subTotal}
        />
      </Grid>
    </div>
  );
};

export default Shop;

/* import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import RightPanel from "./rightPanel";
import LeftPanel from "./leftPanel";

const Shop = (props) => {
  const { items } = props;
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [coupon, setCoupon] = useState(0);

  const addItem = (item) => {
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      var newItems = cart.map((i) =>
        i.name == item.name
          ? {
              ...i,
              quantity: i.quantity + 1,
              totalPrice: i.totalPrice + item.price,
            }
          : i
      );
      setCart(newItems);
      calcSubTotal(newItems, coupon);
    } else {
      const newItem = {
        name: item.name,
        quantity: 1,
        totalPrice: item.price,
      };
      const newItems = [...cart, newItem];
      setCart(newItems);
      calcSubTotal(newItems, coupon);
    }
  };

  const removeItem = (item) => {
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      var newItems = cart.map((i) =>
        i.name == item.name
          ? {
              ...i,
              quantity: i.quantity - 1,
              totalPrice: i.totalPrice - item.price,
            }
          : i
      );
      var Items = newItems.filter((item) => item.quantity !== 0);
      setCart(Items);
      calcSubTotal(Items, coupon);
    }
  };

  const calcSubTotal = (newCart, tempCoupon) => {
    if (newCart !== undefined && newCart !== null && newCart !== []) {
      if (tempCoupon === 0) {
        var subtotal = 0;
        newCart.map((i) => (subtotal += i.totalPrice));
        setSubTotal(subtotal);
      }
      if (tempCoupon === 15) {
        var subtotal = 0;
        newCart.map((i) => (subtotal += i.totalPrice));
        subtotal = subtotal - subtotal * 0.15;
        setSubTotal(subtotal);
      }
      if (tempCoupon === 25) {
        var subtotal = 0;
        newCart.map((i) => (subtotal = i.totalPrice + subtotal));
        subtotal = subtotal - subtotal * 0.25;
        setSubTotal(subtotal);
      }
    }
  };

  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
    calcSubTotal(cart, event.target.value);
  };

  return (
    <div>
      <Grid className="GridRoot">
        <LeftPanel items={items} addItem={addItem} removeItem={removeItem} />
        <Divider orientation="vertical" />
        <RightPanel
          cart={cart}
          coupon={coupon}
          handleCouponChange={handleCouponChange}
          subTotal={subTotal}
        />
      </Grid>
    </div>
  );
};

export default Shop; */
