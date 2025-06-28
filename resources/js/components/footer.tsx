import { ChevronUp, Mail, Phone } from 'lucide-react';
import { Newsletter } from './newsletter';
import { Separator } from './ui/separator';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="mt-48 w-full">
      <div className="w-full bg-black">
        <Newsletter />
      </div>
      <Separator className="bg-primary" />
      <div className="bg-custom-gradient h-[400px] w-full pt-14 pb-7 max-[1025px]:h-fit">
        <div className="mx-auto flex h-full w-full max-w-[1626px] justify-between px-6 max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:text-center">
          <div className="flex flex-col items-start max-[1025px]:items-center">
            <img src="/logowhite.svg" alt="" width={244} height={61} />
            <p className="mt-16 text-sm tracking-tight text-white/65">
              Rua Júlio João Zanotto, 1300 <br /> Garibaldina 95723-000 | Garibaldi-RS /Brasil
            </p>
            <div className="mt-24 flex cursor-pointer items-center gap-1 max-[1025px]:flex-col" onClick={scrollToTop}>
              <ChevronUp className="text-white/50" />
              <p className="font-sora text-sm text-white/50 underline">Voltar ao topo</p>
            </div>
          </div>
          <Separator orientation="vertical" className="h-full bg-white/25" />
          <div className="pt-4">
            <span className="font-sora font-medium text-primary capitalize">Empresa</span>
            <ul className="mt-4 space-y-1">
              <li>
                <a href="" className="text-sm text-white/65">
                  História
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Selos
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Missão, visão e valores
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Difenciais
                </a>
              </li>
            </ul>
          </div>
          <Separator orientation="vertical" className="h-full bg-white/25" />
          <div className="pt-4">
            <span className="font-sora font-medium text-primary capitalize">Produtos</span>
            <ul className="mt-4 space-y-1">
              <li>
                <a href="" className="text-sm text-white/65">
                  Alimentos
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Biocombustíveis
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Cosméticos
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Defensivos e Fertilizantes
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Engenharias
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Famacêuticos
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Frigoríficos
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Laticínios
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white/65">
                  Papel e Celulose
                </a>
              </li>
            </ul>
          </div>
          <Separator orientation="vertical" className="h-full bg-white/25" />
          <div className="flex flex-col space-y-4 pt-4">
            <a href="" className="font-sora font-medium text-primary capitalize">
              News
            </a>
            <a href="" className="font-sora font-medium text-primary capitalize">
              Contato
            </a>
            <a href="" className="font-sora font-medium text-primary capitalize">
              Trabalhe Conosco
            </a>
          </div>
          <Separator orientation="vertical" className="h-full bg-white/25" />
          <div className="flex flex-col gap-8 pt-4">
            <div className="flex flex-col space-y-2 max-[1025px]:items-center">
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-white/60" />
                <a href="mailto:aguiainox@aguiainox.com.br" className="text-sm text-white/65">
                  aguiainox@aguiainox.com.br
                </a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Phone size={15} className="text-white/60" />
                <a href="tel:555434640191" className="text-sm text-white/65">
                  +55 54 3464-0191
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-white/60" />
                <a href="https://wa.me/5554991519032" className="text-sm text-white/65" target="_blank">
                  +55 54 99151-9032
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 max-[1025px]:flex-col">
              <p className="text-sm text-white/65">Nossas redes:</p>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/65">
                  <img src="/linkedin-icon.svg" alt="" width={13} height={13} />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/65">
                  <img src="/face.svg" alt="" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/65">
                  <img src="/face.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[105px] w-full bg-[#031421] max-[1025px]:h-fit max-[1025px]:py-6">
        <div className="mx-auto flex h-full w-full max-w-[1626px] items-center justify-between px-6 max-[1025px]:flex-col max-[1025px]:gap-6">
          <p className="font-sora text-sm font-light text-[#B9B9B965]">© Águia Inox 2025</p>
          <div className="flex items-center gap-1 font-sora text-sm font-light text-[#B9B9B965] max-[1025px]:flex-col max-[1025px]:gap-6">
            <a
              href=""
              className="relative before:mr-1 before:ml-1 before:text-[#B9B9B965] before:content-['|'] first:before:content-none max-[1025px]:before:content-none"
            >
              Política de privacidade
            </a>
            <a
              href=""
              className="relative before:mr-1 before:ml-1 before:text-[#B9B9B965] before:content-['|'] first:before:content-none max-[1025px]:before:content-none"
            >
              Política de cookies
            </a>
            <a
              href=""
              className="relative before:mr-1 before:ml-1 before:text-[#B9B9B965] before:content-['|'] first:before:content-none max-[1025px]:before:content-none"
            >
              Definição de cookies
            </a>
          </div>
          <div className="flex items-center gap-2 max-[1025px]:flex-col">
            <p className="font-sora text-sm font-light text-[#B9B9B965]">Desenvolvido por: </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
