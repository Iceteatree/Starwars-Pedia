// Importing the components we want to see on every page
import Footer from "./Footer";
import Navbar from "./Navbar";
// Importing a style module
import styles from "../styles/Home.module.css"

// Creating a function called layout that passes in the destructured children. This children property represents everything that is between the Layout element tags when called.
export default function Layout({children}) {
    return (
        <div className='content'>
            <Navbar />
                <img className={styles.img} src='/starwars.png' alt='star wars image' />
                {children}
            <Footer />
        </div>
    )
}
