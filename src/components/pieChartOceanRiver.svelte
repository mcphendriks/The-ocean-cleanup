<h2>Plastic removed from ocean and river systems</h2>

<div class="wrapper">

    <div class="pie-chart-ocean-river-wrap">

        <div class="river entry">
            <p>25%</p>
            <p class="entry-value">River systems</p>
        </div>
                    
        <div class="ocean entry">
            <p>75%</p>
            <p class="entry-value">Ocean systems</p>
        </div>
                    
        <!-- <div class="asia entry">
            <p>12.5%</p>
            <p class="entry-value">Asia </p>
        </div>
                    
        <div class="antarctica entry">
            <p> 12.5%</p>
            <p class="entry-value">Antarctica</p>
        </div>
                    
        <div class="europe entry">
            <p> 12.5%</p>
            <p class="entry-value">Europe</p>
        </div>
                    
        <div class="oceania entry">
            <p> 12.5%</p>
            <p class="entry-value">Oceania</p>
        </div> -->
                    
    </div>
                
    <!--Pie chart keys  -->
    <div class="key-wrap">
        <input type="radio" id="river" name="values" class="river-key"/>
        <label for="river" class="river-label"> River</label>
        
        <input type="radio" name="values" id="ocean" class="ocean-key"/>
        <label for="ocean" class="ocean-label"> Ocean</label>
        
        <!-- <input type="radio" name="values" id="asia" class="asia-key"/>
        <label for="asia" class="asia-label"> Asia</label>
        
        <input type="radio" name="values" id="antarctica" class="antarctica-key"/>
        <label for="antarctica" class="antarctica-label"> Antarctica</label>
        
        <input type="radio" name="values" id="europe" class="europe-key"/>
        <label for="europe" class="europe-label"> Europe</label>
        
        <input type="radio" name="values" id="oceania" class="oceania-key"/>
        <label for="oceania" class="oceania-label"> Oceania</label> -->
        
        <p class="river-text text">75% of collected plastic comes from rivers</p>
        <p class="ocean-text text">25% of the removed plastic comes from oceans</p>
        <!-- <p class="asia-text text">12.5% plastic from Asia</p>
        <p class="antarctica-text text">12.5% from Antarcticca</p>
        <p class="europe-text text">12.5% plastic from Europe</p>
        <p class="oceania-text text">25% from oceania</p> -->
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


    /* pie chart */
    .wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width:65rem;
}

.pie-chart-ocean-river-wrap{
    border: 2px solid lightgrey;
    width: 400px;
    height: 400px;
    margin: 10% 50px;
    position: relative;
    border-radius: 50%;
    color: black;
    overflow: hidden;
}

.pie-chart-ocean-river-wrap .entry{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* .asia{
    background-color: var(--color1);
    height:50%;
    position: absolute;
    top: 0px;
    right: 0;
    width: 50%;
    clip-path: polygon(0 0, 100% 0%, 0% 100%);
} */

/* .antarctica{
    background-color: var(--color2);
    height:50%;
    width: 50%;
    right: 0;
    top: 0;
    position: absolute;
    clip-path:polygon(0% 100%, 100% 0%, 100% 100%);
} */

/* .europe{
    background-color: var(--color3);
    height:50%;
    width: 50%;
    right: 0;
    top: 50%;
    position: absolute;
    clip-path:polygon(0% 0%, 100% 0%, 100% 100%);
} */

/* .oceania{
    background-color: var(--color4);
    height:50%;
    width: 50%;
    right: 0;
    top: 50%;
    position: absolute;
    clip-path:polygon(0% 0%, 100% 100%, 0% 100%);
} */

/* *the individual entries* */
.river{
    background-color: var(--color6);
    height:50%;
    width: 50%;
    display: block;
}

.ocean{
    background-color: var(--color1);
    height:50%;
    width: 50%;
}

/* .ocean-text{
    border-color: black;
}
.river-text{
    border-color:  pink;
} */
/* .asia-text{
    border-color:  purple;
}
.antarctica-text{
    border-color:  limegreen;
}
.europe-text{
    border-color:  wheat;
}
.oceania-text{
    border-color:  skyblue;
} */

.pie-chart-ocean-river-wrap .antarctica p{
    position: absolute;
    top: 140px;
    color: white;
}
.pie-chart-ocean-river-wrap .antarctica p:first-child{
    top: 120px;
}

.pie-chart-ocean-river-wrap .europe p{
    position: absolute;
    top: 20px;
}

.pie-chart-ocean-river-wrap .europe p:first-child{
    top: 0px;
}

.pie-chart-ocean-river-wrap .river p, .pie-chart-ocean-river-wrap .oceania p{
    position: absolute;
    left: 20px;
    top: 80px;
}

.pie-chart-ocean-river-wrap .river, .pie-chart-ocean-river-wrap .oceania{
    justify-content: flex-start;
}

.pie-chart-ocean-river-wrap .river p:first-child, .pie-chart-ocean-river-wrap .oceania p:first-child{
    top: 100px;
}

.entry .entry-value{
    display: none;
    transition: all 500ms linear;
}
.entry:hover .entry-value{
    display: block;
}

input[type="radio"]{
    display: none;
}


/* key */

.key-wrap label{
    display: block;
    border: 1px solid;
    width: 10rem;
    text-align: center;
    padding: 10px 15px;
    cursor: pointer;
    margin-bottom: 8px;
    }
    
    @keyframes display-key {
from{
    visibility: hidden;
}
to{
    visibility: visible;
}
}
.ocean-label{
    background-color: var(--color1);
    visibility: hidden;
    animation: display-key 500ms 1s  ease forwards;
}
.river-label{
    background-color: var(--color2);
    animation: display-key 500ms 1.5s  ease forwards;
}
/* .asia-label{
    background-color: var(--color3);
    color: white;
    animation: display-key 500ms 2s  ease forwards;
}
.antarctica-label{
    background-color: var(--color4);
    animation: display-key 500ms 2.5s  ease forwards;
}
.europe-label{
    background-color: var(--color5);
    animation: display-key 500ms 3s  ease forwards;
}
.oceania-label{
    background-color: var(--color6);
    animation: display-key 500ms 3.5s  ease forwards;
} */

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
.ocean-key:checked ~ .ocean-text, .river-key:checked ~ .river-text {
    display: block;
}

        /* Charts % */
        /* .single-chart {
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

    .circular-chart.europe .circle {
    stroke: var(--lightBlue);
    }

    .percentage {
    fill: var(--textColor);
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
    } */

</style>
