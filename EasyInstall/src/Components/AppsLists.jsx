import {useAppStore, useItemStore, useSearchStore} from '../Store/store.js';
import {updateCheckedStatus} from '../GlobalVars/Golbal.js';

function AppsLists() 
{
    const {appsList, addAppToCart, removeAppFromCart} = useAppStore((state) => ({
        appsList: state.appsList,
        addAppToCart: state.addAppToCart,
        removeAppFromCart: state.removeAppFromCart
    }));

    const {addItem, removeItem} = useItemStore((state) =>({
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

    //update the appList local var from the state.
    appsList.forEach(element => {
        updateCheckedStatus(element, true);
    });

    return (
        <>
        <ul>
            {filteredItems.map((item,index) => 
            <li key={item.name}> 
                <input type="checkbox" onClick={handleCheckboxClick} defaultChecked={item.checked}></input> {item.name}
            </li>)}
        </ul>
        </>
    );
}

export default AppsLists;
