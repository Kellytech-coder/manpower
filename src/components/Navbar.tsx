// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between">
        <h1 className="font-bold text-xl">Manpower Services</h1>
        <ul className="flex gap-4">
          <li><a href="services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
