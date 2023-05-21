import logo from './logo.svg';
import './App.css';

//Atividade 1
import Date from './Components/Atividade 1/Relogio';
import Letreiro from './Components/Atividade 1/Letreiro';

//Atividade 2
import Contador from './Components/Atividade 2/ButtonCount';

//Atividade 3
import Galery from './Components/Atividade 3/Galery';
import TodoList from './Components/Atividade 3/TodoList';

//Atividade 4
import Toolbar from './Components/Atividade 4/Toolbar';
import Gallery from './Components/Atividade 4/Gallery';
import Counter from './Components/Atividade 4/Count';
import Form from './Components/Atividade 4/Form';
import MovingDot from './Components/Atividade 4/MovingDot';
import Form2 from './Components/Atividade 4/Form2';
import Form3 from './Components/Atividade 4/Form3';
import List from './Components/Atividade 4/List';
import List2 from './Components/Atividade 4/List2';
import ShapeEditor from './Components/Atividade 4/ShapeEditor';
import CounterList from './Components/Atividade 4/CounterList';
import List3 from './Components/Atividade 4/List3';
import List4 from './Components/Atividade 4/List4';
import BucketList from './Components/Atividade 4/CounterList';

function App() {
  return (
    <div className="App">
      <h1>Atividade 1</h1>
      <h2>
        <Date />
      </h2>
      <h2 className='letreiro'>
        <Letreiro frase="Venha estudar na Fatec" />
      </h2>
      <h1>Atividade 2</h1>
      <Contador />
      <h1>Atividade 3</h1>
      <Galery />
      <TodoList />
      <h1>Atividade 4</h1>
      <Toolbar />
      <Gallery/>
      <Counter/>
      <Form/>
      <MovingDot/>
      <hr/>
      <Form2/>
      <hr/>
      <Form3/>
      <hr/>
      <List/>
      <hr/>
      <List2/>
      <hr/>
      <ShapeEditor/>
      <hr/>
      <CounterList/>
      <hr/>
      <List3/>
      <hr/>
      <List4/>
      <hr/>
      <BucketList/>
    </div>
  );
}

export default App;
