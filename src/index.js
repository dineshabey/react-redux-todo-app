import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});



store.dispatch(createTodo('06', 'Learn Redux', '2023-08-01 10:32', 'Hello you can learn'));
store.dispatch(createTodo('07', 'Learn ABC', '2023-08-01 10:32', 'Hello you can learn'));

// store.dispatch({
//   type: "create_todo",
//   payload: {
//     id: '02',
//     task: 'Learn React',
//     dateTime: '2023/11/29 20:30',
//     desc: 'Learn React with REDUX',
//     status: 'notStarted',
//   },
// });

//Action creator
function createTodo(id, task, dateTime, desc) {
  return {
    type: "create_todo",
    payload: {
      id,
      task,
      dateTime,
      desc,
      status:'notStarted',
    },
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
