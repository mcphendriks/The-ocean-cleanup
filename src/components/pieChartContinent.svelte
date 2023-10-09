<h1 class="heading">Plastic removed from continents</h1>

<!-- html pie chart continents -->
<div class="wrapper">

    <div class="pie-wrap">

        <!-- light yellow/Rice = Asia-->
        <div class="asia entry"> 
            <p>25%</p> <!-- make this value dynamic, get data from API-->
            <p class="entry-value">Asia</p> <!-- make this value dynamic, get data from API -->
        </div>

        <!-- skyblue/Pasta = America (North)-->
        <div class="america-north entry"> 
            <p>25%</p>
            <p class="entry-value">North Amercia</p>
        </div>

        <!--pink/Beans = America (South)-->
        <div class="america-south entry">
            <p>12.5%</p>
            <p class="entry-value">South America </p>
        </div>

        <!--purple/Plantain = Africa-->
        <div class="africa entry">
            <p> 12.5%</p>
            <p class="entry-value">Africa</p>
        </div>
        
        <!-- green/Potato = Antarctica-->
        <div class="antarctica entry">
            <p> 12.5%</p>
            <p class="entry-value">Antarctica</p>
        </div>
        
        <!-- wheat/Yam = Europe -->
        <div class="europe entry">
            <p> 12.5%</p>
            <p class="entry-value">Europe</p>
        </div>
    
    </div>

    <!--Pie chart keys  -->
    <div class="key-wrap">
        <input type="radio" id="asia" name="values" class="asia-key"/>
        <label for="asia" class="asia-label">Asia</label>

        <input type="radio" name="values" id="america-south" class="america-south-key"/>
        <label for="america-south" class="america-south-label">South America</label>

        <input type="radio" name="values" id="africa" class="africa-key"/>
        <label for="africa" class="africa-label"> Africa</label>

        <input type="radio" name="values" id="antarctica" class="antarctica-key"/>
        <label for="antarctica" class="antarctica-label"> Antarctica</label>

        <input type="radio" name="values" id="europe" class="europe-key"/>
        <label for="europe" class="europe-label"> Europe</label>

        <input type="radio" name="values" id="america-north" class="america-north-key"/>
        <label for="america-north" class="america-north-label"> North America</label>

        <p class="asia-text text">25% of the people eat Rice</p>
        <p class="america-south-text text">12.5% of the people eat Beans</p>
        <p class="africa-text text">12.5% of the people eat Plantain</p>
        <p class="antarctica-text text">12.5% of the people eat Antarctica</p>
        <p class="europe-text text">12.5% of the people eat Yam</p>
        <p class="america-north-text text">25% of the people eat Pasta</p>
    </div>
</div>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Proxima', sans-serif;
    }

 :root {
        /* --darkBlue: #143653;
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
        --iconSize: 2rem; */

        /* color gradient pie charts */
        --color1: #5CC8DE;
    --color2: #79CFE1;
    --color3: #95D6E3;
    --color4: #B2DDE6;
    --color5: #CEE4E8;
    --color6: #EBEBEB;
    }

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
    /* animation: pie-size 500ms 500ms ease forwards; wont work because of grid layout */
}

.pie-wrap .entry{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* *the individual entries* */
.america-north{
    background-color: var(--color1);
    height:50%;
    width: 50%;
    display: block;
}

.asia{
    background-color: var(--color2);
    height:50%;
    width: 50%;
}

.america-south{
    background-color: var(--color3);
    height:50%;
    position: absolute;
    top: 0px;
    right: 0;
    width: 50%;
    clip-path: polygon(0 0, 100% 0%, 0% 100%);
}

.africa{
    background-color: var(--color4);
    height:50%;
    width: 50%;
    right: 0;
    top: 0;
    position: absolute;
    clip-path:polygon(0% 100%, 100% 0%, 100% 100%);
}

.antarctica{
    background-color: var(--color5);
    height:50%;
    width: 50%;
    right: 0;
    top: 50%;
    position: absolute;
    clip-path:polygon(0% 0%, 100% 0%, 100% 100%);
}

.europe{
    background-color: var(--color6);
    height:50%;
    width: 50%;
    right: 0;
    top: 50%;
    position: absolute;
    clip-path:polygon(0% 0%, 100% 100%, 0% 100%);
}

.pie-wrap .africa p{
    position: absolute;
    top: 140px;
    color: white;
}
.pie-wrap .africa p:first-child{
    top: 120px;
}

.pie-wrap .green p{
    position: absolute;
    top: 20px;
}

.pie-wrap .antarctica p:first-child{
    top: 0px;
}

.pie-wrap .pink p, .pie-wrap .europe p{
    position: absolute;
    left: 20px;
    top: 80px;
}

.pie-wrap .pink, .pie-wrap .europe{
    justify-content: flex-start;
}

.pie-wrap .pink p:first-child, .pie-wrap .europe p:first-child{
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

.key-wrap label{
    display: block;
    border: 1px solid;
    width:10rem;
    text-align: center;
    padding: 10px 15px;
    cursor: pointer;
    margin-bottom: 8px;
    }

    input[type="radio"]{
    display: none;
}

.asia-label{
    background-color: var(--color2);
}
.america-south-label{
    background-color: var(--color3);
}
.africa-label{
    background-color: var(--color4);
    color: white;
}
.antarctica-label{
    background-color: var(--color5);
}
.europe-label{
    background-color: var(--color6);
}
.america-north-label{
    background-color: var(--color1);
}

.text{
    display: none;
    margin-left: -50px;
    position: absolute;
    margin-top: 50px;
    font-size: 20px;
    padding-bottom: 4px;
    padding-top: 4px;
    border-bottom: 5px solid ;
    border-top: 5px solid ;
}
.key-wrap label:active{
    opacity: .5;
}
.asia-key:checked ~ .asia-text, .america-south-key:checked ~ .america-south-text, 
.africa-key:checked ~ .africa-text,  .antarctica-key:checked ~ .antarctica-text, 
.europe-key:checked ~ .europe-text, .america-north-key:checked ~ .america-north-text{
    display: block;
}

.asia-text{
    border-color: black;
}
.america-south-text{
    border-color:  pink;
}
.africa-text{
    border-color:  purple;
}
.antarctica-text{
    border-color:  limegreen;
}
.europe-text{
    border-color:  wheat;
}
.america-north-text{
    border-color:  skyblue;
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