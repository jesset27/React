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
    </div>
  );
}

export default App;
