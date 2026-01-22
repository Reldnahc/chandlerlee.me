import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t py-10">
            <Container className="flex flex-col gap-2 text-sm opacity-70">
                <div>© {new Date().getFullYear()} Chandler Lee</div>
                <div className="flex gap-4">
                    <a href="https://github.com/Reldnahc" className="hover:opacity-100">GitHub</a>
                    <a href="https://www.linkedin.com/" className="hover:opacity-100">LinkedIn</a>
                    <a href="mailto:hi@chandler.me" className="hover:opacity-100">Email</a>
                </div>
            </Container>
        </footer>
    );
}
