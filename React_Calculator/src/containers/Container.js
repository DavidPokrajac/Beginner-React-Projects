import React, { useState } from "react";
import Display from "../components/Display/Display";
import Digits from "../components/Digits/Digits";
import Operators from "../components/Operators/Operators";
import OtherOps from "../components/OtherOps/OtherOps";
import classes from "./Container.module.css";

const Container = () => {
  const [num, setNum] = useState("");
  const [finished, setFinished] = useState(false);
  const [noZero, setNoZero] = useState(true);

  function click(e) {
    setNum(prevNum => {
      if (e.target.innerHTML[0] !== "0") {
        setNoZero(false);
        setFinished(false);
        console.log(e.target.innerHTML);
      }
      switch(e.target.innerHTML[e.target.innerHTML.length - 1]) {
        case "+":
          setNoZero(true);
          break;
        case "-":
          setNoZero(true);
          break;
        case "*":
          setNoZero(true);
          break;
        case "/":
          setNoZero(true);
          break;
      }
      return prevNum += e.target.innerHTML
    });
  }

  function clicked() {
    setNum(num => {
      if (
        num[num.length - 1] === "*" ||
        num[num.length - 1] === "+" ||
        num[num.length - 1] === "-" ||
        num[num.length - 1] === "." ||
        num[num.length - 1] === "/"
      ) {
        num = "Error";
        return num;
      } else {
        num = eval(num);
        setFinished(true);
        return num;
      }
    });
  }

  function clear() {
    setNum("");
    setFinished(false);
    setNoZero(true);
  }
  return (
    <div className={classes.Container}>
      <Display num={num} />
      <OtherOps
        clear={clear}
        click={click}
        clicked={clicked}
        finished={finished}
      />
      <div className={classes.Subcontainer}>
        <Digits click={click} finished={finished} noZero={noZero} />
        <Operators click={click} clicked={clicked} finished={finished} />
      </div>
      <small className={classes.Credentials}>&copy; David</small>
    </div>
  );
};

export default Container;
