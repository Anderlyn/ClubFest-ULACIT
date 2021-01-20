import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

function App() {
  return (
    <>
      <h1>This is the initial setup!</h1>
      <p>There is a list of things good to do next: </p>
      <ul>
        <li>Check the GitHub repository for new updates.</li>
        <li>Work on a Planner task.</li>
        <li>Go out for a coffee break with some bread.</li>
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
