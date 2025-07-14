import { news } from "@/lib/mocks";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function NewsCarousel() {
    return (
        <Carousel className="w-full max-w-[1150px] max-[1441px]:max-w-[1000px] max-[1367px]:max-w-[900px] max-[1281px]:max-w-[800px] max-[1025px]:max-w-full max-[601px]:pl-10">
            <CarouselContent className="-ml-10 max-[601px]:-ml-4">
                {news.map((item, idx) => (
                    <CarouselItem
                        key={idx}
                        className="select-none h-[500px] basis-[calc(100%/2.6)] pl-10 max-[1367px]:basis-[calc(100%/2.2)] max-[769px]:basis-[calc(100%/1.2)] max-[601px]:pl-4"
                    >
                        <div className="group relative flex h-full w-full items-end overflow-hidden rounded-[10px] border-[3px] border-primary p-10 transition-all hover:border-white">
                            <img
                                src={item.thumb}
                                alt=""
                                className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 h-full w-full rounded-[10px] bg-primary/80 mix-blend-overlay transition-all group-hover:h-0 max-[601px]:bg-black/80" />
                            <div className="w-full">
                                <p className="text-sm font-bold tracking-tight text-white">
                                    {item.category}
                                </p>
                                <p className="mt-2.5 font-sora text-2xl font-medium tracking-tighter text-white ">
                                    {item.title}
                                </p>
                                <p className="mt-4 tracking-tight text-white line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
