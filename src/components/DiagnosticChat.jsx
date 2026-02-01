import React from 'react';
import './DiagnosticChat.css';
import logo from '../assets/Medibridge__logo.png'; 

const DiagnosticChat = () => {
  return (
    <div className="chat-page-bg">
      <div className="chat-container">
       
        <div className="side-panel">
          <div className="logo-section">
            
            <img src={logo} alt="MediBridge Logo" className="brand-logo" />
          </div>
          <div className="patient-meta">
            <p><strong>Patient Name:</strong> John Doe</p>
            <p><strong>Ref No:</strong> 2233764859</p>
          </div>
        </div>

        {/* Right Chat Area */}
        <div className="chat-window">
          <div className="message-list">
            <div className="msg-wrapper dr">
              <span className="sender-label">Dr.</span>
              <div className="bubble">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>

            <div className="msg-wrapper you">
              <span className="sender-label">You</span>
              <div className="bubble">Vestibulum id urna sed mi porta hendrerit at ac enim.</div>
            </div>

            <div className="msg-wrapper dr">
              <span className="sender-label">Dr.</span>
              <div className="bubble">Fusce placerat id mi sed ullamcorper.</div>
            </div>

            <div className="msg-wrapper you">
              <span className="sender-label">You</span>
              <div className="bubble">Curabitur faucibus metus elit.</div>
            </div>
          </div>

          <div className="input-area">
            <input type="text" placeholder="Enter about your diagnosis" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DiagnosticChat;