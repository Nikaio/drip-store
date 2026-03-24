import { useState } from 'react'; 
import Logo from './logo';
import SearchBar from './searchBar';
import AuthLinks from './authLinks';
import MainNav from './mainNave';
import CartIcon from './cartIcons'; 

const Header = () => {
  // Estado para controlar a visibilidade do menu no mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
        
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* 2. Botão Hambúrguer (Só visível em telas menores que 'md') */}
          <button 
            className="md:hidden text-2xl p-2 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <Logo />

          {/* Carrinho visível no mobile ao lado da logo se desejar */}
          <div className="md:hidden">
             <CartIcon />
          </div>
        </div>

        <SearchBar />

        {/* Links de Auth e Carrinho Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <AuthLinks />
          <CartIcon />
        </div>
      </div>

      {/* 3. Renderização condicional do MainNav */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <MainNav />
      </div>

      {/* Caso queira que o AuthLinks também apareça no menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 border-t pt-4">
          <AuthLinks />
        </div>
      )}
    </header>
  );
};

export default Header;