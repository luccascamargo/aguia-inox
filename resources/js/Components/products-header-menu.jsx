import { products } from "@/lib/mocks";
import { Link } from "@inertiajs/react";
import { Separator } from "./ui/separator";

export function ProductsHeaderMenu() {
    const categories = [
        ...new Map(products.map((item) => [item.category, item])).values(),
    ].map((item) => ({
        category: item.category,
        label: item.label,
    }));
    return (
        <div className="absolute top-[134px] left-0 z-50 h-[545px] w-full border-t-2 border-b-4 border-primary bg-[#EDF1F8] pt-20 pb-11 shadow-lg">
            <div className="mx-auto flex h-full w-full max-w-[1541px] items-center justify-between px-6">
                <div className="flex h-full w-full max-w-[685px] flex-col flex-wrap space-y-4">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href={`/produtos#${category.category}`}
                            className="font-sora text-xl font-light tracking-tight text-secondary hover:font-bold"
                        >
                            {category.label}
                        </Link>
                    ))}
                </div>

                <div className="flex h-full gap-16">
                    <Separator
                        orientation="vertical"
                        className="h-full w-0.5! bg-[#B3BAC725]"
                    />
                    <div>
                        <div className="flex items-center gap-3">
                            <img src="/icon-segmento.png" alt="" />
                            <h3 className="font-sora text-xl font-medium tracking-tight text-primary">
                                Sobre esses segmento:
                            </h3>
                        </div>
                        <p className="mt-9 max-w-[358px] text-[14px] tracking-tight text-secondary">
                            Os equipamentos produzidos para atender o segmento
                            de alimentos, chocolates e doces, podem ser
                            fabricados para armazenamento ou processamento,
                            sendo projetados através de software de cálculo
                            específico, analisando e estudando as reais
                            necessidades dos processos dos clientes. Todos os
                            tanques são projetados atendendo às normas
                            construtivas e seguindo as boas práticas de
                            sanitariedade exigidos na indústria alimentícia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
