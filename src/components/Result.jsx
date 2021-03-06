import React from 'react'

export default function Result({ gifs }) {
    console.log(gifs)
    return (
        <div className="resultGrid">
            {gifs.map(gif => {
                return (
                    <div className="gifsTenor" key={gif.id}>
                        <a href={gif.url} target="_blank" rel="noopener noreferrer"><img src={gif.media[0].tinygif.url} alt='' /></a>
                    </div>
                )
            })}
        </div>
    )
}