import React from 'react';

function App() {
  return (
    <div>
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
      <div style={{ marginLeft: '100px', marginRight: '100px', height: '100%', overflow: 'auto' }}>
        <div style={{ display: 'flex', border: '1px solid grey' }}>
          <div style={{ flex: 1, borderRight: '1px solid grey', borderBottom: '1px solid grey', paddingRight: '10px', height: '70px' }}>
            <h3 style={{ textAlign: 'center' }}>Jobs</h3>
          </div>
          <div style={{ flex: 1, borderRight: '1px solid grey', borderBottom: '1px solid grey', paddingRight: '10px', height: '70px' }}>
            <h3 style={{ textAlign: 'center' }}>Status</h3>
          </div>
          <div style={{ flex: 1, borderBottom: '1px solid grey', paddingRight: '10px', height: '70px' }}>
            <h3 style={{ textAlign: 'center' }}>Action</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
