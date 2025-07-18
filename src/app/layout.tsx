import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ NAVBAR */}
        <header className="p-4 shadow-md bg-teal-700 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Elite Manpower</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
             <a href="services">Services</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>

        {/* ✅ PAGE CONTENT */}
        <main>{children}</main>

        {/* ✅ FOOTER (Optional) */}
      </body>
    </html>
  );
}
