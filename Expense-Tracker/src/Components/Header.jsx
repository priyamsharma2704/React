import hamburger from "../assets/hamburger.png";
function Header() {
    return (
        <>
            <h1>Expense Tracker</h1>
            <div className="navbar">
                <img className="image" src={hamburger} />
            </div>
        </>
    );
}

export default Header;
