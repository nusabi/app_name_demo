function giveMeTheMap() {// The location of Uluru

 var queens = {lat:40.728224 , lng:-73.794852 };
 var locations = [staten,queens,manhattan,bronx,brooklyn]
 var map = new google.maps.Map(document.getElementById('map'), {zoom: 2, center: manhattan});
 
  locations.forEach( city =>{
   var marker = new google.maps.Marker({position: city, map: map});
 })
}

function displayMap(){
    let output = document.querySelector('#output')
   
     var queens = {lat:40.728224 , lng:-73.794852 };
    // output.innerHTML = '<p>Latitude is ' + newYork.lat + '° <br>Longitude is ' + newYork.lng + '°</p>';
    var img = new Image()
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + queens.lat + "," + queens.lng + "&zoom=15&size=500x500&sensor=false"
    output.appendChild(img)
    
    
}
displayMap()