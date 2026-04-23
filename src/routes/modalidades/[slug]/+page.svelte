<script>
    import { page } from '$app/stores'
    import Card from '$lib/Card.svelte';
    import Header from '$lib/Header.svelte';
    import Single from '$lib/Single.svelte';
    import { modalidades } from '$lib/stores'
    let modalidade = $page.params.slug
    import autoAnimate from '@formkit/auto-animate';

    //let data = $modalidades.find(e => e.slug === modalidade)
    let { data } = $props()
    console.log(data)
</script>

<Header/>

{#key data}
<Single
title = {data.name}
content = {data.content}
img = {data.img}
/>
{/key}


<div class="list">
    <h3>Outras modalidades:</h3>
    <div class="related__wrapper wrap" use:autoAnimate>
        {#each $modalidades as info}
        {#if info.slug != $page.params.slug}
        <Card
            info = {info}
        />
        {/if}
        {/each}
    </div>
</div>

<style>
    .related__wrapper{
        margin-top: 60px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
</style>
