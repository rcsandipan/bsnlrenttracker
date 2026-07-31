 if (sessionStorage.getItem('isLoggedIn') !== 'true') {
    // If not logged in, redirect to login page
    window.location.href = 'index.html';
  }
    document.getElementById('exchBtn').addEventListener('click', () => {
      window.location.href = 'exchange.html';
    });

    document.getElementById('btsBtn').addEventListener('click', () => {
      window.location.href = 'bts.html';
    });

     document.getElementById('usobtsBtn').addEventListener('click', () => {
      window.location.href = 'usobts.html';
    });
     document.getElementById('logoutBtn').addEventListener('click', () => {
      sessionStorage.clear(); 
      window.location.href = 'index.html';
    });