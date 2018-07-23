sendApiRequest();

function sendApiRequest() {
    fetch(`https://data.cityofnewyork.us/resource/rreq-n6zk.json`)
    .then(function(data) {
      return data.json();
      
    })
    .then(function(json) {
      console.log(json);
      
      const wantedData = json.map( zip => {
          const data = {
           jurisdiction: zip.jurisdiction_name,
           percent_black: zip.percent_black_non_hispanic,
           percent_white:zip.percent_white_non_hispanic,
           percent_asian:zip.percent_asian_non_hispanic,
           percent_hispanic:zip.percent_hispanic_latino,
          }
          return data
      })
      .sort( (zip1, zip2) => {
          return zip2.percent_black - zip1.percent_black
      })
      console.log(wantedData)
      // Pass the JSON on to the next function.
      //var myURL = getImageURLfrom(json);
      //addImageToScreen(myURL)
    });
};

function giveMeTheMap() {// The location of Uluru
 var manhattan = {lat: 40.783060, lng: -73.971249};
 var locations = [manhattan]
 var map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: manhattan});


 var rectangle_10009 = new google.maps.Rectangle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          bounds: {
            north: 40.735,
            south: 40.718,
            east: -73.961,
            west: -73.988
          }
        });
 /* locations.forEach( city =>{
   var marker = new google.maps.Marker({position: city, map: map});
 }) */ 
 
 
 
 } 



// function displayMap(){
//     let output = document.querySelector('#output')
//     var manhattan = {lat: 40.783060, lng: -73.971249}
  
//     // output.innerHTML = '<p>Latitude is ' + newYork.lat + '° <br>Longitude is ' + newYork.lng + '°</p>';
//     var img = new Image()
//     img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + manhattan.lat + "," + manhattan.lng + "&zoom=15&size=500x500&sensor=false"
//     output.appendChild(img)
    
    
// }
// displayMap()
// let manhattan =document.querySelector("#manhattan")