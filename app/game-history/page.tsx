"use client";

import { useState } from "react";
import "./game.scss";

export default function Game() {
  const [current, setCurrent] = useState("O");
  const [initArr, setInitArr] = useState(new Array(9).fill(""));
  let [hasWin, setHasWin] = useState(false)
  let [resultInfo, setResultInfo] = useState('')

  const handleClick: (index: number) => undefined = (index: number) => {
    if (hasWin) {
        return
    }
    if (initArr[index] === "") {
      initArr[index] = current;
      setInitArr(initArr);
      setCurrent(current === "O" ? "X" : "O");
      judgeResult()
    }
  };

  const list = initArr.map((item, index) => {
    return (
      <div className="square" key={index} onClick={(e) => handleClick(index)}>
        {item}
      </div>
    );
  });

  //   1 2 3
  //   4 5 6
  //   7 8 9
  const judgeResult = () => {
    let winList = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    let win = winList.some(item => {
        let [a, b, c] = item
        if (initArr[a - 1] !== '' && initArr[a - 1] === initArr[b - 1] && initArr[b - 1] === initArr[c - 1]) {
            setResultInfo(initArr[a - 1] + ' 获胜')
            return true
        }
    })
    setHasWin(win)
    if (!win && initArr.every((item, index) => item !== '')) {
        setResultInfo('游戏结束，平局')
    }
  };

  const handleRestart = () => {
    setInitArr(new Array(9).fill(''))
    setCurrent('O')
    setHasWin(false)
    setResultInfo('')
  }

  return (
    <div className="main">
      <p>Current {current} <span className="text-purple-600">{resultInfo}</span> </p>
      <button onClick={handleRestart}>Restart</button>
      <div className="square-wrap">{list}</div>
    </div>
  );
}
