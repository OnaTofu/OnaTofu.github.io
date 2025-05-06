'use client';
import Header from '../components/header/components/Header';
import Footer from '../components/footer/Footer';
import './page.scss';

export default function Home() {
    return (
        <div className="flex-wrapper">
            <Header />
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}
