<script>
    export let data
</script>

<section>
    <h2>{data.dataHygraph.dashboard.ocean.oceanExtractionDate.markdown}</h2>
    <p>{data.dataApi.systems[0].latest_extraction_date}</p>
</section>

<style>
    section {
        grid-area: dashboard-info-lastportcall;
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