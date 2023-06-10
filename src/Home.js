import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'/Atv01'}>Atividade 1</Link> 
                    </li>
                    <li>
                        <Link to={'/Atv02'}>Atividade 2</Link> 
                    </li>
                    <li>
                        <Link to="/Atv06">Atividade 6</Link>    
                    </li>
                    <li>
                        <Link to={'/Atv07'}>Atividade 7</Link> 
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;