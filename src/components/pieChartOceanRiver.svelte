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
    </div>
                
    <!--Pie chart keys  -->
    <div class="key-wrap">
        <input type="radio" id="river" name="values" class="river-key"/>
        <label for="river" class="river-label"> River</label>
        
        <input type="radio" name="values" id="ocean" class="ocean-key"/>
        <label for="ocean" class="ocean-label"> Ocean</label>

        <p class="river-text text">75% of collected plastic comes from rivers</p>
        <p class="ocean-text text">25% of the removed plastic comes from oceans</p>

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

</style>
