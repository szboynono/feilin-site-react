import React from 'react';
import Images from '../assets/images';

const defaultValue = [{
  id: 1,
  coverImage: Images.keewatinCover6
}]

export const GalleryContext = React.createContext(defaultValue);

const GalleryContextProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return <GalleryContext.Provider value={defaultValue}>{props.children}</GalleryContext.Provider>
}

export default GalleryContextProvider;