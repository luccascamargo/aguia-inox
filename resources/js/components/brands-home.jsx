import { brands } from "@/lib/mocks";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function BrandsHome() {
    return (
        <div className="mt-44 w-full bg-white">
            <div className="mx-auto flex w-full max-w-[1532px] flex-col items-center px-10">
                <p className="font-sora text-5xl font-light tracking-tight text-secondary max-[601px]:text-center max-[601px]:text-3xl">
                    <strong className="font-bold text-primary">
                        Algumas marcas
                    </strong>{" "}
                    já atendidas
                </p>

                <Separator className="mt-14 mb-24 bg-[#B3BAC7]" />

                <div className="flex w-full flex-wrap items-center justify-center gap-10 max-[769px]:grid max-[769px]:grid-cols-3 max-[769px]:gap-5">
                    {brands.map((brand, index) => (
                        <a href={brand.link} key={index}>
                            <img
                                src={brand.logo}
                                alt=""
                                className="object-contain"
                            />
                        </a>
                    ))}
                </div>

                <Button className="mt-28 h-[60px] w-full max-w-[300px] border-2 border-primary bg-transparent font-sora text-lg font-semibold text-primary hover:bg-primary hover:text-white">
                    Quero ser cliente
                </Button>
            </div>
        </div>
    );
}
