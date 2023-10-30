function SongForm({ newSong, onUpdateNewSong, onAddSong }) {
  return (
    <form onSubmit={(e) => onAddSong(e)}>
      <input
        type="text"
        name="title"
        placeholder="Song Title..."
        value={newSong.title}
        onChange={onUpdateNewSong}
      />
      <input
        type="text"
        name="album"
        placeholder="Album Name..."
        value={newSong.album}
        onChange={onUpdateNewSong}
      />
      <input
        type="text"
        name="artist"
        placeholder="Artist..."
        value={newSong.artist}
        onChange={onUpdateNewSong}
      />
      <input
        type="text"
        name="art"
        placeholder="Album Art Link..."
        value={newSong.art}
        onChange={onUpdateNewSong}
      />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default SongForm;
