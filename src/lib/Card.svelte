<script>
    let { info } = $props()
    import { page } from '$app/stores'
</script>

<a href="/modalidades/{info.slug}" class="card">
<img src="{info.img}" alt="" width="120px" height="120px">
<h2>{info.name}</h2>
</a>
<style>
    img{
        object-fit: cover;
        border-radius: 4px;
    }

    h2{
        padding: 8px 16px;
    }

    .card{
        border: 1px solid;
        border-color: rgba(255,255,255,0.2);
        display: flex;

        flex-basis: calc(50% - 10px);
        border-radius: 8px;
        align-items: center;
        transition: 125px;
    }

    .card:hover{
        border-color: #fff;
        transition: 250px;
    }


    @media(max-width: 800px){
        .card{
            flex-basis: 100%;
        }
    }
</style>
