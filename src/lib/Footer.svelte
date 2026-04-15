<script>
    import imgfoot from '$lib/assets/crossfit.jpg'

    let props = $props()
</script>

<section class="footer" >
    <div class="footer__wrapper wrap">
        <div class="footer__img">
            <img src="{imgfoot}" alt="" width="1920" height="1080">
        </div>
    
        <div class="footer__info">
            <h1>Venha fazer o seu <br> primeiro treino grátis</h1>
            <p>Entre em contato via WhatsApp ou e-mail e <br> fale com um treinador especialista da equipe</p>
            
            <div class="footer__btn">
                <a class="btn" href="">WhatsApp</a>
                <a class="btn" href="">Email</a>
            </div>
    
        </div>
    </div>


</section>

<div class="credits">
    <div class="credit__wrapper">
        <span> © Academia Local, 2023</span>    
    </div>
</div>        

<style>
    .footer{
        margin-top: 90px;
        position: relative;
    }
    .footer__wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 40px;
    }

    .footer__img::after{
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(0,0,0,0.55);
    }

    .footer__info{
        z-index: 1;
        align-content: center;
        margin-left: 20px;
    }
    img{
        border-radius: 16px;
        height: auto;
    }
    p{
        font-size: 18px;
        margin-top: 16px;   
    }
    h1{
        font-size: 36px;
    }
    .footer__btn{
        display: flex;
        gap: 8px;
        margin-top: 24px;
    }
    .credits_wrapper{
        padding: 410px;
        margin-top: 30px;
    }
</style>