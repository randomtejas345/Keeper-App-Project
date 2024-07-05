import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [title, setTitle] = useState("Title");
  const [content, setContent] = useState("");
  const [text, setText] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    // console.log("called handleChange");
    setText(value);
  }
  function handleconChange(event) {
    const { value } = event.target;
    // console.log("called COnhandleChange");
    setContent(value);
  }

  function handleClick(event) {
    event.preventDefault();
    // console.log("called handleClick");
    props.appendNotes({ Title: text, Content: content });
    setText("");
    setContent("");
  }
  var [show, setShow] = useState(false);

  function handleAction() {
    setShow(true);
  }

  return (
    <div>
      <form class="create-note">
        {show && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={text}
          />
        )}
        <textarea
          onChange={handleconChange}
          onClick={handleAction}
          name="content"
          placeholder="Take a note..."
          value={content}
          rows={show ? 3 : 1}
        />
        <Zoom in={show}>
          <Fab onClick={handleClick}>
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
