function fetchData(callback) {
    setTimeout(() => {
      callback("Data fetched!");
    }, 1000);
  }
  
  fetchData((data) => {
    console.log(data); // Output: Data fetched!
  });
  