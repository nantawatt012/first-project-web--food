import { useState } from "react";
import Modal from "../../components/Modal";
import EditItem from "../shop/EditItem";

export default function ItemAction({ items, setItems }) {
  const [showModal, setShowModal] = useState(false);

  return (
    /// seller action
    // for seller only where userid == shopid
    <div className="absolute right-20">
      <button
        className="mr-4 px-6 py-1 text-sm text-black font-semibold rounded-full border bg-slate-100 border-purple-200 hover:text-black hover:bg-purple-100 hover:border-transparent 
        focus:outline-none focus:ring-slate-100  focus:ring-offset-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit {items.name}
      </button>
      {showModal ? (
        <Modal setShowModal={setShowModal} title="Edit Item">
          <EditItem items={items} />
        </Modal>
      ) : null}

      <button
        className="ml-1 px-3 py-1 text-sm text-black font-semibold rounded-full border bg-red-400 border-purple-200 hover:text-black hover:bg-red-200 hover:border-transparent focus:outline-none focus:ring-slate-100  focus:ring-offset-1"
        type="button"
      >
        Delete
      </button>
    </div>

    ///// cus action
    // <div>

    // </div>
  );
}
