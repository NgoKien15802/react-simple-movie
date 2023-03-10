import React from "react";

const Button = ({
    onClick,
    className,
    full = false,
    disabled = false,
    type = "button",
    bgColor = "primary",
    children,
}) => {
    let bgClassName = "bg-primary";

    switch (bgColor) {
        case "primary":
            bgClassName = "bg-primary";
            break;
        case "secondary":
            bgClassName = "bg-secondary";
            break;
        default:
            break;
    }
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`${
                full ? "w-full" : ""
            } px-6 py-3 mt-auto capitalize rounded-lg bg-primary ${className} ${bgClassName}`}
        >
            {children}
        </button>
    );
};

export default Button;
