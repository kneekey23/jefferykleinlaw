
import { GoogleMap,  InfoWindow, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
        const libraries = ['places'];
        const mapContainerStyle = {
        width: '100vw',
        height: '100vh',
        };
        const { isLoaded, loadError } = useLoadScript({
            googleMapsApiKey: 'AIzaSyDGMTvUHhOSgHBIqJEfK-2vggNWIWhJrwk',
            libraries,
          });

          if (loadError) {
            return <div>Error loading maps</div>;
          }
        
          if (!isLoaded) {
            return <div>Loading maps</div>;
          }

          const marker = { address: "1600 E 4th St #240 Santa Ana, CA 92701",
                            lat: 33.74804519965786,
                            lng: -117.84727399510291 };
        
        return (
            <div>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={16}
              center={marker}
            >
              <Marker
              position={marker}>
                <InfoWindow position={marker}>
                  <h3>{marker.address}</h3>
                </InfoWindow>
              </Marker>
            </GoogleMap>
          </div>
        )
}
export default Map;