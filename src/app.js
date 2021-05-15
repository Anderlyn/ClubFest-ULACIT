import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Data_Model } from './data-model';
import { Button } from './components/button';
import { Detail } from './components/detail';

import './app.scss';

function App() {
  let scroll = 0;
  let [meetings, setMeetings] = useState([
    // Monday
    new Data_Model(
      'Wellness Club',
      '9:00am – 10:00am',
      'https://ulacit.zoom.us/j/97982348200',
      null,
      'wellness',
      'lunes'
    ),
    new Data_Model(
      'Basketball Club',
      '2:00pm – 3:00pm',
      'https://ulacit.zoom.us/j/95790679751',
      null,
      'sports',
      'lunes'
    ),
    new Data_Model(
      'Feria de Emprendimientos',
      '3:00pm – 4:00pm',
      'https://ulacit.zoom.us/j/97042833086',
      null,
      'leadership',
      'lunes'
    ),
    new Data_Model(
      'International Club',
      '4:00pm – 5:00pm',
      'https://ulacit.zoom.us/j/92647034306',
      null,
      'international',
      'lunes'
    ),
    new Data_Model(
      'Civic House',
      '5:00pm – 6:00pm',
      'https://ulacit.zoom.us/j/92984648802',
      null,
      'civic',
      'lunes'
    ),
    // Martes
    new Data_Model(
      'Diversity Club',
      '10:00am – 11:00am',
      'https://ulacit.zoom.us/j/94629344001',
      null,
      'diversity',
      'martes'
    ),
    new Data_Model(
      'Falcon Rockapellas (Club de Canto)',
      '3:00pm – 4:00pm',
      'https://ulacit.zoom.us/j/98860690452',
      null,
      'rockapellas',
      'martes'
    ),
    new Data_Model(
      'Green Club',
      '4:00pm – 5:00pm',
      'https://ulacit.zoom.us/j/99991684374',
      null,
      'green',
      'martes'
    ),
    new Data_Model(
      'Innovation Club',
      '5:00pm – 6:00pm',
      'https://ulacit.zoom.us/j/91355034064',
      null,
      'innovation',
      'martes'
    ),
    // Miercoles
    new Data_Model(
      'Agenda Wellness con Warner Rojas',
      '2:00pm – 3:00pm',
      'https://ulacit.zoom.us/j/95612782555',
      null,
      'wellness',
      'miercoles'
    ),
    new Data_Model(
      'Debate Club',
      '3:00pm – 4:00pm',
      'https://ulacit.zoom.us/j/91317908963',
      null,
      'debate',
      'miercoles'
    ),
    new Data_Model(
      'Young Women’s Club',
      '4:00pm – 5:00pm',
      'https://ulacit.zoom.us/j/91073421900',
      null,
      'youngwomen',
      'miercoles'
    ),
    new Data_Model(
      'Falcon D Squad (Club de Baile)',
      '5:00pm – 6:00pm',
      'https://ulacit.zoom.us/j/97028444602',
      null,
      'falcond',
      'miercoles'
    ),
    // Jueves
    new Data_Model(
      'English Club',
      '12:00pm – 1:00pm',
      'https://ulacit.zoom.us/j/95242271127',
      null,
      'english',
      'jueves'
    ),
    new Data_Model(
      'Falcon Fury Marching Band',
      '3:00pm – 4:00pm',
      'https://ulacit.zoom.us/j/97919978529',
      null,
      'marching',
      'jueves'
    ),
    new Data_Model(
      'The Great 28 (Club de Audiovisuales)',
      '4:00pm – 5:00pm',
      'https://ulacit.zoom.us/j/93083633000',
      null,
      'great28',
      'jueves'
    ),
    // Viernes
    new Data_Model(
      'Soccer Club',
      '2:00pm – 3:00pm',
      'https://ulacit.zoom.us/j/91557549525',
      null,
      'sports',
      'viernes'
    ),
    new Data_Model(
      'Volleyball Club',
      '3:00pm – 4:00pm',
      'https://ulacit.zoom.us/j/92396533382',
      null,
      'sports',
      'viernes'
    ),
    new Data_Model(
      'Traspaso de Poderes GOES',
      '4:00pm – 5:00pm',
      'https://ulacit.zoom.us/j/99326777853',
      null,
      'leadership',
      'viernes'
    ),
    new Data_Model(
      'Concierto de Bienveniida',
      '5:00pm – 6:00pm',
      'https://ulacit.zoom.us/j/99326777853',
      null,
      'leadership',
      'viernes'
    ),
  ]);
  let [place, setPlace] = useState('list');
  let [index, setIndex] = useState(0);
  let selectOption = (index) => {
    scroll = 0;
    setIndex(index);
    setPlace('detail');
  };
  let backToOptions = () => {
    setPlace('list');
    window.scrollTo(0, scroll);
  };
  if (place === 'list') {
    return (
      <div class="principal-grid">
        <div class="principal-grid-header">
          <div class="principal-grid-title">
            <h1>Feria Virtual de Clubes</h1>
            <p>
              por el Innovation Club - Desarrollado por André López & Roy Vargas
            </p>
          </div>
          <div>
            <a href="https://www.ulacit.ac.cr/es/" target="_blank">
              <img
                alt="Logo de la Universidad"
                class="principal-grid-logo"
                src="./img/logo_ulacit.png"
              />
            </a>
          </div>
        </div>
        <h2 class="principal-grid-date">Lunes 17 de Mayo 2021</h2>
        <div class="principal-grid-list">
          {meetings.map((data, i) =>
            data.day == 'lunes' ? (
              <Button action={selectOption} indexObject={i} {...data} />
            ) : (
              ''
            )
          )}
        </div>
        <h2 class="principal-grid-date">Martes 18 de Mayo 2021</h2>
        <div class="principal-grid-list">
          {meetings.map((data, i) =>
            data.day == 'martes' ? (
              <Button action={selectOption} indexObject={i} {...data} />
            ) : (
              ''
            )
          )}
        </div>
        <h2 class="principal-grid-date">Miercoles 19 de Mayo 2021</h2>
        <div class="principal-grid-list">
          {meetings.map((data, i) =>
            data.day == 'miercoles' ? (
              <Button action={selectOption} indexObject={i} {...data} />
            ) : (
              ''
            )
          )}
        </div>
        <h2 class="principal-grid-date">Jueves 20 de Mayo 2021</h2>
        <div class="principal-grid-list">
          {meetings.map((data, i) =>
            data.day == 'jueves' ? (
              <Button action={selectOption} indexObject={i} {...data} />
            ) : (
              ''
            )
          )}
        </div>
        <h2 class="principal-grid-date">Viernes 21 de Mayo 2021</h2>
        <div class="principal-grid-list">
          {meetings.map((data, i) =>
            data.day == 'viernes' ? (
              <Button action={selectOption} indexObject={i} {...data} />
            ) : (
              ''
            )
          )}
        </div>
      </div>
    );
  } else if (place === 'detail') {
    return <Detail action={backToOptions} {...meetings[index]} />;
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
