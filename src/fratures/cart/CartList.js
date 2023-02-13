export default function CartList({ cart, handleIncre, index, handleDecre }) {
  return (
    <div className=" min-w-[400px] bg-slate-200 w-1/2 mx-auto p-4 px-7 shadow-md outline-4 outline-blue-800 flex justify-between">
      <p className="w-28">{cart.Product.name}</p>
      <p className="w-16">{cart.Product.price}</p>
      <p>
        <button
          className="px-5 mx-1 bg-slate-300 rounded-md"
          onClick={() => handleIncre(index)}
        >
          +
        </button>
        {cart.count_amount}
        <button
          className="px-5 mx-1 bg-slate-300 rounded-md"
          onClick={() => handleDecre(index)}
        >
          -
        </button>
      </p>
    </div>
  );
}
