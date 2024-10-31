const files = {
    children:[
        {
            name:"AAA",
            children:[
                {
                    name:"BBB"
                }
            ]
        },
        {
            name:"CCC"
        },
        {
            name:"DDD"
        }
    ]
}

function Parent({children, name})
{
    return(
        <>
        <li >{name}</li>
        </>
    );
}
function CornerstoneTree()
{
    
    return(
        <>
            <ul>
                {files.children.map((file)=>(
                    <Parent {...file}></Parent>
                ))}
            </ul>
        </>
    );
}

export default CornerstoneTree;