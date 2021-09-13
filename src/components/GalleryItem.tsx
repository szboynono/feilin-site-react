import { Link } from 'react-router-dom';

export interface GalleryItemProps {
  id: string,
  url: string
};

const GalleryItem = (props: GalleryItemProps) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <img src={props.url} alt="" />
    </Link>
  )
}

export default GalleryItem;