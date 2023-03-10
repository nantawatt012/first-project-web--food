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
    // if role = cus
    const allOrderList = async () => {
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
    allOrderList();

    // if role = seller
  }, []);

  return (
    <div>
      <Header />

      <h1 className="text-2xl text-center font-semibold mt-6">History order</h1>
      <div className="mt-6">
        {orderHis?.map((el) => {
          return (
            <div className="flex-row justify-center w-8/12 text-left mx-auto">
              {el.map((el2) => {
                return (
                  <div className="flex  justify-around ">
                    <p className="w-4/12 ">order id: {el2.orderId}</p>
                    <p className="w-6/12">Product name:{el2.Product?.name}</p>
                    <p className="w-2/12"> Price:{el2.Product?.price}</p>
                  </div>
                );
              })}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
