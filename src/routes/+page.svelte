<!-- Head dashboard-->
<script>
    export let data
    import Trashgraph from "/src/components/trashGraph.svelte"
</script>
<svelte:head>
    <title>Dashboard The Ocean Cleanup</title>

    <!-- Sanne's iconen, wij gaan andere iconen gebruiken -->
    <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> -->
    <!-- <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'> -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"> -->
</svelte:head>


<!-- Navigation -->
<!-- Iconen moeten worden toegevoegd -->
<header>
    <nav>
        <img src="/1200px-The_Ocean_Cleanup_logowhite.png" alt="logo of The ocean cleanup">
        <ul class="nav-list">
            <li>
                <a href="https://theoceancleanup.com/" class="nav-link" aria-label="back to the homepage">
                    <span>Home</span>
                </a>
            </li>
            
            <li>
                <a href="/" class="nav-link active" aria-label="dashboard">
                    <span>Dashboard</span>
                </a>
            </li>
            
            <li>
                 <button class="darkmode" value="darkmode button" aria-label="switch to darkmode">
                    <a href="/" class="nav-link" aria-label="switch to darkmode">
                        <span id="darkmode-btn-text">Dark</span>
                    </a>
                </button>
            </li>
        </ul>
       
    </nav>
</header>







<!-- Start main section -->
<main>
    <div class="container2">
        <!-- Blue line -->
        <div class="menu">
            <div class="line"></div>
        </div>

        <!-- Title + Searchbar -->
        <section class="header-dashboard">
            <!-- <h1>{data.dashboard.title}</h1> -->
            <form class="search" action="/" method="GET">
                <input type="text" name="search" placeholder="Search..">
                <input type="submit" name="search-button" aria-label="search button" class="search-button">
                    <!-- voeg een zoekicoon toe -->
            </form>
        </section>

        <!-- Box 1: total trash removed -->
        <section class="panel box-1">
            <h2>Trash removed in total</h2>
            <div class="col">
                <p class="count-num" data-count="600000000">353874119</p>
                <p>kg</p>
            </div>
        </section>

        <!-- Box 2: last 30 days removed -->
        <section class="panel box-2">
            <h2>Last 30 days removed</h2>
            <p id="weight-removed">443.415 kg</p>
        </section>

        <!-- Box 3: percentage since 2013 -->
        <section class="panel box-3">
            <h2>% removed since 2013 </h2>
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
            </div>
        </section>

        <!-- Box 4: percentage in 2040 -->
        <section class="panel box-4">
            <h2>% removed in 2040</h2>
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
        </section>

        <!-- Grafiek: share swith icons -->
        <section class="panel grafiek">
            <Trashgraph />
        </section>

        <!-- Map: map with interceptors -->
        <div id="js-enabled" class="map">
            <a href="/map">
                <div id="bubbles"></div>
            </a>
        </div>

        <!-- When JS is disabled, this content will show -->
        <form id="js-disabled" class="map">
            <label for="interceptor-select">Choose Interceptor:</label>
            <select id="interceptor-select" name="interceptor">
                <option value="" disabled selected hidden>Choose Interceptor</option>
                <option value="/map">Interceptor 001</option>
                <option value="/map">Interceptor 002</option>
                <option value="/map">Interceptor 003</option>
                <option value="/map">Interceptor 004</option>
                <option value="/map">Interceptor 005</option>
                <option value="/map">Interceptor 006</option>
                <option value="/map">System 002</option>
                <option value="/map">Kingston Harbour</option>
            </select>

            <!-- <img src="/map-nojs.png"> -->
        </form>

        <!-- Dashboard-info: info about dashboard -->
        <section class="panel dashboard-info">
            <h2>Track our progress on this dashboard and learn more about the upcoming and deployed cleanup
                solutions.</h2>

            <p>Our goal is to reduce floating plastic by 90% by 2040. According to our research, about 80% of
                riverine plastic pollution stems from 1000 rivers. </p>

            <p>To effectively clean up the oceans, we need to both clean up the plastic already in the ocean and
                intercept plastic on its way through rivers.</p>
        </section>

        <!-- Share: table system statuses -->
        <section class="panel share">
            <h2>System statuses</h2>
            <table>
                <tr>
                    <td class="dot">
                        <div class="pulse-container">
                            <div class="status-pulse">
                                <div class="pulse-marker green"></div>
                                <h3>In operation</h3>
                            </div>
                        </div>
                    </td>
                    <td class="amount">
                        <h4>10 interceptors</h4>
                    </td>
                </tr>

                <tr>
                    <td class="dot">
                        <div class="pulse-container">
                            <div class="status-pulse">
                                <div class="pulse-marker green"></div>
                                <h3>Harvesting</h3>
                            </div>
                        </div>
                    </td>
                    <td class="amount">
                        <h4>1 ocean system</h4>
                    </td>
                </tr>

                <tr>
                    <td class="dot">
                        <div class="pulse-container">
                            <div class="status-pulse">
                                <div class="pulse-marker blue"></div>
                                <h3>Installed for testing</h3>
                            </div>
                        </div>
                    </td>
                    <td class="amount">
                        <h4>1 interceptor</h4>
                    </td>
                </tr>

                <tr>
                    <td class="dot">
                        <div class="pulse-container">
                            <div class="status-pulse">
                                <div class="pulse-marker gray"></div>
                                <h3>Planned</h3>
                            </div>
                        </div>
                    </td>
                    <td class="amount">
                        <h4>1 interceptor</h4>
                    </td>
                </tr>

                <tr>
                    <td class="dot">
                        <div class="pulse-container">
                            <div class="status-pulse">
                                <div class="pulse-marker gray"></div>
                                <h3>Contract signed</h3>
                            </div>
                        </div>
                    </td>
                    <td class="amount">
                        <h4>1 interceptor</h4>
                    </td>
                </tr>
            </table>
        </section>

        <!-- More: table more information links -->
        <section class="panel more">
            <h2>More about</h2>
            <table class="table-more">
                <tr class="more-row">
                    <td class="more-icon">
                        <a href="/" class="more-link">
                            <!-- add icon -->
                            Our river technology
                        </a>
                    </td>
                    <td class="arrow">
                        <!-- add icon -->
                    </td>
                </tr>

                <tr class="more-row">
                    <td class="more-icon">
                        <a href="/" class="more-link">
                            <!-- add icon -->
                            The economic impact
                        </a>
                    </td>
                    <td class="arrow">
                        <!-- add icon -->
                    </td>
                </tr>

                <tr class="more-row">
                    <td class="more-icon">
                        <a href="/" class="more-link">
                            <!-- add icon -->
                            Plastic sources
                        </a>
                    </td>
                    <td class="arrow">
                        <!-- add icon -->
                    </td>
                </tr>

                <tr class="more-row">
                    <td class="more-icon">
                        <a href="/" class="more-link">
                            <!-- add icon -->
                            Donate
                        </a>
                    </td>
                    <td class="arrow">
                        <!-- add icon -->
                    </td>
                </tr>

                <span>
                    <tr class="more-row">
                        <td class="more-icon">
                            <a href="/" class="more-link">
                                <!-- add icon -->
                                Sign up to newsletter
                            </a>
                        </td>
                        <td class="arrow">
                            <!-- add icon -->
                        </td>
                    </tr>
                </span>
            </table>
        </section>
