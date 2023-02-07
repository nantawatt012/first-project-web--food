import { useState } from "react";
import useLoading from "../../hooks/useLoading";
import * as ShopApi from "../../apis/shop-api";
import validateCreateItem from "../../validators/validate-create-item";

const initialInput = {
  name: "",
  price: "",
  type: "",
  description: "",
  itemLeft: ""
};
export default function CreateItem() {
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState(initialInput);
  // const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateCreateItem(input);
      if (result) {
        // setError(result);
        // console.log(result);
      } else {
        startLoading();
        console.log(input);
        await ShopApi.createItem(input);
        setInput(initialInput);
      }
    } catch (err) {
      // console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="mx-8 my-4 bg-slate-100 p-4 shadow-md">
      <form
        className="h-8 flex justify-evenly align-baseline"
        onSubmit={handleSubmitForm}
      >
        <input
          className="rounded-sm pl-2"
          type="text"
          placeholder="Item Name"
          name="name"
          value={input.name}
          onChange={handleChangeInput}
        ></input>
        <input
          className="rounded-sm pl-2"
          type="text"
          placeholder="Price"
          name="price"
          value={input.price}
          onChange={handleChangeInput}
        ></input>
        <textarea
          className="rounded-sm pl-2"
          placeholder="Item Description"
          name="description"
          rows="5"
          value={input.description}
          onChange={handleChangeInput}
        ></textarea>
        <input
          type="text"
          className="w-24 rounded-sm pl-2"
          placeholder="Item Left"
          name="itemLeft"
          value={input.itemLeft}
          onChange={handleChangeInput}
        ></input>
        <br />
        <span>
          <input
            type="radio"
            id="food"
            name="type"
            value="food"
            onChange={handleChangeInput}
          />
          <label htmlFor="food">Food </label>

          <input
            type="radio"
            id="snag"
            name="type"
            value="snag"
            onChange={handleChangeInput}
          />
          <label htmlFor="snag">Snak</label>
        </span>
        <button className="mr-2 px-4 py-1 text-sm text-black font-semibold rounded-full border bg-slate-100 border-purple-200 hover:text-black hover:bg-slate-200 hover:border-transparent focus:outline-none focus:ring-slate-100 focus:ring-offset-1">
          Create
        </button>
      </form>
    </div>
  );
}
