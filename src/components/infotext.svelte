<script>
    export let data
</script>
<!-- Dashboard-info: info about dashboard -->
<section>
    <p>{data.infotext.markdown}</p>
</section>

<style>
     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Proxima', sans-serif;
    }

    :global(html) {
    font-size: 62.5%;
    scroll-behavior: smooth;
    }

    :global(body) {
    background-color: var(--lightGray);
    color: var(--textColor);
    position: relative;
    }

    section {
        grid-area: dashboard-info;
        border-radius: .5rem;
        padding: 1.5rem;
        background-color: var(--whiteColor);
        box-shadow: var(--boxShadow) 0px 0px 8px;
        transition: .2s;
    }
    p {
        font-size: 1.3rem;
        line-height: 1.4;
        color: var(--textColor);
        margin-top: 0.5rem;
        font-family: 'Proxima', sans-serif;

    }
</style>