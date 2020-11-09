import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "this wild darkness", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "almost home", id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  //runs everytime songs updates
  useEffect(() => {
    console.log("use effect hook runs", songs);
  }, [songs]);

  return (
    <div className="songlist">
      <ul>
        {songs.map((song) => {
          return <li>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
}

export default SongList;
