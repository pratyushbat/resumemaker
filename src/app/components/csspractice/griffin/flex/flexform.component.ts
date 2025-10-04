import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flexone',
  template: `
  
   <body>
    <main>
        <form name="my-form" action="#" method="get">
            <div class="form-box">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username">
            </div>
            <div class="form-box">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-box">
                <label for="pass">Password</label>
                <input type="password" id="pass" name="pass" placeholder="Password" required>
            </div>
            <div class="form-box">
                <label for="domain">Domain</label>
                <select id="domain" name="domain">
                    <option value="facebook">Facebook</option>
                    <option value="github">Github</option>
                    <option value="google">Google</option>
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter</option>
                </select>
            </div>
            <div class="form-box">
                <button id="btnSend">Send</button>
            </div>
        </form>
    </main>
</body>

  
  `,
  styles: [
    `
   html{
            box-sizing: border-box;
            font-size: 20px;
            line-height: 1.6;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            color: #878787;
        }
        *, *::before, *:after{
            box-sizing: inherit;
            padding: 0;
            margin: 0;
        }
        main{
            margin: 1rem auto;
            width: 90%;
            max-width: 1000px;
        }
        
        
        /*********************
                Form
        *********************/
        select, option, input, label, button{
            padding: 0.2rem 1rem;
            font-size: 1.2rem;
            color: inherit;
        }
        .form-box{
            padding: 0.5rem 0;
            display: flex;
            flex-direction: column;
        }
        .form-box label{
            display: none;
        }
        .form-box input,
        .form-box select,
        .form-box textarea{
            flex-basis: 100%;
        }
        .form-box button{
            
        }
        
        /*******************************
                Media Queries
        *******************************/
        @media all and (min-width: 500px){
            .form-box{
                
            }
            .form-box label{
                display: block;
            }
            .form-box input,
            .form-box select,
            .form-box textarea{
                
            }
            .form-box button{

            }
        }
        
        @media all and (min-width: 600px){
            .form-box{
                flex-direction: row;
            }
            .form-box label{
                flex-basis: 9rem;
                flex-grow: 0;
                flex-shrink: 0;
            }
            .form-box input,
            .form-box select,
            .form-box textarea{
                flex-basis: 0;
                flex-grow: 1;
                flex-shrink: 1;
            }
            .form-box button{
                margin-left: 9rem;
            }
        }
    `,
  ],
  standalone: true,
})
export class FlexFormComponent {
  constructor() {}
}
