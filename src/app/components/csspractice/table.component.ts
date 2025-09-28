




import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
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

  <main id="table">
    <article>
      <h1>Amazing Facts About Celestial Bodies</h1>
      <p>All of the key "planetary" data you wanted to know, but were afraid to ask! (OK, the Moon and Pluto aren't planets. But you get the idea.) <cite class="text-small">Courtesy of
        <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/" target="_blank" rel="author">Dr. David R. Williams,
          NASA</a>.</cite></p>
          <div class="tablescroll" role="region" aria-labelledby="factsheet" tabindex="0">
            <table id="planetdata">
              <caption id="factsheet">Planetary Fact Sheet - Metric</caption>
              <thead>
              <tr>
                <th scope="col">Planet Name</th>
                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#mass">Mass (10<sup>24</sup>kg)</a>
                </th>
      
                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#diam">Diameter (km)</a>
                </th>
                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#rotp">Rotation Period
                    (hours)</a>
                </th>
                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#leng">Length of Day
                    (hours)</a>
                </th>
                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#dist">Distance from Sun (10<sup>6</sup>
                    km)</a>
                </th>
                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#orbp">Orbital Period
                    (days)</a>
                </th>

                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#temp">Mean Temp (C)</a>
                </th>
                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#sats">Number of Moons</a>
                </th>
                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#ring">Ring System?</a>
                </th>
                <th scope="col">
                  <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#magf">Global Magnetic
                    Field?</a>
                </th>
              </tr>
            </thead>
           
            <tbody>
              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/mercuryfact.html">Mercury</a>
                </td>
                <td>0.33</td>
                <td>4879</td>
                <td>1407.6</td>
                <td>4222.6</td>
                <td>57.9</td>
                <td>88.0</td>
                <td>167</td>
                <td>0</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              
              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html">Venus</a>
                </td>
                <td>4.87</td>
                <td>12,104</td>
                <td>-5832.5</td>
                <td>2802</td>
                <td>108.2</td>
                <td>224.7</td>
                <td>464</td>
                <td>0</td>
                <td>No</td>
                <td>No</td>
              </tr>
              
              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html">Earth</a>
                </td>
                <td>5.97</td>
                <td>12,756</td>
                <td>23.9</td>
                <td>24</td>
                <td>149.6</td>
                <td>365.2</td>
                <td>15</td>
                <td>1</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
            
              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html">Moon</a>
                </td>
                <td>0.073</td>
                <td>3475</td>
                <td>655.7</td>
                <td>708.7</td>
                <td>0.384*</td>
                <td>27.3</td>
                <td>-20</td>
                <td>0</td>
                <td>No</td>
                <td>No</td>
              </tr>
     
              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html">Mars</a>
                </td>
                <td>0.642</td>
                <td>6792</td>
                <td>24.6</td>
                <td>24.7</td>
                <td>227.9</td>
                <td>687.0</td>
                <td>-65</td>
                <td>2</td>
                <td>No</td>
                <td>No</td>
              </tr>
             
              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html">Jupiter</a>
                </td>
                <td>1898</td>
                <td>142,984</td>
                <td>9.9</td>
                <td>9.9</td>
                <td>778.6</td>
                <td>4331</td>
                <td>-110</td>
                <td>79</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
             
              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/saturnfact.html">Saturn</a>
                </td>
                <td>568</td>
                <td>120,536</td>
                <td>10.7</td>
                <td>10.7</td>
                <td>1433.5</td>
                <td>10,747</td>
                <td>-140</td>
                <td>62</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              
              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/uranusfact.html">Uranus</a>
                </td>
                <td>86.8</td>
                <td>51,118</td>
                <td>-17.2</td>
                <td>17.2</td>
                <td>2872.5</td>
                <td>30,589</td>
                <td>-195</td>
                <td>27</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              
              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/neptunefact.html">Neptune</a>
                </td>
                <td>102</td>
                <td>49,528</td>
                <td>16.1</td>
                <td>16.1</td>
                <td>4495.1</td>
                <td>59,800</td>
                <td>-200</td>
                <td>14</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>

              <tr>
                <td><a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/plutofact.html">Pluto</a>
                </td>
                <td>0.0146</td>
                <td>2370</td>
                <td>-153.3</td>
                <td>153.3</td>
                <td>5906.4</td>
                <td>90,560</td>
                <td>-225</td>
                <td>5</td>
                <td>No</td>
                <td>Unknown</td>
              </tr>
            </tbody>
            </table>
          </div>
    </article>
    <aside>
      <h3>Footnotes</h3>
      <p>* - See the <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html"> Fact Sheet Notes.</a>
      </p>

      <h3>Additional Resources</h3>
      <ul>
        <li>
          <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html">Planetary Fact Sheet in
            U.S. Units</a>
        </li>
        <li>
          <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html">Planetary Fact Sheet -
            Values compared to Earth</a>
        </li>
        <li>
          <a href="https://nssdc.gsfc.nasa.gov/planetary/planetfact.html">Index of Planetary Fact Sheets</a>
          - More detailed fact sheets for each planet
        </li>
        <li>
          <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html">
            Notes on the Fact Sheets</a>
          - Explanations of the values and headings in the fact sheet
        </li>
        <li>
          <a href="https://nssdc.gsfc.nasa.gov/planetary/education/schoolyard_ss/">
            Schoolyard Solar System</a>
          - Demonstration scale model of the solar system for the classroom
        </li>
      </ul>
    </aside>
  </main>
