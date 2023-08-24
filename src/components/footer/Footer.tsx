import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer-container">
        <section className="column">
            <h2>Navigation</h2>
            <ul>
                <li>Home</li>
                <li className='selected'>Books</li>
                <li>Reviews</li>
                <li>News</li>
                <li>Contacts</li>
            </ul>
        </section>
        <section className="column">
            <h2>Categories</h2>
            <ul className='double'>
                <li>Art</li>
                <li>Classic</li>
                <li>Comics</li>
                <li>Cookbooks</li>
                <li>Crime</li>
                <li>EBooks</li>
                <li>Fantasy</li>
                <li>Fiction</li>
                <li>Graphic Novels</li>
                <li>Historical Fiction</li>
                <li>History</li>
                <li>Horror</li>
                <li>Humor And Comedy</li>
                <li>Manga</li>
                <li>Memoir</li>
                <li>Music</li>
                <li>Graphic Novels</li>
                <li>Historical Fiction</li>
                <li>History</li>
                <li>Horror</li>
                <li>Art</li>
                <li>Classic</li>
                <li>Comics</li>
                <li>Cookbooks</li>
            </ul>
        </section>
        <section className="column">
            <h2>Follow us</h2>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>RSS</li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer