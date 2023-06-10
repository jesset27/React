import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'/Atv01'}>Atividade 1</Link>
                    </li>
                    <li>
                        <Link to={'/Atv01_1'}>Atividade 1.1</Link>
                    </li>
                    <li>
                        <Link to={'/Count'}>Atividade 2</Link>
                    </li>
                    <li>
                        <Link to={'/Galery'}>Atividade 3</Link>
                    </li>
                    <li>
                        <Link to={'/TodoList'}>Atividade 3.1</Link>
                    </li>
                    <li>
                        <Link to={'/Toolbar'}>Atividade 4 Toolbar</Link>
                    </li>
                    <li>
                        <Link to={'/Gallery'}>Atividade 4.1 Gallery</Link>
                    </li>
                    <li>
                        <Link to={'/Counter'}>Atividade 4.2 Counter</Link>
                    </li>
                    <li>
                        <Link to={'/Form'}>Atividade 4.3 Form</Link>
                    </li>
                    <li>
                        <Link to={'/MovingDot'}>Atividade 4.4 MovingDot</Link>
                    </li>
                    <li>
                        <Link to={'/Form2'}>Atividade 4.5 Form2</Link>
                    </li>
                    <li>
                        <Link to={'/Form3'}>Atividade 4.6 Form3</Link>
                    </li>
                    <li>
                        <Link to={'/List'}>Atividade 4.7 List</Link>
                    </li>
                    <li>
                        <Link to={'/List2'}>Atividade 4.8 List2</Link>
                    </li>
                    <li>
                        <Link to={'/ShapeEditor'}>Atividade 4.9 ShapeEditor</Link>
                    </li>
                    <li>
                        <Link to={'/CounterList'}>Atividade 4.10 CounterList</Link>
                    </li>
                    <li>
                        <Link to={'/List3'}>Atividade 4.11 List3</Link>
                    </li>
                    <li>
                        <Link to={'/List4'}>Atividade 4.12 List4</Link>
                    </li>
                    <li>
                        <Link to={'/BucketList'}>Atividade 4.13 BucketList</Link>
                    </li>
                    <li>
                        <Link to={'/FormQuiz'}>FormQuiz 5</Link>
                    </li>
                    <li>
                        <Link to={'/FormTicket'}>FormTicket 5.1</Link>
                    </li>
                    <li>
                        <Link to={'/Accordion'}>Accordion 5.2</Link>
                    </li>
                    <li>
                        <Link to={'/ContactList'}>ContactList 5.3 ERRO</Link>
                    </li>
                    <li>
                        <Link to={'/Chat'}>Chat 5.4</Link>
                    </li>
                    <li>
                        <Link to={'/Calculadora'}>Calculadora 5.5</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;