import { useState } from "react";

const WalletForm = ({ onAdd }) => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !note) return;

    const newWalletItem = {
      id: Date.now(),
      amount: Number(amount),
      note,
    };

    onAdd(newWalletItem);
    setAmount("");
    setNote("");
  };

  return (
    <form
      className="bg-white rounded-md shadow-sm p-5 self-start"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="amount" className="text-gray-400">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-md text-xl outline-0 py-3 px-3 leading-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="note" className="text-gray-400">
            Note
          </label>
          <input
            type="text"
            name="note"
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border rounded-md text-xl outline-0 py-3 px-3 leading-4"
          />
        </div>
        <div className="text-center">
          <button className="form-btn text-white pb-3 pt-4 px-20 rounded-lg uppercase leading-4">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default WalletForm;
