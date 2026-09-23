import { Provider } from "react-redux";
import { PopupProvider } from "./context/PopUpContext";
import { AppRouter } from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { store } from "./api/store";
import { PropertyImageProvider } from "./context/UploadContext";
export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ToastContainer />
        <PopupProvider>
          <PropertyImageProvider>
            <AppRouter />
          </PropertyImageProvider>
        </PopupProvider>
      </AuthProvider>
    </Provider>
  );
};
