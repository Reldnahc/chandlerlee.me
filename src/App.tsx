import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import ProofBar from "./sections/ProofBar";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <ProofBar />
                <Projects />
                <About />
                <Contact />
            </main>

            <Footer />
        </>
    );
}
