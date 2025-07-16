import { ExploreCarousel } from "@/components/explore-carousel";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cases, news } from "@/lib/mocks";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Index() {
    const [allCategories, setAllCategories] = useState(false);
    const { url } = usePage();
    const queryParams = new URLSearchParams(url.split("#")[0].split("?")[1]);
    const activeCategory = queryParams.get("categoria");

    const filteredNews = activeCategory
        ? news.filter(
              (n) => n.category.toLowerCase() === activeCategory.toLowerCase()
          )
        : news;

    const destaques = news.filter((news) => news.emphasis === true);
    const categories = [
        ...new Map(news.map((item) => [item.category, item])).values(),
    ].map((item) => ({
        category: item.category,
        label: item.label,
    }));

    const handleCategoriesAll = () => setAllCategories(!allCategories);

    return (
        <>
            <Header />

            <div className="relative h-[1000px] w-full bg-linear-[180deg,#041421_25%,#041522_50%,#022645_75%,#003867] pt-[157px] max-[769px]:h-fit max-[769px]:py-20">
                {destaques.length > 0 ? (
                    <div className="mx-auto grid w-full max-w-[1560px] grid-cols-2 gap-[230px] px-10 max-[1367px]:px-10 max-[769px]:grid-cols-1 max-[769px]:gap-20 max-[769px]:text-center">
                        <div className="w-full max-[769px]:flex max-[769px]:flex-col max-[769px]:items-center">
                            <p className="max-w-[510px] font-sora text-5xl font-medium tracking-tight text-primary max-[601px]:text-3xl">
                                {destaques[0].title}
                            </p>
                            <p className="mt-7 line-clamp-3 mb-12 w-full max-w-[450px] tracking-tight text-white">
                                {destaques[0].description}
                            </p>
                            <a
                                href={`/news/${destaques[0].slug}`}
                                className="font-sora text-xl font-medium tracking-tight text-primary underline max-[601px]:text-base"
                            >
                                Continuar lendo
                            </a>
                        </div>
                        <div className="relative h-[441px] overflow-hidden rounded-[10px] max-[769px]:h-[300px]">
                            <div className="absolute top-3.5 left-5 z-10 rounded-[10px] bg-primary px-5 py-1 font-sora text-lg font-medium tracking-tight text-white max-[601px]:text-sm">
                                {destaques[0].category}
                            </div>
                            <img
                                src={destaques[0].featuredImage}
                                alt=""
                                className="absolute top-0 left-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="mx-auto grid w-full max-w-[1560px] grid-cols-2 gap-[230px] px-10 max-[1367px]:px-10 max-[769px]:grid-cols-1 max-[769px]:gap-20 max-[769px]:text-center">
                        <div className="w-full max-[769px]:flex max-[769px]:flex-col max-[769px]:items-center">
                            <p className="max-w-[510px] font-sora text-5xl font-medium tracking-tight text-primary max-[601px]:text-3xl">
                                {news[0].title}
                            </p>
                            <p className="mt-7 mb-12 w-full max-w-[450px] tracking-tight text-white line-clamp-3">
                                {news[0].description}
                            </p>
                            <a
                                href={`/news/${news[0].slug}`}
                                className="font-sora text-xl font-medium tracking-tight text-primary underline max-[601px]:text-base"
                            >
                                Continuar lendo
                            </a>
                        </div>
                        <div className="relative h-[441px] overflow-hidden rounded-[10px] max-[769px]:h-[300px]">
                            <img
                                src={news[0].featuredImage}
                                alt=""
                                className="absolute top-0 left-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                )}
            </div>

            {destaques.length > 0 && (
                <div className="relative h-[420px] w-full bg-[#EDF1F8] max-[769px]:h-fit">
                    <div className="max-[769px]: absolute -top-64 left-1/2 mx-auto grid w-full max-w-[1560px] -translate-x-1/2 px-10 max-[1367px]:px-10 max-[769px]:static max-[769px]:top-20 max-[769px]:-translate-x-0 max-[769px]:py-20">
                        <p className="font-sora text-5xl font-medium tracking-tight text-primary max-[769px]:text-center max-[601px]:text-3xl">
                            Destaques
                        </p>
                        <div className="mt-14 grid grid-cols-3 gap-9 max-[1025px]:grid-cols-2 max-[769px]:grid-cols-1">
                            {news.slice(1, 4).map((item, index) => (
                                <article
                                    className="relative overflow-hidden rounded-[10px] max-[769px]:text-center"
                                    key={index}
                                >
                                    <div className="absolute top-3.5 left-3.5 rounded-[10px] bg-primary px-5 py-1 font-sora text-lg font-medium tracking-tight text-white max-[601px]:text-sm">
                                        {item.category}
                                    </div>
                                    <Link href={`/news/${item.slug}`}>
                                        <img
                                            src={item.thumb}
                                            alt=""
                                            className="h-[234px] w-full rounded-[10px] object-cover"
                                        />
                                    </Link>
                                    <div className="w-full pr-6 max-[601px]:text-center">
                                        <Link
                                            href={`/news/${item.slug}`}
                                            className="mt-8 block font-sora text-xl font-medium tracking-tight text-primary"
                                        >
                                            {item.title}
                                        </Link>
                                        <p className="mt-4 mb-6 line-clamp-3 tracking-tight text-textblack">
                                            {item.description}
                                        </p>
                                        <a
                                            href={`/news/${item.slug}`}
                                            className="font-sora font-medium text-primary underline max-[601px]:text-base"
                                        >
                                            Continuar lendo
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="max-[601px]:hidden mx-auto mt-32 grid w-full max-w-[1560px] grid-cols-6 px-10 max-[1367px]:px-10 text-center max-[1367px]:grid-cols-5 max-[1281px]:grid-cols-4 max-[1025px]:grid-cols-3 max-[601px]:grid-cols-1 max-[601px]:gap-y-4">
                <Link
                    href="/news#lista"
                    className={`relative h-fit border-b-2 border-primary/25 py-9 font-sora text-2xl font-medium tracking-tight text-primary before:absolute before:-bottom-1 before:left-0 before:h-1.5 before:w-full max-[601px]:py-4 max-[601px]:text-xl ${
                        !activeCategory
                            ? "before:bg-primary"
                            : "before:bg-transparent"
                    }`}
                >
                    Todos
                </Link>
                {categories.map((category, index) => (
                    <Link
                        href={`/news?categoria=${category.category.toLowerCase()}#lista`}
                        key={index}
                        className={`relative h-fit border-b-2 border-primary/25 py-9 text-center font-sora text-2xl font-medium tracking-tight text-primary transition-all duration-500 before:absolute before:-bottom-1 before:left-0 before:h-1.5 before:w-full max-[601px]:py-4 max-[601px]:text-xl ${
                            activeCategory === category.category.toLowerCase()
                                ? "before:bg-primary"
                                : "before:bg-transparent"
                        }`}
                    >
                        {category.label}
                    </Link>
                ))}
            </div>

            <div className="min-[601px]:hidden mx-auto mt-32 grid w-full max-w-[1560px] grid-cols-6 px-10 max-[1367px]:px-10 text-center max-[1367px]:grid-cols-5 max-[1281px]:grid-cols-4 max-[1025px]:grid-cols-3 max-[601px]:grid-cols-1 max-[601px]:gap-y-4">
                <Link
                    href="/news#lista"
                    className={`relative h-fit border-b-2 border-primary/25 py-9 font-sora text-2xl font-medium tracking-tight text-primary before:absolute before:-bottom-1 before:left-0 before:h-1.5 before:w-full max-[601px]:py-4 max-[601px]:text-xl ${
                        !activeCategory
                            ? "before:bg-primary"
                            : "before:bg-transparent"
                    }`}
                >
                    Todos
                </Link>
                {categories
                    .slice(0, allCategories ? categories.length : 3)
                    .map((category, index) => (
                        <Link
                            href={`/news?categoria=${category.category.toLowerCase()}#lista`}
                            key={index}
                            className={`relative h-fit border-b-2 border-primary/25 py-9 text-center font-sora text-2xl font-medium tracking-tight text-primary transition-all duration-500 before:absolute before:-bottom-1 before:left-0 before:h-1.5 before:w-full max-[601px]:py-4 max-[601px]:text-xl ${
                                activeCategory ===
                                category.category.toLowerCase()
                                    ? "before:bg-primary"
                                    : "before:bg-transparent"
                            }`}
                        >
                            {category.label}
                        </Link>
                    ))}
                <Button className="h-14 text-lg" onClick={handleCategoriesAll}>
                    {allCategories ? "Recolher" : " Produtos +"}
                </Button>
            </div>

            <div
                id="lista"
                className="mx-auto mt-32 grid w-full max-w-[1560px] grid-cols-3 gap-9 px-10 max-[1367px]:px-10 max-[1025px]:grid-cols-2 max-[769px]:grid-cols-1 max-[769px]:text-center"
            >
                {filteredNews.map((item, index) => (
                    <article
                        className="relative overflow-hidden rounded-[10px]"
                        key={index}
                    >
                        <div className="absolute top-3.5 left-3.5 rounded-[10px] bg-primary px-5 py-1 font-sora text-lg font-medium tracking-tight text-white">
                            {item.label}
                        </div>
                        <Link href={`/news/${item.slug}`}>
                            <img
                                src={item.thumb}
                                alt=""
                                className="h-[234px] w-full rounded-[10px] object-cover"
                            />
                        </Link>
                        <div className="w-full pr-6 max-[601px]:text-center">
                            <Link
                                href={`/news/${item.slug}`}
                                className="mt-8 block font-sora text-xl font-medium tracking-tight text-primary"
                            >
                                {item.title}
                            </Link>
                            <p className="mt-4 mb-6 line-clamp-3 tracking-tight text-textblack">
                                {item.description}
                            </p>
                            <Link
                                href={`/news/${item.slug}`}
                                className="font-sora font-medium text-primary underline"
                            >
                                Continuar lendo
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            <Separator className="mx-auto mt-32 mb-16 h-0.5! w-full max-w-[1560px] bg-[#EDF1F8] px-10 max-[1367px]:px-10" />

            <div className="w-full">
                <p className="mb-16 pl-[220px] font-sora text-5xl font-medium tracking-tight text-primary max-[1367px]:pl-10 max-[769px]:text-center max-[601px]:text-3xl">
                    Explore nossos cases
                </p>

                <ExploreCarousel items={cases} />
            </div>

            <Footer />
        </>
    );
}
