import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#D36DEB] to-[#F08896] py-4">
      <div className="container max-w-6xl mx-auto px-2 flex justify-between items-center">
        <h1 className="text-2xl text-white font-semibold">WalletWise</h1>
        <div className="flex items-center text-slate-800 bg-white p-1 rounded-md">
          <NavLink
            className="menu-link py-1 px-5 rounded-md relative z-10 overflow-hidden transition-all"
            to="/income"
          >
            Income
          </NavLink>
          <NavLink
            className="menu-link py-1 px-5 rounded-md relative z-10 overflow-hidden transition-all"
            to="/expenses"
          >
            Expenses
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
