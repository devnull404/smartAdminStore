const Header = () => {
    return(
        <header>
            <nav>
                <div className="hlogo-container">
                    <img src="/logo.svg" alt="main icon"/>
                </div>
                <div className="hside-container">
                    <input className="hSearchBox" type="text" placeholder="Search..."/>
                    <button onClick={btn} style={btnStyle}>
                        Login
                    </button>
                </div>
            </nav>
        </header>
    )
};

const btnStyle = {
    backgroundColor: "#8FFFAF",
    padding: "1vh 2vh 1vh 2vh",
    border: "none",
    borderRadius: "30px",
    color: "#606060",
    fontWeight: "bold"
};

const btn = () => {
    alert("Implementing login action.");
};

export default Header;