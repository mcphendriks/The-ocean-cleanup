<h2>Plastic removed from ocean and river systems</h2>
<!-- 
<div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart green">
        <path class="circle-bg" d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path class="circle" stroke-dasharray="60, 100" d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text x="18" y="20.35" class="percentage">65%</text>
    </svg>
</div> -->

<div class="wrapper">
    <div class="pie-chart-ocean-river-wrap">

<!-- classes aanpassen naar landen ipv kleuren -->
        <div class="america entry">
            <p>25%</p>
            <p class="entry-value">America</p>
        </div>
                    
        <div class="africa entry">
            <p>25%</p>
            <p class="entry-value">Africa</p>
        </div>
                    
        <div class="asia entry">
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
        </div>
                    
    </div>
                
<!--Pie chart keys  -->
<div class="key-wrap"></div>

<input type="radio" id="america" name="values" class="america-key"/>
<label for="america" class="america-label"> America</label>

<input type="radio" name="values" id="africa" class="africa-key"/>
<label for="africa" class="africa-label"> Africa</label>

<input type="radio" name="values" id="asia" class="asia-key"/>
<label for="asia" class="asia-label"> Asia</label>

<input type="radio" name="values" id="antarctica" class="antarctica-key"/>
<label for="antarctica" class="antarctica-label"> Antarctica</label>

<input type="radio" name="values" id="europe" class="europe-key"/>
<label for="europe" class="europe-label"> Europe</label>

<input type="radio" name="values" id="oceania" class="oceania-key"/>
<label for="oceania" class="oceania-label"> Oceania</label>

<p class="america-text text">25% of collected plastic comes from the USA</p>
<p class="africa-text text">12.5% of the removed plastic comes from africa</p>
<p class="asia-text text">12.5% plastic from Asia</p>
<p class="antarctica-text text">12.5% from Antarcticca</p>
<p class="europe-text text">12.5% plastic from Europe</p>
<p class="oceania-text text">25% from oceania</p>
                
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
    /* flex-direction: column; */
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
    /* animation: pie-size 500ms 500ms ease forwards; */
}
/* 
@keyframes pie-size {
  from{
    width:200px;
  }
  to{
    width: 400px;
    height: 400px;
  }
} */


.pie-chart-ocean-river-wrap .entry{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.asia{
    background-color: var(--color1);
    height:50%;
    position: absolute;
    top: 0px;
    right: 0;
    width: 50%;
    clip-path: polygon(0 0, 100% 0%, 0% 100%);
}

.antarctica{
    background-color: var(--color2);
    height:50%;
    width: 50%;
    right: 0;
    top: 0;
    position: absolute;
    clip-path:polygon(0% 100%, 100% 0%, 100% 100%);
}

.europe{
    background-color: var(--color3);
    height:50%;
    width: 50%;
    right: 0;
    top: 50%;
    position: absolute;
    clip-path:polygon(0% 0%, 100% 0%, 100% 100%);
}

.oceania{
    background-color: var(--color4);
    height:50%;
    width: 50%;
    right: 0;
    top: 50%;
    position: absolute;
    clip-path:polygon(0% 0%, 100% 100%, 0% 100%);
}

/* *the individual entries* */
.africa{
    background-color: var(--color5);
    height:50%;
    width: 50%;
    display: block;
}

.america{
    background-color: var(--color6);
    height:50%;
    width: 50%;
}

.america-text{
    border-color: black;
}
.africa-text{
    border-color:  pink;
}
.asia-text{
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
}

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

.pie-chart-ocean-river-wrap .africa p, .pie-chart-ocean-river-wrap .oceania p{
    position: absolute;
    left: 20px;
    top: 80px;
}

.pie-chart-ocean-river-wrap .africa, .pie-chart-ocean-river-wrap .oceania{
    justify-content: flex-start;
}

.pie-chart-ocean-river-wrap .africa p:first-child, .pie-chart-ocean-river-wrap .oceania p:first-child{
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
    width: 50px;
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
.america-label{
    background-color: var(--color1);
    visibility: hidden;
    animation: display-key 500ms 1s  ease forwards;
}
.africa-label{
    background-color: var(--color2);
    animation: display-key 500ms 1.5s  ease forwards;
}
.asia-label{
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
.america-key:checked ~ .america-text, .africa-key:checked ~ .africa-text, .asia-key:checked ~ .asia-text,  
.antarctica-key:checked ~ .antarctica-text, .europe-key:checked ~ .europe-text, .aceania-key:checked ~ .oceania-text{
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

<!--  
    Rice = Amerika = Light yellow
    Beans = Afrika = Sky Blue
    Plantain = Azië = Pink
    Potato = Antarctica = Purple
    Yam = Europe = Green
    Pasta = Oceania = Wheat
-->