<script>
    let { name, description } = $props()

    let site = "Academia Local"
    let separator = " - "
</script>

<svelte:head>
    <title>{site}{separator}{name}</title>
    <meta name={name} content={description}>
</svelte:head>
    
