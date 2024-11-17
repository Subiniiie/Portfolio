import '../../styles/components/footer/Footer.css'

export default function Footer() {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <div className="footer-container">
            <p>
                copyright &copy; <span>{thisYear()}</span>
            </p>
        </div>
    )
}
