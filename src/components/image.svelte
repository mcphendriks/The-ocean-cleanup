<script>
    export let data
</script>

{#each data as img}
    <img alt="" src="{img.url}">
{/each}

<style>
    img{
        width: 10rem;
        height: auto;
    }
</style>