</body>


`,
styles:[
  `
  /* round of applause to Chris Coyer: https://css-tricks.com/responsive-data-tables/
and Adrian Roselli: http://adrianroselli.com/2017/11/a-responsive-accessible-table.html#Responsive
*/


/* Force table to not be like tables anymore */
table, thead, tbody, th, tr { 
    display: block; 
}

/* Hide table headers (but not display: none;, for accessibility -- sighted users will see labels below) */
thead tr { 
    position: absolute;
    top: -9999px;
    left: -9999px;
}

tr { border: 1px solid #ccc; }

td {
    display: flex;
    flex-flow: row wrap;
    padding: 0.5rem;
}
td:before { 
    /* this is weird but it works - not clear if this is a flexbox bug? */
    font-weight: bold; 
    flex-basis: 50%;
    margin-right: 2rem;
}
td:nth-of-type(1):before { content: "Celestial Body: "; }
td:nth-of-type(2):before { content: "Mass (10^24kg): "; }
td:nth-of-type(3):before { content: "Diameter (km): "; }
td:nth-of-type(4):before { content: "Rotation Period (hours): "; }
td:nth-of-type(5):before { content: "Length of Day (hours): "; }
td:nth-of-type(6):before { content: "Distance from Sun (10^6 km): "; }
td:nth-of-type(7):before { content: "Orbital Period (days): "; }
td:nth-of-type(8):before { content: "Mean Temperature (C): "; }
td:nth-of-type(9):before { content: "Number of Moons: "; }
td:nth-of-type(10):before { content: "Ring System? "; }
td:nth-of-type(11):before { content: "Global Magnetic Field? "; }

/* let the table scroll as a backup */
.tablescroll {
    overflow-x: auto;
}
caption {
    width: 100%;
    text-align: left;
    font-weight: bold;
    font-size: var(--h2);
    padding: 0.5rem;
    display: block;
}
/* For wider dimensions, change our layout so the table can take the full width of the screen. */
/* table MQ's */
@media (min-width: 950px) {
    /* td:before is not specific enough to override the original declarations, thus this method */
    td:nth-of-type(odd):before,
    td:nth-of-type(even):before {
        content: "";
        margin-right: 0;
    }
    thead tr { 
        position: static;
    }
    thead, tbody {
        display: table-row-group;
    }
    th, td { 
        display: table-cell; 
        padding: 0.5em;
    }
    tr {
        display: table-row;
    }
    table{
        display: table;
    }
    caption {
        font-size: var(--font-size);
    }

}


/* basic table styling */

table {
    border-collapse: collapse;
    border: 1px solid #ccc;
}
tbody tr:nth-child(odd) {
    background-color: #f6dcd4;
}
th {
    text-align: left;
}


/* generic page styling */
aside ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
aside li {
    margin-bottom: 1rem;
}


 



  
  `
]
})
export class TableComponent {
    constructor() {}
}
