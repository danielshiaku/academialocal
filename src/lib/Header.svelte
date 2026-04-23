<script>
    import logo from '$lib/assets/logo.png'
    import { page } from '$app/stores'
    let current = $state($page.route.id)
</script>

<section class="header">
<div class="header__wrapper wrap">
<a href="/"><img src="{logo}" alt="" class="logo"></a>

<nav>
    <ul>
        <li><a href="/sobre" class="btn_nav" class:active={current=='/sobre'}>Sobre</a></li>
        <li><a href="/" class="btn_nav" class:active={current=='/'}>Home</a></li>
        <li><a href="/modalidades" class="btn_nav" class:active={current=='/modalidades' || current == '/modalidades/[slug]'}>Modalidades</a></li>
        <li><a class="btn header__btn" href="#contato" >Contato</a></li>
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
        background-color: var(--white);
        border-color: var(--black);
        transition: 125ms;
    }
    
    ul{
        align-items: center;
        display: flex;
        gap: 24px;
    }
    a.active, a.active:hover{
        text-decoration: underline;
        text-decoration-color: var(--feat);
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