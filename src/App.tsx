import { PopupProvider } from "./context/PopUpContext";
import { AppRouter } from "./routes/AppRoutes";
export const App = () => {
  return (
    <PopupProvider>
      <AppRouter />
    </PopupProvider>
  );
};
