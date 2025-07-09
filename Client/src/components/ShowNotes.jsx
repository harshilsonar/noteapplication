import React from "react";

const ShowNotes = ({ title, content, image, note, createdAt }) => {
  return (
    <div className="note-container">
      <div className="note-card">
        <img src={image} alt="Note" className="note-image" />
        <div className="note-content">
          <h2>{title}</h2>
          {note && <p className="note-summary">{note}</p>}
          <p>{content}</p>
          <p className="note-date">
            <b>Created:</b> {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowNotes;
