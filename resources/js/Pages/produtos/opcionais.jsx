import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/mocks";
import { cn } from "@/lib/utils";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Opcionais() {
    const { slug } = usePage().props;
    const product = products.find((product) => product.slug === slug);

    if (!product) {
        return null;
    }

    return (
        <>
            <Head title={`Opcionais de ${product.title}`} />
            <Header />

            <div className="grid grid-cols-2 gap-[104px] max-[1025px]:pt-20 max-[769px]:grid-cols-1 max-[769px]:gap-20 max-[601px]:px-10">
                <div className="relative h-[945px] bg-[#EDF1F8] max-[769px]:order-2 max-[769px]:h-[400px] max-[601px]:h-[300px]">
                    <img
                        src={product.imageHero}
                        alt=""
                        className="h-full w-full object-cover max-[769px]:object-contain"
                    />
                </div>

                <div className="flex flex-col justify-center max-[1025px]:items-center">
                    <p className="font-sora font-light tracking-tight text-textblack">
                        {product.label}
                    </p>
                    <p className="mt-4 max-w-[364px] font-sora text-7xl font-semibold tracking-tighter text-secondary max-[601px]:text-3xl">
                        Tanque de{" "}
                        <strong className="font-bold text-primary">
                            Chocolate
                        </strong>
                    </p>
                    <p className="mt-12 max-w-[513px] text-lg font-light tracking-tight text-textblack max-[769px]:text-center max-[601px]:text-base">
                        <strong className="font-bold">Função:</strong> <br />
                        Tanque de armazenamento, pulmão ou estocagem para
                        fabricação de chocolate. <br /> <br />{" "}
                        <strong className="font-bold">
                            Especificações do Equipamento:
                        </strong>{" "}
                        <br /> Tanque atmosférico, vertical ou horizontal, teto
                        e fundo personalizáveis, serpentina de aquecimento com
                        isolamento em lã de rocha e revestimento em aço inox.
                        Acabamento interno sanitário e externo personalizável;
                        Agitador central modelo tipo âncora soldado ou
                        desmontável, dimensionado pela equipe de engenharia de
                        acordo com especificações do produto.
                    </p>
                </div>
            </div>
            <div className="mx-auto mt-32 w-full max-w-[1660px] px-10 max-[601px]:mt-10">
                <div className="w-full gap-20 border-b-2 border-primary/25 px-10 max-[601px]:flex max-[601px]:flex-col max-[601px]:items-center max-[601px]:gap-0">
                    <Button
                        className={cn(
                            "translate-y-1 rounded-none border-primary! font-bold border-b-8 bg-transparent p-10 font-sora text-4xl text-primary shadow-none transition-all duration-500 hover:bg-transparent hover:text-primary max-[601px]:text-2xl",
                            ""
                        )}
                    >
                        Opcionais
                    </Button>
                </div>

                <div className="mt-14 w-full rounded-[10px] border">
                    {product.optionals.map((opt, index) => (
                        <div
                            id={opt.id}
                            key={index}
                            className="flex flex-col gap-2.5 py-2.5 px-6 first:rounded-t-[10px] last:rounded-b-[10px] odd:bg-[#EDF1F8]"
                        >
                            <p className="font-sora text-xl font-light tracking-tight text-secondary max-[601px]:text-base">
                                {opt.title}
                            </p>
                            <p>{opt.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto mt-32 w-full max-w-[1660px] px-10">
                <div className="flex w-full items-end justify-between max-[601px]:flex-col max-[601px]:items-center max-[601px]:gap-3">
                    <p className="font-sora text-5xl font-medium tracking-tight text-primary max-[601px]:text-3xl">
                        Veja também
                    </p>
                    <Link
                        href="/produtos"
                        className="font-sora text-lg tracking-tight text-secondary underline"
                    >
                        Voltar a página de produtos
                    </Link>
                </div>

                <div className="mt-10 grid grid-cols-5 gap-4 max-[1025px]:grid-cols-3 max-[1025px]:gap-y-10 max-[601px]:grid-cols-1">
                    {products.slice(0, 5).map((prod, index) => (
                        <article className="w-full rounded-[10px]" key={index}>
                            <div className="relative h-[300px] w-full rounded-[10px] bg-[#EDF1F8]">
                                <img
                                    src={prod.image}
                                    alt=""
                                    className="absolute top-0 left-0 h-full w-full object-contain"
                                />
                            </div>
                            <div className="w-full pr-6">
                                <p className="mt-6 font-sora text-lg font-semibold tracking-tight text-secondary">
                                    {prod.title}
                                </p>
                                <Link
                                    href={`/produtos/${prod.slug}`}
                                    className="font-sora text-xl font-medium text-primary underline"
                                >
                                    <Button className="mt-4 h-[46px] w-full max-w-[225px] border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white">
                                        Conhecer Produto
                                    </Button>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
