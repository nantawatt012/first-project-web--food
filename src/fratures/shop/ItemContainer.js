import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CreateItem from "./CreateItem";

import * as shopApi from "../../apis/shop-api";

export default function ItemContainer() {
  const [items, setItems] = useState([]);
  const { shopId } = useParams;

  useEffect(() => {
    const fetchItem = async () => {
      const res = await shopApi.getAllItem(shopId);
      setItems(res.data.items);
      console.log(res);
    };
    fetchItem();
  }, [shopId]);

  return (
    <div>
      <CreateItem />
      {items.map((el) => (
        <ItemList key={el.id} items={el} setItems={setItems} />
      ))}
    </div>
  );
}
