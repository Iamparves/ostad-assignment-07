import WalletForm from "../components/WalletForm";
import WalletList from "../components/WalletList";
import { useWallet } from "../context/walletContext";

const Income = () => {
  const { handleAddIncome, incomes } = useWallet();

  return (
    <div className="container max-w-6xl mx-auto px-2 py-8">
      <h1 className="page-title text-5xl sm:text-6xl text-center font-bold mb-5">Income</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <WalletList type="income" walletItems={incomes} />
        <WalletForm onAdd={handleAddIncome} />
      </div>
    </div>
  );
};

export default Income;
