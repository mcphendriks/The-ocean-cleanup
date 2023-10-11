
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

    /* Breakpoints medium screen */
    @media (min-width:992px) {
    /* Nav */
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 20rem;
        height: 100vh;
        box-shadow: var(--boxShadow) 0px 0px 8px;
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

    .active {
        color: var(--lightBlue);
    }
    }

    /* Breakpoints large screen */
    @media (min-width:1200px) {
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
    }
</style>