import Images from '../assets/images';
import Gallery from "../components/Gallery";

const data = [
  {
    id: 1,
    coverImage: Images.keewatinCover6
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