import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Home';

//Atividade 1
import Atv01 from './Components/Atividade 1/Letreiro';
import Atv01_1 from './Components/Atividade 1/Relogio';

//Atividade 2
import Count from './Components/Atividade 2/ButtonCount';

//Atividade 3
import Galery from './Components/Atividade 3/Galery';
import TodoList from './Components/Atividade 3/TodoList';

//Atividade 4
import Toolbar from './Components/Atividade 4/Toolbar';
import Gallery from './Components/Atividade 4/Gallery.js';
import Counter from './Components/Atividade 4/CounterList';
import Form from './Components/Atividade 4/Form.js';
import MovingDot from './Components/Atividade 4/MovingDot.js';
import Form2 from './Components/Atividade 4/Form2.js';
import Form3 from './Components/Atividade 4/Form3.js';
import List from './Components/Atividade 4/List.js';
import List2 from './Components/Atividade 4/List2.js';
import ShapeEditor from './Components/Atividade 4/ShapeEditor.js';
import CounterList from './Components/Atividade 4/CounterList.js';
import List3 from './Components/Atividade 4/List3.js';
import List4 from './Components/Atividade 4/List4.js';
import BucketList from './Components/Atividade 4/BucketList.js';

//Atividade 5

import FormQuiz from './Components/Atividade 5/FormQuiz.js';
import FormTicket from './Components/Atividade 5/FormTicket.js';
import Accordion from './Components/Atividade 5/Accordion.js';
// import ContactList from './Components/Atividade 5/ContactList.js';
import Chat from './Components/Atividade 5/Chat.js';
import Calculadora from './Components/Atividade 5.1/Calculadora.js';


//Atividade 6

//Atividade 6.1

export default function MinhasRotas() {
    const contact = {
        name: 'Nome do Contato',
        email: 'emaildocontato@example.com'
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv01" element={<Atv01 frase={"Venha estudar na fatec!"} />} />
                <Route path="/Atv01_1" element={<Atv01_1 />} />

                <Route path="/Count" element={<Count />} />

                <Route path="/Galery" element={<Galery />} />
                <Route path="/TodoList" element={<TodoList />} />

                <Route path="/Toolbar" element={<Toolbar />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Counter" element={<Counter />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/MovingDot" element={<MovingDot />} />
                <Route path="/Form2" element={<Form2 />} />
                <Route path="/Form3" element={<Form3 />} />
                <Route path="/List" element={<List />} />
                <Route path="/List2" element={<List2 />} />
                <Route path="/ShapeEditor" element={<ShapeEditor />} />
                <Route path="/CounterList" element={<CounterList />} />
                <Route path="/List3" element={<List3 />} />
                <Route path="/List4" element={<List4 />} />
                <Route path="/BucketList" element={<BucketList />} />


                <Route path="/FormQuiz" element={<FormQuiz />} />
                <Route path="/FormTicket" element={<FormTicket />} />
                <Route path="/Accordion" element={<Accordion />} />
                {/* <Route path="/ContactList" element={<ContactList/>} /> */}
                <Route path="/Chat" element={<Chat contact={contact} />} />
                <Route path="/Calculadora" element={<Calculadora/>} />
            </Routes>
        </BrowserRouter>
    );
}
