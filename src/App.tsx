import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>

            <Footer />
        </>
    );
}
