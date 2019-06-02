import React from 'react';
import Popup from 'reactjs-popup';

const Card = (props) => {
  return (
    <div className="card">
      <div className="content">
        Username: PaveL <br />
        Password: ABsoft
      </div>
    </div >
  );
}

const TipsCard = (props) => (
  <div className="wrapper" >
    <Popup
      trigger={<button
        style={{ bottom: "35px" }}
        className="btn-floating btn-large waves-effect waves-light pink right">
        <i className="material-icons">add</i>
      </button>}
      position="bottom center"
      on="click"
    >
      <Card />
    </Popup>
  </div >
)



export default TipsCard;