import { useEffect, useState } from "react";
import OrderList from "../fratures/order/OrderList";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import * as orderApi from "../apis/order-apis";
import SendRefForm from "../fratures/order/SendRefForm";
import Modal from "../components/Modal";

export default function OrderPage() {
  const [orderHis, serOrderHis] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      const orderHisDB = await orderApi.getOrder();
      // console.log(orderHisDB.data);
      serOrderHis(orderHisDB.data);
    };
    fetchList();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-center my-4 font-semibold text-xl">
        OrderPage/History{" "}
      </h1>
      <div className="mt-4 flex w-[80vw] justify-between mx-auto font-semibold">
        <p className="w-40"> Name</p>
        <p className="w-40"> Amount</p>
        <p className="w-40">Price/Item</p>
        <p className="w-40">Order</p>
      </div>
      {orderHis.map((el) => (
        <OrderList key={el.id} el={el} />
      ))}
      <p className="mt-4 text-lg font-bold flex w-[80vw] justify-between mx-auto">
        Total {orderHis[0].Order.sumAmount}
      </p>
      {/* /////////////////////////////////////////// */}

      <button
        type="button"
        className="mt-4 flex justify-between mx-auto bg-purple-200 px-2 rounded-md shadow-sm hover:bg-purple-300 active:bg-purple-400"
        onClick={setOpen(true)}
      >
        Upload Sliper
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <SendRefForm onSuccess={() => setOpen(false)} />
      </Modal>
      <Footer />
    </div>
  );
}
