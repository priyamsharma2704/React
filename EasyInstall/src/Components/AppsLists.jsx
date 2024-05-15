import {useAppStore, useItemStore, useSearchStore} from '../Store/store.js';
import {appList} from '../GlobalVars/Golbal.js';

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

    const {filteredItems} = useSearchStore((state) => ({
        filteredItems: state.filteredItems
    }));

    function handleCheckboxClick(e) 
    {
        let currItem = e.target.parentElement.innerText;
        currItem = currItem.substring(1);
        if (!e.target.checked) 
        {
            removeItem();
            removeAppFromCart(currItem);
            updateCheckedStatus(currItem, false);
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
        const item = appList.find(app => app.name == appName);
        if(item !== null || item !== undefined)
            item.checked = checked;
        console.log(appList);
    }

    //update the appList local var from the state.
    appsList.forEach(element => {
        updateCheckedStatus(element, true);
    });

    return (
        <>
        <ul>
            {filteredItems.map((item,index) => 
            <li key={index}>
                <input type="checkbox" onClick={handleCheckboxClick} defaultChecked={item.checked}></input> {item.name}
            </li>)}
        </ul>
        </>
    );
}

export default AppsLists;
