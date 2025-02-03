import React from "react";
import { useState, useEffect } from "react";
import supabase from "../../config/contactClient";

const Anesthesiology = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const { data, error } = await supabase
        .from("departments")
        .select("images");

      if (error) {
        console.error("error fetching images");
      } else {
        setImages(data);
        console.log(data);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1>helleo</h1>
      <div className="">
        {images.map((img, index) => {
          return <img key={index} src={img.images} alt={`Image-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default Anesthesiology;
