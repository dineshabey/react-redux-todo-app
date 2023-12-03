import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTOdo } from './store/action/todoActions';
import { getUserList } from "./store/action/userAction";


function App() {

  const dispatch = useDispatch();
  const state = useSelector(store => store.todoReducer);
  const userState = useSelector(store => store.userReducer);
  const allStore = useSelector(store => store);
  // console.log(state);
  console.log(allStore);

  const handleClick = () => {
    dispatch(createTodo(
      `${state.length + 1}`,
      `Learn Redux ${state.length + 1}`,
      '2023-08-01 10:32',
      'Hello you can learn'
    ));
  }
  const handleDelete = (id) => {
    dispatch(deleteTOdo(id));
  }

  const habdleGetUsersList = () => {
    dispatch(getUserList());
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={handleClick} style={{ fontSize: '40PX', marginTop: '20px' }}>Add Item</button>
        <button onClick={habdleGetUsersList} style={{ fontSize: '40PX', marginTop: '20px' }}>Get Users Lists</button>

        {state.map((val, key) => {
          return <button key={key} onClick={() => handleDelete(val.id)} style={{ fontSize: '30px', marginTop: '20px' }}>{val.task}-Delete</button>;
        })}

      </header>
    </div>
  );
}

export default App;
