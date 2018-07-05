import React from 'react';
import Modal from 'react-responsive-modal';
import '../component-styles/ClinicModal.css';

function ClinicModal({item, onCloseModal}){
  const contents = item && (<div><h1 className="title">{item.name}</h1>
          <h2 className="title">Wait Time: {item.wait}</h2>
          <button className="button">Get In line</button><br />
          <div className="link">
            <a href="">Login</a> or <a href="">Sign up</a>
          </div></div>)
  return <div className="clinic-modal">
        <Modal open={!!item} onClose={onCloseModal} center>
          {contents}
        </Modal>
      </div>

}


export default ClinicModal;