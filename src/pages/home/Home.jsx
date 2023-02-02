import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import FilterSection from "../../components/filter-section/FilterSection";
import SortingBar from "../../components/sorting-bar/sortingBar";
import { HomeStyle } from "./style";
import AdResults from "../../components/ads-results/adResults";
import CreateAdIcon from "../../components/create-ad-icon/createAdIcon";
import { getAllProperties } from "../../features/getProperties/getPropertiesSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const properties = useSelector((state) => state.properties.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  return (
    <Box sx={HomeStyle}>
      <FilterSection />
      <SortingBar />
      <AdResults properties={properties} />
      <CreateAdIcon />
    </Box>
  );
};

export default Home;
