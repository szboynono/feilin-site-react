import { useContext } from 'react';
import Gallery from "../components/Gallery";
import { GalleryContext } from '../store/context';

const Home = () => {
  const context = useContext(GalleryContext)

  return (
    <>
      <Gallery items={context.map(item => ({id: item.id, url: item.coverImage}))} />
    </>
  );
};

export default Home;