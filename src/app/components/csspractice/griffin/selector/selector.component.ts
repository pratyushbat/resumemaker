import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-selector',
    template: `
           <header>
           <h1>Attribute Selectors</h1>
        <h1>CSS Sibling Selectors</h1>
        <h2>General &amp; Adjacent</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, dicta, sit. Obcaecati rerum voluptate, consequatur ex soluta eligendi vero at. Nisi temporibus amet nobis vel nulla totam corporis facere enim?</p>
    </header>
    <main>
     <h2>main area heading</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#">Ipsum ullam</a> excepturi id, explicabo sequi reiciendis placeat! Non iusto rerum quasi ipsa quos perspiciatis veritatis, commodi, mollitia inventore magni odit dolores!</p>
        <p>Itaque aliquid quo provident harum quam commodi aperiam <a href="#">cum maxime dicta</a> voluptatem delectus quaerat, perspiciatis ipsam architecto nisi amet dignissimos asperiores unde eos natus aliquam, non explicabo incidunt. Dolorum, esse!</p>
        <p>Sit harum blanditiis, perferendis accusantium <a href="#">asperiores <mark>praesentium quam</mark> illo repellendus.</a> Illo eligendi beatae minima autem esse delectus maxime sint at id officiis dolore fuga, necessitatibus ipsum a dicta perferendis eos.</p>
    
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi illum atque, doloribus ullam reprehenderit, recusandae quaerat veritatis voluptatibus molestiae rerum esse molestias delectus, tempora quae in fugit ex sit. Commodi!</p>
 
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
        <a href="">asdf </a>
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



          /*
        adjacent sibling +
        general sibling ~
        */
        h1 + h2{
            color:orange;
        }
        h2 + p{
            color: red;
        }
        h2 ~ p{
            border-left: 10px solid cornflowerblue;
        }
        p ~ p{
           font-size: 1rem;
        }



         /**************
        ul li  - descendant
        ul > li  - child
        Both work with tag, class, id, pseudo-class, etc
        **************/
        main a{
            /* anchors that are descendants of main */
            text-decoration: overline
        }
        main > a{
            /* anchors that are children of main */
            font-size: 8rem;
        }
        p > a{
            /* anchors that are children of p */
            color: orange;
        }
        
        a > mark{
            /* marks that are children of a */
            color: aqua;
        }
        main mark{
            /* marks that are descendants of main */
            font-size: 2rem;
            color: red;
            color: green;
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
