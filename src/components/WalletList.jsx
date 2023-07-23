import WalletItem from "./WalletItem";

const WalletList = ({ walletItems, type }) => {
  return (
    <div className="bg-white rounded-md shadow-sm">
      {walletItems.length === 0 ? (
        <div className="flex justify-center items-center h-full p-5">
          <p className="text-lg text-gray-400 text-center">
            Nothing to show. Add some {type}
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          {walletItems?.map((item) => (
            <WalletItem item={item} type={type} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WalletList;
