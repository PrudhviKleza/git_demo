import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showAlert = () => {
    setCount((count) => count + 1);
    alert(`Counter value ${count}`);
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  };

  return (
    <>
      <div className="card">
      <h1>count is {count}</h1>
        <button style={buttonStyle} onClick={showAlert}>
          Increment Button
        </button>
        <button style={buttonStyle} onClick={() => setIsModalOpen(true)}>
          Show Modal
        </button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={{
            content: {
              width: "300px",
              margin: "auto",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            },
          }}
        >
          <h2>Count</h2>
          <p>The current count is: {count}</p>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#dc3545",
            }}
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </Modal>
      </div>
    </>
  );
}

export default App;
