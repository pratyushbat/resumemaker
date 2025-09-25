import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flexpractice',
  template: `
    <header>
      <div class="row">
        <a
          href="homecss#main-menu"
          id="main-menu-toggle"
          class="menu-toggle"
          aria-label="Open main menu"
        >
          <span class="sr-only">Open main menu</span>
          <span class="fa fa-bars" aria-hidden="true"></span>
        </a>
        <div class="logo">
          <h1><i class="fas fa-paint-brush"></i> LayOut Times</h1>
          <h2>Your Web Design Destination</h2>
        </div>
      </div>
      <nav id="main-menu" class="main-menu" aria-label="Main menu">
        <a
          href="homecss#main-menu-toggle"
          id="main-menu-close"
          class="menu-close"
          aria-label="Close main menu"
        >
          <span class="sr-only">Close main menu</span>
          <span class="fa fa-close" aria-hidden="true"></span>
        </a>
        <ul>
          <li><a href="#">CSS Resources</a></li>
          <li><a href="#">Design</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Social Media</a></li>
          <li><a href="#">Inspiration</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Top Talent</a></li>
        </ul>
      </nav>
      <a
        href="homecss#main-menu-toggle"
        class="backdrop"
        tabindex="-1"
        hidden
      ></a>
    </header>
    <main>
      <section id="first">
        <h1>Jen’s Awesome Resources</h1>
        <article>
          <h2>Learn with Jen Kramer online at Harvard Extension</h2>
          <p>
            Join some of the many informative courses Jen teaches through the
            Harvard Extension School. Courses count towards bachelors and
            masters degree programs, certificates, or take a class for your own
            enrichment.
          </p>
          <ul>
            <li>
              <a
                href="https://www.extension.harvard.edu/course-catalog/courses?instructors=Kramer,%20Jennifer"
                target="_blank"
                >Jen's course list <i class="fas fa-paint-brush"></i
              ></a>
            </li>
            <li>
              <a href="http://extension.harvard.edu" target="_blank"
                >Harvard Extension website <i class="fas fa-paint-brush"></i
              ></a>
            </li>
          </ul>
        </article>
        <article>
          <img src="./assets/book.png" alt="Before You Code book cover." />
          <h2>Plan your product’s success</h2>
          <p>
            By taking the time to do upfront validation, planning and iterating
            before you build, you can avoid ideas that flop and create a product
            that exceeds expectations. Heather O'Neill and Jen Kramer's latest
            book, <cite>Before You Code</cite>, will guide you through the
            process.
          </p>
          <p>
            <a href="http://beforeyoucode.guide" target="_blank"
              >Visit the <cite>Before You Code</cite> website
              <i class="fas fa-paint-brush"></i
            ></a>
          </p>
        </article>
        <article>
          <h2>More Responsive Design 2.0</h2>
          <p>
            Get a head start on the latest responsive web design (RWD)
            techniques with this great list of resources.
          </p>
          <p>
            <a
              href="https://codepen.io/jen4web/post/rwd20readinglist"
              target="_blank"
              >Visit RWD 2.0 Reading List <i class="fas fa-paint-brush"></i
            ></a>
          </p>
        </article>
        <article>
          <img src="./assets/cssworkout.png" alt="CSS Workout" />
          <h2>Have you done your CSS workout for the day?</h2>
          <p>
            Nowhere is practice more important than with CSS layouts. For 15
            years, we’ve listened to students complain about CSS layouts, how
            hard they are to understand, and how things “don’t work” in the
            expected way. Now you can train daily to master them.
          </p>
          
          <p>
            <a href="http://www.cssworkout.guide" target="_blank"
              >Visit <cite>CSS Workouts</cite> to start your routine!
              <i class="fas fa-paint-brush"></i
            ></a>
          </p>
        </article>
      </section>
      <section id="main">
        <h1>Main News</h1>
        <article>
          <img src="./assets/courses.png" alt="Frontend Masters classroom." />
          <h2>
            Advance Your Skills with In-Depth, Modern Front-End Engineering
            Courses
          </h2>
          <p>
            The best courses on the web, taught by industry leading experts!
          </p>
          <p>
            <a href="http://www.frontendmasters.com" target="_blank"
              >Join now to continue your learning journey.
              <i class="fas fa-paint-brush"></i>
            </a>
          </p>
        </article>
        <article>
          <img
            src="./assets/bootcamp.png"
            alt="Frontend Masters Bootcamp."
            class="floatright"
          />
          <h2>Coming 2019 the Frontend Masters Bootcamp</h2>
          <p>
            Featuring instruction from Jen Kramer and Brian Holt, this
            incredible and free resource is everything you need to get started
            on being a web developer. Available late 2019.
          </p>
          <p>
            <a
              href="https://frontendmasters.github.io/bootcamp/"
              target="_blank"
              >Visit the Bootcamp website <i class="fas fa-paint-brush"></i
            ></a>
          </p>
        </article>
        <article>
          <h2>CSS-Tricks: why we love it!</h2>
          <p>
            Still one of the best resources on the web to bend CSS to your will,
            CSS-Tricks is jam packed with techniques, information and best
            practices.
          </p>
          <p>
            <a href="http://www.css-tricks.com" target="_blank"
              >Check out CSS-Tricks <i class="fas fa-paint-brush"></i>
            </a>
          </p>
        </article>
        <article>
          <img src="./assets/codepen.png" alt="Codepen." class="floatleft" />
          <h2>Learn best by doing? Try Codepen!</h2>
          <p>
            Get immediate feedback on the code you type right in the browser!
          </p>
          <p>
            <a href="http://www.codepen.com" target="_blank"
              >Try Codepen now <i class="fas fa-paint-brush"></i
            ></a>
          </p>
        </article>
      </section>
      <section id="devs">
        <h1>Developers to Follow:</h1>
        <ul>
          <li>
            <figure>
              <a href="http://www.twitter.com/jen4web" target="_blank"
                ><img src="./assets/jen.png" alt="Jen Kramer"
              /></a>
              <figcaption>
                <p>
                  <strong>Jen Kramer</strong><br />
                  Harvard University Extension School <br />
                  <a href="http://www.twitter.com/jen4web" target="_blank"
                    ><i class="fab fa-twitter-square"></i
                  ></a>
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <a href="http://www.twitter.com/standardista" target="_blank"
                ><img src="./assets/estelle.png" alt="Estelle Weyl"
              /></a>
              <figcaption>
                <p>
                  <strong>Estelle Weyl</strong><br />
                  Standardista<br />
                  <a href="http://www.twitter.com/standardista" target="_blank"
                    ><i class="fab fa-twitter-square"></i
                  ></a>
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <a href="http://www.twitter.com/holtbt" target="_blank"
                ><img src="./assets/brian.png" alt="Brian Holt"
              /></a>
              <figcaption>
                <p>
                  <strong>Brian Holt</strong><br />
                  Microsoft<br />
                  <a href="http://www.twitter.com/holtbt" target="_blank"
                    ><i class="fab fa-twitter-square"></i
                  ></a>
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <a href="http://www.twitter.com/willsentance" target="_blank"
                ><img src="./assets/will.png" alt="Will Sentance"
              /></a>
              <figcaption>
                <p>
                  <strong>Will Sentance</strong><br />
                  Codesmith<br />
                  <a href="http://www.twitter.com/willsentance" target="_blank"
                    ><i class="fab fa-twitter-square"></i
                  ></a>
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <a href="http://www.twitter.com/sarah_edo" target="_blank"
                ><img src="./assets/sarah.png" alt="Jen Kramer"
              /></a>
              <figcaption>
                <p>
                  <strong>Sarah Drasner</strong><br />
                  Microsoft<br />
                  <a href="http://www.twitter.com/sarah_edo" target="_blank"
                    ><i class="fab fa-twitter-square"></i
                  ></a>
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
      <section id="resources">
        <h1>Design Resources <small>(credit: Sarah Drasner)</small></h1>
        <ul>
          <li><a href="https://dribbble.com/" target="_blank">Dribbble</a></li>
          <li>
            <a href="https://www.sketchapp.com/" target="_blank">SketchApp</a>
          </li>
          <li>
            <a href="https://gridbyexample.com/" target="_blank"
              >Grid By Example</a
            >
          </li>
          <li>
            <a href="http://cssgridgarden.com/" target="_blank"
              >CSS Grid Garden</a
            >
          </li>
          <li>
            <a href="https://webanimationworkshops.com/" target="_blank"
              >Web Animation Workshops</a
            >
          </li>
          <li>
            <a href="https://color.adobe.com" target="_blank"
              >color.adobe.com</a
            >
          </li>
          <li>
            <a href="https://uigradients.com/" target="_blank"
              >uigradients.com</a
            >
          </li>
          <li><a href="https://unsplash.com/" target="_blank">Unsplash</a></li>
          <li><a href="https://fontjoy.com/" target="_blank">FontJoy</a></li>
          <li>
            <a href="https://www.shutterstock.com/" target="_blank"
              >Shutterstock</a
            >
          </li>
        </ul>
      </section>
    </main>
  `,
  styles: [
    /* style.csss begines */
    `
      html {
        box-sizing: border-box;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      body {
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        margin: 1rem;
      }
      header,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: Nobile, Arial, Helvetica, sans-serif;
        font-weight: 500;
      }
      section > h1 {
        color: #9ea9c1;
      }
      /* header styles */
      header {
        font-weight: 400;
      }
      header h1 {
        margin: 0;
        font-weight: 400;
        color: #c85028;
      }
      header h2 {
        font-weight: 400;
      }

      /* article styles */
      article {
        border-bottom: 4px solid #3c2b67;
        padding-bottom: 2rem;
      }
      img,
      .floatleft,
      .floatright {
        display: block;
        margin: 1rem auto 0 auto;
        max-width: 100%;
      }
      a {
        color: #c85028;
        font-weight: bold;
        text-decoration: none;
      }
      a:hover {
        color: #7e64be;
      }
      /* dev styling */
      #devs img {
        display: inline;
        max-width: 125px;
      }
      #devs figure {
        margin: 0;
        padding: 0;
      }
      /* resources styling */
      #resources {
        background-color: #f1f1f1;
        padding: 1rem;
      }
      #resources h1 {
        color: #000;
        margin-top: 0;
      }
      #resources h1 small {
        font-weight: 400;
      }
      #resources ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
      #resources li {
        border-bottom: 1px solid #ccc;
        display: block;
      }
      #resources a {
        display: block;
        color: #3c2b67;
        text-decoration: none;
        padding: 0.5rem;
      }
      #resources a:hover {
        color: #6a7a9f;
      }
      #devs ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      /* style.csss ends */

      header {
        border-bottom: 4px solid #9ea9c1;
      }
      main {
        border-top: 2px solid #dddddd;
        margin-top: 0.5rem;
      }

      /* places hamburger button and logo next to each other */
      header .row {
        display: flex;
        flex-flow: row nowrap;
      }

      /* Screen reader only 
https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html for more info */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      /* Hamburger button styling. "Button" is the bars icon from FontAwesome. */
      .menu-toggle {
        color: #333;
        margin-right: 1rem;
      }

      .menu-toggle:hover,
      .menu-toggle:focus {
        color: #c85028;
      }

      /*
   Mobile first - this is the mobile menu, positioned offscreen to start 
  */

      /* set the menu in a fixed position occupying 100% of the screen height, so you can't scroll away from it. Have nav scrollbars appear when needed. Any long nav names should be fully visible. */
      .main-menu {
        position: fixed;
        display: none;
        left: -200px;
        top: 0;
        height: 100%;
        overflow-y: auto;
        overflow-x: visible;
        transition: left 0.3s ease;
        z-index: 999;
      }

      /* turn off bullets, set width and background color of flyout menu. Width here and "left" property on main-menu should be the same absolute number */
      .main-menu ul {
        list-style: none;
        margin: 0;
        padding-top: 2.5em;
        min-height: 100%;
        width: 200px;
        background-color: #1a1a1a;
      }

      /* Make links block to make them fully clickable on mobile. Remember this is finger navigation, so include plenty of clickable area. All links get a bottom border */
      .main-menu a {
        display: block;
        padding: 0.75rem;
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid #383838;
      }
      /* first link gets a border on top */
      .main-menu li:first-child a {
        border-top: 1px solid #383838;
      }

      .main-menu a:hover,
      .main-menu a:focus {
        background: #333;
        text-decoration: underline;
      }
      /* "close" button is positioned in the upper right corner. Button is the X / fa-close button from FontAwesome. If you want it bigger, do it here */
      .main-menu .menu-close {
        position: absolute;
        right: 0;
        top: 0;
      }

      .main-menu:target {
        display: block;
        left: 0;
        outline: none;
      }

      /* when main menu is targeted (button is clicked), bring the X to the top so it can be clicked */
      .main-menu:target .menu-close {
        z-index: 1001;
      }

      .main-menu:target ul {
        position: relative;
        z-index: 1000;
      }

      .main-menu:target + .backdrop {
        position: fixed;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 998;
        background: rgba(0, 0, 0, 0.85);
        cursor: default;
      }

      @media (min-width: 800px) {
        /* header and nav borders rearranged for desktop */
        header,
        main {
          border: none;
          margin: 0;
        }
        nav {
          border-top: 4px solid #9ea9c1;
          border-bottom: 1px solid #dddddd;
          padding: 0.3rem 0;
        }
        /* fa-bars and fa-close not needed on desktop so hide them */
        .menu-toggle,
        .main-menu .menu-close {
          display: none;
        }

        /* Undo positioning of off-canvas menu - remember this is hidden by default. Default position property is static, i.e. normal flow */
        .main-menu {
          position: static;
          display: block;
        }
        /* Undo off-canvas styling */
        .main-menu ul {
          padding: 0;
          height: auto;
          width: auto;
          background: none;
          overflow: hidden;
          text-align: center;
        }
        /* display the li's horizontally */
        .main-menu li {
          display: inline-block;
        }
        /* add cute divider after each li, but not the last one */
        .main-menu li:not(:last-child)::after {
          content: ' || ';
        }
        /* above style the same as 
    .main-menu li::after {
        content: " || ";
    }
    .main-menu li:last-child::after {
      content: "";
  }
*/
        /* undo off canvas style */
        .main-menu li:first-child a {
          border-top: none;
        }
        /* desktop assumes a pointer display */
        .main-menu a {
          color: #c85028;
          border-bottom: none;
          display: inline;
        }
        /* Remove background from off-canvas styling, change colors */
        .main-menu a:hover,
        .main-menu a:focus {
          background: none;
          color: #7e64be;
          text-decoration: none;
        }
      }

      /* grid system -- mobile first! */

      #devs ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        --columns: 2;
      }
      main {
        /* article styles */
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        --columns: 16;
      }
      section,
      #devs li {
        /* article styles */
        --width: 16;
        --gap-constant:0.3%;
        --initialbasis: calc(var(--width, 0) / var(--columns, 16) * 100%);
        --gap: calc((var(--columns) - var(--width)) * var(--gap-constant));
        flex-basis: calc(var(--initialbasis) - var(--gap));
      }
      
      #devs li {
        --width: 1;
        --gap-constant:3%;
      }
      
      @media (min-width: 740px) {
        .floatleft {
          float: left;
          margin: 0 1rem 1rem 0;
        }
        .floatright {
          float: right;
          margin: 0 0 1rem 1rem;
        }

        main {
          --columns: 11;
        }

        #first {
          --width: 5;
          order: 1;
        }
        #main {
          --width: 6;
          order: 2;
        }

        #devs {
          --width: 11;
          order: 3;
        }

        #resources {
          --width: 11;
          order: 4;
        }

        #devs ul{
          --columns:5
        }
      }
      @media (min-width: 950px) {
        main {
          --columns: 14;
        }

        #first {
          --width: 5;
          order: 1;
        }
        #main {
          --width: 6;
          order: 2;
        }

        #devs {
          --width: 14;
          order: 4;
        }

        #resources {
          --width: 3;
          order: 3;
        }


      }
      @media (min-width: 1200px) {
        /* #first-5 ,#main-6, #devs-2,#resources-3 */
        main {
          /*  redeclaring as it falls in 950px scope as wrell */
          --columns: 16;
        }

        #main {
          --width: 6;
        }
        #devs {
          --width: 2;
          order: 3;
        }

        #resources {
          order: 4;
        }
          #devs ul{
          --columns:1
        }
      }
    `,
  ],
})
export class HomepageCssComponent {
  constructor() {}
}
