<script>
    export let data
</script>

{#each data as img}
    <div class="image-container">
        <img alt="" src="{img.url}">
    </div>
{/each}

<style>
    img{
        width: 100%; /* veranderd van 10rem naar 100% om het mooi in de container te laten passen */
        height: 100%;
        object-fit: cover;
    }
    .image-container{
        grid-area: auto;  
    }
</style>