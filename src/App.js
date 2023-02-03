import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import useLoading from "./hooks/useLoading";
import Spinner from "./components/Spiner";

function App() {
  const { loading } = useLoading();
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
