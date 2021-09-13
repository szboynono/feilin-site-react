import Gallery from "../components/Gallery";
import image from "../assets/images/astellas/1-logo.png";

const data = [
  {
    id: 0,
    url: image
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
        <img src="image" alt="" />
      <Gallery items={data} />
    </>
  );
};

export default Home;