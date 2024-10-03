
const files = {
    children :[
        {
            name:"AAA",
            children:[
                {
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
        </>
    );
}

export default CornerStoneTree;