</main>
<!-- End main section -->






<!-- Scroll to top button -->
<a href="#top" class="scroll-top" aria-label="scroll to top">
    <!-- add icon -->TOP
</a>

<!-- Footer -->
<footer>
</footer>
<!--         
<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js"></script>
<script src="/datamaps.world.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://kit.fontawesome.com/9e5ba2e3f5.js" crossorigin="anonymous"></script> -->
<!-- <script src="/main.js"></script> -->
<!-- </body> -->

<!-- </html> -->





<style>
    /* Roboto font */
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

    /* Proxima font */
    @font-face {
    font-family: 'Proxima';
    src: url("/ProximaNovaFont.otf") format("opentype") weight("normal");
    src: url("/Proxima-Nova-Bold.otf") format("opentype") weight("bold");
    }

    /* Base */
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

    h3 {
    font-size: 1.3rem;
    font-weight: 500;
    }

    ul,
    li {
    list-style: none;
    }

    a {
    text-decoration: none;
    }

    button {
    all: unset;
    text-align: center;
    }
    /* .darkmode{
        display:flex;
        align-self: center;
    } */

    /* Nav */
    header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 5.5rem;
    background-color: var(--whiteColor);
    box-shadow: var(--boxShadow) 0px 0px 8px;
    z-index: 100;
    }

    nav {
    height: 5.5rem;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    }

    nav img {
    left: 0;
    top: 0;
    width: 11rem;
    height: 100%;
    padding: 1rem;
    background-color: var(--lightBlue);
    }

    .nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin: 0 auto;
    }

    .nav-link {
    text-align: center;
    color: var(--darkBlue);
    font-size: 1.5rem;
    }

    .nav-link span {
    display: none;
    }

    .active {
    color: var(--lightBlue);
    }

    /* Grid */
    .container2 {
    margin: 8rem 1.5rem 1.5rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-template-rows: 0.1fr, 0.3fr, 2fr, 2fr, 1fr, 1fr, 1fr, 1fr, 1fr;
    gap: 1.2rem;
    grid-template-areas:
        "menu menu"
        "header-dashboard header-dashboard"
        "dashboard-info dashboard-info"
        "map map"
        "box-1 box-2"
        "box-3 box-4"
        "share share"
        "grafiek grafiek"
        "more more";
    }

    .panel {
    border-radius: .5rem;
    padding: 1.5rem;
    background-color: var(--whiteColor);
    box-shadow: var(--boxShadow) 0px 0px 8px;
    transition: .2s;
    }

    /* Grid areas */
    .header-dashboard {
    display: flex;
    justify-content: space-between;
    grid-area: header-dashboard;
    }

    .menu {
    grid-area: menu;
    }

    .grafiek {
    grid-area: grafiek;
    }

    .map {
    grid-area: map;
    border-radius: .5rem;
    padding: 0.5rem;
    background-color: var(--whiteColor);
    box-shadow: var(--boxShadow) 0px 0px 8px;
    transition: .2s;
    }

    .box-1 {
    grid-area: box-1;
    }

    .box-2 {
    grid-area: box-2;
    }

    .box-3 {
    grid-area: box-3;
    }

    .box-4 {
    grid-area: box-4;
    }

    .dashboard-info {
    grid-area: dashboard-info;
    }

    .share {
    grid-area: share;
    }

    .more {
    grid-area: more;
    }

    /* header styling + line */
    .header-dashboard h1 {
    font-size: 2rem;
    }

    .line {
    height: 2px;
    width: 18%;
    background-color: var(--lightBlue);
    }

    /* dashboard-info styling */
    .dashboard-info p {
    font-size: 1.3rem;
    line-height: 1.4;
    color: var(--textColor);
    margin-top: 0.5rem;
    font-family: 'Proxima', sans-serif;
    }

    /* .dashboard-info span {
    font-size: 1.3rem;
    line-height: 1.4;
    color: var(--textColor);
    font-weight: bold;
    font-family: 'Proxima', sans-serif;
    } */

    /* share styling */
    .grafiek p {
    font-size: 1.3rem;
    line-height: 1.4;
    color: var(--textColor);
    margin-top: 0.5rem;
    font-family: 'Proxima', sans-serif;
    }

    .social-icons {
    display: flex;
    justify-content: left;
    gap: 2rem;
    align-items: center;
    margin-top: 2rem;
    }

    .share-icon {
    font-size: 2.5rem;
    color: var(--lightBlue);
    }

    .share-icon:hover {
    color: var(--darkBlue);
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

    .box-1,
    .box-2,
    .box-3,
    .box-4,
    h2 {
        font-size: 1.6rem;
        color: var(--darkBlue);
    }

    .col {
        display: flex;
        gap: .9rem;
    }

    /* map styling */
    #bubbles {
    position: relative;
    width: 100%;
    }

    /* .hoverinfo {
    color: #143653;
    padding: 4px;
    border-radius: 1px;
    background-color: var(--lightGray);
    box-shadow: transparent;
    font-size: 12px;
    border: 1px solid #CCC;
    } */

    /* more styling */
    .more-link {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 2rem;
    color: var(--textColor);
    font-size: 1.5rem;
    text-transform: capitalize;
    }

    .more-link:hover {
    color: var(--lightBlue);
    }

    /* .more-arrow {
    text-align: right;
    font-size: 1.8rem;
    margin-right: 2rem;
    } */

    .more-icon {
    font-size: 1.8rem;
    color: var(--lightBlue);
    }


    .table-more {
    border-collapse: collapse;
    }

    .more-row {
    border-bottom: 0.5px solid var(--accentGray);
    height: 4rem;
    }

    .arrow {
    text-align: right;
    }

    /* search bar */
    .search{
        display: flex;
        gap:.5rem;
    }
    .search-button{
        max-width: 8rem;
    }
    .search input {
    width: 130px;
    height: 25px;
    border-radius: 5px;
    outline: none;
    padding-left: .5rem;
    background: var(--whiteColor);
    box-shadow: var(--boxShadow) 0px 0px 8px;
    border: none;
    color: var(--textColor);
    }

    .search input::placeholder {
    color: var(--darkBlue);
    ;
    font-size: 1.3rem;
    }

    /* .search button {
    width: 30px;
    height: 25px;
    border: none;
    margin-right: 1.5rem;
    border-radius: 0 5px 5px 0;
    color: var(--textColor);
    transition-property: all;
    transition-duration: 0.5s;
    position: absolute;
    right: 0;
    outline: none;
    }

    .search button i {
    font-size: 1.2rem;
    transition-property: all;
    transition-duration: 0.5s;
    }

    .search button:hover i {
    transform: scale(1.1);
    transition-property: all;
    transition-duration: 0.5s;
    } */


    /* Scroll to top */
    .scroll-top {
    position: absolute;
    bottom: 1%;
    right: 2%;
    width: 3rem;
    height: 3rem;
    padding: .5rem;
    background-color: var(--lightBlue);
    color: var(--whiteColor);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    }

    /* .scroll-top i {
    font-size: var(--fs16);
    } */

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

    /* Pulse */
    .pulse-marker {
    background: black;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    transform: scale(1);
    animation: pulse-black 2s infinite;
    }

    .pulse-marker.green {
    background: rgb(132, 206, 95);
    box-shadow: 0 0 0 0 rgb(132, 206, 95);
    animation: pulse-green 2s infinite;
    }

    .pulse-marker.blue {
    background: var(--lightBlue);
    box-shadow: 0 0 0 0 var(--lightBlue);
    animation: pulse-blue 2s infinite;
    }

    .pulse-marker.gray {
    background: rgb(176, 176, 176);
    box-shadow: 0 0 0 0 rgb(176, 176, 176);
    animation: pulse-gray 2s infinite;
    }

    .pulse-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .3rem;
    }

    @keyframes pulse-green {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgb(132, 206, 95);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
    }
    }


    @keyframes pulse-blue {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 var(--lightBlue);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
    }
    }


    @keyframes pulse-gray {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgb(176, 176, 176);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
    }
    }

    /* System statuses */
    table {
    width: 100%;
    }

    tr {
    height: 2.5rem;
    }

    .dot {
    width: 40%;
    }

    /* .status {
    width: 30%;
    } */

    .status-pulse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    }

    .amount h4 {
    font-family: 'Roboto', monospace;
    color: var(--lightBlue);
    font-weight: 500;
    font-size: 1.45rem;
    }

    .amount {
    width: 20%;
    }

    /* Progressive Enhancement, moet JS nog toevoegen */
    /* .js-enabled {
    display: none;
    } */

