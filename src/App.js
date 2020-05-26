import React from 'react';
import '../src/scss/style.scss';
import Quiz from './components/Quiz';
function App() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="App">
      <div className="Appheader">
        <div className="container">
          <header className="header" onClick={refreshPage}>
            What Type of Person Are You In Quarantine?
          </header>
          <div className="Appheader-content">
            <Quiz className="content-box" />
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
