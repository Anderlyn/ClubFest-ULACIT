import React from 'react';

function VideoButton(props) {
  return (
    <>
      <br />
      <a href={props.link}>
        <div class="detail-container-principal-btn detail-container-button2">
          <span> Ver Video</span>
          <i class="material-icons">play_circle_filled</i>
        </div>
      </a>
    </>
  );
}

function Detail(props) {
  let img_url = './img/logos/' + props.logo_url + '.png';
  return (
    <div class="detail-container">
      <div class="detail-container-card">
        <div class="detail-container-image-container">
          <img
            class="detail-container-image"
            src={img_url}
            alt={props.name}
          ></img>
        </div>
        <h1 class="detail-container-title">{props.name}</h1>
        <a href={props.meeting_link}>
          <div class="detail-container-principal-btn detail-container-button1">
            <span> Entrar a la charla</span>
            <i class="material-icons">arrow_forward</i>
          </div>
        </a>
        {props.video_link ? <VideoButton link={props.video_link} /> : ''}
        <br />
        <a
          onClick={() => {
            props.action();
          }}
        >
          <div class="detail-container-secondary-btn detail-container-button3">
            <span>Volver a la Lista</span>
            <i class="material-icons">view_list</i>
          </div>
        </a>
        <br />
      </div>
    </div>
  );
}
export { Detail };
