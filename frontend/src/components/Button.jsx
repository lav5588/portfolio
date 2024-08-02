
const Button = ({ children,className}) => {
    return (
            <button className={`${className} px-5 py-3 rounded-full`} >
                {children}
            </button>
    )
}

export default Button
