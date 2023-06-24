import React from 'react';

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
  },
  leftDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  rightDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    marginRight: '20px',
    fontWeight: 'bold',
  },
  button: {
    marginLeft: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 24px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  input: {
    marginRight: '10px',
    padding: '10px',
    fontSize: '17px',
    border: 'none',
  }
};

function NavigationBar() {
  return (
    <div style={styles.navBar}>
      <div style={styles.leftDiv}>
        <div style={styles.name}>Spotlight</div>
        <input type="text" style={styles.input} placeholder="Search..."/>
      </div>
      <div style={styles.rightDiv}>
        <button style={styles.button}>Login</button>
        <button style={styles.button}>Signup</button>
      </div>
    </div>
  );
}

export default NavigationBar;
