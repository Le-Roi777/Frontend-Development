function contactMap() {
    var mapPos= {
      center:new google.maps.LatLng(52.3667,4.8945),
      zoom:7,
    };
    var map = new google.maps.Map(document.getElementById("map_container"),mapPos);
    }