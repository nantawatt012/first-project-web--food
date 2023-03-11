import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../layouts/header/Header";
import * as orderApi from "../apis/order-apis";

export default function OrderHistoryPage() {
  const [orderHis, setOrderHis] = useState();
  const navigate = useNavigate();

  const {
    authenticatedUser: { id, role }
  } = useAuth();

  useEffect(() => {
    if (role == "customer") {
      const allShoppingList = async () => {
        try {
          const res = await orderApi.getAllCusHis();
          console.log(res.data);
          // res.data.reduce();
          const groupByHis = res.data.reduce((acc, el) => {
            if (acc[el.orderId]) {
              acc[el.orderId].push(el);
            } else {
              acc[el.orderId] = [el];
            }
            return acc;
          }, []);
          console.dir(groupByHis);

          // console.log(aa);
          setOrderHis(groupByHis);
        } catch (err) {
          console.dir(err);
        }
      };
      allShoppingList();
    }
    if (role == "seller") {
      const OrderList = async () => {
        try {
          const res = await orderApi.getAllSell();
          console.dir(res.data);
          const groupByHis = res.data.reduce((acc, el) => {
            if (acc[el.orderId]) {
              acc[el.orderId].push(el);
            } else {
              acc[el.orderId] = [el];
            }
            return acc;
          }, []);
          console.dir(groupByHis);
          setOrderHis(groupByHis);
        } catch (err) {
          console.log(err);
        }
      };
      OrderList();
    }
  }, []);

  return (
    <div>
      <Header />

      <h1 className="text-2xl text-center font-semibold mt-6">Order History</h1>
      <div className="mt-6">
        {orderHis?.map((el) => {
          return (
            <div className="flex-row justify-center w-8/12 mb-8 text-left mx-auto bg-orange-300 rounded-lg p-6 ">
              <p className="mb-2">Order id: {el[0].orderId}</p>
              {el.map((el2) => {
                return (
                  <div className="flex  justify-around ">
                    <p className="w-3/12 ">Amount: {el2.amount}</p>
                    <p className="w-5/12">Product Name: {el2.Product?.name}</p>
                    <p className="w-2/12"> Price: {el2.Product?.price}</p>
                  </div>
                );
              })}
              {/* <br /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
