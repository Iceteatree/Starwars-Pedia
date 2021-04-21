// For routing we import link
import Link from "next/link"

// Creating a simple navbar
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Starwars Pedia</h1>
            </div>
            <Link href='/'><a>Home</a></Link>
        </nav>
    )
}

export default Navbar;