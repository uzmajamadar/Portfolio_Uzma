export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Uzma Jamadar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => console.log("Privacy policy")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => console.log("Terms of service")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
