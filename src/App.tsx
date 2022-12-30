import RoutesMain from "./Routes/index.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { UserProvider } from "./Context/UserContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <CartProvider>
          <RoutesMain />
        </CartProvider>
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
