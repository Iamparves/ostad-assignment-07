import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { useWallet } from "../context/walletContext";

const Summary = () => {
  const { balance, totalIncome, totalExpense } = useWallet();

  return (
    <div className="summary">
      <div className="container max-w-6xl mx-auto px-2 py-8 md:py-12">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:justify-between text-white">
          <div className="text-center sm:text-left">
            <p className="text-lg mb-2 text-white/90">Total Balance</p>
            <h2 className="text-4xl">$ {balance !== 0 ? balance : "0.00"}</h2>
          </div>

          <div className="w-full sm:w-auto flex justify-around gap-5 sm:gap-10 md:gap-20">
            <div className="flex items-center gap-2">
              <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center text-sm bg-green-500">
                <BsGraphUpArrow />
              </span>
              <div className="">
                <p className="md:text-lg mb-1 text-white/90">Total Income</p>
                <h2 className="text-2xl md:text-4xl">
                  ${totalIncome > 0 ? totalIncome : "0.00"}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center text-sm bg-red-500">
                <BsGraphDownArrow />
              </span>
              <div className="">
                <p className="md:text-lg mb-1 text-white/90">Total Expenses</p>
                <h2 className="text-2xl md:text-4xl">
                  ${totalExpense > 0 ? totalExpense : "0.00"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
