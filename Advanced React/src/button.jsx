import React from "react"
import classnames from "classnames"
export default function Button({children, className, size, ...rest}) {
    let sizeClass
    if (size === "sm") sizeClass = "button-small"
    if (size === "lg") sizeClass = "button-large"
    
    const allClasses = classnames(sizeClass, className)
    console.log(allClasses)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}

