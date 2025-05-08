import React, { useState } from 'react';
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
// import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({
  children,
  title = "SoftSell - Resell Your Unused Software Licenses",
  description = "Turn your unused software licenses into cash with SoftSell."
}: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  // Navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/sell', label: 'Sell Licenses' },
  ];
  

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                SoftSell
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    router.pathname === link.href 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-4">
                {/* <ThemeToggle /> */}
              </div>
            </nav>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              {/* <ThemeToggle /> */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="ml-4 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 shadow-lg">
              <nav className="flex flex-col space-y-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2 py-1 font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      router.pathname === link.href 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </header>
        
        {/* Main content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 shadow-inner">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">SoftSell</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The marketplace for buying and selling unused software licenses.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/marketplace" className="hover:text-blue-600 dark:hover:text-blue-400">Browse Marketplace</Link></li>
                  <li><Link href="/sell" className="hover:text-blue-600 dark:hover:text-blue-400">Sell Your Licenses</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/help" className="hover:text-blue-600 dark:hover:text-blue-400">Help Center</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
                  <li><Link href="/cookies" className="hover:text-blue-600 dark:hover:text-blue-400">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
              <p>© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
      
      </div>
    </ThemeProvider>
  );
};

export default Layout;