<script>
    import IconPlus from "$lib/assets/IconPlus.svelte";
    
    let props = $props()
</script>
<div class="faq">
    <div class="faq__wrapper wrap">
        <div class="question">
            <h3>{props.question}</h3>
            <IconPlus/>
        </div>
        
    <div class="answer">
        <p>{props.answer}</p>
    </div>
        
    </div>
</div>

<style>
    .question{
        display: flex;
        border: solid 1px rgba(255, 255,255, 0.2);
        align-items: center;
    }   

    .question :global(svg){
        margin-left: auto;
        margin-right: 8px;
    }
    .answer{
        border-left: 1px solid var(--feat);
    }
</style>