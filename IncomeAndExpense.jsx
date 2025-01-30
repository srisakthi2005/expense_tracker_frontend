const IncomeAndExpense = (props) => {
    const {list = []} = props;
    const income = list
    .filter((eachTrans) => eachTrans.amount>0)
    .reduce((prevResult, eachTrans) => prevResult+eachTrans.amount, 0)
    .toFixed(2);

    const expense = list
    .filter((eachTrans) => eachTrans.amount<0)
    .reduce((prevResult, eachTrans) => prevResult+eachTrans.amount, 0)
    .toFixed(2);

    return (
    
       <div className="inc-exp-container">
            <div className="income">
            <h4>Income</h4>
            <p className="money plus">₹{income}</p>
            </div>

            <div className="expense">
            <h4>Expense</h4>
            <p className="money minus">₹{expense}</p>
            </div>
        </div>
    
 );
}
export default IncomeAndExpense;

