import { useContext } from "react";
import "./App.css";
import { MainContext } from "./context/Context";
import DashboardPage from "./routes/Dashboard";
import LoginPage from "./routes/Login";

function App() {
  const { isLogin } = useContext(MainContext);

  return <main className="w-screen h-screen overflow-hidden">{isLogin ? <DashboardPage /> : <LoginPage />}</main>;
}

export default App;
