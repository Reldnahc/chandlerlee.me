import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t py-10 border-accent">
            <Container className="flex flex-col gap-2 text-sm opacity-70">
                <div>© {new Date().getFullYear()} Chandler Lee</div>
                <div className="flex gap-4">
                    <a href="https://github.com/Reldnahc" className="hover:opacity-100 hover:text-accent hover:underline">GitHub</a>
                    <a href="mailto:hi@chandler.me" className="hover:opacity-100 hover:text-accent hover:underline">Email</a>
                </div>
            </Container>
        </footer>
    );
}
