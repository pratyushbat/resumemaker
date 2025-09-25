import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flexpractice',
  template: `
    <div class="wrapper">
      <!-- row 1, 4 individual boxes -->
      <div class="row">
        <article class="col-1-2">
          <h3>Boston Cream Pie</h3>
          <img
           src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Boston creme pie."
          />
          <p>
            Boston's famous dessert, a combination of yellow cake, vanilla
            pudding, and chocolate frosting.
          </p>
          <p>
            <a
              href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
        <article class="col-1-2">
          <h3>Coconut Cream Pie</h3>
          <img
           src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Coconut cream pie."
          />
          <p>
            Coconut cream pie will take you to an island escape. Especially
            delicious in winter.
          </p>
          <p>
            <a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
        <article class="col-1-2">
          <h3>Key Lime Pie</h3>
          <img
             src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Key lime pie."
          />
          <p>
            Key lime pie is based on the tiny key limes from Florida. These
            limes are less sour than conventional limes.
          </p>
          <p>
            <a
              href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
              target="_blank"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
        <article class="col-1-2">
          <h3>Pumpkin Pie</h3>
          <img
            src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Pumpkin pie."
          />
          <p>
            A staple of every Thanksgiving dinner table, pumpkin pie is
            delicious any time of year.
          </p>
          <p>
            <a
              href="http://www.kingarthurflour.com/recipes/pumpkin-pie-recipe"
              target="_blank"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
      </div>
      <!-- row 2, 2 boxes spanning 2 rows -->
      <div class="row">
        <article class="col-2">
          <h3>Key Lime Pie</h3>
          <img
            src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Key lime pie."
          />
          <p>
            Key lime pie is based on the tiny key limes from Florida. These
            limes are less sour than conventional limes.
          </p>
          <p>
            <a
              href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
              target="_blank"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
        <article class="col-2">
          <h3>Pumpkin Pie</h3>
          <img
            src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Pumpkin pie."
          />
          <p>
            A staple of every Thanksgiving dinner table, pumpkin pie is
            delicious any time of year.
          </p>
          <p>
            <a
              href="http://www.kingarthurflour.com/recipes/pumpkin-pie-recipe"
              target="_blank"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
      </div>
      <!-- row 3: narrow left column, wide right/content column -->
      <div class="row">
        <article class="col-1-4">
          <h3>Boston Cream Pie</h3>
          <img
           src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Boston creme pie."
          />
          <p>
            Boston's famous dessert, a combination of yellow cake, vanilla
            pudding, and chocolate frosting.
          </p>
          <p>
            <a
              href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
        <article class="col-3">
          <h3>Coconut Cream Pie</h3>
          <img
            src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Coconut cream pie."
          />
          <p>
            Coconut cream pie will take you to an island escape. Especially
            delicious in winter.
          </p>
          <p>
            <a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
      </div>
      <!-- row 4: one column -->
      <div class="row">
        <article class="col-4">
          <h3>Boston Cream Pie</h3>
          <img
            src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Boston creme pie."
          />
          <p>
            Boston's famous dessert, a combination of yellow cake, vanilla
            pudding, and chocolate frosting.
          </p>
          <p>
            <a
              href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
      </div>
      <!-- row 5: 1-2-1 arrangement -->
      <div class="row">
        <article class="col-2-4 order-1">
          <h3>Coconut Cream Pie</h3>
          <img
            src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Coconut cream pie."
          />
          <p>
            Coconut cream pie will take you to an island escape. Especially
            delicious in winter.
          </p>
          <p>
            <a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
        <article class="col-1-2 order-2">
          <h3>Boston Cream Pie</h3>
          <img
            src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Boston creme pie."
          />
          <p>
            Boston's famous dessert, a combination of yellow cake, vanilla
            pudding, and chocolate frosting.
          </p>
          <p>
            <a
              href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
        <article class="col-1-2 order-3">
          <h3>Key Lime Pie</h3>
          <img
            src="//live.staticflickr.com/5605/31544398322_0fb7eded70_n.jpg"
            alt="Key lime pie."
          />
          <p>
            Key lime pie is based on the tiny key limes from Florida. These
            limes are less sour than conventional limes.
          </p>
          <p>
            <a
              href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
              target="_blank"
              >Read more &gt;&gt;</a
            >
          </p>
        </article>
      </div>
    </div>
  `,
  styles: [
    `
      .row {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        --columns: 4;
      }

      [class*='col-'] {
        --width: 4;
        --initialbasis: calc(var(--width) / var(--columns) * 100%);
        --gap: calc((var(--columns) - var(--width)) * 1%);
        flex-basis: calc(var(--initialbasis) - var(--gap)) ;
      }
      body {
        font-family: Arial, Geneva, sans-serif;
        margin: 0;
        padding: 0;
      }

      a {
        color: #2772b0;
      }

      .wrapper {
        width: 97%;
        max-width: 1200px;
        margin: 0 auto;
        background-color: #fff;
      }
      img {
        width: 100%;
        max-width: 225px;
      }

      .col-1-2,
      .col-1-4 {
        background-color: #ffc;
      }
      .col-2,
      .col-2-4 {
        background-color: #fcf;
      }
      .col-3 {
        background-color: #cff;
      }
      .col-4 {
        background-color: #ccf;
      }

      /* Mobile Landscape Screen Sizes */
      @media only screen and (min-width: 480px) {
       /*  [class*='col-'] {
          margin-left: 4%;
          margin-right: 0%;
        } */ 
        .col-1-2,
        .col-2 {
          /* flex: 0 0 44%;  */
          --width: 2;
        }
        .col-1-4,
        .col-2-4,
        .col-3,
        .col-4 {
          --width: 4;
          /* flex: 0 0 92%;  */
        }
        .order-2,
        .order-3 {
          order: 2;
        }
        .order-1 {
          order: 1;
        }
      }

      @media only screen and (min-width: 768px) {
        .col-1-2,
        .col-1-4 {
            /*      flex: 0 0 20%; */
     
          --width: 1;
        }

        .col-2-4 {
          /*  flex: 0 0 44%;  */
          --width: 2;
        }

        .col-3 {
          /*flex: 0 0 68%;  */
            --width: 3;
        }

        .order-3 {
          order: 3;
        }
        .order-2 {
          order: 1;
        }
        .order-1 {
          order: 2;
        }
      }
    `,
  ],
})
export class FlextBoxPracticeComponent {
  constructor() {}
}
