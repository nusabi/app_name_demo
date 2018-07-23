function giveMeTheMap() {// The location of Uluru

 var brooklyn ={lat:40.678178 , lng:-73.944158};
 var locations = [staten,queens,manhattan,bronx,brooklyn]
 var map = new google.maps.Map(document.getElementById('map'), {zoom: 2, center: brooklyn});
 
  locations.forEach( city =>{
   var marker = new google.maps.Marker({position: city, map: map});
 })
}

function displayMap(){
    let output = document.querySelector('#output')
    
     var brooklyn ={lat:40.678178 , lng:-73.944158};
   
   
    // output.innerHTML = '<p>Latitude is ' + newYork.lat + '° <br>Longitude is ' + newYork.lng + '°</p>';
    var img = new Image()
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + brooklyn.lat + "," + brooklyn.lng + "&zoom=15&size=500x500&sensor=false"
    output.appendChild(img)
    
    
}
displayMap()