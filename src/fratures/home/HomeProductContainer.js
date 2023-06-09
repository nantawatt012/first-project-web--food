// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeProductContainer({ Fproduct }) {
  const nav = useNavigate();
  const goToShop = (userId) => {
    nav(`/shop/${userId}`);
  };
  // useEffect(() => {
  // }, [goToShop]);

  return (
    <div className=" min-w-40 mt-6 mx-4 bg-orange-200 rounded-md">
      <img
        alt="ex"
        src="https://picsum.photos/200/200"
        className="rounded-md shadow-lg"
      />
      <div className="mt-3 flex justify-between w-36 mx-auto ">
        <p>{Fproduct.name}</p>
        <p>{Fproduct.price}</p>
      </div>
      <button
        type="button"
        onClick={() => goToShop(Fproduct.userId)}
        className="mt-2 bg-orange-300 hover:bg-orange-400 w-6/12 text-sm text-center p-1 rounded-md shadow-md"
      >
        Go To shop
      </button>
    </div>
  );
}
