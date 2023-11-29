import logo from './logo.svg';
import './App.css';

function App() {
  
  //Before use IMMER =================================================================
  const originalState = [
    {
      title: 'Learn Redux',
      done: true,
    },
    {
      title: 'Learn Immer',
      done: false,
    },
  ];

  const updateState = [...originalState];

  updateState[1] = {
    ...updateState[1],
    done: true
  };

  updateState.push({ title: 'new title', done: false });
  console.log(updateState);

  //================================================================

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
      </header>
    </div>
  );
}

export default App;
