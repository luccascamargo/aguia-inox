import { Footer } from "@/Components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { diferenciais } from "@/lib/mocks";
import { Head } from "@inertiajs/react";

export default function Empresa() {
    return (
        <>
            <Head title="Empresa" />
            <Header />
            <div className="relative h-[280px] w-full max-[601px]:h-[200px]">
                <img
                    src="/bg-header-sobre.png"
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary mix-blend-overlay" />
            </div>

            <div
                id="historia"
                className="mx-auto mt-20 grid w-full max-w-[1528px] grid-cols-2 gap-44 px-6 max-[1025px]:grid max-[1025px]:grid-cols-1 max-[1025px]:gap-10"
            >
                <div className="flex flex-col gap-8 max-[1025px]:text-center">
                    <p className="font-sora text-7xl font-medium tracking-tight text-primary max-[769px]:text-4xl max-[601px]:text-3xl">
                        A Águia Inox
                    </p>
                    <p className="max-w-[618px] tracking-tight text-textblack max-[1025px]:max-w-full">
                        Localizada na Serra Gaúcha, um dos principais polos
                        metalúrgicos da América Latina, a Águia Inox é
                        referência de mercado em vários dos segmentos em que
                        atua. Conta com a expertise de profissionais com mais de
                        30 anos de experiência, qualificados e certificados, o
                        que garante qualidade e excelência em projetos de grande
                        complexidade. <br /> <br />
                        Em uma estrutura planejada para otimizar o processo
                        produtivo, seus recursos e maquinários são ideais para
                        produção personalizada em grande escala, permitindo
                        ajustar qualquer necessidade solicitada em cada projeto.{" "}
                        <br />
                        <br />
                        Ao longo de sua trajetória, a Águia Inox já desenvolveu
                        grandes projetos para os mais variados segmentos, como o
                        Alimentício, de Chocolates, Cervejarias, Laticínios,
                        Químicos, Cosméticos, Farmacêuticos, Vinícolas,
                        Destilarias, Saneamento, Tintas e Solventes, Defensivos,
                        Fertilizantes e Biológicos, e atende ainda as maiores
                        engenharias do mundo, em projetos de alta complexidade.
                    </p>
                </div>
                <img
                    src="/img-section-aguia-inox-empresa.png"
                    alt=""
                    className="z-10 -mt-72 h-[778px] w-full rounded-[10px] object-cover max-[1025px]:-mt-0 max-[1025px]:h-[400px]"
                />
            </div>

            <div className="mx-auto mt-[135px] grid w-full max-w-[1528px] grid-cols-2 gap-24 px-6 max-[1025px]:grid-cols-1 max-[1025px]:gap-10">
                <img
                    src="/img-section-exportacao.png"
                    alt=""
                    className="h-[521px] w-full rounded-[10px] object-cover max-[1025px]:order-2 max-[1025px]:h-[400px]"
                />
                <div className="flex flex-col justify-center max-[1025px]:text-center">
                    <p className="font-sora text-5xl text-textblack max-[769px]:text-4xl max-[601px]:text-3xl">
                        A exportação <br />
                        <strong className="text-primary">
                            segue em expansão
                        </strong>
                    </p>
                    <p className="mt-10 max-w-[563px] tracking-tight text-textblack max-[1025px]:max-w-full">
                        Atendendo países estratégicos com economia ascendente, e
                        fortalecendo a marca Águia Inox a nível mundial. Para
                        isso, conta com empresas especializadas nos trâmites
                        internacionais, e um planejamento de importação e
                        exportação que permite atravessar oceanos, inclusive com
                        cargas especiais. <br />
                        <br /> Com base na preocupação constante com o
                        meio-ambiente e comunidade, desenvolve continuamente
                        projetos sociais e investe em tecnologias que projetam a
                        sustentabilidade a longo prazo. Em uma história de quase
                        2 décadas, um longo caminho já foi trilhado, mas acima
                        de tudo, a Águia Inox está preparada para o crescimento
                        que projeta nos próximos anos. Águia Inox, Sempre no
                        Alto!
                    </p>
                    <p className="mt-5 text-xl font-semibold tracking-tight text-[#4B4B4B]">
                        Águia Inox, Sempre no Alto!
                    </p>
                </div>
            </div>

            <div
                id="selos"
                className="relative mt-48 flex w-full flex-col space-y-28 py-36 max-[1025px]:mt-20"
            >
                <img
                    src="/bg-selos.png"
                    alt=""
                    className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                />

                <div className="flex w-full items-center justify-end gap-[104px] max-[1281px]:grid max-[1281px]:grid-cols-2 max-[1281px]:px-6 max-[1025px]:grid-cols-1 max-[1025px]:justify-center max-[1025px]:text-center">
                    <div className="max-[1025px]:flex max-[1025px]:flex-col max-[1025px]:items-center">
                        <span className="font-sora tracking-tight text-white">
                            Selo
                        </span>
                        <p className="mt-2.5 font-sora text-5xl text-white max-[769px]:text-4xl max-[601px]:text-3xl">
                            <strong className="font-bold text-primary">
                                Qualidade
                            </strong>
                            <br />
                            Inquestionável
                        </p>
                        <p className="mt-8 max-w-[421px] tracking-tight text-white">
                            Na Águia Inox, qualidade é compromisso permanente.
                            Cada produto reflete precisão, cuidado e excelência
                            em cada etapa do processo. Não medimos esforços para
                            superar expectativas e garantir durabilidade.
                            Atuamos com rigor técnico e atenção aos detalhes.
                            Nossa qualidade é reconhecida porque nunca foi
                            negociável.
                        </p>
                    </div>
                    <video
                        src="/poster-qualidade.png"
                        poster="/poster-qualidade.png"
                        className="h-[450px] w-full max-w-[1175px] object-cover max-[1536px]:h-[300px] max-[1536px]:max-w-[870px] max-[1367px]:max-w-[740px] max-[1281px]:max-w-[670px] max-[1025px]:max-w-full"
                        controls
                    ></video>
                </div>

                <div className="flex w-full items-center justify-start gap-[104px] max-[1281px]:grid max-[1281px]:grid-cols-2 max-[1281px]:px-6 max-[1025px]:grid-cols-1 max-[1025px]:justify-center max-[1025px]:text-center">
                    <video
                        src="/poster-confianca.png"
                        poster="/poster-confianca.png"
                        className="h-[450px] w-full max-w-[1175px] object-cover max-[1536px]:h-[300px] max-[1536px]:max-w-[870px] max-[1367px]:max-w-[740px] max-[1281px]:max-w-[670px] max-[1025px]:order-2 max-[1025px]:max-w-full"
                        controls
                    ></video>
                    <div className="max-[1025px]:flex max-[1025px]:flex-col max-[1025px]:items-center">
                        <span className="font-sora tracking-tight text-white">
                            Selo
                        </span>
                        <p className="mt-2.5 font-sora text-5xl text-white max-[769px]:text-4xl max-[601px]:text-3xl">
                            <strong className="font-bold text-primary">
                                Confiança
                            </strong>
                            <br />
                            Inoxidável
                        </p>
                        <p className="mt-8 max-w-[421px] tracking-tight text-white">
                            A confiança que oferecemos é sólida como o aço que
                            moldamos. Com transparência, responsabilidade e
                            consistência, construímos relações duradouras.
                            Estamos presentes em todos os momentos, oferecendo
                            suporte e segurança. Nossos clientes sabem que podem
                            contar conosco sempre. Na Águia Inox, confiança é um
                            valor que não enferruja.
                        </p>
                    </div>
                </div>

                <div className="flex w-full items-center justify-end gap-[104px] max-[1281px]:grid max-[1281px]:grid-cols-2 max-[1281px]:px-6 max-[1025px]:grid-cols-1 max-[1025px]:justify-center max-[1025px]:text-center">
                    <div className="max-[1025px]:flex max-[1025px]:flex-col max-[1025px]:items-center">
                        <span className="font-sora tracking-tight text-white">
                            Selo
                        </span>
                        <p className="mt-2.5 font-sora text-5xl text-white max-[769px]:text-4xl max-[601px]:text-3xl">
                            <strong className="font-bold text-primary">
                                Conexões
                            </strong>
                            <br />
                            são Prosperas
                        </p>
                        <p className="mt-8 max-w-[421px] tracking-tight text-white">
                            Acreditamos que conexões verdadeiras geram
                            resultados duradouros. Trabalhamos lado a lado com
                            nossos clientes, entendendo suas necessidades e
                            entregando valor. Cada projeto é uma oportunidade de
                            crescer juntos. Prosperidade, para nós, vem de
                            relações bem cuidadas. É assim que transformamos
                            parcerias em conquistas concretas.
                        </p>
                    </div>
                    <video
                        src="/poster-conexoes.png"
                        poster="/poster-conexoes.png"
                        className="h-[450px] w-full max-w-[1175px] object-cover max-[1536px]:h-[300px] max-[1536px]:max-w-[870px] max-[1367px]:max-w-[740px] max-[1281px]:max-w-[670px] max-[1025px]:max-w-full"
                        controls
                    ></video>
                </div>
            </div>

            <div className="mt-[150px] flex w-full flex-col items-center justify-center gap-9 px-6">
                <p className="font-sora text-5xl tracking-tight text-textblack max-[769px]:text-4xl max-[601px]:text-center max-[601px]:text-3xl">
                    Nosso{" "}
                    <span className="font-medium text-primary">
                        compromisso
                    </span>
                </p>
                <p className="max-w-[920px] text-center tracking-tight text-textblack">
                    Nosso compromisso transcende fronteiras. Impulsionados pela
                    força da marca Águia Inox e por uma visão de excelência,
                    dedicamo-nos a expandir horizontes em mercados estratégicos
                    globais. Através de parcerias sólidas e um planejamento
                    logístico internacional impecável, asseguramos que cada
                    projeto, inclusive o transporte de cargas especiais, seja
                    conduzido com a máxima segurança e qualidade, honrando a
                    confiança de nossos clientes e o desenvolvimento de nossos
                    colaboradores.
                </p>
            </div>

            <div
                id="valores"
                className="relative mt-[232px] h-[523px] w-full bg-primary max-[1025px]:mt-20 max-[1025px]:h-fit max-[1025px]:bg-white"
            >
                <div className="absolute -top-32 left-1/2 grid w-full max-w-[1480px] -translate-x-1/2 grid-cols-3 gap-14 px-6 max-[1025px]:static max-[1025px]:-translate-x-0 max-[1025px]:grid-cols-1">
                    <div className="flex h-fit min-h-[484px] w-full flex-col items-center justify-start rounded-[10px] border-[3px] border-primary bg-[#EDF1F8] px-3 pt-20 max-[601px]:min-h-fit max-[601px]:pb-6">
                        <img
                            src="/icon-missao.svg"
                            alt=""
                            className="h-[120px] w-[120px]"
                        />
                        <p className="mt-10 font-sora text-4xl font-medium tracking-tight text-primary">
                            Missão
                        </p>
                        <p className="mt-2.5 max-w-[314px] text-center tracking-tight text-textblack max-[1025px]:max-w-[95%]">
                            Oportunizar a seus profissionais uma possibilidade
                            de realizarem os seus sonhos e projetos de vida, com
                            orgulho e paixão, por meio do seu negócio, de modo
                            que os interesses da empresa sejam atendidos e as
                            expectativas dos clientes sejam alcançadas.
                        </p>
                    </div>
                    <div className="flex h-fit min-h-[484px] w-full flex-col items-center justify-start rounded-[10px] border-[3px] border-primary bg-[#EDF1F8] px-3 pt-20 max-[601px]:min-h-fit max-[601px]:pb-6">
                        <img
                            src="/icon-visao.svg"
                            alt=""
                            className="h-[120px] w-[120px]"
                        />
                        <p className="mt-10 font-sora text-4xl font-medium tracking-tight text-primary">
                            Visão
                        </p>
                        <p className="mt-2.5 max-w-[314px] text-center tracking-tight text-textblack max-[1025px]:max-w-[95%]">
                            Ser uma empresa sólida, de excelência e referência
                            em seu negócio.
                        </p>
                    </div>
                    <div className="flex h-fit min-h-[484px] w-full flex-col items-center justify-start rounded-[10px] border-[3px] border-primary bg-[#EDF1F8] px-3 pt-20 max-[601px]:min-h-fit max-[601px]:pb-6">
                        <img
                            src="/icon-valores.svg"
                            alt=""
                            className="h-[120px] w-[120px]"
                        />
                        <p className="mt-10 font-sora text-4xl font-medium tracking-tight text-primary">
                            Valores
                        </p>
                        <p className="mt-2.5 max-w-[314px] text-center tracking-tight text-textblack max-[1025px]:max-w-[95%]">
                            Confiança, Sustentabilidade do Negócio, Segurança e
                            Qualidade, Espírito de Equipe e Lucratividade.
                        </p>
                    </div>
                </div>
            </div>

            <div
                id="diferenciais"
                className="mt-[150px] flex w-full flex-col items-center"
            >
                <div className="flex w-full flex-col items-center px-6">
                    <p className="font-sora text-5xl tracking-tight text-secondary max-[769px]:text-4xl max-[601px]:text-center max-[601px]:text-3xl">
                        Nossos{" "}
                        <span className="font-medium text-primary">
                            diferenciais
                        </span>
                    </p>
                    <p className="mt-7 w-full max-w-[920px] text-center tracking-tight text-textblack">
                        Nesses mais de 15 anos de atuação, a Águia Inox
                        acompanhou as inovações dos segmentos em que atua e se
                        especializou em oferecer o melhor para cada setor. Com
                        uma equipe técnica de ponta.
                    </p>
                </div>

                <div className="mx-auto mt-[109px] w-full max-w-[1628px] px-6">
                    {diferenciais.map((dif, index) => (
                        <div
                            className="flex w-full items-center px-16 py-7 odd:bg-[#EDF1F8] max-[601px]:flex-col max-[601px]:gap-6 max-[601px]:px-6 max-[601px]:text-center"
                            key={index}
                        >
                            <p className="text-secondarymax-[601px]:min-w-full min-w-[400px] font-sora text-lg font-medium tracking-tight max-[601px]:min-w-full">
                                {dif.title}
                            </p>
                            <p className="tracking-tight text-secondary">
                                {dif.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative mt-[806px] h-[657px] w-full bg-primary max-[1025px]:mt-[500px] max-[1025px]:h-[457px] max-[769px]:mt-20 max-[769px]:h-fit max-[769px]:bg-white">
                <div className="absolute -top-[582px] left-1/2 flex w-full max-w-[1528px] -translate-x-1/2 flex-col gap-20 px-6 max-[1025px]:-top-[400px] max-[1025px]:gap-10 max-[769px]:static max-[769px]:-top-[300px] max-[769px]:-translate-x-0 max-[769px]:items-center">
                    <div className="flex w-full justify-between max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:gap-6 max-[1025px]:text-center">
                        <p className="font-sora text-5xl tracking-tight text-textblack max-[769px]:text-4xl max-[601px]:text-3xl">
                            Nossas fronteiras <br />
                            <span className="font-medium text-primary">
                                se expandem a cada dia!
                            </span>
                        </p>
                        <p className="max-w-[633px] tracking-tight text-textblack">
                            A Águia Inox orgulha-se de levar a qualidade
                            brasileira cada vez mais longe, superando desafios e
                            construindo pontes para o futuro. Quer ver de perto
                            como nossa operação de exportação está voando alto e
                            conquistando o mundo?
                            <br />
                            <strong>
                                Assista ao nosso vídeo institucional e embarque
                                conosco nesta jornada!
                            </strong>
                        </p>
                    </div>
                    <video
                        src="/poster-fronteiras.png"
                        poster="/poster-fronteiras.png"
                        controls
                        playsInline
                        className="h-[780px] w-full rounded-[10px] object-cover max-[1025px]:h-[400px] max-[769px]:h-[300px]"
                    />
                </div>
            </div>

            <div className="mx-auto mt-[109px] grid h-fit w-full max-w-[1578px] grid-cols-2 gap-[105px] px-6 max-[1025px]:grid-cols-1">
                <div className="flex h-fit w-full flex-col max-[1025px]:items-center max-[1025px]:text-center">
                    <p className="font-sans text-5xl font-medium tracking-tight text-primary max-[769px]:text-4xl max-[601px]:text-3xl">
                        Seja um parceiro Águia Inox
                    </p>
                    <p className="mt-9 max-w-[685px] tracking-tight text-textblack">
                        Temos certeza que podemos oferecer a melhor solução para
                        o seu projeto. Converse com a nossa equipe técnica e
                        invista para melhorar os seus processos e levar a sua
                        empresa para um novo patamar de qualidade, entrega e
                        resultados.
                    </p>
                    <Button className="mt-[52px] h-[60px] w-[300px] border-2 border-primary bg-transparent font-sora text-lg text-primary hover:bg-primary hover:text-white">
                        Solicitar orçamento
                    </Button>
                </div>
                <img
                    src="/img-parceiros.png"
                    alt=""
                    className="z-10 -mt-52 h-[506px] w-full rounded-[10px] object-cover max-[1025px]:-mt-0 max-[1025px]:h-[400px]"
                />
            </div>

            <Footer />
        </>
    );
}
