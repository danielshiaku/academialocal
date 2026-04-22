<script>
    import Card from "$lib/Card.svelte";
    import Intro from "$lib/Intro.svelte";
    import { modalidades } from "$lib/stores";

    //console.log($modalidades)
</script>
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