import { Head, usePage } from '@inertiajs/react';

type PageProps = {
    slug?: string;
};

export default function News() {
    const { slug } = usePage<PageProps>().props;
    return (
        <>
            <Head title="Notícias" />
            <div className="container mx-auto py-10">
                <h1 className="mb-4 text-3xl font-bold">Notícias</h1>
                {slug ? (
                    <p>
                        Exibindo notícia: <strong>{slug}</strong>
                    </p>
                ) : (
                    <p>Lista de notícias.</p>
                )}
            </div>
        </>
    );
}
