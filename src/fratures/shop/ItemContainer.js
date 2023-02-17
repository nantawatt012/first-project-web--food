import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CreateItem from "./CreateItem";
import useAuth from "../../hooks/useAuth";
import HeaderShop from "../shop/HeaderShop";

import * as shopApi from "../../apis/shop-api";

export default function ItemContainer() {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { shopId } = useParams();
  const [shopOwner, setShopOwner] = useState("");
  const navigate = useNavigate();

  const {
    authenticatedUser: { id }
  } = useAuth();
  // console.log(id);

  useEffect(() => {
    let isCancel = false;
    const fetchItem = async () => {
      const item = await shopApi.getAllItem(shopId);
      if (!isCancel) {
        setItems(item.data.items);
      }
    };
    fetchItem();
    return () => {
      isCancel = true;
      console.log("User Canceling..");
    };
  }, [shopId, refresh]);

  useEffect(() => {
    let isCancel = false;
    const fetchOwner = async () => {
      try {
        const shopOwner = await shopApi.getShopOwner(shopId);
        if (!isCancel) {
          setShopOwner(shopOwner.data.firstName);
        }
        // console.log("first");
        // shopOwner ? console.log(shopOwner) : navigate("/notfound");
      } catch {
        navigate("/notfound");
      }
    };
    fetchOwner();
    return () => {
      isCancel = true;
      console.log("User Canceling..");
    };
  }, []);

  return (
    <div>
      {shopOwner && <HeaderShop shopOwner={shopOwner} />}

      {+id === +shopId ? (
        <CreateItem refresh={refresh} setRefresh={setRefresh} />
      ) : null}
      {items.map((el, index) => (
        <ItemList
          key={el.id}
          items={el}
          setRefresh={setRefresh}
          refresh={refresh}
          index={index}
        />
      ))}
    </div>
  );
}
