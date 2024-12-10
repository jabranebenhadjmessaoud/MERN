import React from 'react'

const Show = ({boxes}) => {
    
    return (<div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {boxes.map((box) => (
            <div key={box.id} style={{ position: "relative" }}>
            <div
                style={{
                    backgroundColor: box.color,
                    width: `${box.size}px`,
                    height: `${box.size}px`,
                    border: "1px solid gray",
                    borderRadius:"5px",
                    marginBottom:"3px"
                }}
            > </div>
                
            </div>
        ))}
        </div>
    );
    };

export default Show