import { MdDelete } from "react-icons/md";
import { useWallet } from "../context/walletContext";

const WalletItem = ({ item, type }) => {
  const { handleDeleteIncome, handleDeleteExpense } = useWallet();

  const handleDelete = () => {
    if (type === "income") handleDeleteIncome(item.id);
    else handleDeleteExpense(item.id);
  };

  return (
    <div className="flex justify-between border-b py-2 px-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 leading-6">{item.note}</h3>
        <p className={`text-sm ${type === "income" ? "text-green-500" : "text-red-500"}`}>
          {type === "income" ? "(+)" : "(-)"} {item.amount}
        </p>
      </div>
      <button className="text-2xl text-orange-500" onClick={handleDelete}>
        <MdDelete />
      </button>
    </div>
  );
};

export default WalletItem;
