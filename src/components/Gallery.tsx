const Gallery = ((props: any) => {
    
    return (
        <div className="grid grid-cols-3">
            {
                props.items.map((item: any) => 
                <div className="pr-8 h-96 overflow-hidden" key={item.id}>
                    <img src={item.url} alt="" />
                </div>)
            }
        </div>
    );
})

export default Gallery;