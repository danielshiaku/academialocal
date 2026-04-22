<script>
    let { info } = $props()

    console.log(info)
</script>

<h1>{info.name}</h1>
<h1>{info.slug}</h1>
<img src="{info.img}" alt="">