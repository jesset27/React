import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Home';
import Atv01 from './Components/Atividade 1/Letreiro';
import Atv02 from './Components/Atividade 1/Relogio';
import CarrinhoCompras from './Components/Atividade 7/CarrinhoCompras';

export default function MinhasRotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Atv01" element={<Atv01 frase={"Venha estudar na fatec!"}/>} />
            <Route path="/Atv02" element={<Atv02/>} />
            <Route path="/Atv07" element={<CarrinhoCompras/>} />
        </Routes>
        </BrowserRouter>   
    );
}
