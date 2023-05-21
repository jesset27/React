import React from "react";
import { sculptureList } from "./data";

// function AlertButton({  message, children }){
//     return(
//         <button onClick={()=>alert(message)}>
//             {children}
//         </button>
//     );
// }
function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handleClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handleClick}>
            Play "{movieName}"
        </Button>
    );
}
function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}


function Toolbar(onPlayMovie, onUploadImage) {
    return (
        <div className="Toobar" onClick={() => {
            alert('You clicked on the toolbar');
        }}>
            <Button onClick={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
    );
}

function Singup() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            alert('Submitting!')
        }

        }>
            <input />
            <button>Send</button>
        </form>
    );
}

