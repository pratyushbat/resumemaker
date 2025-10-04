import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-selector',
    template: `
           <header>
        <h1>Attribute Selectors</h1>
    </header>
    <main>
        <p data-beatle="john-ringo"><a href="https://www.example.com/document.pdf">Sample</a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste voluptate, a obcaecati quae consequuntur nihil. Eaque voluptates, praesentium, tempore minima veritatis quam, necessitatibus illo ex officiis voluptate sit quibusdam perspiciatis.</p>
        <p data-beatle="paul">Odio voluptas asperiores dicta facere nostrum cumque tenetur perferendis aut sint doloremque autem numquam quasi, eligendi quam sapiente quisquam voluptates beatae sunt magni ad eos sed veniam fugiat. Mollitia, iusto!</p>
        <p data-beatle="george">Optio eligendi cupiditate, at laborum porro veniam libero ipsam voluptatibus vitae aliquid dolore iste nemo mollitia expedita. Deleniti consectetur laudantium minima aperiam quisquam. Corporis quos, unde tempora deleniti, quaerat molestiae!</p>
        <p data-beatle="ringo">Quos ratione vitae fugit consectetur cupiditate id! Repudiandae animi omnis earum iste cum magni tempore, sit dignissimos vero ad? A optio, excepturi eius facilis molestiae eum vero atque asperiores, error?</p>
        </main>    
        <div class="maint">
        <p>Lorem ipsum dolor sit amet, consectetur&shy;adipisicing&shy;elit. Minus&shy;iustoper&shy;ferendisnatus ex at perspiciatis, quis&shy;quam&shy;inventore&shy;suscipit&shy;facere quae, possimus quia eligendi ipsa laborum qui optio nisi, architecto eius!</p>
        <p>Sequi necessitatibus consequuntur et optio porro, ratione, natus adipisci, libero similique maxime perferendis ex, explicabo magni. Quaerat facere quisquam incidunt nulla consectetur quas natus. Tempora rerum officia cupiditate alias quo!</p>
        </div>
        <div>
          <p class="more">Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
        
        <p class="more">Minus cupiditate sint quos delectus libero a necessitatibus eius accusantium corporis doloribus voluptatibus laborum, facere aut eaque at dolorem eveniet officia ducimus. Dolores delectus repellendus natus! Esse doloremque a blanditiis? </p>
        
        <p class="more">Facere, consequuntur! </p>
        </div>
    <footer>
        <p>&copy; 2018 Turkey Stuff Inc.</p>
    </footer>
  `,

    styles: [`
             /******
        [data-beatle] - has attribute
        [data-beatle = "john"] - exact match
        [data-beatle *= "o"]  -contains
        [data-beatle ~= "john"]  - space separated
        [data-beatle ^= "john"]  - starts with
        [data-beatle $= "john"]  - ends with
        [data-beatle |= "john"]  - hyphen separated, 1st value
        
        
        ***/
        main [data-beatle |="john"]{
            color: gold;
        }
        a[href^="https://"]{
            /* all anchors with href that begins with https:// */
            padding: 2rem;
        }
        a[href$= ".pdf"]{
            /* all anchors that link to pdfs */
            color: red;
        }


        .maint>p{
            max-width: 150px;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
            /* none | auto | manual */
            outline: 1px solid red;
            
            overflow: visible;
            /* scroll | visible | hidden | auto */
        }


         .more{
         /* to hide text area */
         text-overflow: ellipsis;
         
         white-space: nowrap;
         overflow: hidden;
         /* to hide text area */
            
            max-width: 90%;
            position: relative;
            padding: 1rem;
            padding-right: 110px;
            font-size: 1rem;
            line-height: 1.5rem;
        }
              .more::before{
            position: absolute;
            right: 0;
            bottom: 1rem;
            line-height: 1.5rem;
            width: 100px;
            color: cornflowerblue;
            text-decoration: underline;
            content: 'Read More';
            cursor: pointer;
        }

        
    `
    ],
    standalone: true,
})
export class SelectorComponent {

    constructor() {

        document.addEventListener('DOMContentLoaded', ()=>{
            let a:any = document.querySelector('a[href^="https://"]')
            a.style.fontSize = '3rem';
        })


    }

}
