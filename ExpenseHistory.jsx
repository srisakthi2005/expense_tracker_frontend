const ExpenseHistory = (props) => {
    const{list=[],onDelete}=props;
return(
    <div>
    <h3>History</h3>
     <ul id="list" className="list">
     {list.map((eachTransaction) => (
          <li key={eachTransaction.id}>
           <span>{eachTransaction.title}</span>
           <span>₹{eachTransaction.amount}</span>
           < button className="delete-btn" onClick={()=>onDelete(eachTransaction.id)}>x</button>
          </li>
        ))}
     </ul>
    </div>
)
}
export default ExpenseHistory;
