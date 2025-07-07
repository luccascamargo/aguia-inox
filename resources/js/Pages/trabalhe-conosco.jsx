import { Footer } from "@/Components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Head } from "@inertiajs/react";

export default function TrabalheConosco() {
    return (
        <>
            <Head title="Trabalhe Conosco" />
            <Header />
            <div className="relative h-[344px] w-full max-[601px]:h-[200px]">
                <img
                    src="/bg-header-work.png"
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary bg-linear-to-b from-transparent to-black/50 mix-blend-overlay" />
                <p className="absolute bottom-10 left-[220px] font-sora text-7xl font-medium tracking-tight text-white max-[769px]:left-1/2 max-[769px]:-translate-x-1/2 max-[769px]:text-center max-[769px]:text-5xl">
                    Trabalhe conosco
                </p>
            </div>

            <div className="mx-auto mt-8 w-full max-w-[1528px] px-6 max-[769px]:flex max-[769px]:flex-col max-[769px]:items-center max-[769px]:text-center">
                <p className="max-w-[980px] tracking-tight text-textblack">
                    Somos premiados, pelo segundo ano consecutivo, como UMA DAS
                    MELHORES EMPRESAS PARA SE TRABALHAR, sendo destaque no
                    renomado prêmio GREAT PLACE TO WORK.
                    <br />
                    <br />A Águia Inox está sempre em busca de grandes talentos
                    para compor equipes de sucesso. Venha escrever conosco a sua
                    história no aço, então envie agora mesmo o seu currículo.
                </p>

                <Button className="mt-16 h-[60px] w-full max-w-[334px] font-sora text-lg font-semibold">
                    Preencha seu currículo aqui
                </Button>
            </div>

            <div className="relative mt-[576px] h-[555px] w-full bg-primary max-[769px]:mt-[350px] max-[769px]:h-[300px] max-[426px]:mt-[250px] max-[426px]:h-[200px]">
                <div className="absolute -top-[400px] left-1/2 flex w-full max-w-[1528px] -translate-x-1/2 flex-col gap-10 px-6 max-[769px]:-top-[250px] max-[769px]:items-center max-[426px]:-top-[180px]">
                    <p className="font-sora text-3xl tracking-tight text-primary max-[769px]:text-center">
                        Depoimentos de nossos colaboradores
                    </p>
                    <video
                        src="/poster-colaboradores.png"
                        poster="/poster-colaboradores.png"
                        controls
                        playsInline
                        className="rounded-[10px]"
                    ></video>
                </div>
            </div>
            <Footer margin={false} />
        </>
    );
}
