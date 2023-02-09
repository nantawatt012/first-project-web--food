export default function HeaderShop({ shopOwner: firstName }) {
  console.log(firstName);
  return (
    <div className="flex justify-evenly">
      <div className="bg-purple-200 w-full h-30 py-8 text-center text-5xl">
        {firstName}'s Shop
      </div>
    </div>
  );
}
