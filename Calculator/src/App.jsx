import Button from './Button.jsx';
import Input from './Input.jsx';
import React,{useState, useEffect} from 'react';
function App()
{
    const [input, setInput] = useState("");
    const [clearField, setClearField] = useState(false);
    let result = 0;
    const handleBtnClick = (newtitle) =>
    {
        if(clearField)
            clearInputField();
        if(newtitle == "=")
            evalExp(input);
        else if(newtitle == "%")
            evalPercentage(input);
        else if(newtitle == "CE")
            clearInputField();
        else if(newtitle == "+/-")
            togglePosNeg(input);
        else
            setInput(i=>i+newtitle);
    }

    const evalExp = (input) =>
    {
        console.log(input);
        try{
            result = eval(input);
            console.log(result);

            //eval the exp and update the input field with the result.
            setInput(result);
            setClearField(true);
        }
        catch(e)
        {
            alert("invalid exp");
            setInput("");
        }
    };
    
    const clearInputField = () =>
    {
        setInput("");
        if(clearField == true)
            setClearField(false);
    }

    const togglePosNeg = (input) =>
    {
        if(isNaN(input))
            alert("incorrect exp");
        else
            setInput(i=>i*-1);
    }

    const evalPercentage = (input) =>
    {
        setInput(i=>i/100);
    }

    useEffect(()=>{
        console.log(input);
    },[input]);

    return(
        <>
            <Input inputStr={input}></Input>
            <div>
                <Button title={"CE"} handleClick={handleBtnClick}></Button>
                <Button title={"%"} handleClick={handleBtnClick}></Button>
                <Button title={"+/-"} handleClick={handleBtnClick}></Button>
                <Button title={"/"} handleClick={handleBtnClick}></Button>
            </div>
            <div>
                <Button title={"9"} handleClick={handleBtnClick}></Button>
                <Button title={"8"} handleClick={handleBtnClick}></Button>
                <Button title={"7"} handleClick={handleBtnClick}></Button>
                <Button title={"*"} handleClick={handleBtnClick}></Button>
            </div>
            <div>
                <Button title={"6"} handleClick={handleBtnClick}></Button>
                <Button title={"5"} handleClick={handleBtnClick}></Button>
                <Button title={"4"} handleClick={handleBtnClick}></Button>
                <Button title={"-"} handleClick={handleBtnClick}></Button>
            </div>
            <div>
                <Button title={"3"} handleClick={handleBtnClick}></Button>
                <Button title={"2"} handleClick={handleBtnClick}></Button>
                <Button title={"1"} handleClick={handleBtnClick}></Button>
                <Button title={"+"} handleClick={handleBtnClick}></Button>
            </div>
            <div>
                <Button title={"0"} handleClick={handleBtnClick}></Button>
                <Button title={"."} handleClick={handleBtnClick}></Button>
                <Button title={"="} handleClick={handleBtnClick}></Button>
            </div>
        </>
    );
}

export default App;