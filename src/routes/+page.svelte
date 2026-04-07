<script>
    import ImgHome from '$lib/assets/musculacao.jpg'
    console.log(ImgHome)
</script>


<section class="intro" style="background-image: url({ImgHome});">

<div class="intro__wrapper wrap">
    <h1>Você está pronto para o desafio? 💪</h1>
    <p> Academia Local está pronta para te ajudar a chegar mais longe e alcançar sua melhor performance.</p>
    <a href="">Modalidades</a>
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
    }
</style>