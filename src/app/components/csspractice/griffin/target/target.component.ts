import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-target',
    template: `
       <header>
        <h1>CSS :target Pseudo-Class</h1>
    </header>
    <nav>
        <a href="{{currentRoute}}#p1">paragraph 1</a>
        <a href="{{currentRoute}}#p2">paragraph 2</a>
        <a href="{{currentRoute}}#p3">paragraph 3</a>
        <a href="{{currentRoute}}#p4">paragraph 4</a>
        <a href="{{currentRoute}}#p5">paragraph 5</a>
    </nav>
    <main>
        <p id="p1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores, repellat illum dolorum dolorem repellendus! Quibusdam cumque ipsam aut, perferendis quo exercitationem quaerat tempore itaque, neque, deleniti ducimus consequatur dolorem.</p>
        <p id="p2">Recusandae libero rerum dolores possimus eligendi doloremque, debitis consectetur et accusamus provident id molestiae quidem officia delectus repellat quis perspiciatis harum quo maxime culpa, sit ratione laudantium esse. Fugit, quas?</p>
        <p id="p3">Molestiae excepturi distinctio atque modi autem aliquid explicabo, iusto deserunt doloribus libero, beatae alias corporis corrupti amet magni quibusdam ad vero pariatur fuga delectus cum nisi repudiandae iste asperiores. Quod.</p>
        <p id="p4">Enim animi consectetur iure soluta odit delectus officia, sint saepe amet quae consequatur eveniet dolores, cum veritatis. Magni inventore voluptatibus, illo asperiores laboriosam consectetur non dolores aliquam doloribus, soluta veniam.</p>
        <p id="p5">Repellat ducimus laborum necessitatibus doloribus nam assumenda voluptates, illo incidunt temporibus error minima pariatur voluptatem. Sequi fugit fuga, nostrum adipisci voluptate eos asperiores error iusto quasi, perferendis eius tempora dolores?</p>
    </main>    
  `,

    styles: [`
        a{
            font-size: 1rem;
            padding: 0.2rem 1rem;
        }
        a.current{
            color:white;
            background-color: #bada55;
            text-shadow: 1px 1px 1px #333;
            font-weight: 900;
            text-decoration: none;
        }
        p{
            font-size: 1rem;
            padding: 1rem;
            margin: 1rem;
        }
        :target{
            background-color: #bada55;
        }
    `
    ],
    standalone: true,
})
export class TargetComponent {
    currentRoute = "griffin/target"
    constructor() {

        // window.addEventListener('load', this.setCurr);
        document.addEventListener('DOMContentLoaded', this.setCurr);
        window.addEventListener('hashchange', this.setCurr);
        //window.addEventListener('popstate', setCurr);


    }

    setCurr(ev) {

        let p, a, id;
        //:target not available until...

        p = document.querySelector(':target');
        console.log(ev.type, p);
        if (p) {
            id = `a[href="${this.currentRoute}#${p.id}"]`;
            //console.log(id)
            document.querySelectorAll('.current').forEach(anchor => {
                anchor.classList.remove('current');
            })
            a = document.querySelector(id);
            a.classList.add('current');
        }
    }
}
