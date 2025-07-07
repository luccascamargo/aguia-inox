import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function Gallery({ items }) {
    return (
        <Carousel className="mt-20 w-full">
            <CarouselContent>
                {items.map((item) => (
                    <CarouselItem className="basis-[calc(100%/3.7)] max-[1367px]:basis-[calc(100%/2.7)] max-[1025px]:basis-[calc(100%/2.1)] max-[601px]:basis-[calc(100%/1.2)]">
                        <div>
                            <div className="relative h-[600px] w-full overflow-hidden rounded-[10px] bg-primary/20 max-[601px]:h-[400px]">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="absolute h-full w-full object-cover mix-blend-soft-light"
                                />
                            </div>
                            <p className="mt-12 font-sora text-2xl font-medium tracking-tight text-textblack">
                                {item.title}
                            </p>
                            <p className="mt-5 max-w-[393px] tracking-tight text-textblack">
                                {item.description}
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
