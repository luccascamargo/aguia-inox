import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ProductsHeaderMenu } from "./products-header-menu";
import { Search } from "./search";
import { Button } from "./ui/button";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const productsMenuRef = useRef(null);
    const searchDesktopRef = useRef(null);
    const searchMobileRef = useRef(null);
    const searchToggleDesktopRef = useRef(null);
    const searchToggleMobileRef = useRef(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProductsMenu = () => {
        setIsProductsMenuOpen(!isProductsMenuOpen);
    };

    const toggleSearch = (e) => {
        e.stopPropagation();
        if (isProductsMenuOpen) {
            setIsProductsMenuOpen(!isProductsMenuOpen);
        }
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(!isMobileMenuOpen);
        }
        setIsSearchOpen(!isSearchOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                productsMenuRef.current &&
                !productsMenuRef.current.contains(event.target)
            ) {
                setIsProductsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [productsMenuRef]);

    useEffect(() => {
        function handleClickOutside(event) {
            // Verifica se o clique foi no botão de toggle
            if (
                (searchToggleDesktopRef.current &&
                    searchToggleDesktopRef.current.contains(event.target)) ||
                (searchToggleMobileRef.current &&
                    searchToggleMobileRef.current.contains(event.target))
            ) {
                return; // Não fecha se clicou no botão de toggle
            }

            // Verifica se clicou dentro de qualquer área do search (desktop ou mobile)
            if (
                (searchDesktopRef.current &&
                    searchDesktopRef.current.contains(event.target)) ||
                (searchMobileRef.current &&
                    searchMobileRef.current.contains(event.target))
            ) {
                return; // Não fecha se clicou dentro do search
            }

            // Se chegou aqui, clicou fora de tudo, então fecha
            setIsSearchOpen(false);
        }

        if (isSearchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [isSearchOpen]);

    return (
        <header className="border-b-4 border-primary">
            <div className="mx-auto flex h-[130px] w-full max-w-[1626px] items-center justify-between px-6">
                <a href="/">
                    <img
                        src="/logo.svg"
                        className="h-[62px] w-[244px] max-[1367px]:w-[180px] max-[601px]:w-[130px]"
                    />
                </a>

                {/* Menu Desktop - escondido em telas menores que 1235px */}
                <div className="hidden items-center min-[1280px]:flex">
                    <nav>
                        <ul className="flex items-center space-x-12">
                            <li>
                                <a
                                    href="/empresa"
                                    className="font-sora font-normal text-secondary capitalize transition-all hover:font-bold"
                                >
                                    Empresa
                                </a>
                            </li>
                            <li ref={productsMenuRef}>
                                <button
                                    onClick={toggleProductsMenu}
                                    className="flex cursor-pointer items-center gap-2 font-sora text-secondary capitalize transition-all hover:font-bold"
                                >
                                    Produtos
                                    <ChevronDown
                                        size={20}
                                        className="text-primary"
                                    />
                                </button>
                                {isProductsMenuOpen && <ProductsHeaderMenu />}
                            </li>
                            <li>
                                <a
                                    href="/news"
                                    className="font-sora text-secondary transition-all hover:font-bold"
                                >
                                    News
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contato"
                                    className="font-sora text-secondary transition-all hover:font-bold"
                                >
                                    Contato
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/trabalhe-conosco"
                                    className="font-sora text-secondary transition-all hover:font-bold"
                                >
                                    Trabalhe Conosco
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div ref={searchDesktopRef}>
                        <button
                            ref={searchToggleDesktopRef}
                            className="ml-14 cursor-pointer"
                            onClick={toggleSearch}
                        >
                            <img src="/icon-search.png" alt="" />
                        </button>
                        {isSearchOpen && <Search />}
                    </div>

                    <div className="ml-8 flex items-center gap-6">
                        <Button
                            className="h-[54px] w-[273px] font-sora text-lg font-semibold max-[1367px]:w-[250px]"
                            variant={"default"}
                        >
                            Solicite um orçamento
                        </Button>

                        <a
                            href="https://wa.me/5554991519032"
                            target="_blank"
                            className="group flex h-[54px] w-[54px] items-center justify-center rounded-[10px] border-2 border-primary transition-all hover:border-secondary hover:bg-secondary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="h-8 w-8 fill-primary transition-all group-hover:fill-white"
                            >
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Botão do menu mobile - visível apenas em telas menores que 1235px */}
                <div className="flex items-center gap-5 min-[1280px]:hidden">
                    <div ref={searchMobileRef}>
                        <button
                            ref={searchToggleMobileRef}
                            className="cursor-pointer"
                            onClick={toggleSearch}
                        >
                            <img src="/icon-search.png" alt="" />
                        </button>
                        {isSearchOpen && <Search />}
                    </div>
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2"
                        aria-label="Abrir menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={32} className="text-secondary" />
                        ) : (
                            <Menu size={32} className="text-secondary" />
                        )}
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isMobileMenuOpen && (
                <div className="border-t border-gray-200 bg-white shadow-lg min-[1235px]:hidden">
                    <div className="px-6 py-4">
                        <nav className="mb-6">
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="/empresa"
                                        className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Empresa
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/produtos"
                                        className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Produtos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/news"
                                        className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contato"
                                        className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Contato
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/trabalhe-conosco"
                                        className="block py-2 font-sora text-secondary transition-all hover:font-bold"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Trabalhe Conosco
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="space-y-4">
                            <Button
                                className="h-[54px] w-full"
                                variant={"default"}
                            >
                                Solicite um orçamento
                            </Button>

                            <div className="flex justify-center">
                                <a href="/" target="_blank">
                                    <img
                                        src="/whats-button.svg"
                                        alt=""
                                        width={54}
                                        height={54}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
