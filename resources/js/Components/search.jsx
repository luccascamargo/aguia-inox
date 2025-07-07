import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";

const schema = z.object({
    value: z.string().min(3, "Informe mais caracteres por favor"),
});

export function Search() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="absolute top-[134px] left-0 z-50 h-[130px] w-full border-t-2 border-b-4 border-primary bg-[#EDF1F8] pt-20 pb-11 shadow-lg">
            <div className="mx-auto flex h-full w-full max-w-[1541px] items-center justify-between px-6">
                <form
                    className="flex w-full items-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex w-full flex-col">
                        <Input
                            placeholder="Pesquisa / Águia Code"
                            id="value"
                            {...register("value")}
                            className="rounded-none border-t-0 border-r-0 border-b-2 border-l-0 shadow-none focus-visible:border-b-2 focus-visible:ring-0"
                        />
                        {errors.value && (
                            <span className="font-sora text-xs text-red-600">
                                {errors.value.message}
                            </span>
                        )}
                    </div>
                    <button type="submit" className="cursor-pointer">
                        {" "}
                        <img src="/icon-search.png" alt="" />
                    </button>
                </form>
            </div>
        </div>
    );
}
