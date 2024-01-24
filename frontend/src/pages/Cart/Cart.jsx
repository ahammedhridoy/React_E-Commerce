/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const [CART, setCART] = useState([]);

  const handleIncrease = (productId) => {
    const updatedCart = CART.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCART(updatedCart);
  };

  const handleDecrease = (productId) => {
    const updatedCart = CART.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCART(updatedCart);
  };

  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <div className="flex min-h-[60vh] px-5 my-5 cart">
      <div className="container">
        <div className=" cart-wrap">
          <div className="overflow-x-auto">
            <h1 className="mb-4 text-3xl card-title">Details</h1>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {CART.map((product) => (
                  <tr key={product.id}>
                    <th>
                      <img src={product.image} width={50} height={50} alt="" />
                    </th>
                    <td>{product.name}</td>
                    <td>${product.new_price}</td>
                    <td>
                      <span
                        className="mr-2 cursor-pointer"
                        onClick={() => handleDecrease(product.id)}
                      >
                        -
                      </span>
                      {product.quantity}{" "}
                      <span
                        className="ml-2 cursor-pointer"
                        onClick={() => handleIncrease(product.id)}
                      >
                        +
                      </span>
                    </td>
                    <td>${product.new_price * product.quantity}</td>
                    <td
                      onClick={() => removeFromCart(product.id)}
                      className="cursor-pointer"
                    >
                      X
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Promo code */}
        <div className="mb-4 code-wrap">
          <p>If you have any promo code, enter here</p>
          <div className="flex gap-3 mt-3 code-input">
            <div className="">
              <input
                type="text"
                placeholder="Code"
                className="w-full max-w-xs input input-bordered"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="mt-5 cart-totals">
          <h1 className="mb-4 text-3xl card-title">Cart Details</h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  {/* <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>
                    $
                    {CART.map(
                      (product) => product.new_price * product.quantity
                    ).reduce((total, current) => total + current, 0)}
                  </td>
                </tr>

                <tr>
                  <td>Shipping</td>
                  <td>Free</td>
                </tr>

                <tr>
                  <td className="font-bold">Total</td>
                  <td className="font-bold">
                    $
                    {CART.map(
                      (product) => product.new_price * product.quantity
                    ).reduce((total, current) => total + current, 0)}
                  </td>
                </tr>
              </tbody>
            </table>

            <Link to={"/checkout"}>
              <button type="submit" className="btn btn-primary">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
