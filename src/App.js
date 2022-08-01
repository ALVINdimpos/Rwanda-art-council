import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { store } from "./redux/store";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
    <Provider store={store}>
      <div className="dark">{routing}</div>;
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
