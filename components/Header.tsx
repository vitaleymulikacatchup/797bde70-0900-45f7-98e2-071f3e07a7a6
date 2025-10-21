'use client'

import { Search } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" fill="currentColor"/>
                  <path d="M12 10c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-2z" fill="white"/>
                  <path d="M10 16c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2v-6z" fill="white"/>
                </svg>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/models" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                Models
              </Link>
              <Link href="/github" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                GitHub
              </Link>
              <Link href="/discord" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                Discord
              </Link>
              <Link href="/docs" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                Docs
              </Link>
              <Link href="/cloud" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                Cloud
              </Link>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search models"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/signin" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
              Sign in
            </Link>
            <Link href="/download" className="btn-primary">
              Download
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}