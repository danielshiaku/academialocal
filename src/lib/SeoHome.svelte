<script>
    let { name, description } = $props()

    let site = "Academia Local"
    let separator = " - "
    import img from "$lib/assets/musculacao.avif"
</script>

<svelte:head>
    <title>{site}{separator}A academia pertinho de você</title>
    <meta name={name} content={description}>

    <meta property="og:title" content="A academia pertinho de você"/>
    <meta property="og:description" content={description}/>
    <meta property="og:image" content={img}/>
</svelte:head>
    
