<script>
    import { fly } from "svelte/transition";

    let { title, content, img } = $props()
</script>

<section class="single">
    <div class="single__wrapper wrap">
        
        <div class="single__texto">
            <h1 in:fly = {{y:-12, duration:125, delay:125}}>{title}</h1>
            <p in:fly = {{y:-12, duration:125, daley:250}}>{content}</p>
        </div>
    
        <div class="single__img">
            <img src="{img}" alt="" width="'50%">
        </div>
    </div>
</section>

<style>
    .single{
        z-index: 1;
        position: relative;
        min-height: 360px;
    }

    .single__wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    .single__img{
        position: relative;
        border-radius: 8px;
    }
    .single__img::after{
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--overlay);
    }
    
    p{
        font-size: 18px;
    }
    h1{
        font-size: 36px;
    }
    img{
        height: 360px;
        object-fit: cover;
    }

    @media(max-width: 800px){
        .single__wrapper{
            grid-template-columns: 1fr;
        }
        .single__img{
            grid-row: 1;
            margin-left: -20px;
        }
        img{
            height: 340px;
            width: 100%;
            object-position: center;
        }
    }
</style>