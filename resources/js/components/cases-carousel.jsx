import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { cases } from "@/lib/mocks";

export function CasesCarousel() {
    return (
        <div className="mt-28 flex w-full flex-col gap-16">
            <div className="mx-auto w-full max-w-[1560px] px-10 max-[1367px]:px-10">
                <div className="flex w-full items-center justify-between max-[601px]:flex-col">
                    <p className="font-sora text-5xl font-medium tracking-tight text-secondary max-[601px]:text-3xl">
                        Cases
                    </p>
                    <a
                        href="/"
                        className="font-sora text-lg tracking-tight text-secondary underline max-[601px]:text-base"
                    >
                        Ver todos os cases
                    </a>
                </div>
            </div>
            <Carousel className="ml-auto w-full max-w-[1740px] pl-10 max-[601px]:pl-5">
                <CarouselContent className="-ml-5 max-[601px]:-ml-3.5">
                    {cases.map((item, idx) => (
                        <CarouselItem
                            key={idx}
                            className="h-[526px] pl-5 max-[601px]:pl-3.5 basis-[calc(100%/3.6)] max-[1281px]:basis-[calc(100%/2.5)] max-[769px]:basis-[calc(100%/1.2)] max-[601px]:basis-[calc(100%/1.3)] select-none"
                        >
                            <div className="relative flex h-full w-full items-end overflow-hidden rounded-[10px] bg-linear-to-t from-[#000000] to-transparent to-20% pb-8">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                                />
                                <div className="flex w-full items-center justify-around max-[601px]:px-4">
                                    <a
                                        href={item.link}
                                        className="relative flex h-[60px] w-full max-w-[284px] items-center justify-center rounded-4xl bg-white/45 backdrop-blur-md"
                                    >
                                        <p className="font-sora text-2xl font-medium text-white max-[601px]:text-base">
                                            {item.label}
                                        </p>
                                    </a>
                                    <a
                                        href={item.link}
                                        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-white font-sora text-6xl text-primary transition-all duration-500 ease-in hover:bg-primary hover:text-white max-[601px]:hidden"
                                    >
                                        +
                                    </a>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
