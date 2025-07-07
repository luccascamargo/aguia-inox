import { Footer } from "@/Components/footer";
import { Header } from "@/components/header";
import { PartnerForm } from "@/components/partner-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/mocks";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Index() {
    const { url } = usePage();
    const queryParams = new URLSearchParams(url.split("#")[0].split("?")[1]);
    const activeCategory = queryParams.get("categoria");

    const categoriesWithProducts = products.reduce((acc, product) => {
        let categoryGroup = acc.find(
            (group) => group.category === product.category
        );

        if (!categoryGroup) {
            categoryGroup = {
                category: product.category,
                label: product.label,
                products: [],
            };
            acc.push(categoryGroup);
        }

        categoryGroup.products.push(product);

        return acc;
    }, []);

    return (
        <>
            <Head title="Produtos" />
            <Header />
            <div className="relative h-[300px] w-full max-[601px]:h-[500px]">
                <img
                    src="/bg-produtos.png"
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#142B3E] mix-blend-overlay" />
                <div className="absolute inset-0 bg-linear-to-r from-[#061521] to-[#00000000]" />

                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pl-[220px] max-[1366px]:pl-6 max-[1025px]:left-1/2 max-[1025px]:-translate-x-1/2 max-[1025px]:px-6 max-[1025px]:pl-6 max-[769px]:text-center">
                    <p className="font-sora text-5xl font-semibold tracking-tight text-primary max-[769px]:text-3xl">
                        Alimentos, Chocolates e Doces
                    </p>
                    <h1 className="mt-8 max-w-[1072px] tracking-tight text-white max-[1025px]:max-w-full">
                        Os equipamentos produzidos para atender o segmento de
                        alimentos, chocolates e doces, podem ser fabricados para
                        armazenamento ou processamento, sendo projetados através
                        de software de cálculo específico, analisando e
                        estudando as reais necessidades dos processos dos
                        clientes. Todos os tanques são projetados atendendo às
                        normas construtivas e seguindo as boas práticas de
                        sanitariedade exigidos na indústria alimentícia.
                    </h1>
                </div>
            </div>

            <div className="mx-auto w-full max-w-[1628px] px-6 max-[601px]:mt-20">
                <div className="grid w-full grid-cols-8 max-[1536px]:grid-cols-7 max-[1367px]:grid-cols-6 max-[1025px]:grid-cols-4 max-[769px]:grid-cols-3 max-[601px]:grid-cols-1 max-[601px]:gap-y-4">
                    {categoriesWithProducts.map((category, index) => (
                        <Link
                            href={`/produtos?categoria=${category.category.toLowerCase()}#${
                                category.category
                            }`}
                            key={index}
                            className={`relative h-fit border-b-2 border-primary/25 py-9 text-center font-sora font-medium tracking-tight text-primary transition-all before:absolute before:-bottom-1 before:left-1/2 before:h-1.5 before:w-[80%] before:-translate-x-1/2 max-[601px]:py-4 max-[601px]:text-xl ${
                                activeCategory ===
                                category.category.toLowerCase()
                                    ? "before:bg-primary"
                                    : "before:bg-transparent"
                            }`}
                        >
                            {category.label}
                        </Link>
                    ))}
                </div>

                <div className="mt-20 space-y-20 px-10 max-[769px]:px-0">
                    {categoriesWithProducts.map((category) => (
                        <div key={category.category} id={category.category}>
                            <h2 className="font-sora text-xl font-semibold tracking-tight text-secondary">
                                {category.label}
                            </h2>
                            <div className="mt-7 grid grid-cols-4 gap-11 max-[1441px]:grid-cols-3 max-[1025px]:grid-cols-2 max-[601px]:grid-cols-1">
                                {category.products.map((product, index) => (
                                    <article
                                        className="rounded-[10px]"
                                        key={index}
                                    >
                                        <div className="relative h-[300px] w-full rounded-[10px] bg-[#EDF1F8]">
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="absolute top-0 left-0 w-full object-cover"
                                            />
                                        </div>
                                        <div className="w-full pr-6">
                                            <p className="mt-6 font-sora text-lg font-semibold tracking-tight text-secondary">
                                                {product.title}
                                            </p>
                                            <Link
                                                href={`/produtos/${product.slug}`}
                                                className="font-sora text-xl font-medium text-primary underline"
                                            >
                                                <Button className="mt-4 h-[46px] w-full max-w-[252px] border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white">
                                                    Conhecer Produto
                                                </Button>
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <Separator className="mt-32 h-0.5! bg-[#EDF1F8]" />
            </div>
            <PartnerForm />
            <Footer />
        </>
    );
}
