import React from 'react';

const ErrorComponent = ({ message }) => {
  return (
    <div style={{ margin: '20px', padding: '20px', backgroundColor: '#ffcccc', color: '#333', borderRadius: '8px', textAlign: 'center' }}>
      <h2>Error Occurred</h2>
      <p>{message}</p>
      <button onClick={() => window.location.reload()} style={{ padding: '10px 20px', fontSize: '16px', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Retry
      </button>
    </div>
  );
};

export default ErrorComponent;
