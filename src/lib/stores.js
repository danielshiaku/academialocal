import { writable } from "svelte/store";

export const modalidades = writable([
    {name: 'Musculação',
    slug: 'musculação',
    img: '/musculacao.jpg',
    content: 'treinos de musculação individual ou em grupo'},

    {name: 'Crossfit',
    slug: 'crossfit',
    img: '/crossfit.jpg',
    content: 'treinos de musculação individual ou em grupo'},

    {name: 'Alongamento',
    slug: 'alongamento',
    img: '/alongamento.jpg',
    content: 'treinos de musculação individual ou em grupo'},

    {name: 'Exercícios em grupo',
    slug: 'exercicios',
    img: '/exercicios-grupo.jpg',
    content: 'treinos de musculação individual ou em grupo'},

    {name: 'Natação',
    slug: 'natacao',
    img: '/natacao.jpg',
    content: 'treinos de musculação individual ou em grupo'}
])