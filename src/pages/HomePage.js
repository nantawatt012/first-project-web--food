import Header from "../layouts/header/Header";

import SlideShow from "../components/SlideShow";

export default function HomePage() {
  return (
    <>
      <Header />
      <SlideShow />
      {/* send item to slideshow */}
      <h1 className="text-center text-xl mt-8">Product</h1>
      {/* product // shop  */}
    </>
  );
}
