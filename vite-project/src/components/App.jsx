import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  
  function appendNotes(newnote) {
    setNotes((prevValues) => [...prevValues, newnote]);
    console.log(notes);
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea appendNotes={appendNotes} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            deleteNote={deleteNote}
            title={item.Title}
            content={item.Content}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
