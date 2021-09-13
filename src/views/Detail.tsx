import { useParams } from 'react-router';

const Detail = () => {
  const { id } = useParams<{id: string | undefined}>();
  return <>{id}</>
}

export default Detail;