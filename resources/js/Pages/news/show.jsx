import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { news } from "@/lib/mocks";
import { Head, usePage } from "@inertiajs/react";

export default function Show() {
    const { slug } = usePage().props;

    const returnNews = news.find((news) => news.slug === slug);

    if (!returnNews) {
        return null;
    }

    return (
        <>
            <Head title="Notícias" />
            <Header />
            <div className="relative h-[320px] w-full max-[601px]:h-[200px]">
                <img
                    src="/img-header-news.png"
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary mix-blend-overlay" />
            </div>

            <main className="mx-auto w-full max-w-[1314px] px-10 max-[1367px]:px-10">
                <div className="mt-[71px] flex items-center gap-4 max-[601px]:justify-center max-[601px]:flex-col max-[601px]:gap-2">
                    <p className="font-sora text-sm font-bold tracking-tight text-primary">
                        {returnNews.category}
                    </p>
                    <div className="font-sora font-bold text-primary max-[601px]:hidden">
                        /
                    </div>
                    <p className="font-sora text-sm font-light tracking-tight text-textblack">
                        <strong className="font-bold text-primary">
                            Atualizado em
                        </strong>{" "}
                        8 de maio de 2025
                    </p>
                </div>
                <p className="mt-12 max-w-[725px] font-sora text-5xl font-medium tracking-tight text-primary max-[601px]:text-center max-[601px]:text-3xl">
                    {returnNews.title}
                </p>
                <p className="mt-16 w-full max-w-[1100px] tracking-tight text-textblack max-[601px]:text-center">
                    {returnNews.description}
                </p>
                <img
                    src={returnNews.featuredImage}
                    alt=""
                    className="mt-8 h-[586px] w-full object-cover max-[601px]:h-[300px]"
                />

                <section className="mt-16 flex flex-col gap-16">
                    {returnNews.blocks.map((item, index) => (
                        <article key={index}>
                            <p className="trak font-sora text-2xl font-medium tracking-tight text-primary max-[601px]:text-center">
                                {item.title}
                            </p>
                            <p className="mt-9 w-full max-w-[1100px] tracking-tight text-textblack max-[601px]:text-center">
                                {item.description}
                            </p>
                            <img
                                src={item.image}
                                alt=""
                                className="mt-9 h-[586px] w-full object-cover max-[601px]:h-[300px]"
                            />
                        </article>
                    ))}
                </section>

                <p className="mt-10 font-sora text-lg font-medium text-textblack">
                    Águia Inox: preparada para voar ainda mais alto!
                </p>
                <Separator className="mt-24 h-0.5 w-full bg-[#EDF1F8]" />

                <div className="mt-10 flex items-center gap-5 max-[601px]:flex-col max-[601px]:text-center">
                    <p className="font-sora text-2xl font-medium tracking-tight text-primary">
                        Compartilhe esse conteúdo em suas redes sociais:
                    </p>
                    <div className="flex items-center gap-1">
                        <a
                            href=""
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-black"
                        >
                            <img src="/linkedin-black.svg" alt="" />
                        </a>
                        <a
                            href=""
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-black"
                        >
                            <img src="/face-black.svg" alt="" />
                        </a>
                    </div>
                </div>
            </main>

            <div className="mt-28 h-[354px] w-full bg-[#EDF1F8]"></div>

            <div className="mx-auto -mt-64 w-full max-w-[1560px] px-10 max-[1367px]:px-10">
                <p className="font-sora text-5xl font-medium tracking-tight text-primary max-[601px]:text-center">
                    Veja também
                </p>

                <div className="mt-14 grid grid-cols-3 gap-9 max-[769px]:grid-cols-1">
                    {news.slice(0, 3).map((item, index) => (
                        <article
                            className="relative overflow-hidden rounded-[10px]"
                            key={index}
                        >
                            <div className="absolute top-3.5 left-3.5 rounded-[10px] bg-primary px-5 py-1 font-sora text-lg font-medium tracking-tight text-white">
                                {item.category}
                            </div>
                            <img
                                src={item.thumb}
                                alt=""
                                className="h-[234px] w-full rounded-[10px] object-cover"
                            />
                            <div className="w-full pr-6 max-[601px]:text-center">
                                <p className="mt-8 font-sora text-xl font-medium tracking-tight text-primary">
                                    {item.title}
                                </p>
                                <p className="mt-4 mb-6 line-clamp-3 tracking-tight text-textblack">
                                    {item.description}
                                </p>
                                <a
                                    href={`/news/${item.slug}`}
                                    className="font-sora font-medium text-primary underline"
                                >
                                    Continuar lendo
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
