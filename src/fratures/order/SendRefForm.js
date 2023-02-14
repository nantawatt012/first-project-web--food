import useLoading from "../../contexts/LoadingContext";
import * as orderApi from "../../apis/order-apis";
import { useRef, useState } from "react";

export default function SendRefForm({ onSuccess }) {
  const [refImg, setRefImg] = useState(null);

  const { startLoading, stopLoading } = useLoading();

  const inputEl = useRef();

  const handleClickSave = async () => {
    startLoading();
    const formData = new FormData();
    formData.append("profileImage", refImg);
    // await orderApi.sendRef(formData);
    stopLoading();
    setRefImg(null);
    onSuccess();
  };

  return (
    <>
      <input
        type="file"
        className="d-none"
        ref={inputEl}
        onChange={(e) => {
          console.dir(e.target);
          if (e.target.files[0]) {
            setRefImg(e.target.files[0]);
          }
        }}
        //   multiple
      />
      <button
        className="btn btn-link text-decoration-none hover-bg-gray-100"
        onClick={handleClickSave}
      >
        Save
      </button>
      <button
        className="btn btn-link text-decoration-none hover-bg-gray-100"
        onClick={() => {
          setRefImg(null);
          inputEl.current.value = null;
        }}
      >
        Cancel
      </button>
    </>
  );
}
