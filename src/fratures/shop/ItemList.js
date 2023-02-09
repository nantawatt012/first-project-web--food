import ItemAction from "./ItemAction";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function ItemList({ items, setRefresh, index, refresh }) {
  const { shopId } = useParams();

  return (
    <div className="flex justify-start mt-8 m-auto w-9/12 h-1/5">
      <div className=" mr-8 min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px]">
        <img alt="ex" src="https://picsum.photos/300/300" />
      </div>
      <div className="flex flex-col justify-start">
        <p className="font-semibold text-xl">{items.name}</p>
        <p>price: {items.price}</p>
        <p>description: {`${items.description || "-"}`}</p>
        <p>item Left: {items.itemLeft}</p>
        <p>Type: {items.type}</p>

        <ItemAction
          setRefresh={setRefresh}
          refresh={refresh}
          items={items}
          index={index}
        />
      </div>
    </div>
  );
}
