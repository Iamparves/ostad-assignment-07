import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Summary from "./components/Summary";
import WalletProvider from "./context/walletContext";
import Expenses from "./pages/expenses";
import Income from "./pages/income";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <WalletProvider>
      <Router>
        <Header />
        <Summary />
        <Routes>
          <Route path="/" element={<Navigate replace to="/income" />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </WalletProvider>
  );
};

export default App;
