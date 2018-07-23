function giveMeTheMap() {// The location of Uluru
 var staten = {lat:40.579532 , lng:-74.150201};
 var locations = [staten,queens,manhattan,bronx,brooklyn]
 var map = new google.maps.Map(document.getElementById('map'), {zoom: 2, center: manhattan});
 
  locations.forEach( city =>{
   var marker = new google.maps.Marker({position: city, map: map});
 })
}

function displayMap(){
    let output = document.querySelector('#output')
   
     var staten = {lat:40.579532 , lng:-74.150201};
    // output.innerHTML = '<p>Latitude is ' + newYork.lat + '° <br>Longitude is ' + newYork.lng + '°</p>';
    var img = new Image()
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + staten.lat + "," + staten.lng + "&zoom=15&size=500x500&sensor=false"
    output.appendChild(img)
}
displayMap()