import "./App.css"
import AppsLists from "./Components/AppsLists.jsx";
import CartBadge from './Components/CartBadge.jsx';
import {Link} from 'react-router-dom';
import { useSearchStore } from "./Store/store.js";
import {appList} from './GlobalVars/Golbal.js';

function App()
{
    const {searchItem, setSearchItem, setFilteredItems} = useSearchStore((state) => ({
        searchItem: state.searchItem,
        setSearchItem: state.setSearchItem,
        setFilteredItems:state.setFilteredItems
    }));

    function handleSearch(e)
    {
        var searchItem = e.target.value;
        setSearchItem(searchItem);

        var filteredItems = appList.filter((app) => 
            app.name.toLowerCase().includes(searchItem.toLowerCase())
        );

        setFilteredItems(filteredItems);
    }

    return (
        <>
        <div className="">
            <input
            type="text"
            placeholder="Search..."
            className=""
            onChange={handleSearch}
            value={searchItem}>
            </input>
            <Link to='/Cart' ><CartBadge className="" ></CartBadge></Link>
        </div>
        <div>
            <input type="radio" name="Linux" value="Linux"/>Linux
            <input type="radio" name="Linux" value="Linux" defaultChecked/>Windows
        </div>
        <div className="">
            <AppsLists></AppsLists>
        </div>
        </>
    );
}

export default App;
