import { useEffect, useState } from "react";
import Header from "./header";
import Photos from "./photos";
import { useDispatch, useSelector } from "react-redux";
import useFetchAllPhotos from "../hooks/useFetchAllPhotos";
import { appendAllPhotos } from "../utils/photosSlice";
import { api_access_key, api_main } from "../utils/constants";
import LoadingGif from "./loadingGif";

function Home() {
  useFetchAllPhotos() // custom hook to get photos & store in redux
  const [showLoading, setShowLoading] = useState(false)

  const allPhotos = useSelector((store) => store.photosSlice.allPhotos)   // subscribing to redux - AllPhotos
  const dispatch = useDispatch()
  const [atPage, setAtPage] = useState(1)
  const noOfColumns = useSelector((store) => store.settingSlice.noOfColumns)

  // fetch more data on 'atPage' change
  const fetchMoreData = async () => {
    setShowLoading(true)
    var lol = [];

    for (var i = 0; i < noOfColumns; i++) {
      const res = await fetch(api_main + "/photos?" + api_access_key + "&page=" + (((atPage - 1) * noOfColumns + 1) + i));
      const json = await res.json()
      // console.log(typeof (json), json)
      lol[i] = (json)
    }

    dispatch(appendAllPhotos(lol))
    setShowLoading(false)
  }
  useEffect(() => { fetchMoreData() }, [atPage])

  // infinite scroll increment 'atpage'
  const [totalPosts, setTotalPosts] = useState(50);
  const [visible, setVisible] = useState(0);
  const handleOnScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      // if (atpage < 10)
      console.log("end of home page")
      setAtPage((prev) => prev + 1)
    }
  };
  useEffect(() => {
    visible < totalPosts && totalPosts > 0
      ? window.addEventListener("scroll", handleOnScroll)
      : window.removeEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [visible]);
  // infinite scroll code ends

  return (
    <>
      <Header />
      <Photos data={allPhotos} />
      {
        showLoading === true ? <LoadingGif /> : ''
      }
    </>
  );
}

export default Home;
