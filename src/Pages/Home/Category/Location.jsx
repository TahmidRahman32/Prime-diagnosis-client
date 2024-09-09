import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
const AnyReactComponent = ({ text }) => (
   <div>
      <FaMapMarkerAlt className="text-red-700 text-2xl" />
   </div>
);
const Location = () => {
     const defaultProps = {
        center: {
           lat: 23.8041,
           lng: 90.4152,
        },
        zoom: 11,
     };
   return (
      <div>
         <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyAkMB05bMf0c9Y0T8afQ58RpxBOhrgmbWI" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
               <AnyReactComponent lat={defaultProps.center.lat} lng={defaultProps.center.lng} text="My Marker" />
            </GoogleMapReact>
         </div>
      </div>
   );
};

export default Location;
