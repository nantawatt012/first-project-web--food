import { useState } from "react";
import { useParams } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import * as ShopApi from "../../apis/shop-api";
import Modal from "../../components/Modal";
import EditItem from "../shop/EditItem";
import useAuth from "../../hooks/useAuth";

export default function ItemAction({ items, setRefresh, index, refresh }) {
  const { startLoading, stopLoading } = useLoading();
  const [showModal, setShowModal] = useState(false);
  const { shopId } = useParams();

  const {
    authenticatedUser: { id, role }
  } = useAuth();
  // console.log(typeof shopId, typeof id);

  const handleDelete = async (e) => {
    try {
      // e.preventDefault();
      startLoading();
      await ShopApi.deleteItem(shopId, items.id);

      setRefresh(!refresh);
    } catch (err) {
      // console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    /// seller action
    // for seller only where userid == shopid
    <div className="absolute right-20">
      {+id === +shopId ? (
        <button
          className="mr-4 px-6 py-1 text-sm text-black font-semibold rounded-full border bg-slate-100 border-purple-200 hover:text-black hover:bg-purple-100 hover:border-transparent 
        focus:outline-none focus:ring-slate-100  focus:ring-offset-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Edit {items.name}
        </button>
      ) : null}

      {showModal ? (
        <Modal setShowModal={setShowModal} title="Edit Item">
          <EditItem
            setShowModal={setShowModal}
            setRefresh={setRefresh}
            refresh={refresh}
            items={items}
            index={index}
          />
        </Modal>
      ) : null}

      {+id === +shopId ? (
        <button
          className="ml-1 px-3 py-1 text-sm text-black font-semibold rounded-full border bg-red-400 border-purple-200 hover:text-black hover:bg-red-200 hover:border-transparent focus:outline-none focus:ring-slate-100  focus:ring-offset-1"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      ) : null}

      {/* ///// cus action */}
      {role === "customer" ? (
        <div>
          <button
            type="button"
            className="mr-4 px-6 py-1 text-sm text-black font-semibold rounded-full border bg-slate-100 border-purple-200 hover:text-black hover:bg-purple-100 hover:border-transparent 
        focus:outline-none focus:ring-slate-100  focus:ring-offset-1"
          >
            Add to cart
          </button>
        </div>
      ) : null}
    </div>
  );
}
