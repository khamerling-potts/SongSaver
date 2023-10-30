function SongCard({ song, handleUnsave }) {
  function onUnsave() {
    fetch(`http://localhost:3000/songs/${song.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => handleUnsave(song));
  }
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img className="card-img-top" src={song.art} alt="album art" />
        <div className="card-body">
          <h5 className="card-text">{song.title}</h5>
          <h5 className="card-text">{song.album}</h5>
          <h5 className="card-text">{song.artist}</h5>
          <button className="btn btn-primary" onClick={onUnsave}>
            Unsave
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
