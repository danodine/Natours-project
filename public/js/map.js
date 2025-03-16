/* eslint-disable */
function initMap() {
    const mapElement = document.getElementById("map");
    if (!mapElement) {
      console.error("Map element not found!");
      return;
    }
  
    const locations = JSON.parse(mapElement.dataset.locations);
  
    // ✅ Set default map center (first location or fallback)
    const center = locations.length > 0
      ? { lat: locations[0].coordinates[1], lng: locations[0].coordinates[0] }
      : { lat: 0, lng: 0 };
  
    const map = new google.maps.Map(mapElement, {
      zoom: 8,
      center: center,
    });
  
    // ✅ Add Markers
    locations.forEach((loc) => {
      new google.maps.Marker({
        position: { lat: loc.coordinates[1], lng: loc.coordinates[0] },
        map: map,
        title: `Day ${loc.day}: ${loc.description}`,
      });
    });
  }