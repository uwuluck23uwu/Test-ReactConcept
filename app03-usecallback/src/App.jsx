import { useState, useEffect, useCallback } from "react";
import "./App.css";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("CHILD WAS CALLED");
  }, [returnComment]);

  return <h4>Show message : {returnComment("2.Child")}</h4>;
};

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("1.App - ");
  const returnComment = useCallback((name) => {
    return data + name;
  }, [data]);
  return (
    <div className="App">
      <Child returnComment={returnComment} />
      <button className="btn btn-primary" onClick={() => { setToggle(!toggle); setData("ทดสอบเปลี่ยนค่า - "); }}>Click Toggle</button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};
export default App;