import { useEffect, useRef, useState } from "react";
import pic from "../Pic/pexels-ash-376464.jpg";
import pic2 from "../Pic/pexels-cats-coming-406152.jpg";

const img = [pic, pic2, "https://picsum.photos/200/200/"];
const delay = 2500;
export default function SlideShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === img.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="my-0 mx-auto overflow-hidden max-w-5xl h-40">
      <div
        className="whitespace-nowrap"
        style={{
          transform: `translate3d(${-index * 100}%,0,0)`,
          transition: "ease 1000ms"
        }}
      >
        {img.map((el, index) => (
          <img
            alt="ex"
            src={el}
            className="h-72 w-full inline-block"
            key={index}
          />
        ))}
      </div>

      <div className="text-center">
        {img.map((_, idx) => (
          <div
            key={idx}
            className={`inline-block h-3 w-3 m-1 rounded-[50%] cursor-pointer m-[15px 7px 0px] bg-gray-300 
            ${index === idx ? "bg-purple-900" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
