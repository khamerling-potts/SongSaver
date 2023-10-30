function SongForm({ newSong, onUpdateNewSong }) {
  return (
    <form>
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
    </form>
  );
}

export default SongForm;
