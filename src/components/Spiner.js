export default function Spinner() {
  return (
    <div className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center bg-[rgba(0,0,0,0.3)] ">
      <div
        className="
        spinner-border
        animate-spin
        inline-block
        w-8
        h-8
        border-4
        rounded-full
        text-purple-900
      "
        role="status"
      >
        <span className="visually-hidden">Loading</span>
      </div>
    </div>
  );
}
