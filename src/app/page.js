"use client";
import ChildA from "./ChildA";
import { createContext } from "react";

const data = createContext();
const data1 = createContext();
const data2 = createContext();
const data3 = createContext();
const data4 = createContext();

function Home() {
 const obj = {
  name : "Sami Khan",
  Age: "18",
  Work : "Student",
  University: "Punjab University Lahore",
  Address: "johar Town"
 }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <data.Provider value={obj.name}>
        <data1.Provider value={obj.Age}>
        <data2.Provider value={obj.Work}>
        <data3.Provider value={obj.University}>
        <data4.Provider value={obj.Address}>
          <ChildA />
        </data4.Provider>
        </data3.Provider>
        </data2.Provider>
        </data1.Provider>
      </data.Provider>
    </main>
  );
}

export default Home;
export { data,data1,data2,data3,data4 };
