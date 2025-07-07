import { products } from "@/lib/mocks";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { ChevronUp, Mail, Phone } from "lucide-react";
import { Newsletter } from "./newsletter";
import { Separator } from "./ui/separator";

export function Footer({ margin = true }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const categories = [
        ...new Map(products.map((item) => [item.category, item])).values(),
    ].map((item) => ({
        category: item.category,
        label: item.label,
    }));

    return (
        <footer className={cn("mt-48 w-full", !margin && "mt-0")}>
            <div className="w-full bg-black">
                <Newsletter />
            </div>
            <Separator className="bg-primary" />
            <div className="bg-custom-gradient h-[400px] w-full pt-14 pb-7 max-[1025px]:h-fit">
                <div className="mx-auto flex h-full w-full max-w-[1626px] justify-between px-6 max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:text-center">
                    <div className="flex flex-col items-start max-[1025px]:items-center">
                        <img
                            src="/logowhite.svg"
                            alt=""
                            width={244}
                            height={61}
                        />
                        <p className="mt-16 text-sm tracking-tight text-white/65">
                            Rua Júlio João Zanotto, 1300 <br /> Garibaldina
                            95723-000 | Garibaldi-RS /Brasil
                        </p>
                        <div
                            className="mt-24 flex cursor-pointer items-center gap-1 max-[1025px]:flex-col"
                            onClick={scrollToTop}
                        >
                            <ChevronUp className="text-white/50" />
                            <p className="font-sora text-sm text-white/50 underline">
                                Voltar ao topo
                            </p>
                        </div>
                    </div>
                    <Separator
                        orientation="vertical"
                        className="h-full bg-white/25"
                    />
                    <div className="pt-4">
                        <span className="font-sora font-medium text-primary capitalize">
                            Empresa
                        </span>
                        <ul className="mt-4 space-y-1">
                            <li>
                                <Link
                                    href="/empresa#historia"
                                    className="text-sm text-white/65"
                                >
                                    História
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/empresa#selos"
                                    className="text-sm text-white/65"
                                >
                                    Selos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/empresa#valores"
                                    className="text-sm text-white/65"
                                >
                                    Missão, visão e valores
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/empresa#diferenciais"
                                    className="text-sm text-white/65"
                                >
                                    Diferenciais
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Separator
                        orientation="vertical"
                        className="h-full bg-white/25"
                    />
                    <div className="pt-4">
                        <span className="font-sora font-medium text-primary capitalize">
                            Produtos
                        </span>
                        <ul className="mt-4 space-y-1">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <Link
                                        href={category.category}
                                        className="text-sm text-white/65"
                                    >
                                        {category.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Separator
                        orientation="vertical"
                        className="h-full bg-white/25"
                    />
                    <div className="flex flex-col space-y-4 pt-4">
                        <Link
                            href="/news"
                            className="font-sora font-medium text-primary capitalize"
                        >
                            News
                        </Link>
                        <Link
                            href="/contato"
                            className="font-sora font-medium text-primary capitalize"
                        >
                            Contato
                        </Link>
                        <Link
                            href="/trabalhe-conosco"
                            className="font-sora font-medium text-primary capitalize"
                        >
                            Trabalhe Conosco
                        </Link>
                    </div>
                    <Separator
                        orientation="vertical"
                        className="h-full bg-white/25"
                    />
                    <div className="flex flex-col gap-8 pt-4">
                        <div className="flex flex-col space-y-2 max-[1025px]:items-center">
                            <div className="flex items-center gap-2">
                                <Mail size={15} className="text-white/60" />
                                <a
                                    href="mailto:aguiainox@aguiainox.com.br"
                                    className="text-sm text-white/65"
                                >
                                    aguiainox@aguiainox.com.br
                                </a>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <Phone size={15} className="text-white/60" />
                                <a
                                    href="tel:555434640191"
                                    className="text-sm text-white/65"
                                >
                                    +55 54 3464-0191
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={15} className="text-white/60" />
                                <a
                                    href="https://wa.me/5554991519032"
                                    className="text-sm text-white/65"
                                    target="_blank"
                                >
                                    +55 54 99151-9032
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 max-[1025px]:flex-col">
                            <p className="text-sm text-white/65">
                                Nossas redes:
                            </p>
                            <div className="flex items-center gap-2">
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/65"
                                >
                                    <img
                                        src="/linkedin-icon.svg"
                                        alt=""
                                        width={13}
                                        height={13}
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/65"
                                >
                                    <img src="/face.svg" alt="" />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/65"
                                >
                                    <img src="/face.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[105px] w-full bg-[#031421] max-[1025px]:h-fit max-[1025px]:py-6">
                <div className="mx-auto flex h-full w-full max-w-[1626px] items-center justify-between px-6 max-[1025px]:flex-col max-[1025px]:gap-6">
                    <p className="font-sora text-sm font-light text-[#B9B9B965]">
                        © Águia Inox 2025
                    </p>
                    <div className="flex items-center gap-1 font-sora text-sm font-light text-[#B9B9B965] max-[1025px]:flex-col max-[1025px]:gap-6">
                        <a
                            href="/politica-de-privacidade"
                            className="relative before:mr-1 before:ml-1 before:text-[#B9B9B965] before:content-['|'] first:before:content-none max-[1025px]:before:content-none"
                        >
                            Política de privacidade
                        </a>
                        <a
                            href="/politica-de-cookies"
                            className="relative before:mr-1 before:ml-1 before:text-[#B9B9B965] before:content-['|'] first:before:content-none max-[1025px]:before:content-none"
                        >
                            Política de cookies
                        </a>
                        <a
                            href="/definicao-de-coolies"
                            className="relative before:mr-1 before:ml-1 before:text-[#B9B9B965] before:content-['|'] first:before:content-none max-[1025px]:before:content-none"
                        >
                            Definição de cookies
                        </a>
                    </div>
                    <div className="flex items-center gap-2 max-[1025px]:flex-col">
                        <p className="font-sora text-sm font-light text-[#B9B9B965]">
                            Desenvolvido por:{" "}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
