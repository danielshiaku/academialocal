<script>
    import Card from "$lib/Card.svelte";
    import Intro from "$lib/Intro.svelte";
    import Seo from "$lib/Seo.svelte";
    import { modalidades } from "$lib/stores";

</script>

<Seo
name = "Modalidades"
description = "A academia local tem várias modalidades"
/>
<Intro
    title = "Temos a modalidade certa para você ️"
    content = "Descubra as diversas modalidades da nossa academia."
    icon = "peso"
    img = "alongamento"
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