import React from 'react';
function Button(props) {
  return (
    <div
      onClick={() => {
        props.action(props.indexObject);
      }}
      class="button-container"
    >
      <h2>{props.name}</h2>
      <p>{props.schedule}</p>
    </div>
  );
}

export { Button };
