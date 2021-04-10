import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import "../css/ScrollIndicator.css"
import $ from "jquery"

function ScrollIndicator() {

    const { x, y } = useWindowScroll();
    const [scrolled, setscrolled] = useState(0)

    useEffect(() => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setscrolled((y / height) * 100)
    }, [y])

    return (
        <div className="scroll-container">
            <div className="indicator" style={{ width: `${scrolled}%` }}></div>
        </div>
    )
}

export default ScrollIndicator