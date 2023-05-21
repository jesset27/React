import React, { useState, useEffect } from 'react';

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

  return text;
}

export default Letreiro;
