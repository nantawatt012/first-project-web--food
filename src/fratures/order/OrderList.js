export default function OrderList({ el }) {
  return (
    <div className="flex w-[80vw] justify-between mx-auto">
      <p className="w-40">{el.Product.name}</p>
      <p className="w-40"> {el.amount}</p>
      <p className="w-40">{el.Product.price}</p>
      <p className="w-40">{el.Order.id}</p>
    </div>
  );
}
