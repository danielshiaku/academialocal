<script>
    import imgfoot from '$lib/assets/crossfit.jpg'

    let props = $props()
</script>

<section class="footer" >
    <img src="{imgfoot}" alt="">

    <div class="conteudo">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>

</section>

<style>
    .footer{
        min-width: 1000px;
        min-height: 428px;
        background-size: cover;
        padding: 40px;
        display: inline-block;
        align-content: center;
        position: relative;
    }

    .footer::after{
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(0,0,0,0.55);
    }

    .conteudo{
        z-index: 1;
        position: relative;
    }
    img{
        max-width: 450px;
        max-height: 300px;
    }
</style>