/* 
    .map img {
    width: 100%;
    height: auto;
    } */

   

    /* Breakpoints small screen */
    @media (min-width:700px) {
    .container2 {
        margin: 8rem 1.5rem 1.5rem 1.5rem;
        display: grid;
        grid-template-columns: 1fr, 1fr, 1fr, 1fr;
        grid-template-rows: 0.1fr, 0.3fr, 2fr, 2fr, 1fr, 1fr, 1fr;
        gap: 1.2rem;
        grid-template-areas:
        "menu menu menu menu"
        "header-dashboard header-dashboard header-dashboard header-dashboard"
        "dashboard-info dashboard-info dashboard-info box-1"
        "map map map map"
        "box-2 box-2 box-3 box-4"
        "share grafiek grafiek grafiek"
        "more more more more";
    }

    .active {
        color: var(--lightBlue);
    }

    }

    /* Breakpoints medium screen */
    @media (min-width:992px) {
    .container2 {
        margin: 5rem 2rem 2rem 22.3rem;
        grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
        grid-template-rows: 0.01fr 0.1fr 0.3fr 0.4fr 0.4fr 0.6fr;
        grid-template-areas:
        "menu menu menu menu menu"
        "header-dashboard header-dashboard header-dashboard header-dashboard header-dashboard"
        "dashboard-info dashboard-info map map map"
        "box-1 box-2 map map map"
        "box-3 box-4 share share share"
        "grafiek grafiek more more more";
    }

    /* .map .button-container {
        position: absolute;
    } */

    /* Nav */
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 20rem;
        height: 100vh;
        box-shadow: var(--boxShadow) 0px 0px 8px;
    }

    .nav-list {
        display: block;
    }

    nav img {
        width: 20rem;
        height: auto;
        padding: 2rem 3.5rem;
    }

    nav {
        height: 100%;
        flex-direction: column;
        justify-content: left;
        gap: 6rem;
        overflow: hidden;
    }

    .nav-link {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 4rem;
        gap: 1rem;
    }

    .nav-link span {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 1rem;
        font-weight: 600;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: .05rem;
    }

    .nav-link span:hover {
        color: var(--lightBlue);
    }

    /* .nav-icon {
        font-size: 2.5rem;
        align-items: center;
    } */

    .active {
        color: var(--lightBlue);
    }

    .header-dashboard h1 {
        font-size: 2.5rem;
    }
    }

    /* Breakpoints large screen */
    @media (min-width:1200px) {
    .container2 {
        margin: 5rem 2rem 2rem 22.3rem;
        grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
        grid-template-rows: 0.01fr 0.1fr 0.3fr 0.4fr 0.4fr 0.6fr;
        grid-template-areas:
        "menu menu menu menu menu"
        "header-dashboard header-dashboard header-dashboard header-dashboard header-dashboard"
        "dashboard-info dashboard-info map map map"
        "box-1 box-2 map map map"
        "box-3 box-4 map map map"
        "share share grafiek more more";
    }

    .more {
        grid-area: more;
    }

    .panel {
        padding: 2rem;
    }

    .map {
        padding: 1.5rem;
    }

    .box-1,
    .box-2,
    .box-4,
    p {
        font-size: 3rem;
    }

    .box-3,
    p {
        font-size: 2.5rem;
    }

    .box-1,
    .box-2,
    .box-3,
    .box-4,
    h2 {
        font-size: 1.5rem;
    }

    .grafiek h2 {
        font-size: 1.8rem;
    }

    .more h2 {
        font-size: 1.8rem;
    }

    .share h2 {
        font-size: 1.8rem;
    }

    .grafiek p {
        font-size: 1.5rem;
    }

    .share-icon {
        font-size: 2.6rem;
    }

    .social-icons {
        margin-top: 3.5rem;
    }

    .dashboard-info p {
        font-size: 1.5rem;
        line-height: 1.4;
        margin-top: 1rem;
    }
/* 
    .dashboard-info span {
        margin-top: 1rem;
        font-size: 1.5rem;
        line-height: 1.4;
    } */

    .nav-link {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .nav-link span {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 1rem;
        font-weight: 600;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: .05rem;
    }

    .nav-link:hover {
        color: var(--lightBlue);
    }

    .active {
        color: var(--lightBlue);
    }

    /* .nav-icon {
        font-size: 2.5rem;
        align-items: center;
    } */

    .line {
        height: 2px;
        width: 6%;
        background-color: var(--lightBlue);
    }

    .search input {
        width: 190px;
    }

    .circular-chart {
        display: flex;
        justify-content: center;
        margin: 10px auto;
        width: 100px;
        max-height: 250px;
    }

    .single-chart {
        width: 100%;
        justify-content: space-around;
    }

    .scroll-top {
        display: none;
    }

    .amount h4 {
        font-family: 'Roboto', monospace;
        color: var(--lightBlue);
        font-weight: 500;
        font-size: 1.8rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    tr {
        height: 3.3rem;
    }

    #bubbles {
        position: relative;
        width: 100%;
        height: auto;
    }
    }
</style>