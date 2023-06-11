import React, { useState, useEffect } from 'react';
import Relogio from './Relogio';
import BackButton from '../BackButton';

function Letreiro({ frase }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= frase.length) {
        setText(frase.slice(0, i));
        i++;
      } else {
        i = 0;
      }
    }, 150);

    return () => clearInterval(interval);
  }, [frase]);

  return (
    <div>
      <h1><Relogio/></h1>
      <h3>{text}</h3>
    </div>
  );
}

export default Letreiro;
