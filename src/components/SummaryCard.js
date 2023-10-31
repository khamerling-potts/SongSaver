function SummaryCard({ values, type }) {
  const cardList = values.map((value) => (
    <li key={value} className="list-group-item">
      {value}
    </li>
  ));
  return (
    <div className="card summaryCard">
      <div className="card-body">
        <h5 className="card-title">Your Saved {type}</h5>
      </div>
      {cardList}
    </div>
  );
}

export default SummaryCard;
