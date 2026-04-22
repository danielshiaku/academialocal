<script>
    import { page } from '$app/stores'
    import Card from '$lib/Card.svelte';
    import Header from '$lib/Header.svelte';
    import Single from '$lib/Single.svelte';
    import { modalidades } from '$lib/stores'
    let modalidade = $page.params.slug


    let data = $modalidades.find(e => e.slug === modalidade)
    console.log(data)
</script>

<Header/>
<Single
title = {data.name}
content = {data.content}
img = {data.img}
/>


<section class="modalidades">
    <div class="modalidades_wrapper wrap">
        {#each $modalidades as modalidade}
        <Card
            info = {modalidade}
        />
        {/each}
    </div>
</section>

<style>
    .modalidades_wrapper{
        margin-top: 60px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
</style>
