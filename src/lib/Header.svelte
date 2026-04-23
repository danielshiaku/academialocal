<script>
    import logo from '$lib/assets/logo.png'
</script>

<section class="header">
<div class="header__wrapper wrap">
<a href="/"><img src="{logo}" alt="" class="logo"></a>

<nav>
    <ul>
        <li><a href="/sobre" class="btn_nav">Sobre</a></li>
        <li><a href="/" class="btn_nav">Home</a></li>
        <li><a href="/modalidades" class="btn_nav">Modalidades</a></li>
        <li><a class="btn header__btn" href="/">Contato</a></li>
    </ul>   
    
</nav>
</div>
</section>

<style>
    .header__wrapper{
        display: flex;
        align-items: center;
        min-height: 120px;
    }
    .logo{  
        width: 277px;
    }
    nav{
        display: flex;
        gap: 24px;
        margin-left: auto;
    }

    .btn_nav:hover{
        text-decoration: underline;
    }
    .header__btn{
        border-color: red;
        transition: 250ms;
        margin-top: 0;
    }

    .header__btn:hover{
        background-color: var(--feat);
        transition: 125ms;
    }
    
    ul{
        align-items: center;
        display: flex;
        gap: 24px;
    }

    @media(max-width: 800px){
        .header__wrapper{
            flex-direction: column;
            justify-content: center;
        }
        nav{
            margin-left: unset;
        }
    }
</style>    