let modalidades = [
    {name: 'Musculação',
    slug: 'musculação',
    img: '/musculacao.avif',
    content: 'treinos de musculação individual ou em grupo'},

    {name: 'Crossfit',
    slug: 'crossfit',
    img: '/crossfit.avif',
    content: 'treinos de musculação individual ou em grupo'},

    {name: 'Alongamento',
    slug: 'alongamento',
    img: '/alongamento.avif',
    content: 'treinos de musculação individual ou em grupo'},

    {name: 'Exercícios em grupo',
    slug: 'exercicios',
    img: '/exercicios-grupo.avif',
    content: 'treinos de musculação individual ou em grupo'},

    {name: 'Natação',
    slug: 'natacao',
    img: '/natacao.avif',
    content: 'treinos de musculação individual ou em grupo'}
]

export function load({ params }){
    let data = modalidades.find(e => e.slug === params.slug);
    return data;
}