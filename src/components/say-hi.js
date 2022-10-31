import { useCallback, useEffect, useState } from "react";
import OtherComp from "./other-comp";

const Sayhi = () => {
  const [hello, setHello] = useState({ a: 1 });

  const doConsoleLog = useCallback(() => {
    console.log("hello local Var", hello);
  }, [hello]);

  useEffect(() => {
    const timerId = setInterval(() => setHello({ a: Math.random() }), 2000);

    return () => clearInterval(timerId);
  }, []);

  return <OtherComp state={hello} func={doConsoleLog}></OtherComp>;
};

export default Sayhi;
