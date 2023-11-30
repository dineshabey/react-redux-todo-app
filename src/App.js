import logo from './logo.svg';
import './App.css';
import { produce } from 'immer';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTOdo } from './store/action/todoActions';
import store from './store/store';

function App() {

  const dispatch = useDispatch();
  const state = useSelector(store => store);

  console.log(state);

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


  //Before use IMMER =================================================================
  // const originalState = [
  //   {
  //     title: 'Learn Redux',
  //     done: true,
  //   },
  //   {
  //     title: 'Learn Immer',
  //     done: false,
  //   },
  // ];

  // const updateState = [...originalState];

  // updateState[1] = {
  //   ...updateState[1],
  //   done: true
  // };

  // updateState.push({ title: 'new title', done: false });
  // console.log(updateState);

  //=========================== USE IMMER=====================================

  // const updatedImmerStatus = produce(originalState, draft => {
  //   draft[1].done = true;
  //   draft.push({ title: 'Share on media', done: false });
  // });


  // console.log(updatedImmerStatus);
  // console.log(originalState);


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

        {state.map((val, key) => {
          return <button key={key} onClick={() => handleDelete(val.id)} style={{ fontSize: '30px', marginTop: '20px' }}>{val.task}-Delete</button>;
        })}

      </header>
    </div>
  );
}

export default App;
