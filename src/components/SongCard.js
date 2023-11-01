function SongCard({ song, handleUnsave, onSelectSong, type }) {
  function onUnsave() {
    fetch(`http://localhost:3000/songs/${song.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => handleUnsave(song));
  }
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100">
        <img src={song.art} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">"{song.title}"</h5>
          <h5 className="card-text">{song.album}</h5>
          <h5 className="card-text">{song.artist}</h5>
        </div>
        <div className="card-footer">
          {type === "saved" ? (
            <button
              className="btn unsavebtn btn-outline-light"
              onClick={onUnsave}
            >
              Unsave
            </button>
          ) : (
            <button
              className="btn selectbtn btn-outline-light"
              onClick={(e) => onSelectSong(song)}
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SongCard;
