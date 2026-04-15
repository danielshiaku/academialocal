<script>
    import musculacao from '$lib/assets/musculacao.jpg';
    import EmojiMusc from '$lib/assets/icon-muscle.png';
    import grupo from '$lib/assets/exercicios-grupo.jpg';
    import peso from '$lib/assets/icon-weight.png'
    import Header from '$lib/Header.svelte';

    let props = $props();
    

    if (props.img === 'musculacao'){
        props.img = musculacao
    }else{
        if (props.img === 'grupo'){
        props.img = grupo
        }
    }

    if (props.icon === 'muscle'){
        props.icon = EmojiMusc
    }else if(props.icon=="peso"){
        props.icon = peso
    }
</script>

<Header/>
<section class="intro" style="background-image: url({props.img});">

<div class="intro__wrapper wrap">
    <h1>{props.title} <img src="{props.icon}" alt=""></h1>
    <p> {props.content}</p>
    {#if props.btn && props.href}
    <a href="sobre" class="btn">{props.btn}</a>
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