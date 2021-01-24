import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Data_Model } from './data-model';
import { Button } from './components/button';
import { Detail } from './components/detail';

import './app.scss';

function App() {
  let scroll = 0;
  let [meetings, setMeetings] = useState([
    new Data_Model(
      'Wellness Club',
      '10:00am – 11:00am',
      'https://ulacit.zoom.us/j/96039347343',
      null,
      'wellness'
    ),
    new Data_Model(
      'Debate Club',
      '10:00am – 11:00am',
      'https://ulacit.zoom.us/j/98925145035',
      null,
      'debate'
    ),
    new Data_Model(
      'English Club',
      '10:00am – 11:00am',
      'https://ulacit.zoom.us/j/99941946188',
      null,
      'english'
    ),
    new Data_Model(
      'Green Club',
      '11:00am – 12:00pm',
      'https://ulacit.zoom.us/j/92742460419',
      null,
      'green'
    ),
    new Data_Model(
      'International Club',
      '11:00am – 12:00pm',
      'https://ulacit.zoom.us/j/97254839076',
      null,
      'international'
    ),
    new Data_Model(
      'Basketball Club',
      '11:00am – 12:00pm',
      'https://ulacit.zoom.us/j/96457613279',
      null,
      'sports'
    ),
    new Data_Model(
      'Volleyball Club',
      '12:00pm – 1:00pm',
      'https://ulacit.zoom.us/j/95341672086',
      null,
      'sports'
    ),
    new Data_Model(
      'Diversity Club',
      '12:00pm – 1:00pm',
      'https://ulacit.zoom.us/j/91819418798',
      null,
      'diversity'
    ),
    new Data_Model(
      'Falcon Fury Marching Band',
      '12:00pm – 1:00pm',
      'https://ulacit.zoom.us/j/91089545841',
      null,
      'marching'
    ),
    new Data_Model(
      'Falcon Rockapellas',
      '1:00pm – 2:00pm',
      'https://ulacit.zoom.us/j/96813484693',
      null,
      'rockapellas'
    ),
    new Data_Model(
      'Innovation Club',
      '1:00pm – 2:00pm',
      'https://ulacit.zoom.us/j/97478728330',
      null,
      'innovation'
    ),
    new Data_Model(
      'Civic House',
      '3:00pm – 4:00pm',
      'https://ulacit.zoom.us/j/97222547504',
      null,
      'civic'
    ),
    new Data_Model(
      'Falcon D Squad',
      '3:00pm – 4:00pm',
      'https://ulacit.zoom.us/j/95746511162',
      null,
      'falcond'
    ),
    new Data_Model(
      'Young Women’s Club',
      '4:00pm – 5:00pm',
      'https://ulacit.zoom.us/j/94590107988',
      null,
      'youngwomen'
    ),
    new Data_Model(
      'Soccer Club',
      '4:00pm – 5:00pm',
      'https://ulacit.zoom.us/j/95098592737',
      null,
      'sports'
    ),
    new Data_Model(
      'The Great 28',
      '4:00pm – 5:00pm',
      'https://ulacit.zoom.us/j/96887447942',
      null,
      'great28'
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
        <h2 class="principal-grid-date">Miercoles 27 de Enero 2021</h2>
        <div class="principal-grid-list">
          {meetings.map((data, i) => (
            <Button action={selectOption} indexObject={i} {...data} />
          ))}
        </div>
      </div>
    );
  } else if (place === 'detail') {
    return <Detail action={backToOptions} {...meetings[index]} />;
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
