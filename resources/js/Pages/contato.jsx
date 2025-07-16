import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Head } from "@inertiajs/react";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    nome: z.string().min(2, "Informe seu nome"),
    empresa: z.string().min(2, "Informe o nome da empresa"),
    email: z.string().email("E-mail inválido"),
    setor: z.string().min(1, "Selecione o setor"),
    assunto: z.string().min(2, "Informe o assunto"),
    mensagem: z.string().min(5, "Informe a mensagem"),
    termos: z.boolean(),
});

export default function Contato() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
        setValue,
        watch,
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        // Aqui você pode enviar os dados para o backend
    };

    const { setor } = watch();

    return (
        <>
            <Head title="Contato" />
            <Header />
            <div className="relative h-[344px] w-full max-[601px]:h-[200px]">
                <img
                    src="/header-contato.png"
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary mix-blend-overlay" />
            </div>
            <div className="mx-auto mt-28 grid w-full max-w-[1510px] grid-cols-2 gap-44 px-10  max-[1025px]:grid-cols-1 max-[1025px]:gap-0 max-[601px]:mt-12 max-[601px]:text-center">
                <div className="w-full max-w-[555px] max-[1025px]:mx-auto">
                    <p className="max-w-[500px] font-sora text-6xl font-medium tracking-tight text-primary max-[601px]:text-3xl">
                        Entre em contato conosco
                    </p>
                    <div className="mt-8 flex w-full flex-col space-y-4">
                        <Separator className="max-w-[505px]" />
                        <p className="text-sm text-secondary">
                            Rua Júlio João Zanotto, 1300 - Garibaldina 95723-000
                            | Garibaldi-RS /Brasil
                        </p>
                        <Separator className="max-w-[505px]" />
                        <div className="flex items-center gap-2 max-[601px]:justify-center">
                            <Mail size={15} />
                            <a
                                href="mailto:aguiainox@aguiainox.com.br"
                                className="text-sm text-secondary"
                            >
                                aguiainox@aguiainox.com.br
                            </a>
                        </div>
                        <Separator className="max-w-[505px]" />
                        <div className="flex items-center gap-2 max-[601px]:justify-center">
                            <Phone size={15} />
                            <a
                                href="tel:555434640191"
                                className="text-sm text-secondary"
                            >
                                +55 54 3464-0191
                            </a>
                        </div>
                        <Separator className="max-w-[505px]" />
                        <div className="flex items-center gap-2 max-[601px]:justify-center">
                            <Phone size={15} />
                            <a
                                href="https://wa.me/5554991519032"
                                className="text-sm text-secondary"
                                target="_blank"
                            >
                                +55 54 99151-9032
                            </a>
                        </div>
                        <Separator className="max-w-[505px]" />
                    </div>
                    <p className="mt-16 tracking-tight text-textblack">
                        Apoiada por uma estrutura ampla e completa, a Águia Inox
                        possui uma área de 1.7 hectares e quase duzentos
                        colaboradores que trabalham em um sistema de gestão que
                        oferece qualidade, tecnologia de ponta e um excelente
                        atendimento. <br /> <br /> A Empresa atende diversos
                        segmentos industriais e possui linhas de crédito através
                        do FINAME e Cartão BNDES, o que amplia as relações
                        comerciais e facilita a aquisição de novos equipamentos.
                    </p>
                </div>
                <form
                    className="mt-8 w-full max-w-xl space-y-7 font-sora max-[1025px]:mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col space-y-5">
                        <div>
                            <Input
                                className="h-[60px] bg-[#edf1f8] px-8"
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
                                className="h-[60px] bg-[#edf1f8] px-8"
                                id="empresa"
                                {...register("empresa")}
                                placeholder="Nome da empresa"
                            />
                            {errors.empresa && (
                                <span className="text-xs text-red-600">
                                    {errors.empresa.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <Input
                                className="h-[60px] bg-[#edf1f8] px-8"
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
                        <div>
                            <Select
                                onValueChange={(value) =>
                                    setValue("setor", value)
                                }
                            >
                                <SelectTrigger
                                    id="setor"
                                    className={cn(
                                        "h-[60px] bg-[#edf1f8] px-8",
                                        setor && "bg-transparent"
                                    )}
                                >
                                    <SelectValue placeholder="Selecione o setor" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#edf1f8]">
                                    <SelectItem
                                        value="comercial"
                                        className="focus:bg-primary focus:text-white"
                                    >
                                        Comercial
                                    </SelectItem>
                                    <SelectItem
                                        value="financeiro"
                                        className="focus:bg-primary focus:text-white"
                                    >
                                        Financeiro
                                    </SelectItem>
                                    <SelectItem
                                        value="suporte"
                                        className="focus:bg-primary focus:text-white"
                                    >
                                        Suporte
                                    </SelectItem>
                                    <SelectItem
                                        value="outros"
                                        className="focus:bg-primary focus:text-white"
                                    >
                                        Outros
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.setor && (
                                <span className="text-xs text-red-600">
                                    {errors.setor.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <Input
                                className="h-[60px] bg-[#edf1f8] px-8"
                                id="assunto"
                                {...register("assunto")}
                                placeholder="Assunto"
                            />
                            {errors.assunto && (
                                <span className="text-xs text-red-600">
                                    {errors.assunto.message}
                                </span>
                            )}
                        </div>
                        <div>
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

                    <div className="flex items-center gap-2">
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
                        className="h-[60px] w-[300px] border border-primary bg-white text-lg font-semibold text-primary hover:bg-primary hover:text-white max-[601px]:w-full"
                    >
                        Enviar mensagem
                    </Button>
                    {isSubmitted && (
                        <div className="text-center text-green-600">
                            Mensagem enviada com sucesso!
                        </div>
                    )}
                </form>
            </div>
            <Footer />
        </>
    );
}
