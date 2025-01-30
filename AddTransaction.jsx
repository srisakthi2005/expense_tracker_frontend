import { useState } from "react";

const AddTransaction = (props) => {
  const { onAdd } = props;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const transaction = {
    id: Math.random(),
    title:title,
    amount:+amount
    }
    console.log(transaction);
    onAdd(transaction);
    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add new</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={title}
            onChange={onTitleChange} 
            required
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={onAmountChange} 
            required
          />
        <br/>positive-income, negative-expense
        </div>
        <button type="submit">Add transaction</button> 
      </form>
    </div>
  );
};

export default AddTransaction;