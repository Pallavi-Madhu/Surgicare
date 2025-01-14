import React, { useEffect, useRef } from "react";
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

  useEffect(() => {             //creating new map
    const map = new Map({
      target: mapRef.current,    //load the current mapRef value
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat(coordinates),   //center the map on provided coordinates
        zoom: 15,                          // to set zoom
      }),
      controls: defaultControls({ attribution: false }),  //to remove copyright
    });

    mapInstance.current = map;

    const markerSource = new VectorSource();    //create marker
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
      map.setTarget(null);   //cleanup after component unmounts
    };
  }, [coordinates, markericon]);

  // Zoom In Handler
  const handleZoomIn = () => {
    const view = mapInstance.current.getView();   //access map's view
    const currentZoom = view.getZoom();           //get current zoom level
    view.setZoom(currentZoom + 1);                //increase the zoom level
  };

  // Zoom Out Handler
  const handleZoomOut = () => {
    const view = mapInstance.current.getView();
    const currentZoom = view.getZoom();
    view.setZoom(currentZoom - 1);
  };

  return (
    <div
      style={{ position: "relative", width: "600px", height: "300px" }}
      className="rounded-lg shadow-lg overflow-hidden border border-gray-300"
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
            background: "#007BFF",    // Blue background for visibility
            color: "#fff",            // White text for contrast
            border: "none",           // Remove border for a clean look
            borderRadius: "50%",      // Circular buttons
            width: "40px",           // Larger button size
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
            background: "#007BFF", // Blue background for visibility
            color: "#fff", // White text for contrast
            border: "none", // Remove border for a clean look
            borderRadius: "50%", // Circular buttons
            width: "40px", // Larger button size
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
  );
};


const TwoMaps = () => {
  const handleMapClickKozhikode = (e) => {       //handler
    e.stopPropagation();
    const gmapurl = "https://www.google.com/maps?q=11.279657,75.785949";
    window.open(gmapurl, "_blank");               //open in a new tab
  };

  const handleMapClickErnakulam = (e) => {        //handler
    e.stopPropagation();
    const gmapurl = "https://www.google.com/maps?q=10.054821,76.282686";
    window.open(gmapurl, "_blank");                //open in a new tab
  };

  return (
    <div
      className="flex justify-between items-center gap-20 p-8" // Added gap between maps
    >
      <div className=" rounded-xl shadow-xl">
        <MapComponent
          coordinates={[76.282686, 10.054821]} // Ernakulam coordinates
          markericon="https://openlayers.org/en/v6.5.0/examples/data/icon.png"
          onClick={handleMapClickErnakulam} // Pass click handler for Ernakulam
          style={{ width: "600px", height: "300px" }}
        />
      </div>
      <div className=" rounded-xl shadow-xl">
        <MapComponent
          coordinates={[75.785949, 11.279657]} // Kozhikode coordinates
          markericon="https://openlayers.org/en/v6.5.0/examples/data/icon.png"
          onClick={handleMapClickKozhikode} // Pass click handler for Kozhikode
          style={{ width: "600px", height: "300px" }}
        />
      </div>
    </div>
  );
};

export default TwoMaps;
