import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "@inertiajs/react";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

export function ExploreCarousel({ items }) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <Carousel
            opts={{
                align: "center",
                loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="-ml-[30px]">
                {items.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-[calc(100%/3.9)] rounded-[10px] pl-[30px] max-[1367px]:basis-[calc(100%/3.2)] max-[1025px]:basis-[calc(100%/2.5)] max-[769px]:basis-[calc(100%/1.3)]"
                    >
                        <div className="overflow-hidden rounded-[10px] bg-[#EDF1F8]">
                            <img
                                src={item.image}
                                alt={item.label}
                                className="h-[298px] w-full object-cover"
                            />
                            <div className="w-full rounded-b-[10px] px-11 pt-9 pb-14">
                                <h3 className="font-sora text-xl font-medium tracking-tight text-textblack">
                                    {item.label}
                                </h3>
                                <p className="mt-2 line-clamp-3 tracking-tight text-textblack">
                                    {item.description}
                                </p>
                                <Link
                                    href={`${item.link}`}
                                    className="mt-4 inline-block font-sora font-bold text-primary underline"
                                >
                                    Ver o projeto completo
                                </Link>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
