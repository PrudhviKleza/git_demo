import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const showAlert = () => {
    setCount((count) => count + 1)
    alert('Counter value ${count}');
  };
  return (
    <>
     
      <div className="card">
        <h1>count is {count}</h1>
        <button onClick={showAlert }>
          Increment Button
        </button>
        
      </div>
      
    </>
  )
}

export default App
