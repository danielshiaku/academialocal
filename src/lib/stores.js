import { writable } from "svelte/store";

export const modalidades = writable([
    {name: 'Musculação',
    slug: 'musculação',
    img: 'musculacao.jpg'},

    {name: 'Crossfit',
    slug: 'crossfit',
    img: 'crossfit.jpg'},

    {name: 'Alongamento',
    slug: 'alongamento',
    img: 'alongamento.jpg'},

    {name: 'Exercícios em grupo',
    slug: 'exercicios',
    img: 'exercicios-grupo.jpg'},

    {name: 'Natação',
    slug: 'natacao',
    img: 'natacao.jpg'}
])