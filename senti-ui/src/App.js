import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  const subsections = [
    { id: 1, title: 'Subsection 1', jobName: 'Job1' },
    { id: 2, title: 'Subsection 2', jobName: 'Job2' },
    { id: 3, title: 'Subsection 3', jobName: 'Job3' },
    // Add more subsections as needed
  ];

  

  return (

    

    <div>
            <div style={{display : 'flex'}}>


                      <div style={{ width: '80px', backgroundColor: 'lightgray', padding: '20px', height: '100vh' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <FontAwesomeIcon icon="fa-solid fa-chart-line-up" />
                          <p style={{ marginTop: '10px' }}>Jobs</p>
                        </div>
                      </div>

                      

                      <div style={{ flex : 1,  display: 'flex', flexDirection: 'column'}}>
                              <header style={{ background: 'lightblue', padding: '10px' }}>
                                <h1 style={{ fontSize: '40px', margin: '0', paddingLeft: '100px' }}>Jobs</h1>
                              </header>

                              <div style={{ marginTop: '50px' }}>

                                <h2 style={{ marginLeft: '100px', marginBottom: '5px' }}>Enter Job</h2>
                                <div style={{ marginTop: '0px', marginLeft: '100px', marginRight: '100px', paddingBottom: '20px', paddingTop: '20px', paddingLeft: '50px', paddingRight: '50px', border: '1px solid grey', position: 'relative' }}>

                                  <div style={{ marginBottom: '10px', display: 'inline-block' }}>
                                    <label htmlFor="category" style={{ display: 'block', marginBottom: '5px' }}>Category:</label>
                                    <input type="text" id="category" style={{ width: '250px', height: '30px' }} />
                                  </div>

                                  <div style={{ marginBottom: '10px', display: 'inline-block', paddingLeft: '50px' }}>
                                    <label htmlFor="enrichmentID" style={{ display: 'block', marginBottom: '5px' }}>Enrichment ID:</label>
                                    <input type="text" id="enrichmentID" style={{ width: '250px', height: '30px' }} />
                                  </div>

                                  <div style={{ marginTop: '10px', display: 'inline-block', right: '40px' }}>
                                    <button style={{ height: '30px', width: '90px', position: 'absolute', right: '30px', bottom: '30px' }}>Submit</button>
                                  </div>

                                </div>

                              </div>

                              
                              <h2 style={{ marginTop: '50px', marginLeft: '100px', marginBottom: '5px' }}>All Jobs</h2>
                              <div style={{ marginLeft: '100px', marginRight: '100px', display: 'flex', flexDirection: 'column', border: '1px solid grey', minHeight: '200px' }}>
                                <div style={{ display: 'flex', borderBottom: '1px solid grey', padding: '10px' }}>
                                  <h3 style={{ flex: 1, textAlign: 'center' }}>Jobs</h3>
                                  <h3 style={{ flex: 1, textAlign: 'center' }}>Status</h3>
                                  <h3 style={{ flex: 1, textAlign: 'center' }}>Action</h3>
                                </div>
                                <div style={{ flex: 1, overflow: 'auto' }}>
                                  {subsections.map((subsection) => (
                                    <div key={subsection.id} style={{ borderBottom: '1px solid grey', padding: '10px' }}>

                            
                                          <div style={{ display: 'flex', padding: '10px' }}>

                                            <div style={{ flex: 1, marginTop : '15px', marginBottom : '15px' , display: 'flex', alignItems: 'center' }}>
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


