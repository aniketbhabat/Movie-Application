// Component to display popular movies and TV shows with a carousel
import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  // State to manage the endpoint (movie or tv) for fetching data
  const [endpoint, setEndpoint] = useState("movie");

  // Fetching data based on the selected endpoint (movie or tv)
  const { data, loading } = useFetch(`/${endpoint}/popular`);

  // Callback function to handle tab change in the SwitchTabs component
  const onTabChange = (tab) => {
    // Update the endpoint based on the selected tab (Movies or TV Shows)
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        {/* Displaying section title */}
        <span className="carouselTitle">What's Popular</span>
        {/* SwitchTabs component for toggling between Movies and TV Shows */}
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      {/* Carousel component to display popular movies or TV shows */}
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;