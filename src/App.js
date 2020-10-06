import React, { useState, useEffect } from 'react';
import './style/App.css';

function App() {
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const PaintTable = () => {
    setTimeout(() => {
      var c = document.getElementById("LineWinner");
      /* c.width = window.innerWidth;
      c.height = window.innerHeight; */
      var ctx = c.getContext("2d");
      /* ctx.fillRect(100, 100, 100, 100);
      ctx.fillRect(400, 100, 100, 100);
      ctx.fillRect(300, 300, 100, 100); */
      ctx.beginPath();
      ctx.moveTo(220, 0);
      ctx.lineTo(180, 600);
      ctx.moveTo(420, 0);
      ctx.lineTo(380, 600);
      ctx.moveTo(0, 180);
      ctx.lineTo(600, 220);
      ctx.moveTo(0, 380);
      ctx.lineTo(600, 420);
      ctx.lineWidth = 5;
      ctx.stroke();
    }, 100);
  }
  const PaintLineWinner = (xInit, yInit, xEnd, yEnd) => {
    var c = document.getElementById("LineWinner");
    var ctx = c.getContext("2d");
    for (let i = 0; i < 600; i++) {
      setTimeout(() => {
        ctx.beginPath();
        if (xEnd === 600 && yEnd === 0) {
          ctx.moveTo(getRandomArbitrary(xInit + i - 2, xInit + i + 2), getRandomArbitrary(yInit - i - 2, yInit - i + 2));
          ctx.lineTo(getRandomArbitrary(xInit + i - 1, xInit + i + 3), getRandomArbitrary(yInit - i - 1, yInit - i + 3));
        } else {
          ctx.moveTo(xInit === xEnd ? getRandomArbitrary(xInit - 2, xInit + 2) : getRandomArbitrary(xInit + i - 2, xInit + i + 2), yInit === yEnd ? getRandomArbitrary(yInit - 2, yInit + 2) : getRandomArbitrary(yInit + i - 2, yInit + i + 2));
          ctx.lineTo(xInit === xEnd ? getRandomArbitrary(xInit - 2, xInit + 2) : getRandomArbitrary(xInit + i - 1, xInit + i + 3), yInit === yEnd ? getRandomArbitrary(yInit - 2, yInit + 2) : getRandomArbitrary(yInit + i - 1, yInit + i + 3));
        }
        ctx.lineWidth = getRandomArbitrary(10, 30);
        ctx.stroke();
      }, 500);
    }
  };
  const removeLineWinner = () => {
    var c = document.getElementById("LineWinner");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
  }
  const [array, setArray] = useState([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]])
  const [score, setScore] = useState([])
  const [aux, setAux] = useState(0)
  const [winner, setWinner] = useState("")
  const switchs = (a, b) => {
    if (aux === 0 && array[a][b] === "-") {
      array[a][b] = "X"
      setArray([...array])
      setAux(1)
    }
    else if (aux === 1 && array[a][b] === "-") {
      array[a][b] = "O"
      setArray([...array])
      setAux(0)
    }
  }
  useEffect(() => {
    //SI GANA X
    if (winner === "") {
      if (array[0][0] === "X" && array[0][1] === "X" && array[0][2] === "X") {
        PaintLineWinner(0, 100, 600, 100)
        setWinner("X")
      }
      else if (array[1][0] === "X" && array[1][1] === "X" && array[1][2] === "X") {
        PaintLineWinner(0, 300, 600, 300)
        setWinner("X")
      }
      else if (array[2][0] === "X" && array[2][1] === "X" && array[2][2] === "X") {
        PaintLineWinner(0, 500, 600, 500)
        setWinner("X")
      }
      else if (array[0][0] === "X" && array[1][0] === "X" && array[2][0] === "X") {
        PaintLineWinner(100, 0, 100, 600)
        setWinner("X")
      }
      else if (array[0][1] === "X" && array[1][1] === "X" && array[2][1] === "X") {
        PaintLineWinner(300, 0, 300, 600)
        setWinner("X")
      }
      else if (array[0][2] === "X" && array[1][2] === "X" && array[2][2] === "X") {
        PaintLineWinner(500, 0, 500, 600)
        setWinner("X")
      }
      else if (array[0][0] === "X" && array[1][1] === "X" && array[2][2] === "X") {
        PaintLineWinner(0, 0, 600, 600)
        setWinner("X")
      }
      else if (array[0][2] === "X" && array[1][1] === "X" && array[2][0] === "X") {
        PaintLineWinner(0, 600, 600, 0)
        setWinner("X")
      }
    }
    // SI GANA O
    if (winner === "") {
      if (array[0][0] === "O" && array[0][1] === "O" && array[0][2] === "O") {
        PaintLineWinner(0, 100, 600, 100)
        setWinner("O")
      }
      else if (array[1][0] === "O" && array[1][1] === "O" && array[1][2] === "O") {
        PaintLineWinner(0, 300, 600, 300)
        setWinner("O")
      }
      else if (array[2][0] === "O" && array[2][1] === "O" && array[2][2] === "O") {
        PaintLineWinner(0, 500, 600, 500)
        setWinner("O")
      }
      else if (array[0][0] === "O" && array[1][0] === "O" && array[2][0] === "O") {
        PaintLineWinner(100, 0, 100, 600)
        setWinner("O")
      }
      else if (array[0][1] === "O" && array[1][1] === "O" && array[2][1] === "O") {
        PaintLineWinner(300, 0, 300, 600)
        setWinner("O")
      }
      else if (array[0][2] === "O" && array[1][2] === "O" && array[2][2] === "O") {
        PaintLineWinner(500, 0, 500, 600)
        setWinner("O")
      }
      else if (array[0][0] === "O" && array[1][1] === "O" && array[2][2] === "O") {
        PaintLineWinner(0, 0, 600, 600)
        setWinner("O")
      }
      else if (array[0][2] === "O" && array[1][1] === "O" && array[2][0] === "O") {
        PaintLineWinner(0, 600, 600, 0)
        setWinner("O")
      }
    }
    if (winner !== "") {
      setScore([...score, [winner]])
    }
  }, [array, winner])
  useEffect(() => {
    let AuxX = 0
    let AuxO = 0
    score.forEach(element => {
      if (element[0] === "X") {
        AuxX++
      }
      else if (element[0] === "O") {
        AuxO++
      }
    });
    if (AuxX === 3) {
      setWinner("Champeons X")
    }
    else if (AuxO === 3) {
      setWinner("Champeons O")
    }
  }, [score])
  return (
    <div className="App">
      <div className="gridContainer">
        <h2> Score 3</h2>
        <div className="Grid">
          <canvas id="LineWinner" width="600px" height="600px" ></canvas>
          <div className="Container">
            <p onClick={() => winner === "" && switchs(0, 0)}>{array[0][0]}</p>
            <p onClick={() => winner === "" && switchs(0, 1)}>{array[0][1]}</p>
            <p onClick={() => winner === "" && switchs(0, 2)}>{array[0][2]}</p>
          </div>
          <div className="Container">
            <p onClick={() => winner === "" && switchs(1, 0)}>{array[1][0]}</p>
            <p onClick={() => winner === "" && switchs(1, 1)}>{array[1][1]}</p>
            <p onClick={() => winner === "" && switchs(1, 2)}>{array[1][2]}</p>
          </div>
          <div className="Container">
            <p onClick={() => winner === "" && switchs(2, 0)}>{array[2][0]}</p>
            <p onClick={() => winner === "" && switchs(2, 1)}>{array[2][1]}</p>
            <p onClick={() => winner === "" && switchs(2, 2)}>{array[2][2]}</p>
          </div>
        </div>
      </div>
      <div className="Container-data">
        <div className="Container-winner">
          <span>CIRCLE</span>
          {score.map((item, index) => {
            if (item[0] === "O") {
              return <p key={item + index}>O</p>
            } else {
              return ""
            }
          })}
        </div>
        <div className="Container-winner">
          <span>TAILS</span>
          {score.map((item, index) => {
            if (item[0] === "X") {
              return <p key={item + index}>X</p>
            } else {
              return ""
            }
          })}
        </div>
        <button
          className="Boton-restart"
          onClick={() => {
            setArray([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]])
            setAux(0)
            setWinner("")
            removeLineWinner()
          }}>
          Reiniciar
      </button>
      </div>
      {(winner === "Champeons X" || winner === "Champeons O") &&
        <div className="Container-Champeons">
          {`${winner}`}
          <button className="Boton-restart"
            onClick={() => {
              setScore([])
              setArray([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]])
              setAux(0)
              setWinner("")
              removeLineWinner()
            }}>
            Return
        </button>
        </div>
      }
      {PaintTable()}
    </div >
  );
}

export default App;
