import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("0");
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label
            htmlFor="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            Text
          </label>
          <input type="text" placeholder="Enter Text..." />
        </div>
        <div className="form-control">
          <label
            htmlFor="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
