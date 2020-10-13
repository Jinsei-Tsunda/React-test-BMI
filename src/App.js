import React, { useState } from 'react'

function App(props) {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState('')

  const calcBMI = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : 0

  return (
    <>
      <h1>BMI</h1>
      <h5>Height(cm):</h5>
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <h5>Weight(kg):</h5>
      <input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <button onClick={() => setBmi(calcBMI(+height, +weight))}>
        calculate{' '}
      </button>
      <br />
      <h2>BMI: {bmi}</h2>
    </>
  )
}

export default App
