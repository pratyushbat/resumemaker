import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flexone',
  template: `
  
    <div class="container">
        <header>
            <h1>Flexbox Getting Started</h1>
        </header>

        <section class="content">
            <nav>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                </ul>
            </nav>

            <main>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quas in, eum maiores quos animi voluptatibus nam culpa rem, dolorum eos ipsam consequuntur incidunt voluptates illo quo provident esse molestiae.</p>
                <p>Quis odio quaerat amet ex recusandae temporibus dolores aperiam eum voluptas quidem illum neque incidunt asperiores, eaque ducimus quia veritatis facere autem a saepe quasi libero animi ullam! Illo, blanditiis.</p>
            </main>
            
            <aside>
                <p>Vitae dignissimos dolores enim excepturi sed alias, commodi, quis perspiciatis doloremque magnam quod exercitationem, ullam officia quaerat mollitia voluptates aperiam deleniti modi.</p>
            </aside>
        </section> 

        <footer>
            <p>&copy; 2018 Turkey Stuff Inc.</p>
        </footer>
    </div>

  
  `,
  styles: [
    `
      .container{
            display: flex;
            flex-direction: column;
            width: 600px;
            margin: 1rem auto;
            background-color: #eee;
        }
        
        /* inside .container */
        header{
            background-color: #bada55;
            padding: 1rem;
        }
        .content{
            background-color: #bad;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content:flex-start; /* main axis */
            align-items: center; /* cross-axis */
        }
        footer{
            background-color: #badaff;
            padding: 1rem;
        }
        
        /* inside .content */
        nav{
            background-color: gold;
            flex: 1 1 200px;
            padding: 10px;
            box-sizing: border-box;
        }
        main{
            background-color: khaki;
            flex: 3 1 200px;
            padding: 10px;
            box-sizing: border-box;
        }
        aside{
            background-color: cornflowerblue;
            flex: 2 1 100px;
            padding: 10px;
            box-sizing: border-box;
        }
    `,
  ],
  standalone: true,
})
export class FlexComponent {
  constructor() {}
}
