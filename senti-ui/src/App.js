import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function App() {
  const subsections = [
    { id: 1, title: 'Subsection 1', jobName: 'Job1' },
    { id: 2, title: 'Subsection 2', jobName: 'Job2' },
    { id: 3, title: 'Subsection 3', jobName: 'Job3' },
    { id: 4, title: 'Subsection 4', jobName: 'Job4' },
    // Add more subsections as needed
  ];

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '50px',
            backgroundColor: 'lightgray',
            padding: '20px',
            height: '100vh',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , position : 'fixed'}}>
            <FontAwesomeIcon icon={faBars} style={{fontSize : '1.5em', paddingTop : "30px"}}/>
            <FontAwesomeIcon icon={faChartLine} style={{fontSize : '1.5em', paddingTop : '100px',}} />
            <p style={{ marginTop: '10px' }}>Jobs</p>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <header style={{ background: 'lightblue', padding: '10px' }}>
            <h1 style={{ fontSize: '40px', margin: '0', paddingLeft: '100px' }}>Jobs</h1>
          </header>

          <div style={{ marginTop: '50px' }}>
            {/* Code for entering job */}
          </div>

          <h2 style={{ marginTop: '50px', marginLeft: '100px', marginBottom: '5px' }}>All Jobs</h2>
          <div
            style={{
              marginLeft: '100px',
              marginRight: '100px',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid grey',
              minHeight: '200px',
            }}
          >
            <div style={{ display: 'flex', borderBottom: '1px solid grey', padding: '10px' }}>
              <h3 style={{ flex: 1, textAlign: 'center' }}>Jobs</h3>
              <h3 style={{ flex: 1, textAlign: 'center' }}>Status</h3>
              <h3 style={{ flex: 1, textAlign: 'center' }}>Action</h3>
            </div>
            <div style={{ flex: 1, overflow: 'auto' }}>
              {subsections.map((subsection) => (
                <div key={subsection.id} style={{ borderBottom: '1px solid grey', padding: '10px' }}>
                  <div style={{ display: 'flex', padding: '10px' }}>
                    <div style={{ flex: 1, marginTop: '15px', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                      <select className="custom-dropdown">
                        <option disabled selected>{subsection.jobName}</option>
                        <option>Edit Name</option>
                        <option>Delete Job</option>
                      </select>
                    </div>
                    <h3 style={{ flex: 1, textAlign: 'center' }}>Status</h3>
                    <h3 style={{ flex: 1, textAlign: 'center' }}>Action</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
