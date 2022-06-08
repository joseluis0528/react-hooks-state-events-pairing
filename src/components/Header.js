import React from "react"

function Header({title, views, createdAt}) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
        </header>
    )
}

export default Header