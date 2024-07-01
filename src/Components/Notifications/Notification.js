// src/Components/Notification/Notification.js
import React from 'react';
import { Alert } from 'react-bootstrap';
import './Notification.css';

function Notification({ message, show }) {
  return (
    <>
      {show && (
        <div className="notification">
          <Alert variant="success">
            {message}
          </Alert>
        </div>
      )}
    </>
  );
}

export default Notification;
