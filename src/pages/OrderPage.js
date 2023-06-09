import { useEffect, useState } from "react";
import OrderList from "../fratures/order/OrderList";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import * as orderApi from "../apis/order-apis";
import SendRefForm from "../fratures/order/SendRefForm";
import Modal from "../components/Modal";
import DropDown from "../components/DropDown";

export default function OrderPage() {
  const [lastOrder, setLastOrder] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // const handleSubmit = async (e) => {
  //   if (!orderNum) {
  //   } else {
  //   }
  // };

  useEffect(() => {
    const fetchList = async () => {
      const orderHisDB = await orderApi.getLastOrder();
      // console.log(orderHisDB.data);
      setLastOrder(orderHisDB.data);
    };
    fetchList();
  }, []);

  return (
    <div>
      <Header />
      {/* dropdown show list of (His. order and Date of ordered) */}
      <h1 className="text-center my-4 font-semibold text-xl">OrderPage</h1>
      <div className="mt-16 flex w-[80vw] justify-between mx-auto font-semibold">
        <p className="w-40"> Name</p>
        <p className="w-40"> Amount</p>
        <p className="w-40">Price/Item</p>
        <p className="w-40">Order</p>
      </div>
      {lastOrder?.map((el) => (
        <OrderList key={el.id} el={el} />
      ))}
      <p className="mt-4 text-lg font-bold flex w-[80vw] justify-between mx-auto">
        Total {lastOrder[0]?.Order.sumAmount}
      </p>

      <button
        type="button"
        className="mt-4 flex justify-between mx-auto bg-purple-200 px-2 rounded-md shadow-sm hover:bg-purple-300 active:bg-purple-400"
        onClick={() => setShowModal(true)}
      >
        Upload Sliper
      </button>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          onClose={() => setShowModal(false)}
          title="Update Slip"
        >
          <SendRefForm onSuccess={() => setShowModal(false)} />
        </Modal>
      )}
      <Footer />
    </div>
  );
}
