import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Data_Model } from './data-model';
import './app.scss';

function App() {
  let [meetings, setMeetings] = useState([
    new Data_Model(
      'Example',
      '00:00pm - 00:00pm',
      'https://link.com',
      null,
      null
    ),
  ]);
  return (
    <div class="principal-grid">
      <div class="principal-grid-header">
        <div class="principal-grid-title">
          <h1>Feria Virtual de Clubes</h1>
          <p>por el Innovation Club - Desarrollado por André L & Roy V</p>
        </div>
      </div>
      <div class="principal-grid-list">
        <div class="blank">Example button</div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
