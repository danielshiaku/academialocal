<script>
    import IconPlus from "$lib/assets/IconPlus.svelte";
    
    let {question, answer} = $props()
    let active = $state(false);
    console.log(active)

    function handleActive(){
        active = !active
        console.log("active")
    }

    let count = $state(0)
    
</script>
<div class="info" role="button" onclick={handleActive} onkeyup={onclick} tabindex="0">
    <div class="info__wrapper wrap">
        <div class="question">
            <h3>{question}</h3>
            <IconPlus/>
        </div>
        
    {#if active}
    <div class="answer">
        <p>{answer}</p>
    </div>
    {/if}
        
    </div>
</div>
<style>
    .question{
        display: flex;
        border: solid 1px rgba(255, 255,255, 0.2);
        align-items: center;
        padding: 16px 15px;
        min-width: 860px;
    }   

    .question :global(svg){
        margin-left: auto;
        margin-right: 8px;
    }
    .answer{
        border-left: 1px solid var(--feat);
        padding: 0 15px;
    }
</style>