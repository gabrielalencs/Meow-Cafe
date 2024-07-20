const Button = ({text, classe}) => {
    return (
        <button className={classe}>
            {text}
        </button>
    )
}

export default Button;