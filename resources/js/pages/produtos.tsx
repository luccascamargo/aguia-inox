import { Head, usePage } from '@inertiajs/react';

type PageProps = {
    slug?: string;
};

export default function Produtos() {
    const { slug } = usePage<PageProps>().props;
    return (
        <>
            <Head title="Produtos" />
            <div className="container mx-auto py-10">
                <h1 className="mb-4 text-3xl font-bold">Produtos</h1>
                {slug ? (
                    <p>
                        Exibindo detalhes do produto: <strong>{slug}</strong>
                    </p>
                ) : (
                    <p>Lista de produtos.</p>
                )}
            </div>
        </>
    );
}
