import GalleryItem, { GalleryItemProps } from './GalleryItem';

export interface GalleryProps {
    items: GalleryItemProps[]
}

const Gallery = ((props: GalleryProps) => {
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                props.items.map((item: GalleryItemProps) =>
                    <GalleryItem key={item.id} id={item.id} url={item.url}></GalleryItem>
                )
            }
        </div>
    );
})

export default Gallery;