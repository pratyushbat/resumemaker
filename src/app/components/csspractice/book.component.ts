









import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inside',
  template: `

<body id="inside">
    <header>
        <div class="row">
            <a href="#main-menu" id="main-menu-toggle" class="menu-toggle" aria-label="Open main menu">
                <span class="sr-only">Open main menu</span>
                <span class="fa fa-bars" aria-hidden="true"></span>
            </a>
            <div class="logo">
                <h1><i class="fas fa-paint-brush"></i> LayOut Times</h1>
                <h2>Your Web Design Destination</h2>
            </div>
        </div>
        <nav id="main-menu" class="main-menu" aria-label="Main menu">
            <a href="#main-menu-toggle" id="main-menu-close" class="menu-close" aria-label="Close main menu">
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
       <a href="#main-menu-toggle" class="backdrop" tabindex="-1" hidden></a>
    </header>

    <main>
        <article>
            <h1><cite>Before You Code</cite>: Product success is part of the plan</h1>
            <img src="./assets/book.png" alt="Before You Code book cover." class="floatright">
            <p>Your idea is going to be BIG. You just know it. But before you hire your favorite developer to go build it, take a step back. Creating a brand-new product is a risk; many of them fail within their first year. Is there a proven way to set yourself up for success?</p>
            <p>Yes! All it takes is some preparation. By taking the time to do upfront validation, planning and iterating before you build, you can avoid ideas that flop and create a product that exceeds expectations.</p>
            <h2>Execute each lesson using the accompanying workbook</h2>
            <p>Upon purchase you'll receive a confirmation email with instructions on how to download your workbook, as well as a notice when your physical copy has shipped.</p>
            <p>The workbook, an editable PDF file, is essential. It is full of activities and guidance for implementing at every step.</p>
            <h2>About the Authors</h2>
            <h3>Heather O'Neill</h3>
            <p><img src="./assets/heather.png" alt="Heather O'Neill." class="circle">Heather O'Neill is a product strategist and tech consultant with over a decade of experience creating meaningful products for the people who use them. At Pixels for Humans, Heather helps tech start-ups solve their toughest challenges and grow into mature, community-focused businesses, that center people over profits.</p>
            <p>A problem solver at heart, Heather also works with design teams to define problems, hypothesize solutions, and track success in their work. Heather is the recipient of the 2018 Women in Tech, Tech 10 award in Rhode Island and has taught classes and workshops at Harvard Extension School, O’Reilly, UXPA International, and more. </p>
            <p>Heather is also the author of several video courses including Measured UX, her signature course for UX designers. The course trains designers on how to collect, refine, and analyze quantitative data as part of a UX design process. Students finish the course able to solve problems more effectively and track the impact of their design iterations.</p>
            <p>Heather earned a dual BA in mathematics and music at Northeastern University in Boston, graduating cum laude in 2006.</p>
            <h3>Jen Kramer</h3>
            <p><img src="./assets/jen.png" alt="Jen Kramer." class="circle">For nearly twenty years, Jen Kramer has been educating clients, colleagues, friends and graduate students about the meaning of a "quality website." Since 2000, she has built websites that are supportive of business and marketing goals in a freelance capacity and as part of an agency.</p>
            <p>Jen is a Lecturer at Harvard University Extension School in the Master's of Liberal Arts in Digital Media Design, teaching at least five courses per year, advising students, and assisting in curriculum design. She is a 2018 Shattuck Award winner, presented for excellence in teaching.</p>
            <p>Jen is also a prolific video author, creating over 35 training courses for Lynda.com (a division of LinkedIn Learning), O'Reilly Media, Aquent Gymnasium, osTraining, and Frontend Masters.</p>
            <p>She is also available for individual private tutoring, customized classroom training, and occasional freelance web design work.</p>
            <p>Jen earned a BS in biology at University of North Carolina at Chapel Hill and an MS in Internet Strategy Management at the Marlboro College Graduate School.</p>
        </article>
        <aside>
            <h3>What people are saying</h3>
            <i class="fas fa-book-open"></i>
            <blockquote>
                <p>Reading <cite>Before You Code</cite> has changed the way I work with clients entirely! I've seen an instant shift in the way they view the work I'm doing.</p>
                <p>If you are a freelancer, start-up or a larger company and you need a better understanding of how to build a great digital product and the value of planning first, then you need this book!!!</p>
                <cite>Ehi Aimiuwu<br>
                    Founder and CEO at Geek Empowered<br>
                    Host, Code Burnout and GeekEmpowered On Air
                </cite>
            </blockquote>
            <p><a href="https://www.beforeyoucode.guide" target="_blank" class="button">Purchase now</a></p>
        </aside>
    </main>

</body>


  `,
  styles: [
    
    `

header {
    border-bottom: 4px solid #9EA9C1;
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
    clip: rect(0,0,0,0);
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
  /* "close" button is positioned in the upper right corner. Button is the X / fa-close button from FontAwesome. If you want it bigger, do it here */
  .main-menu .menu-close {
    position: absolute;
    right: 0;
    top: 0;
  }
  
  /*
THE MAGIC: When main-menu is targeted, show the menu by displaying it and setting left to 0 instead of -200px

How is it targeted? Follow the HTML, line 18  <a href="#main-menu" id="main-menu-toggle" class="menu-toggle" aria-label="Open main menu">

Note the href targets the main menu (both class and ID)
  */
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
  
 
  @media (min-width: 800px) {
      /* header and nav borders rearranged for desktop */
      header, main {
          border: none;
          margin: 0;
      }
    nav {
        border-top: 4px solid #9EA9C1;
        border-bottom: 1px solid #dddddd;
        padding: 0.3rem 0;
    }
    /* fa-bars and fa-close not needed on desktop so hide them */
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
  }


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




/* layout.css */

/* grid system -- mobile first! */
main {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  --columns: 16;
}

#inside article,
#inside aside {
    --width: 16;
    --gap-constant: 0.3%;
	--initialbasis: calc(var(--width, 0) / var(--columns, 16) * 100%);
    --gap: calc((var(--columns, 16) - var(--width, 0)) * var(--gap-constant, 0.3%));
	flex-basis: calc(var(--initialbasis) - var(--gap));
}



/* tablet display - change columns to 11, place rows 3 and 4 on the bottom, full width */
@media (min-width: 740px) {
    main {
        --columns: 11;
    }
 
   /*  #main {
        --width: 6;

    } */


    .floatleft {
        float: left;
        margin: 0 1rem 1rem 0;
    }
    .floatright {
        float: right;
        margin: 0 0 1rem 1rem;
    }
    #inside article {
        --width: 7;
    }
    #inside aside {
        --width: 4;
    }
}
@media (min-width: 950px){
    /* keep our math working, move 3rd column to bottom */
    main {
        --columns: 14;
    }
 

    #inside article {
        --width: 10;
    }
    #inside aside {
        --width: 4;
    }
}
@media (min-width: 1200px) {
    
    main {
        --columns: 16;
    }
  
    
    #inside article {
        --width: 12;
    }
    #inside aside {
        --width: 4;
    }
}



    /* inside.ccss */
    .circle {
    border-radius: 50%;
    border: 5px solid #3D2C67;
    float: left;
    max-width: 155px;
    shape-outside: circle(26.79% at 95px 96px);
    shape-margin: 2rem;
    margin-right: 2rem;
}
blockquote {
    margin: 0;
}
blockquote cite {
    font-weight: bold;
}
.fa-book-open {
    display: block;
    color: #C85028;
    font-size: 100px;
    text-align: center;
}
aside,
aside p {
    font-size: var(--text-sm);
}
aside {
    background-color: #eee;
    border: 1px solid #ccc;
    padding: 1rem;
}
article {
    border-bottom: none;
}
.button {
    background-color: #C85028;
    color: white;
    font-size: var(--h2);
    padding: 0.5rem;
    border-radius: 1rem;
    margin-top: 2rem;
    display: block;
    text-align: center;
}
.button:hover {
    color: white;
    background-color: #3D2C67;
}
    `,
  ],
})
export class InsideBookComponent {
  constructor() {}
}
