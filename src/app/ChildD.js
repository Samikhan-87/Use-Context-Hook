import React, { useContext } from 'react';
import { data,data1,data2,data3,data4 } from './page';

function ChildD() {
  const naam = useContext(data);
  const umer = useContext(data1);
  const kaam = useContext(data2);
  const Pata = useContext(data4);
  const University = useContext(data3);
  return (
    <>
    <h1>My Name is {naam}  my age is {umer} my work is {kaam} my Address is {Pata} and my University is {University} </h1>
    </>
  );
}

export default ChildD;
