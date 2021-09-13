import React from "react";
import Gallery from "../components/Gallery";

const data = [
  {
    id: 0,
    url: 'https://picsum.photos/seed/picsum/600/600'
  },
  {
    id: 1,
    url: 'https://picsum.photos/seed/picsum/600/600'
  },
  {
    id: 2,
    url: 'https://picsum.photos/seed/picsum/600/600'
  },
];

const Home = () => {
  return (
    <>
      <Gallery items={data} />
    </>
  );
};

export default Home;