import useAuth from "../../hooks/useAuth";

export default function CartHeader() {
  const {
    authenticatedUser: { firstName }
  } = useAuth();
  return (
    <div className="bg-blue-200 w-full h-30 py-8 text-center text-4xl">
      {firstName} Cart
    </div>
  );
}
