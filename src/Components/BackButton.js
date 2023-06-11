import React from "react";

export default function BackButton() {
  function GoBack() {
    window.history.back();
  }

  return (
    <button onClick={GoBack} type="button" className="btn btn-primary btn-lg">
        ← Voltar
    </button>
  );
}
