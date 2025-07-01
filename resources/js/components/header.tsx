import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Controla o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup: restaura o overflow quando o componente é desmontado
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="border-b-4 border-primary">
      <div className="mx-auto flex h-[130px] w-full max-w-[1626px] items-center justify-between px-6">
        <a href="/">
          <img src="/logo.svg" className="h-[62px] w-[244px] max-[601px]:w-[130px]" />
        </a>

        {/* Menu Desktop - escondido em telas menores que 1235px */}
        <div className="hidden items-center gap-14 min-[1280px]:flex">
          <nav>
            <ul className="flex items-center space-x-12">
              <li>
                <a href="/sobre" className="font-sora font-normal text-secondary capitalize transition-all hover:font-bold">
                  Empresa
                </a>
              </li>
              <li>
                <a href="/produtos" className="font-sora text-secondary capitalize transition-all hover:font-bold">
                  Produtos
                </a>
              </li>
              <li>
                <a href="/news" className="font-sora text-secondary transition-all hover:font-bold">
                  News
                </a>
              </li>
              <li>
                <a href="/contato" className="font-sora text-secondary transition-all hover:font-bold">
                  Contato
                </a>
              </li>
              <li>
                <a href="/trabalhe-conosco" className="font-sora text-secondary transition-all hover:font-bold">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </nav>
          {/* Componente Busca */}

          <div className="flex items-center gap-6">
            <Button className="h-[54px] w-[273px] font-sora text-lg font-semibold max-[1367px]:w-[250px]" variant={'default'}>
              Solicite um orçamento
            </Button>

            <a href="/" target="_blank">
              <img src="/whats-button.svg" alt="" width={54} height={54} />
            </a>
          </div>
        </div>

        {/* Botão do menu mobile - visível apenas em telas menores que 1235px */}
        <button onClick={toggleMobileMenu} className="p-2 min-[1280px]:hidden" aria-label="Abrir menu">
          {isMobileMenuOpen ? <X size={24} className="text-secondary" /> : <Menu size={24} className="text-secondary" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white shadow-lg min-[1235px]:hidden">
          <div className="px-6 py-4">
            <nav className="mb-6">
              <ul className="space-y-4">
                <li>
                  <a
                    href="/sobre"
                    className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Empresa
                  </a>
                </li>
                <li>
                  <a
                    href="/produtos"
                    className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Produtos
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/contato"
                    className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="/trabalhe-conosco"
                    className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Trabalhe Conosco
                  </a>
                </li>
              </ul>
            </nav>

            <div className="space-y-4">
              <Button className="h-[54px] w-full" variant={'default'}>
                Solicite um orçamento
              </Button>

              <div className="flex justify-center">
                <a href="/" target="_blank">
                  <img src="/whats-button.svg" alt="" width={54} height={54} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
