import React from 'react';

const Gallery = ((props: any) => {
    
    return (
        <>
            {
                props.items.map((item: any) => <div key={item.id}><img src={item.url} alt="" /></div>)
            }
        </>
    );
})

export default Gallery;