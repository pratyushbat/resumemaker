import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-target',
    template: `
 <nav>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
    </nav>
    <main>
        <h2>Sub Heading</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, consequatur voluptas nisi sunt accusamus nemo nesciunt enim porro perferendis dicta harum suscipit sed explicabo ipsum odit. Maiores incidunt aspernatur facilis!</p>
        <p>Aliquam ipsum qui expedita ducimus, distinctio id ea quibusdam perspiciatis rem mollitia tenetur placeat, neque dignissimos quasi doloremque reprehenderit tempore ut, aperiam! Suscipit dolore iure mollitia incidunt laboriosam, sint blanditiis!</p>
        <p>Harum quae repellendus, quam corporis autem voluptates ipsam? Libero ullam sed iure, ab earum fuga quas impedit officia, dolores suscipit, fugiat, perferendis aliquid beatae. Sequi aspernatur provident, magni aliquid perferendis.</p>
        <p>Eum veritatis ipsum totam recusandae placeat inventore itaque dignissimos odit qui, magni aliquid aspernatur at nemo non blanditiis distinctio architecto atque quam necessitatibus nulla quos, quo et nihil. Tenetur, aliquid.</p>
    </main>
  `,

    styles: [`

              *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        html{
            font: 16px/1.5 Helvetica, Arial, sans-serif;
        }
        nav{
            padding: 1rem 0;
            margin: 0 3rem;
            overflow: auto;
        }
        nav > a{
            display: block;
            float: left;
            width: 25%;
            text-align: center;
            font-size: 1.5rem;
        }
        main{
            padding: 1rem 2rem;
            margin: 0 2rem;
            font-size: 1.0rem;
        }
        main p{
            padding: 0.5rem 0;
        }
        
        @media (max-width: 600px) {
            nav a{
                float: none;
                width: 100%;
                font-weight: 900;
                font-size: 2rem;
                letter-spacing: 2px;
            }
            main h2{
                font-size: 3rem;
            }
            main{
                margin: 0 0.5rem;
            }
            main p{
                font-size: 1.6rem;
                line-height: 1.6;
                padding: 0.8rem 0;
            }
        }
        
        @media (min-width: 1150px) {
            main p{
                font-size: 1.6rem;
                column-count: 2;
                column-gap: 4rem;
            }
            main h2{
                font-size: 3rem;
            }
        }

    `
    ],
    standalone: true,
})
export class MediaQComponent {
    currentRoute = "griffin/target"
    

  
    
}
