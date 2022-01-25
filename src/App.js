import UserHomePage from "./pages/home-page/UserHomePage";
import Header from "./components/header/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <UserHomePage />
    </div>
  );
}
