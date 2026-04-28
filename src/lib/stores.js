import { writable } from "svelte/store";

export const modalidades = writable([
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
])