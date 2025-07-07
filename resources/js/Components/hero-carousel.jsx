import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

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
                orientation="horizontal"
                plugins={[
                    Autoplay({
                        delay: 5000,
                        stopOnInteraction: true,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((slide, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <div className="relative h-full w-full bg-linear-to-r from-[#0D2940] to-transparent to-60%">
                                <img
                                    src="/bg-hero.png"
                                    alt=""
                                    className="absolute top-0 left-0 -z-10 h-full w-full"
                                />
                                <div className="flex h-[500px] w-full items-center md:h-[600px] xl:h-[900px]">
                                    <div className="mx-auto w-full max-w-[1626px] px-6">
                                        <div className="max-w-xl max-[601px]:text-center">
                                            <h1 className="mb-4 font-sora text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
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
                    {Array.from({ length: 5 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-14 w-1 rounded-[10px] bg-white/30 transition-all duration-300 ease-in-out ${
                                current === index ? "h-28 bg-white" : ""
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
