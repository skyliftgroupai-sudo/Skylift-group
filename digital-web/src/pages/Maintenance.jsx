const Maintenance = () => {
  return (
    <div
      style={{
        fontFamily: '"Times New Roman", Times, serif',
        margin: 0,
        padding: 0,
        background: "white",
        color: "black",
      }}
    >
      <div style={{ padding: "1em" }}>
        <h1 style={{ fontSize: "2em", fontWeight: "bold", margin: "0 0 0.5em 0" }}>
          503 Service Temporarily Unavailable
        </h1>
        <hr style={{ border: "none", borderTop: "1px solid #ccc", margin: "0.5em 0" }} />
        <p style={{ fontStyle: "italic", margin: 0 }}>nginx/1.18.0</p>
      </div>
    </div>
  );
};

export default Maintenance;