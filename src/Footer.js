import './Footer.css';

export default function Footer() {
    return (
        <footer id='footer-section'>
            <p>Project by <strong>Damian Wiecek</strong></p>
            <div className='footer-icons-container'>
                <a href="https://github.com/damianwick" target='_blank'><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/damianwiecek/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    )
}