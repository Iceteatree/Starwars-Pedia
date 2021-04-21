// Just a dynamic footer that gets the current year.

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <h6>Copyright {year}. Alan Kow. Hyperion Dev Bootcamp</h6>
        </footer>
    )
}
