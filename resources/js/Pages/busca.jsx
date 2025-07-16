import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PartnerForm } from "@/components/partner-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/mocks";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Busca() {
    const { url } = usePage();
    const queryParams = new URLSearchParams(url.split("#")[0].split("?")[1]);
    const search = queryParams.get("busca");
    const productsFiltered = products.filter((product) =>
        product.title.includes(search)
    );

    return (
        <>
            <Head title="Busca" />
            <Header />

            <div className="mx-auto w-full max-w-[1660px] px-10 max-[601px]:mt-20 max-[601px]:px-6 mt-10">
                <p className="text-secondary font-sora font-light">
                    Resultados para: <strong>{search}</strong>
                </p>

                <div className="mt-20 space-y-20">
                    {productsFiltered.length <= 0 && (
                        <span className="text-secondary font-sora font-light">
                            Desculpe! Nenhum produto foi encontrado.
                        </span>
                    )}
                    <div className="mt-7 grid grid-cols-4 gap-11 max-[1441px]:grid-cols-3 max-[1025px]:grid-cols-2 max-[601px]:gap-4">
                        {productsFiltered.map((prod, index) => (
                            <article className="rounded-[10px]" key={index}>
                                <div className="relative h-[300px] w-full rounded-[10px] bg-[#EDF1F8] max-[601px]:h-[200px]">
                                    <img
                                        src={prod.image}
                                        alt=""
                                        className="absolute top-0 left-0 w-full h-full object-cover max-[601px]:object-contain"
                                    />
                                </div>
                                <div className="w-full pr-6 max-[601px]:pr-0">
                                    <p className="mt-6 font-sora text-lg font-semibold tracking-tight text-secondary">
                                        {prod.title}
                                    </p>
                                    <Link
                                        href={`/produtos/${prod.slug}`}
                                        className="font-sora text-xl font-medium text-primary underline max-[601px]:text-base w-full"
                                    >
                                        <Button className="mt-4 h-[46px] w-full max-w-[252px] max-[601px]:max-w-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white">
                                            Conhecer Produto
                                        </Button>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <Separator className="mt-32 h-0.5! bg-[#EDF1F8]" />
            </div>
            <PartnerForm />
            <Footer />
        </>
    );
}
