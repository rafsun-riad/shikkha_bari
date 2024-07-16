function PaymentHistory() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-y-scroll">
      <h2 className="text-4xl text-center ">Payment History</h2>

      <div className="grid p-2 grid-cols-3 w-full border-y-[2px] border-gray-300 text-xl mt-4 text-center">
        <p>Amount</p>
        <p>Payment Method</p>
        <p>Date</p>
      </div>

      <div className="grid p-2 grid-cols-3 w-full  border-b-[2px] border-gray-300 text-xl text-center">
        <p>1200</p>
        <p>bkash</p>
        <p>14.2.2011</p>
      </div>
      <div className="grid p-2 grid-cols-3 w-full  border-b-[2px] border-gray-300 text-xl text-center">
        <p>1200</p>
        <p>bkash</p>
        <p>14.2.2011</p>
      </div>
      <div className="grid p-2 grid-cols-3 w-full  border-b-[2px] border-gray-300 text-xl text-center">
        <p>1200</p>
        <p>bkash</p>
        <p>14.2.2011</p>
      </div>
    </div>
  );
}

export default PaymentHistory;
