import {useAppStore, useItemStore} from '../Store/store.js';

// function AppsLists({ setItemsInCart, setApps }) 
function AppsLists() 
{
    const {appsList, addAppToCart, removeAppFromCart} = useAppStore((state) => ({
        appsList: state.appsList,
        addAppToCart: state.addAppToCart,
        removeAppFromCart: state.removeAppFromCart
    }));

    const {cartItems, addItem, removeItem} = useItemStore((state) =>({
        cartItems: state.cartItems,
        addItem: state.addItem,
        removeItem: state.removeItem
    }));

    const appList = [
        {name:"FireFox", checked:false},
        {name:"Steam", checked:false},
        {name:"Discord", checked:false},
        {name:"Notion", checked:false},
        {name:"WinZip", checked:false},
        {name:"VSCode", checked:false},
        {name:"Oh My Posh", checked:false},
        {name:"Chrome", checked:false},
        {name:"1Password", checked:false},
        {name:"Windows Terminal", checked:false},
        {name:"KDiff", checked:false},
        {name:"StreamLabs", checked:false},
        {name:"Vim", checked:false},
        {name:"Unity", checked:false},
        {name:"GitButler", checked:false},
        {name:"Ear Trumpet", checked:false},
        {name:"Microsoft Teams", checked:false},
        {name:"Zoom", checked:false},
        {name:"iTunes", checked:false},
        {name:"Notepad++", checked:false},
        {name:"GIMP", checked:false},
        {name:"PuTTY", checked:false},
        {name:"Skype", checked:false}
    ]; 

    function handleCheckboxClick(e) 
    {
        let currItem = e.target.parentElement.innerText;
        currItem = currItem.substring(1);
        if (!e.target.checked) 
        {
            removeItem();
            removeAppFromCart(currItem);
            return;
        }

        addItem();
        addAppToCart(currItem);
        //update the "checked" property of appList var
        updateCheckedStatus(currItem, true);
    }

    function updateCheckedStatus(appName, checked)
    {
        console.log("function", checked);
        const index = appList.findIndex(app => app.name == appName);
        if(index !== -1)
            appList[index].checked = checked;
        console.log(appList);
    }
    //update the appList local var from the state.
    appsList.forEach(element => {
        updateCheckedStatus(element, true);
    });

    return (
        <>
        <ul>
            {appList.map((app, index) => (
            <li key={index}>
                <input type="checkbox" onClick={handleCheckboxClick} defaultChecked={app.checked}></input> {app.name}
            </li>
            ))}
        </ul>
        </>
    );
}

export default AppsLists;
