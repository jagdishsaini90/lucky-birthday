import React, { useState } from "react";
import "./App.css";

function isInt(n: number) {
  return n % 1 === 0;
}

function sumOfDigits(n: number) {
  let sum = 0;

  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

const Birthday: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [luckyNumber, setLuckyNumber] = useState<number>();
  const [result, setResult] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (date === "" || luckyNumber === undefined) {
      setResult("Please enter first");
      return;
    }

    let sum =
      sumOfDigits(new Date(date).getFullYear()) +
      sumOfDigits(new Date(date).getMonth() + 1) +
      sumOfDigits(new Date(date).getDate());

    if (isInt(sum / Number(luckyNumber))) {
      setActive(true);
      setResult(`${luckyNumber} is a lucky Number!!`);
    } else {
      setActive(false);
      setResult(`${luckyNumber} is not so lucky!!`);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Is your birthday lucky!</h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <input
              type="number"
              placeholder="enter lucky number..."
              onChange={(e) => setLuckyNumber(Number(e.target.value))}
              required
            />
          </div>
          <div className="input">
            <button type="submit" onClick={handleSubmit}>
              Check Number
            </button>
          </div>
        </form>
      </div>
      <div className={active ? "hurray" : "oops"}>
        <h1>{active ? "Hurray!" : null}</h1>
        <h1>{result}</h1>
      </div>
    </div>
  );
};

export default Birthday;
