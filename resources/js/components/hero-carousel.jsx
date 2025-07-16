import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Fade from "embla-carousel-fade";
import { slidesHero } from "@/lib/mocks";

export function HeroCarousel() {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const scrollTo = (index) => {
        api?.scrollTo(index);
    };

    return (
        <div className="relative">
            <Carousel
                setApi={setApi}
                opts={{
                    loop: true,
                }}
                orientation="horizontal"
                plugins={[
                    Fade({ active: true }),
                    Autoplay({
                        delay: 5000,
                        stopOnInteraction: false,
                        stopOnFocusIn: false,
                        stopOnLastSnap: false,
                        stopOnMouseEnter: false,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent>
                    {slidesHero.map((slide, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full select-none"
                        >
                            <div className="relative h-full w-full bg-linear-to-r from-[#0D2940] to-transparent to-60%">
                                <img
                                    src={slide.image}
                                    alt=""
                                    className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                                />
                                <div className="flex max-[601px]:h-[500px] w-full items-center h-[900px] max-[1367px]:h-[600px]">
                                    <div className="mx-auto w-full max-w-[1658px] px-10">
                                        <div className="max-w-xl">
                                            <h1 className="mb-4 font-sora text-3xl max-[601px]:leading-8 font-light tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                                                A líder nacional em <br />{" "}
                                                <strong className="font-bold">
                                                    tanques e reatores em aço
                                                    inox.
                                                </strong>
                                            </h1>
                                            <p className="mb-8 w-full max-w-[480px] text-base tracking-tight text-white md:text-lg">
                                                Nesses mais de 15 anos de
                                                atuação, a Águia Inox acompanhou
                                                as inovações dos segmentos em
                                                que atua e se especializou em
                                                oferecer o melhor para cada
                                                setor.
                                            </p>
                                            <Button className="h-[54px] w-[273px] bg-white font-sora text-lg font-semibold text-primary hover:bg-primary hover:text-white max-[601px]:text-base">
                                                Ver projeto completo
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="absolute top-1/2 right-4 -translate-y-1/2 md:right-10">
                <div className="hidden flex-col items-center gap-2 md:flex">
                    {slidesHero.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`cursor-pointer h-14 w-1 rounded-[10px] bg-white/30 transition-all duration-500 duration-300 ease-in-out ${
                                current === index ? "h-28 bg-white/100" : ""
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
