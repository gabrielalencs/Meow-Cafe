const Button = ({sizeText, bgColor, textColor}) => { 
    return (
        <button className={`w-full p-3 px-5 ${bgColor} ${textColor} ${sizeText} rounded-3xl font-semibold mt-7`}>
            Delivery
        </button>
    )
}

export default Button;