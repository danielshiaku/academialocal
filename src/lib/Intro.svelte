<script>
    import musculacao from '$lib/assets/musculacao.jpg';
    import EmojiMusc from '$lib/assets/icon-muscle.png';
    import grupo from '$lib/assets/exercicios-grupo.jpg';
    import peso from '$lib/assets/icon-weight.png'
    import Header from '$lib/Header.svelte';
    import alongamento from '$lib/assets/alongamento.jpg'
    import { fly } from 'svelte/transition'

    let {img, icon, title, content, href, btn} = $props();
    

    if (img === 'musculacao'){
        img = musculacao
    }else{
        if (img === 'grupo'){
        img = grupo
        }
    else{
        if (img === 'alongamento')
        img = alongamento
    }}

    if (icon === 'muscle'){
        icon = EmojiMusc
    }else if(icon=="peso"){
        icon = peso
    }
</script>

<Header/>
<section class="intro" style="background-image: url({img});">

<div class="intro__wrapper wrap">
    <h1 in:fly = {{y:-12, duration:125, delay:125}}>{title} <img src="{icon}" alt="" ></h1>
    <p in:fly = {{y:-12, duration:125, delay:250}}> {content}</p>
    
    {#if btn && href}
    <a in:fly = {{y:-12,duration:125, delay:375}} href="sobre" class="btn">{btn}</a>
    {/if}
</div>

</section>

<style>
    .intro{
        min-height: 360px;
        min-width: 1000px;
        background-size: cover;
        background-position: center;
        justify-content: start;
        display: grid;
        align-content: center;
        position: relative;
    }

    .intro::after{
        content:"";
        background-color: rgba(0,0,0,0.55);
        position: absolute;
        inset: 0;
    }

    .intro__wrapper{
        z-index: 1;
        max-width: 450px;
        line-height: 1.2;
    }

    p{
        font-size: 18px;
        margin-top: 16px;   
    }

    h1{
        font-size: 36px;
    }

    img{
        display: inline;
        max-width: 36px;
    }
</style>