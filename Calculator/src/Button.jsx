
function Button({title, handleClick})
{
    return(
        <>
            <button onClick={()=>handleClick(title)}>{title}</button>
        </>
    );
}

export default Button;