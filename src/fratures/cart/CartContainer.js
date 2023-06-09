import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import * as cartApi from "../../apis/cart-apis";
import CartList from "./CartList";

export default function CartContainer() {
  const [cart, setCart] = useState([]);
  const { userId } = useParams();
  // const location = useLocation();
  // console.log(location);
  // const userId = location.pathname.split("/")[2];
  // console.log(userId);
  const navigate = useNavigate();
  const {
    authenticatedUser: { id }
  } = useAuth();

  const handlePayment = async (id) => {
    // console.log(cart);
    const sum = cart.reduce(
      (acc, item) => acc + +(item.Product.price * item.count_amount),
      0
    );
    await cartApi.createOrder({ sum });
    navigate(`/order/${id}`);
    // navigate to Payment Page [use OrderDB]
  };

  useEffect(() => {
    console.log(+id, +userId);
    if (+id !== +userId) {
      navigate("/notfound");
    }
    const fetchCart = async () => {
      const cartFromData = await cartApi.getCart(id);
      // console.log(cartFromData.data);
      setCart(cartFromData.data);
    };
    fetchCart();
  }, []);

  const handleIncre = async (index) => {
    const cloned = [...cart];

    await cartApi.incre(cloned[index]);
    cloned[index].count_amount += 1;
    setCart(cloned);
  };

  const handleDecre = async (index) => {
    const cloned = [...cart];
    // console.log(cart[index]);
    await cartApi.decre(cart[index]);
    cloned[index].count_amount -= 1;
    setCart(cloned);
  };

  return (
    <div>
      <button className=" bg-purple-200 rounded-md px-4 ml-[5vw] mt-4">
        <Link to="/orderHistory">History order</Link>
      </button>
      <div className="min-w-[400px] mt-8 bg-slate-200 w-1/2 mx-auto p-4 px-7 shadow-md outline-4 outline-blue-800 flex justify-between">
        <p className="font-semibold">Product</p>
        <p className="font-semibold">price/item</p>
        <p className="font-semibold">amount</p>
      </div>
      {/* <hr />
      <p>{JSON.stringify(cart, "don't have", 2)}</p>
      <hr /> */}
      {cart?.map((el, index) => (
        <CartList
          key={el.Product.id}
          cart={el}
          handleIncre={handleIncre}
          index={index}
          handleDecre={handleDecre}
        />
      ))}
      <br />
      <button
        className=" bg-purple-200 rounded-md px-4 ml-[45vw]"
        type="button"
        onClick={(e) => handlePayment(userId)}
      >
        Pay/order
      </button>
    </div>
  );
}
