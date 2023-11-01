function SongForm({ newSong, onUpdateNewSong, onAddSong }) {
  return (
    <form onSubmit={(e) => onAddSong(e)}>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="Song Title..."
          value={newSong.title}
          onChange={onUpdateNewSong}
        />
        <input
          className="form-control"
          type="text"
          name="album"
          placeholder="Album Name..."
          value={newSong.album}
          onChange={onUpdateNewSong}
        />
        <input
          className="form-control"
          type="text"
          name="artist"
          placeholder="Artist..."
          value={newSong.artist}
          onChange={onUpdateNewSong}
        />
        <input
          className="form-control"
          type="text"
          name="art"
          placeholder="Album Art Link..."
          value={newSong.art}
          onChange={onUpdateNewSong}
        />
        <input
          className="form-control"
          type="text"
          name="genre"
          placeholder="Genre..."
          value={newSong.genre}
          onChange={onUpdateNewSong}
        />
        <button type="submit">Add Song</button>
      </div>
    </form>
  );
}

export default SongForm;
