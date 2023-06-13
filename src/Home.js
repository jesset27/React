import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul className="list-unstyled">
                    <li>
                        <Link to={'/Atv01'} className="btn btn-primary">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to={'/Count'} className="btn btn-primary">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to={'/Galery'} className="btn btn-primary">Atividade 3</Link>
                    </li>
                    <li>
                        <Link to={'/TodoList'} className="btn btn-primary">Atividade 3.1</Link>
                    </li>
                    <li>
                        <Link to={'/Toolbar'} className="btn btn-primary">Atividade 4 Toolbar</Link>
                    </li>
                    <li>
                        <Link to={'/Gallery'} className="btn btn-primary">Atividade 4.1 Gallery</Link>
                    </li>
                    <li>
                        <Link to={'/Counter'} className="btn btn-primary">Atividade 4.2 Counter</Link>
                    </li>
                    <li>
                        <Link to={'/Form'} className="btn btn-primary">Atividade 4.3 Form</Link>
                    </li>
                    <li>
                        <Link to={'/MovingDot'} className="btn btn-primary">Atividade 4.4 MovingDot</Link>
                    </li>
                    <li>
                        <Link to={'/Form2'} className="btn btn-primary">Atividade 4.5 Form2</Link>
                    </li>
                    <li>
                        <Link to={'/Form3'} className="btn btn-primary">Atividade 4.6 Form3</Link>
                    </li>
                    <li>
                        <Link to={'/List'} className="btn btn-primary">Atividade 4.7 List</Link>
                    </li>
                    <li>
                        <Link to={'/List2'} className="btn btn-primary">Atividade 4.8 List2</Link>
                    </li>
                    <li>
                        <Link to={'/ShapeEditor'} className="btn btn-primary">Atividade 4.9 ShapeEditor</Link>
                    </li>
                    <li>
                        <Link to={'/CounterList'} className="btn btn-primary">Atividade 4.10 CounterList</Link>
                    </li>
                    <li>
                        <Link to={'/List3'} className="btn btn-primary">Atividade 4.11 List3</Link>
                    </li>
                    <li>
                        <Link to={'/List4'} className="btn btn-primary">Atividade 4.12 List4</Link>
                    </li>
                    <li>
                        <Link to={'/BucketList'} className="btn btn-primary">Atividade 4.13 BucketList</Link>
                    </li>
                    <li>
                        <Link to={'/FormQuiz'} className="btn btn-primary">FormQuiz 5</Link>
                    </li>
                    <li>
                        <Link to={'/FormTicket'} className="btn btn-primary">FormTicket 5.1</Link>
                    </li>
                    <li>
                        <Link to={'/Accordion'} className="btn btn-primary">Accordion 5.2</Link>
                    </li>
                    <li>
                        <Link to={'/ContactList'} className="btn btn-primary">ContactList 5.3 ERRO</Link>
                    </li>
                    <li>
                        <Link to={'/Chat'} className="btn btn-primary">Chat 5.4</Link>
                    </li>
                    <li>
                        <Link to={'/Calculadora'} className="btn btn-primary">Calculadora 5.5</Link>
                    </li>
                    <li>
                        <Link to={'./MemoryGame'} className="btn btn-primary">Jogo da Memória 6</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;