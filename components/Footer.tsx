import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © 2025 Ollama
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/download" className="text-muted-foreground hover:text-foreground transition-colors">
              Download
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="/github" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="/discord" className="text-muted-foreground hover:text-foreground transition-colors">
              Discord
            </Link>
            <Link href="/twitter" className="text-muted-foreground hover:text-foreground transition-colors">
              X (Twitter)
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}