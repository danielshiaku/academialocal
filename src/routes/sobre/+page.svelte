<script>
    import Intro from "$lib/Intro.svelte";
    import Footer from "$lib/Footer.svelte";
    import Info from "$lib/Info.svelte";
</script>

<Intro
title="Conheça a academia que mais cresce na cidade!"
content="Confira algumas das perguntas frequentes."
icon="peso"
img = "grupo"
/>  

<div class="faq">
    <div class="faq__wrapper wrap">
        <Info
        question="TESTE"
        answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies arcu eu vehicula pellentesque. Ut nec faucibus magna. Sed sed vestibulum diam. Aliquam tristique ante vitae diam ultrices, ut viverra libero consectetur."
        />

        <Info
        question="TESTE"
        answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies arcu eu vehicula pellentesque. Ut nec faucibus magna. Sed sed vestibulum diam. Aliquam tristique ante vitae diam ultrices, ut viverra libero consectetur."
        />      
    </div>
</div>

<style>
    .faq{
        margin-top: 60px;
    }
    .faq__wrapper{
        display: inline-grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
        
    
</style>