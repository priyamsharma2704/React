<<<<<<< HEAD
const files = {
    children:[
=======

const files = {
    children :[
>>>>>>> origin/main
        {
            name:"AAA",
            children:[
                {
<<<<<<< HEAD
                    name:"BBB"
=======
                    name:"BBB",
                    children:[
                        {
                            name:"EEE"
                        },
                        {
                            name:"FFF",
                            children:[
                                {
                                    name:"GGG"
                                }
                            ]
                        }
                    ]
>>>>>>> origin/main
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
<<<<<<< HEAD
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
=======
};

function Parent(props)
{
    console.log(props.entry)
    return(
        <>
            <div>{props.entry.name}</div>
            <div style={{paddingLeft:`${props.depth*10}px`}}>
                {props.entry.children?.map((entry)=>(
                <Parent entry={entry} depth={props.depth + 1}></Parent>
            ))}
            </div>
        </>

    );
}

function CornerStoneTree()
{
    return(
        <>
            {files.children.map((entry, idx)=>(
                <Parent entry={entry} depth={1}></Parent>
            ))}
>>>>>>> origin/main
        </>
    );
}

<<<<<<< HEAD
export default CornerstoneTree;
=======
export default CornerStoneTree;
>>>>>>> origin/main
