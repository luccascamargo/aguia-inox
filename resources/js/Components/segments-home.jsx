import { segments } from "@/lib/mocks";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function SegmentsHome() {
    return (
        <div className="mt-40 flex w-full flex-col gap-16 bg-[#EDF1F8] pt-32 pb-40">
            <div className="mx-auto w-full max-w-[1528px] px-6 max-[601px]:text-center">
                <p className="font-sora text-5xl font-light tracking-tight text-secondary max-[601px]:text-3xl">
                    <strong className="font-bold">Segmentos</strong> que
                    atendemos
                </p>
                <p className="mt-10 max-w-[918px] tracking-tight text-secondary">
                    Nesses mais de 15 anos de atuação, a Águia Inox acompanhou
                    as inovações dos segmentos em que atua e se especializou em
                    oferecer o melhor para cada setor. Com uma equipe técnica de
                    ponta, nos tornamos referência em equipamentos de alta
                    complexidade e de grande capacidade de armazenamento, e
                    assim atendemos com excelência os mais variados segmentos.
                    Confira:
                </p>
            </div>
            <Carousel className="mt-16 ml-auto w-full max-w-[1724px] pl-6">
                <CarouselContent>
                    {segments.map((item, idx) => (
                        <CarouselItem
                            key={idx}
                            className="min-h-[] h-fit basis-[calc(100%/2.6)] max-[1281px]:basis-[calc(100%/2.1)] max-[769px]:basis-[calc(100%/1.2)]"
                        >
                            <div className="relative flex h-full w-full flex-col items-center">
                                <img
                                    src={item.thumb}
                                    alt=""
                                    className="absolute top-0 left-0 -z-10 max-h-[277px] w-full"
                                />
                                <img src={item.image} alt="" />
                                <div className="-mt-12 w-full">
                                    <a
                                        href={`/produtos/${item.slug}`}
                                        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-transparent font-sora text-6xl text-primary transition-all ease-in hover:bg-primary hover:text-white"
                                    >
                                        +
                                    </a>
                                    <p className="mt-7 font-sora text-2xl font-medium tracking-tight text-secondary max-[601px]:text-xl">
                                        {item.title}
                                    </p>
                                    <p className="mt-4 w-full max-w-[584px] tracking-tight text-textblack">
                                        {item.descrition}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
