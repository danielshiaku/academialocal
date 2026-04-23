<script>
    import { page } from '$app/stores'
    import Card from '$lib/Card.svelte';
    import Header from '$lib/Header.svelte';
    import Single from '$lib/Single.svelte';
    import { modalidades } from '$lib/stores'
    let modalidade = $page.params.slug


    //let data = $modalidades.find(e => e.slug === modalidade)
    let { data } = $props()
    console.log(data)
</script>

<Header/>
<Single
title = {data.name}
content = {data.content}
img = {data.img}
/>


<section class="list">
    <h3>Outras modalidades:</h3>
    <div class="related__wrapper wrap">
        {#each $modalidades as modalidade}
        <Card
            info = {modalidade}
        />
        {/each}
    </div>
</section>

<style>
    .related__wrapper{
        margin-top: 60px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
</style>
