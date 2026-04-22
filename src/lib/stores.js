import { writable } from "svelte/store";

export const modalidades = writable([
    {name: 'musculação',
    slug: 'musculação',
    img: 'musculacao.jpg'},

    {name: 'crossfit',
    slug: 'crossfit',
    img: 'crossfit.jpg'}
])