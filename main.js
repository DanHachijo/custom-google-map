let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "876806baa0024d81",
    center: { lat: 40.73090330192132, lng: -73.99024079492982 },
    zoom: 17,
  });

  const markers = [
    {
      title: "一風堂",
      lat: 40.73090330192132,
      lng: -73.99024079492982,
      url: "./javascript.svg",
      width: 38,
      height: 38,
    },
    {
      title: "ICHIRAN Ramen ",
      lat: 40.76010005715904,
      lng: -73.98328257794572,
      url: "./javascript.svg",
      width: 38,
      height: 38,
    },
  ];

  markers.map((currMarker) => {


    const marker = new google.maps.Marker({
      position: { lat: currMarker.lat, lng: currMarker.lng },
      icon: {
        url: currMarker.url,
        scaledSize: new google.maps.Size(currMarker.width, currMarker.height),
      },
      map,
      title: currMarker.title,
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker.title,
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  });

}
window.initMap = initMap;
