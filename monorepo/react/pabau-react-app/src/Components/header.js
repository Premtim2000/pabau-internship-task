import React from "react";

function Header({step}) {
    
    return(
      <div className="row">
      <header className="header">
        Step <span id="span">{step}/2</span>
      </header>
      </div>

    )
}

export default Header;