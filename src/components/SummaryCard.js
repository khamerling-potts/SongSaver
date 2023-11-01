function SummaryCard({ values, type }) {
  const cardList = values.map((value, index) => (
    <li key={value} className="list-group-item">
      {type === "Genres" ? index + 1 + ". " + value : value}
    </li>
  ));
  return (
    <div className="card text-start tezt-bg-light summaryCard">
      <div className="card-body">
        <h5 className="card-title">Your Saved {type}</h5>
      </div>
      <ol className="list-group list-group-flush">{cardList}</ol>
    </div>
  );
}

export default SummaryCard;
