const Balance = (props) => {
    const { list = []} = props;
    const balance = list.reduce((prevResult, eachTrans) => prevResult + eachTrans.amount, 0)
    .toFixed(2);
    return <div className="bal">
        <h4>Balance</h4><br />
        <h2>{balance}</h2>
    </div>
}

export default Balance;

