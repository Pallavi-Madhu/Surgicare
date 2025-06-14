import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Optional but good practice for type-checking
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import { defaults as defaultControls } from "ol/control";


const MapComponent = ({ coordinates, markericon, onClick }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: 15,
      }),
      controls: defaultControls({ attribution: false }),
    });

    mapInstance.current = map;

    const markerSource = new VectorSource();
    const markerLayer = new VectorLayer({
      source: markerSource,
      style: new Style({
        image: new Icon({
          src:
            markericon ||
            "https://openlayers.org/en/v6.5.0/examples/data/icon.png",
          anchor: [0.5, 1],
        }),
      }),
    });

    const marker = new Feature({
      geometry: new Point(fromLonLat(coordinates)),
    });

    markerSource.addFeature(marker);
    map.addLayer(markerLayer);

    return () => {
      map.setTarget(null); // cleanup on unmount
    };
  }, [coordinates, markericon]);

  // Zoom In Handler
  const handleZoomIn = () => {
    const view = mapInstance.current.getView();
    const currentZoom = view.getZoom();
    view.setZoom(currentZoom + 1);
  };

  // Zoom Out Handler
  const handleZoomOut = () => {
    const view = mapInstance.current.getView();
    const currentZoom = view.getZoom();
    view.setZoom(currentZoom - 1);
  };

  return (
    <div className="p-9 w-full flex flex-col sm:flex-row justify-center items-center gap-5">
      <div
        style={{ width: "400px", height: "300px" }} // Retaining the fixed width and height
        className="rounded-lg  shadow-lg overflow-hidden border border-gray-300 relative"
      >
        <div
          ref={mapRef}
          onClick={onClick}
          style={{ width: "100%", height: "100%" }}
        />
        {/* Zoom Controls */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <button
            onClick={handleZoomIn}
            style={{
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              border: "1px solid #ccc",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            style={{
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              border: "1px solid #ccc",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

MapComponent.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  markericon: PropTypes.string,
  onClick: PropTypes.func,
};

const TwoMaps = () => {
  const handleMapClickKozhikode = (e) => {
    e.stopPropagation();
    const gmapurl = "https://www.google.com/maps?q=11.279657,75.785949";
    window.open(gmapurl, "_blank");
  };

  const handleMapClickErnakulam = (e) => {
    e.stopPropagation();
    const gmapurl = "https://www.google.com/maps?q=10.060137,76.286105";
    window.open(gmapurl, "_blank");
  };

  return (
    <div className="sm:flex sm:justify-between flex lg:flex-row flex-col items-center gap-20 p-4">
      <div className="rounded-xl bg-white bg-opacity-5 shadow-xl">
        <MapComponent
          coordinates={[76.286105, 10.060137]}// Ernakulam coordinates
          markericon="https://openlayers.org/en/v6.5.0/examples/data/icon.png"
          onClick={handleMapClickErnakulam}
        />
      </div>
      <div className="rounded-xl bg-white bg-opacity-5 shadow-xl">
        <MapComponent
          coordinates={[75.785949, 11.279657]} // Kozhikode coordinates
          markericon="https://openlayers.org/en/v6.5.0/examples/data/icon.png"
          onClick={handleMapClickKozhikode}
        />
      </div>
    </div>
  );
};

export default TwoMaps;
