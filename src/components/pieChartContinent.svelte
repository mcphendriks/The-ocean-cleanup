<h1 class="heading">Food consumption in a city</h1>
<div class="wrapper">

<div class="pie-wrap"></div>
<div class="pie-wrap">

    <div class="light-yellow entry">
        <p>25%</p>
        <p class="entry-value">Rice</p>
    </div>
    
    <div class="sky-blue entry">
        <p>25%</p>
        <p class="entry-value">Pasta</p>
    </div>
    
    <div class="pink entry">
        <p>12.5%</p>
        <p class="entry-value">Beans </p>
    </div>
    
    <div class="purple entry">
        <p> 12.5%</p>
        <p class="entry-value">Plantain</p>
    </div>
    
    <div class="green entry">
        <p> 12.5%</p>
        <p class="entry-value">Potato</p>
    </div>
    
    <div class="wheat entry">
        <p> 12.5%</p>
        <p class="entry-value">Yam</p>
    </div>
    
    </div>

<div class="key-wrap"></div>

</div>

<style>
    body{
    font-family: Helvetica, sans-serif;
}

.heading{
    text-align: center;
    margin-top: 50px;
}

.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
}

.pie-wrap{
    border: 2px solid lightgrey;
    width: 400px;
    height: 400px;
    margin: 10% 50px;
    position: relative;
    border-radius: 50%;
    color: black;
    overflow: hidden;
}

.pie-wrap .entry{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* *the individual entries* */
.sky-blue{
    background-color: lightskyblue;
    height:50%;
    width: 50%;
    display: block;
}

.light-yellow{
    background-color: lightyellow;
    height:50%;
    width: 50%;
}

.pink{
    background-color: pink;
    height:50%;
    position: absolute;
    top: 0px;
    right: 0;
    width: 50%;
    clip-path: polygon(0 0, 100% 0%, 0% 100%);
}

.purple{
    background-color: purple;
    height:50%;
    width: 50%;
    right: 0;
    top: 0;
    position: absolute;
    clip-path:polygon(0% 100%, 100% 0%, 100% 100%);
}

.green{
    background-color: limegreen;
    height:50%;
    width: 50%;
    right: 0;
    top: 50%;
    position: absolute;
    clip-path:polygon(0% 0%, 100% 0%, 100% 100%);
}

.wheat{
    background-color: wheat;
    height:50%;
    width: 50%;
    right: 0;
    top: 50%;
    position: absolute;
    clip-path:polygon(0% 0%, 100% 100%, 0% 100%);
}

.pie-wrap .purple p{
    position: absolute;
    top: 140px;
    color: white;
}
.pie-wrap .purple p:first-child{
    top: 120px;
}

.pie-wrap .green p{
    position: absolute;
    top: 20px;
}

.pie-wrap .green p:first-child{
    top: 0px;
}

.pie-wrap .pink p, .pie-wrap .wheat p{
    position: absolute;
    left: 20px;
    top: 80px;
}

.pie-wrap .pink, .pie-wrap .wheat{
    justify-content: flex-start;
}

.pie-wrap .pink p:first-child, .pie-wrap .wheat p:first-child{
    top: 100px;
}

.entry .entry-value{
    display: none;
    transition: all 500ms linear;
}
.entry:hover .entry-value{
    display: block;
}

.entry{
    transition: all 500ms linear ;
}
.entry:hover{
    filter: invert();
}
</style>





<!-- <h2>Plastic removed from each continent</h2>
<div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart green">
        <path class="circle-bg" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path class="circle" stroke-dasharray="90, 100" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text x="18" y="20.35" class="percentage">90%</text>
    </svg>
</div>

<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Proxima', sans-serif;
    }

    :root {
    --darkBlue: #143653;
    --lightBlue: #5CC8DE;
    --whiteColor: #ffffff;
    --lightGray: #f7f7f7;
    --accentGray: rgb(228, 228, 228);
    --worldmapGray: #dbdbdb;
    --worldmapBorder: #8c8c8c;
    --worldmapbuttons: rgb(235, 235, 235);
    --textColor: #143653;
    --boxShadow: rgba(128, 128, 128, 0.132);
    --color: rgb(212, 212, 212);
    --textSize: 1.2rem;
    --iconSize: 2rem;

    /* color gradient pie charts */
    --color1: #5CC8DE;
    --color2: #79CFE1;
    --color3: #95D6E3;
    --color4: #B2DDE6;
    --color5: #CEE4E8;
    --color6: #EBEBEB;
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

    h1{
    line-height: 1.2;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--darkBlue);
    }

    h2 {
    line-height: 1.2;
    font-weight: 500;
    color: var(--darkBlue);
    margin-bottom: 1rem;
    }

      /* boxes styling */
    .box-1,
    .box-2,
    .box-3,
    .box-4,
    p {
    font-size: 1.6rem;
    color: var(--lightBlue);
    font-family: 'Roboto Mono', monospace;
    }

        /* Charts % */
        .single-chart {
    width: 100%;
    justify-content: space-around;
    }

    .circular-chart {
    display: block;
    margin: 1.3rem auto;
    margin-bottom: 0;
    width: 100px;
    max-height: 250px;
    }

    .circle-bg {
    fill: none;
    stroke: #eee;
    stroke-width: 3.8;
    }

    .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
    }

    @keyframes progress {
    0% {
        stroke-dasharray: 0 100;
    }
    }

    .circular-chart.green .circle {
    stroke: var(--lightBlue);
    }

    .percentage {
    fill: var(--textColor);
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
    }
</style> -->