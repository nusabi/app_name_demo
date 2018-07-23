function giveMeTheMap() {// The location of Uluru
 var bronx = {lat:40.844782 , lng:-73.864827 };
 var locations = [staten,queens,manhattan,bronx,brooklyn]
 var map = new google.maps.Map(document.getElementById('map'), {zoom: 2, center: bronx});
 
  locations.forEach( city =>{
   var marker = new google.maps.Marker({position: city, map: map});
 })
}

function displayMap(){
    let output = document.querySelector('#output')
    
    var bronx = {lat:40.844782 , lng:-73.864827 };
    // output.innerHTML = '<p>Latitude is ' + newYork.lat + '° <br>Longitude is ' + newYork.lng + '°</p>';
    var img = new Image()
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + bronx.lat + "," + bronx.lng + "&zoom=15&size=500x500&sensor=false"
    output.appendChild(img)
}
displayMap()