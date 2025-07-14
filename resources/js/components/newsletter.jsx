import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const schema = z.object({
    email: z.string().email("E-mail inválido"),
});

export function Newsletter() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        // Aqui você pode enviar os dados para o backend
    };
    return (
        <div className="mx-auto flex w-full max-w-[1658px] flex-wrap items-center justify-between px-10 py-11 max-[1281px]:justify-center max-[1281px]:gap-6 max-[1025px]:flex-col">
            <div className="w-fullmax-[1025px]:gap-6 flex items-center gap-16 max-[1025px]:flex-col max-[601px]:text-center">
                <p className="max-w-full font-sora text-5xl font-medium text-primary max-[601px]:text-4xl">
                    Newsletter
                </p>
                <p className="max-w-full text-lg font-medium tracking-tight text-white">
                    Cadastre-se para receber novidades e informações.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div className="flex items-start max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:gap-6">
                    <div className="translate-x-6 max-[1025px]:translate-x-0">
                        <Input
                            className="h-[60px] w-[350px] bg-transparent px-8 text-white max-[1367px]:w-[250px] max-[601px]:w-full"
                            id="email"
                            {...register("email")}
                            placeholder="Seu E-mail"
                        />
                        {errors.email && (
                            <span className="text-xs text-red-600">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="z-10 h-[60px] w-[196px] border border-primary bg-white text-lg font-semibold text-primary hover:bg-primary hover:text-white max-[601px]:w-full"
                    >
                        Cadastrar
                    </Button>
                </div>
                {isSubmitted && (
                    <div className="text-center text-green-600">
                        Mensagem enviada com sucesso!
                    </div>
                )}
            </form>
        </div>
    );
}
