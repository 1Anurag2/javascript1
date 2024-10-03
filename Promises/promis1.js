async function weather() {
    const delhiweather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("27 degree");
      }, 4000);
    });

    const upweather = new Promise((res, rej) => {
      setTimeout(() => {
        res("45 degree");
      }, 10000);
    });
    console.log("Fetching weather of delhi wait....");
    let delhiw = await delhiweather;
    console.log("Fetched weather of delhi " + delhiw);
    console.log("Fetching weather of up wait....");
    let upw = await upweather;
    console.log("Fetched weather of up " + upw);
    return [delhiw, upw];
  }

  let a = weather();
  a.then((data) => {
    console.log(data);
  });