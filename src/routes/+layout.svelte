
<header>
    <nav>
        <img src="/Ocean-Cleanup-Logo-Dark.png" alt="logo of The ocean cleanup">
        <ul>
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
                <a href="/" class="nav-link" aria-label="our river technology">
                    <span>Our Technology</span>
                </a>
            </li>

            <li>
                <a href="/" class="nav-link" aria-label="the economic impact">
                    <span>Economic Impact</span>
                </a>
            </li>

            <li>
                <a href="/" class="nav-link" aria-label="plastic sources ">
                    <span>Plastic Sources</span>
                </a>
            </li>
            
            <li>
                <a href="/" class="nav-link" aria-label="donate">
                    <span>Donate</span>
                </a>
            </li>

            <li>
                <a href="/" class="nav-link" aria-label="sign up to newsletter">
                    <span>Our Newsletter</span>
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


<main>
    <slot/>
</main>

<footer>

</footer>

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

    ul{
        padding-left:2rem;
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
    padding: 0rem;
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