const Gallery = ((props: any) => {
    
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                props.items.map((item: any) => 
                <div className="" key={item.id}>
                    <img src={item.url} alt="" />
                </div>)
            }
        </div>
    );
})

export default Gallery;