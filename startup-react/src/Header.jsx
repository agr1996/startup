import React from "react";

function Header() {
    return (
        <header>
            <button class="navigation" onclick="toggleMenu()">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <h1>Voodle</h1>
        </header>
    );
}

export default Header;