import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const schema = z.object({
    nome: z.string().min(2, "Informe seu nome"),
    email: z.string().email("E-mail inválido"),
    cnpj: z.string(),
    telefone: z.string(),
    cargo: z.string().min(2, "Selecione o cargo"),
    assunto: z.string().min(2, "Informe o assunto"),
    mensagem: z.string().min(5, "Informe a mensagem"),
    termos: z.boolean(),
});

export function PartnerForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        // Aqui você pode enviar os dados para o backend
    };

    const { assunto } = watch();

    return (
        <div className="mt-[186px] w-full bg-white max-[601px]:mt-20">
            <div className="mx-auto flex w-full max-w-[1460px] flex-col items-center justify-center px-10">
                <p className="font-sora text-5xl font-light text-secondary max-[601px]:text-center max-[601px]:text-3xl">
                    <strong className="font-bold text-primary">
                        Seja um parceiro
                    </strong>{" "}
                    Águia Inox
                </p>
                <p className="mt-10 w-full max-w-[935px] tracking-tight text-textblack max-[601px]:text-center">
                    Temos certeza que podemos oferecer a melhor solução para o
                    seu projeto. Converse com a nossa equipe técnica e invista
                    para melhorar os seus processos e levar a sua empresa para
                    um novo patamar de qualidade, entrega e resultados.
                </p>
                <form
                    className="mt-20 flex w-full flex-col items-center space-y-7 font-sora"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex w-full flex-col items-center space-y-5">
                        <div className="grid w-full grid-cols-2 gap-5 max-[601px]:grid-cols-1">
                            <div>
                                <Input
                                    className="h-[60px]  max-[601px]:h-12 bg-[#edf1f8] px-8"
                                    id="nome"
                                    {...register("nome")}
                                    placeholder="Seu nome"
                                />
                                {errors.nome && (
                                    <span className="text-xs text-red-600">
                                        {errors.nome.message}
                                    </span>
                                )}
                            </div>
                            <div>
                                <Input
                                    className="h-[60px]  max-[601px]:h-12 bg-[#edf1f8] px-8"
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    placeholder="Seu E-mail"
                                />
                                {errors.email && (
                                    <span className="text-xs text-red-600">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 gap-5 max-[601px]:grid-cols-1">
                            <div>
                                <Input
                                    className="h-[60px]  max-[601px]:h-12 bg-[#edf1f8] px-8"
                                    id="empresa"
                                    {...register("cnpj")}
                                    placeholder="Seu CNPJ"
                                />
                                {errors.cnpj && (
                                    <span className="text-xs text-red-600">
                                        {errors.cnpj.message}
                                    </span>
                                )}
                            </div>
                            <div>
                                <Input
                                    className="h-[60px]  max-[601px]:h-12 bg-[#edf1f8] px-8"
                                    id="assunto"
                                    {...register("telefone")}
                                    placeholder="Seu telefone: (DDD) + Numero"
                                />
                                {errors.telefone && (
                                    <span className="text-xs text-red-600">
                                        {errors.telefone.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 gap-5 max-[601px]:grid-cols-1">
                            <div>
                                <Input
                                    className="h-[60px]  max-[601px]:h-12 bg-[#edf1f8] px-8"
                                    id="assunto"
                                    {...register("cargo")}
                                    placeholder="Seu cargo"
                                />
                                {errors.cargo && (
                                    <span className="text-xs text-red-600">
                                        {errors.cargo.message}
                                    </span>
                                )}
                            </div>
                            <div>
                                <Select
                                    onValueChange={(value) =>
                                        setValue("assunto", value)
                                    }
                                >
                                    <SelectTrigger
                                        id="setor"
                                        className={cn(
                                            "h-[60px]  max-[601px]:h-12 bg-[#edf1f8] px-8",
                                            assunto && "bg-transparent"
                                        )}
                                    >
                                        <SelectValue placeholder="Selecione o assunto" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#edf1f8]">
                                        <SelectItem
                                            value="comercial"
                                            className="focus:bg-primary focus:text-white"
                                        >
                                            Comercial
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.assunto && (
                                    <span className="text-xs text-red-600">
                                        {errors.assunto.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="w-full">
                            <Textarea
                                id="mensagem"
                                className="min-h-[266px] w-full resize-none rounded-md border bg-[#edf1f8] px-8 py-5 text-base shadow-xs"
                                {...register("mensagem")}
                                placeholder="Escrever mensagem..."
                            />
                            {errors.mensagem && (
                                <span className="text-xs text-red-600">
                                    {errors.mensagem.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex w-full items-center justify-center gap-2">
                        <Checkbox
                            className="h-[30px] w-[30px] rounded-[10px] border-2 border-primary"
                            id="termos"
                            checked={!!watch("termos")}
                            onCheckedChange={(checked) =>
                                setValue("termos", !!checked)
                            }
                        />
                        <Label
                            htmlFor="termos"
                            className="font-sora font-light text-textblack"
                        >
                            Aceito os{" "}
                            <a href="" className="font-bold underline">
                                Termos de uso
                            </a>{" "}
                            e a{" "}
                            <a href="" className="font-bold underline">
                                Política de privacidade
                            </a>{" "}
                            do site da Águia Inox
                        </Label>
                    </div>
                    {errors.termos && (
                        <span className="block text-xs text-red-600">
                            {errors.termos.message}
                        </span>
                    )}
                    <Button
                        type="submit"
                        className="h-[60px]  w-[300px] border border-primary bg-white text-lg font-semibold text-primary hover:bg-primary hover:text-white max-[601px]:w-full"
                    >
                        Enviar mensagem
                    </Button>
                </form>
            </div>
        </div>
    );
}
