import { BrandsHome } from "@/components/brands-home";
import { CasesCarousel } from "@/components/cases-carousel";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroCarousel } from "@/components/hero-carousel";
import { NewsCarousel } from "@/components/news-carousel";
import { PartnerForm } from "@/components/partner-form";
import { SegmentsHome } from "@/components/segments-home";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <Header />
            <HeroCarousel />
            <CasesCarousel />
            <SegmentsHome />
            <BrandsHome />

            <div className="mt-32 w-full">
                <div className="relative h-[440px] w-full max-[601px]:h-[300px]">
                    <img
                        src="/bg-aguia-inox.png"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary bg-linear-to-b from-transparent to-black/50 mix-blend-overlay" />
                </div>

                <div className="mx-auto mt-16 grid w-full max-w-[1612px] grid-cols-2 gap-[122px] px-10 max-[769px]:grid-cols-1 max-[1367px]:px-10">
                    <div className="max-[601px]:text-center">
                        <p className="font-sora font-medium tracking-tight text-primary">
                            A Águia Inox
                        </p>
                        <p className="mt-2.5 max-w-[450px] font-sora text-5xl font-light tracking-tight text-secondary">
                            A líder nacional em tanques e reatores em aço inox.
                        </p>
                        <p className="mt-10 w-full max-w-[618px] tracking-tight text-textblack">
                            Com mais de 15 anos de história, a Águia Inox é
                            referência nacional em tanques e reatores de aço
                            inox.br <br /> <br /> Investimos em inovação,
                            tecnologia e processos que respeitam as normas mais
                            exigentes do mercado. Nossa equipe é especializada e
                            pronta para desenvolver equipamentos com excelência
                            em cada detalhe. <br />
                            <br /> Mais do que fabricar, ajudamos empresas a
                            evoluírem com confiança e sustentabilidade.
                        </p>
                        <Button className="mt-10 h-[60px] w-full max-w-[300px] border-2 border-primary bg-transparent font-sora text-lg font-semibold text-primary hover:bg-primary hover:text-white">
                            Conheça a Águia Inox
                        </Button>
                    </div>
                    <div className="relative -mt-40 h-[700px] w-full max-[769px]:-mt-0 max-[601px]:h-[300px]">
                        <img
                            src="/selo.png"
                            alt=""
                            className="absolute -bottom-[125px] -left-[125px] z-10 max-[769px]:hidden"
                        />
                        <img
                            src="/image-sobre-home.png"
                            alt=""
                            className="absolute top-0 left-0 h-full w-full rounded-[10px] object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="relative mt-60 h-[580px] w-full bg-primary max-[769px]:hidden"></div>

            <div className="relative h-fit w-full bg-linear-[0deg,#041421_25%,#041522_50%,#022645_75%,#003867] pt-[763px] pb-[246px] max-[769px]:mt-28 max-[769px]:flex max-[769px]:flex-col max-[769px]:gap-20 max-[769px]:pt-10">
                <div className="absolute -top-1/4 left-1/2 mx-auto flex h-[778px] w-full max-w-[1662px] -translate-x-1/2 gap-10 px-10 max-[1367px]:px-10 max-[769px]:static max-[769px]:-top-1/6 max-[769px]:-translate-x-0 max-[769px]:flex-col max-[601px]:h-fit">
                    <div className="relative z-10 w-full max-w-[970px] overflow-hidden rounded-[10px] max-[769px]:h-fit max-[769px]:max-w-full">
                        <img
                            src="/img-aguia-do-bem.png"
                            alt=""
                            className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 -z-10 rounded-[10px] bg-primary/80 mix-blend-soft-light max-[601px]:bg-black" />
                        <div className="flex h-full flex-col items-start justify-end gap-5 p-14 max-[601px]:px-10">
                            <p className="font-sora text-3xl font-light tracking-tight text-white">
                                Programa Águia do Bem
                            </p>
                            <p className="max-w-[540px] tracking-tight text-white line-clamp-6">
                                Estar envolvida com a comunidade é uma forma de
                                retribuir o acolhimento e reconhecer as nossas
                                origens. O nosso sentimento de pertencimento é
                                demonstrado com projetos sociais no programa
                                Águia do Bem, que conta com o envolvimento e
                                apoio de todos os colaboradores da empresa e
                                suas famílias.
                            </p>
                            <Button className="h-[60px] w-[194px] border-2 border-white bg-transparent font-sora text-lg font-semibold hover:border-primary hover:bg-primary hover:text-white">
                                Saber mais
                            </Button>
                        </div>
                    </div>
                    <div className="relative z-10 w-full max-w-[575px] rounded-[10px] max-[769px]:h-fit max-[769px]:max-w-full max-[601px]:overflow-hidden">
                        <img
                            src="/img-politica-seguranca.png"
                            alt=""
                            className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 -z-10 rounded-[10px] bg-primary/80 mix-blend-soft-light max-[601px]:bg-black" />
                        <img
                            src="/selo-white.png"
                            alt=""
                            className="absolute right-0 -bottom-[260px] z-10 object-contain max-[769px]:hidden"
                        />
                        <div className="flex h-full w-full flex-col items-start justify-end gap-5 p-14 max-[601px]:px-10">
                            <p className="font-sora text-3xl font-light tracking-tight text-white">
                                Programa Águia do Bem
                            </p>
                            <p className="max-w-[540px] tracking-tight text-white line-clamp-6">
                                Estar envolvida com a comunidade é uma forma de
                                retribuir o acolhimento e reconhecer as nossas
                                origens. O nosso sentimento de pertencimento é
                                demonstrado com projetos sociais no programa
                                Águia do Bem, que conta com o envolvimento e
                                apoio de todos os colaboradores da empresa e
                                suas famílias.
                            </p>
                            <Button className="h-[60px] w-[194px] border-2 border-white bg-transparent font-sora text-lg font-semibold hover:border-primary hover:bg-primary hover:text-white">
                                Saber mais
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="ml-auto flex h-[500px] w-full max-w-[1740px] justify-between pl-10  max-[1025px]:h-fit max-[1025px]:flex-col max-[1025px]:gap-10 max-[601px]:ml-0 max-[601px]:pl-0">
                    <div className="max-[601px]:px-10 max-[601px]:text-center">
                        <p className="font-sora tracking-tight text-white">
                            News
                        </p>
                        <p className="mt-2.5 w-full max-w-[350px] font-sora text-5xl font-light tracking-tight text-white max-[601px]:max-w-full">
                            <strong className="font-bold text-primary">
                                Fique por dentro
                            </strong>{" "}
                            do que rola na Águia
                        </p>
                        <p className="mt-7 w-full max-w-[353px] tracking-tight text-white max-[601px]:max-w-full">
                            Aqui no nosso blog você fica por dentro de tudo o
                            que de novidade na Águia, desde nossos projetos,
                            mercados, produtos, segmentos, até as ações que
                            acontecem na empresa. Nos acompanhe!
                        </p>
                        <a href="/news">
                            <Button className="mt-[100px] h-[60px] w-full max-w-[300px] border-2 border-white bg-transparent font-sora text-lg text-white hover:border-primary hover:bg-primary hover:text-white">
                                Ver todas as notícias
                            </Button>
                        </a>
                    </div>
                    <NewsCarousel />
                </div>
            </div>
            <PartnerForm />
            <Footer />
        </>
    );
}
