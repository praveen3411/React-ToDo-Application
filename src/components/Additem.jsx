function AddItem({ id, title, status, handleToggle, handleDelete }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "2px solid black",
        padding: "20px",
        borderRadius: "10px",
        borderTopColor: "lightseagreen",
        borderBottomColor: "lightseagreen",
        borderLeftColor: "black",
        borderInlineColor: "black",
        width: "90%",
        margin: "auto",
        marginTop: "10px",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</div>
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "green" }}>
        {status ? "Done" : "Not-Done"}
      </div>
      <button
        style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "black",
          color:"white",
          fontWeight:"bold"
        }}
        onClick={() => handleToggle(id)}
      >
        Toggle
      </button>
      <button style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "black",
          color:"white",
          fontWeight:"bold"
        }} onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
export default AddItem;
