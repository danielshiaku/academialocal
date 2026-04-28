<script>
    let { name, description } = $props()

    let site = "Academia Local"
    let separator = " - "
</script>

<svelte:head>
    <title>{site}{separator}A academia pertinho de você</title>
    <meta name={name} content={description}>
</svelte:head>
    
