export function api_calling(){
  var newPlanets = [];
  const fetches = fetching();
  return (
  // Promise.all to get all data from URL in parallel (speed)
  Promise.all(fetches).then(data => {
    // push all "results" field into newPlanets
    for (var i = 0; i < 7; i++) {
      for (var n = 0; data[i].results[n] !== undefined; n++) {
        newPlanets.push(data[i].results[n]);
      }
    }
    return newPlanets
  })
  );
}

function fetching() {
  // puts all fetch(url) into an array to be passed into api_calling()
  const baseURL = 'https://swapi.co/api/planets/?page='
  let fetches = []
  for (var i = 1; i <= 7; i++) {
    // parses each response to json format
    fetches.push(fetch(baseURL + i).then(resp => resp.json()))
  }
  return fetches
}