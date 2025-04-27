import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center">
          <span className="text-yellow-400 mr-2">☀️</span>
          <h1 className="font-bold text-xl">MySolarSystem</h1>
        </div>
        <nav className="ml-8">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-yellow-400">Overview</Link></li>
            <li><Link href="/solar-panels" className="hover:text-yellow-400">Solar Panels</Link></li>
            <li><Link href="/inverters" className="hover:text-yellow-400">Inverters</Link></li>
            <li><Link href="/batteries" className="hover:text-yellow-400">Batteries</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;