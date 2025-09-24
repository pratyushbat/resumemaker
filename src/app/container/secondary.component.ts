import {Component} from '@angular/core';

@Component({
  selector: 'app-secondary',
  template: `
    <header>
        <div class="row">
            <a href="second#main-menu"  class="menu-toggle" id="main-menu-toggle" aria-label="Open Main Menu">
                <span class="sr-only">Open main menu</span>
                <span class="fa fa-bars" aria-hidden="true"></span>
            </a>
     
            <div class="logo">
                <h1><i class="fas fa-check-square"></i> LayOut Times</h1>
                <h2>Your Web Design Destination</h2>
            </div>
        </div>
        <nav id="main-menu" class="main-menu" aria-label="Main Menu"> 
            <a href="second#main-menu-toggle" class="menu-close">
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
         <a href="second#main-menu-toggle" class="backdrop" hidden tabindex="-1"></a>
    </header>
       <main>
        
        <section id="first">
            <h1>Jen’s Awesome Resources</h1>
        <div class="container">

            <input type="checkbox" name="" id="">
        </div>
            <article>
                <h2>Learn with Jen Kramer online at Harvard Extension </h2>
                <p>Join some of the many informative courses Jen teaches through the Harvard Extension School. Courses count towards bachelors and masters degree programs, certificates, or take a class for your own enrichment.</p>
                <ul>
                    <li><a
                        href="https://www.extension.harvard.edu/course-catalog/courses?instructors=Kramer,%20Jennifer"
                        target="_blank">Jen's course list <i class="fas fa-paint-brush"></i></a></li>
                        <li><a href="http://extension.harvard.edu"
                        target="_blank">Harvard Extension website <i class="fas fa-paint-brush"></i></a> </li>
                        </ul>
            </article>
            <article>
                <img src="./assets/book.png" alt="Before You Code book cover.">
                <h2>Plan your product’s success</h2>
                <p>By taking the time to do upfront validation, planning and iterating before you build, you can avoid
                    ideas that flop and create a product that exceeds expectations. Heather O'Neill and Jen Kramer's
                    latest book, <cite>Before You Code</cite>, will guide you through the process. </p>
                <p><a href="http://beforeyoucode.guide" target="_blank">Visit the <cite>Before You Code</cite> website
                        <i class="fas fa-paint-brush"></i></a> </p>
            </article>
            <article>
                <h2 class="thing">AMore Responsive Design 2.0</h2>
                <p id="a">Get a head start on the latest responsive web design (RWD) techniques with this great list of
                    resources.</p>
                <p><a href="#a">Visit RWD 2.0 Reading List
                        <i class="fas fa-paint-brush"></i></a></p>
            </article>
            <article>             
                <img src="./assets/cssworkout.png" alt="CSS Workout">
                <h2>Have you done your CSS workout for the day?</h2>
                <p>Nowhere is practice more important than with CSS layouts. For 15 years, we’ve listened to students
                    complain about CSS layouts, how hard they are to understand, and how things “don’t work” in the
                    expected way. Now you can train daily to master them.</p> 
                <p><a href="http://www.cssworkout.guide" target="_blank">Visit <cite>CSS Workouts</cite> to start your
                        routine! <i class="fas fa-paint-brush"></i></a></p>
            </article>
        </section>
        <section id="main">
            <h1>Main News</h1>
            <article>
                <img src="./assets/courses.png" alt="Frontend Masters classroom.">
                <h2>Advance Your Skills with In-Depth, Modern Front-End Engineering Courses</h2>
                <p>The best courses on the web, taught by industry leading experts!</p>
                <p><a href="http://www.frontendmasters.com" target="_blank">Join now to continue your learning journey.
                        <i class="fas fa-paint-brush"></i> </a></p>
            </article>
            <article>
                <img src="./assets/bootcamp.png" alt="Frontend Masters Bootcamp." class="floatright">
                <h2>Coming 2019 the Frontend Masters Bootcamp</h2>
                <p>Featuring instruction from Jen Kramer and Brian Holt, this incredible and free resource is everything
                    you need to get started on being a web developer. Available late 2019.</p>
                <p><a href="https://frontendmasters.github.io/bootcamp/" target="_blank">Visit the Bootcamp website <i
                            class="fas fa-paint-brush"></i></a></p>
            </article>
            <article>
                <h2>CSS-Tricks: why we love it!</h2>
                <p>Still one of the best resources on the web to bend CSS to your will, CSS-Tricks is jam packed with
                    techniques, information and best practices. </p>
                <p><a href="http://www.css-tricks.com" target="_blank">Check out CSS-Tricks <i
                            class="fas fa-paint-brush"></i> </a></p>
            </article>
            <article>
                <img src="./assets/codepen.png" alt="Codepen." class="floatleft">
                <h2>Learn best by doing? Try Codepen!</h2>
                <p>Get immediate feedback on the code you type right in the browser! </p>
                <p><a href="http://www.codepen.com" target="_blank">Try Codepen now <i
                            class="fas fa-paint-brush"></i></a></p>
            </article>
        </section>
        <section id="devs">
                <h1>Developers to Follow:</h1>
                <ul>
                    <li>
                        <figure>
                            <a href="http://www.twitter.com/jen4web" target="_blank"><img src="./assets/jen.png"
                                    alt="Jen Kramer"></a>
                            <figcaption>
                                <p><strong>Jen Kramer</strong><br>
                                Harvard University Extension School <br>
                                <a href="http://www.twitter.com/jen4web" target="_blank"><i
                                        class="fab fa-twitter-square"></i></a></p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <a href="http://www.twitter.com/standardista" target="_blank"><img src="./assets/estelle.png"
                                    alt="Estelle Weyl"></a>
                            <figcaption>
                                <p><strong>Estelle Weyl</strong><br>
                                Standardista<br>
                                <a href="http://www.twitter.com/standardista" target="_blank"><i
                                        class="fab fa-twitter-square"></i></a></p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <a href="http://www.twitter.com/holtbt" target="_blank"><img src="./assets/brian.png"
                                    alt="Brian Holt"></a>
                            <figcaption>
                                <p><strong>Brian Holt</strong><br>
                                Microsoft<br>
                                <a href="http://www.twitter.com/holtbt" target="_blank"><i
                                        class="fab fa-twitter-square"></i></a></p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <a href="http://www.twitter.com/willsentance" target="_blank"><img src="./assets/will.png"
                                    alt="Will Sentance"></a>
                            <figcaption>
                                <p><strong>Will Sentance</strong><br>
                                Codesmith<br>
                                <a href="http://www.twitter.com/willsentance" target="_blank"><i
                                        class="fab fa-twitter-square"></i></a></p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <a href="http://www.twitter.com/sarah_edo" target="_blank"><img src="./assets/sarah.png"
                                    alt="Jen Kramer"></a>
                            <figcaption>
                                <p><strong>Sarah Drasner</strong><br>
                                Microsoft<br>
                                <a href="http://www.twitter.com/sarah_edo" target="_blank"><i
                                        class="fab fa-twitter-square"></i></a></p>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
        </section>
        <section id="resources">
            <h1>Design Resources <small>(credit: Sarah Drasner)</small></h1>
            <ul>
                <li><a href="https://dribbble.com/" target="_blank">Dribbble</a></li>
                <li><a href="https://www.sketchapp.com/" target="_blank">SketchApp</a></li>
                <li><a href="https://gridbyexample.com/" target="_blank">Grid By Example</a></li>
                <li><a href="http://cssgridgarden.com/" target="_blank">CSS Grid Garden</a></li>
                <li><a href="https://webanimationworkshops.com/" target="_blank">Web Animation Workshops</a></li>
                <li><a href="https://color.adobe.com" target="_blank">color.adobe.com</a></li>
                <li><a href="https://uigradients.com/" target="_blank">uigradients.com</a></li>
                <li><a href="https://unsplash.com/" target="_blank">Unsplash</a></li>
                <li><a href="https://fontjoy.com/" target="_blank">FontJoy</a></li>
                <li><a href="https://www.shutterstock.com/" target="_blank">Shutterstock</a></li>
            </ul>
        </section>
        <section id="calcdata">
            <h1>Design Resources <small>(credit: Sarah Drasner)</small></h1>
             <div  class="row">
                <div class="one">one</div>
                <div class="two">two</div>
             </div>
             <div class="row">
                <div class="colum-1-7">one</div>
                <div class="colum-1-7">two</div>
                <div class="colum-1-7">three</div>
                <div class="colum-1-7">four</div>
                <div class="colum-1-7">five</div>
                <div class="colum-1-7">six</div>
                <div class="colum-1-7">seven</div>
             </div>
             <div class="row">
                <div class="colum-2-7">one</div>
                <div class="colum-2-7">two</div>
                <div class="colum-2-7">three</div>
                <div class="colum-2-7">four</div>
                <div class="colum-2-7">five</div>
                <div class="colum-2-7">six</div>
                <div class="colum-2-7">seven</div>
             </div>
        </section>

    </main>
  `,
  styles: [`
  /* style.css */
 html {
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: inherit;
}
body {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    margin: 1rem;
}
header, h1, h2, h3, h4, h5, h6 {
    font-family: Nobile, Arial, Helvetica, sans-serif;
    font-weight: 500;
}
section > h1 {
    color: #9EA9C1;
}
/* header styles */
header {
    font-weight: 400;
}
header h1 {
    margin: 0;
    font-weight: 400;
    color: #C85028;
}
header h2 {
    font-weight: 400;
}

/* article styles */
article {
    border-bottom: 4px solid #3c2b67;
    padding-bottom: 2rem;
}
img, .floatleft, .floatright {
    display: block;
    margin: 1rem auto 0 auto;
    max-width: 100%;
}
a {
    color: #C85028;
    font-weight: bold;
    text-decoration: none;
}
a:hover {
    color: #7E64BE;
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

  /* style.css */

    
    /* CSS hamburger button code, h/t 
https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793 

Below is a starting navigation bar formatted for mobile and desktop. MQ is set to break where nav wraps once we've set up some typography... which we have not done yet. Trust the process :-)

*/

/* added by me */
header {
    border-bottom: 4px solid #9EA9C1;
}

main {
    border-top: 2px solid #dddddd;
    margin-top: 0.5rem;

}

header .row {
    display: flex;
    flex-flow: row nowrap;
}

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
    color: #C85028;
}

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

    .main-menu ul {
    list-style: none;
    margin: 0;
    padding-top: 2.5em;
    min-height: 100%;
    width: 200px;
    background-color: #1a1a1a;
  }
  .main-menu a {
    display: block;
    padding: .75rem;
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

    .main-menu .menu-close {
    position: absolute;
    right: 0;
    top: 0;
  }

/* extra */
input{
    -webkit-appearance: none;
    position: relative;
    width: 50px;
    height: 30px;
    border-radius: 25px;
    background-color: #ccc;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;
    transition:  background 0.3s;
    -webkit-transition:  background 0.3s;
    -moz-transition:  background 0.3s;
    -ms-transition:  background 0.3s;
    -o-transition:  background 0.3s;
    outline: none;
    cursor: pointer;
}

input::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    height: 1.25rem;
    width: 1.25rem;
    background-color: rgb(255,255,255);
    transition: left .3s;
    -webkit-transition: left .3s;
    -moz-transition: left .3s;
    -ms-transition: left .3s;
    -o-transition: left .3s;
}
.menu-toggle:target{

    border: 1px solid blueviolet;
}

input:checked{
    background-color: green;
}
input:checked::after{
    left: 70%;
}
/* extra */
  /* magic */
    .main-menu:target {
    display: block;
    left: 0;
    outline: none;
  }
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
    background: rgba(0,0,0,.85);
    cursor: default;
  }



/* nav ul {
    list-style: none;
    margin: 0;
}

nav a {
    display: block;
    padding: .75rem;
    text-decoration: none;
} */

@media (min-width: 800px) {

    /* header and nav borders rearranged for desktop */
    header,
    main {
        border: none;
        margin: 0;
    }

    nav {
        border-top: 4px solid #9EA9C1;
        border-bottom: 1px solid #dddddd;
        padding: 0.3rem 0;
    }


   .menu-toggle,
    .main-menu .menu-close {
      display: none;
    }

.main-menu {
      position: static;
      display: block;
    }


 .main-menu ul {      
      padding: 0;
      height: auto;
      width: auto;
      background: none;
      overflow: hidden;
      text-align: center;
    }

  .main-menu li {
        display: inline-block;
    }

    .main-menu li:not(:last-child)::after {
      content: " || ";
  }
 .main-menu li:first-child a {
        border-top: none;
    }

 .main-menu a {
      color: #C85028;
      border-bottom: none;
      display: inline;
    }
    .main-menu a:hover,
    .main-menu a:focus {
      background: none; 
      color: #7E64BE;
      text-decoration: none;
    }

     
    nav ul {
        text-align: center;
    }

    /* display the li's horizontally */
    nav li {
        display: inline-block;
    }

    /* add cute divider after each li, but not the last one */
    /* nav li:not(:last-child)::after {
        content: " || ";
    } */
    /* above style the same as  */
    nav li::after {
        content: " || ";
    }

    nav li:last-child::after {
        content: "";
    }

    /* desktop assumes a pointer display */
    nav a {
        color: #C85028;
        border-bottom: none;
        display: inline;
    }

}

.thing {
  width: 90%; /* fallback if needed */
  width: calc(100% - 3em);
  background-color: var(--primary-color);
}


.one{
    width: 40%;
    float: left;
    margin-right: 1em;
}
.two{
    width: calc(60% - 1em);
    float: right;
}
.colum-1-7{
    /* width: calc(100% / 7); */
    width: 14.2857%;
    /* width: calc(100% / 7); */
}
.colum-2-7{
    width: calc(100% / 7 *2);
}
.row{
    display: flex;
}

:root {
  --main-bg-color: brown;
  --primary-color:red;
}

article{
     --primary-color:darkgrey;
     color: var(--primary-color);
}
    `]
})

export class SecondaryComponent {

  constructor() {
  }
}
