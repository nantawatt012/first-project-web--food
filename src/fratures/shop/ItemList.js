import ItemAction from "./ItemAction";

export default function ItemList({ items, setItems }) {
  return (
    <div className="flex justify-start mt-8 m-auto w-9/12 h-1/5">
      <div className=" mr-8 min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px]">
        <img alt="ex" src="https://picsum.photos/300/300" />
      </div>
      <div className="flex flex-col justify-start">
        <p className="font-semibold text-xl">{items.name}</p>
        <p>price: {items.price}</p>
        <p>
          description:{" "}
          {`${
            items.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }`}
        </p>
        <p>item Left: {items.itemLeft}</p>
        <p>Type: {items.type}</p>

        <ItemAction setItems={setItems} item={items} />
      </div>
    </div>
  );
}
