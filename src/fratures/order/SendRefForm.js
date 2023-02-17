import useLoading from "../../hooks/useLoading";
// import * as orderApi from "../../apis/order-apis";
import { useRef, useState } from "react";

export default function SendRefForm({ onSuccess }) {
  const [refImg, setRefImg] = useState(null);

  const { startLoading, stopLoading } = useLoading();

  const inputEl = useRef();

  const handleClickSave = async () => {
    startLoading();
    const formData = new FormData();
    formData.append("orderPayRef", refImg);
    // await orderApi.sendRef(formData);
    stopLoading();
    setRefImg(null);
    onSuccess();
  };

  return (
    <>
      <input
        type="file"
        ref={inputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setRefImg(e.target.files[0]);
          }
        }}
      />
      {refImg && (
        <button
          onClick={handleClickSave}
          className="mr-2 px-4 py-1 text-sm text-black font-semibold rounded-full border bg-slate-100 border-purple-200 hover:text-black hover:bg-slate-200 hover:border-transparent focus:outline-none focus:ring-slate-100 focus:ring-offset-1"
        >
          Save
        </button>
      )}
      {refImg && (
        <button
          className="mr-2 px-4 py-1 text-sm text-black font-semibold rounded-full border bg-red-100 border-purple-200 hover:text-black hover:bg-red-200 hover:border-transparent focus:outline-none focus:ring-slate-100 focus:ring-offset-1"
          onClick={() => {
            setRefImg(null);
            inputEl.current.value = null;
          }}
        >
          Cancel
        </button>
      )}
    </>
  );
}
