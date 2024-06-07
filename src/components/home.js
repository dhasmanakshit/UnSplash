import { useState } from "react";
import Header from "./header";
import Photos from "./photos";
import { useSelector } from "react-redux";
import useFetchAllPhotos from "../hooks/useFetchAllPhotos";

function Home() {
  useFetchAllPhotos()     // custom hook to get photos & store in redux
  const allPhotos = useSelector((store) => store.photosSlice.allPhotos)   // subscribing to redux - AllPhotos

  return (
    <>
      <Header />
      <Photos data={allPhotos} />
    </>
  );
}

export default Home;
