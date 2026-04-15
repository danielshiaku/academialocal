<script>
    import logo from '$lib/assets/logo.png'
</script>

<section class="header">
<img src="{logo}" alt="" class="logo">

<div class="nav">
    <a href="" class="btn_nav">Sobre</a>
    <a href="" class="btn_nav">Home</a>
    <a href="" class="btn_nav">Modalidades</a>
</div>

<div class="contato">
    <a href="">Contato</a>
</div>

</section>

<style>
    .header{
        display: flex;
        min-width: 1000px;
        min-height: 120px;
        align-items: center;
        justify-content: start;
        padding: 10px;
    }
    .logo{  
        width: 277px;
        height: 50px;
    }
    .nav{
        padding: 22 205;
        display: flex;
        gap: 24px;
        margin-left: auto;
    }

    .btn_nav:hover{
        text-decoration: underline;
    }
    .contato{
        min-width: 74px;
        min-height: 34px;
        margin-right: 40px;
        margin-left: 36px;
        border: solid 1px;
        border-color: red;
        padding: 6px 12px;
        border-radius: 4px;
        transition: 250ms;
    }

    .contato:hover{
        background-color: var(--feat);
        transition: 125ms;
    }
    
</style>    