import { Component, Input } from '@angular/core';
/* nav.CSS LATEST     */
/* TYPE.CSS */
/* STYLE.CSS */
/* LAYOUT.CSS */
/* INSIDE.CSS -BUTTON */ 
@Component({
  selector: 'app-form',
  template: `
    <body id="inside">
      <main>
        <article>
          <h1>Share your resources!</h1>
          <p>
            Fill out the form below to share one of your favorite layout
            resources.
          </p>
          <form>
            <fieldset>
              <legend>Your contact information</legend>
              <div class="flex">
                <label for="name" class="item1">Your name </label>
                <input type="text" id="name" autofocus class="item2" />
                <label for="phone" class="item1">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Don't forget the area code!"
                  class="item2"
                />
                <label for="email" class="item1">Email</label>
                <input type="email" id="email" class="item2" />
              </div>
            </fieldset>
            <fieldset>
              <legend>About your resource</legend>
              <div class="flex">
                <p class="item1">What kind of resource is it?</p>
                <div class="item2">
                  <label>
                    <input
                      type="radio"
                      name="resource"
                      value="written"
                      checked
                    />
                    Written article
                  </label>
                  <label>
                    <input type="radio" name="resource" value="podcast" />
                    Podcast
                  </label>
                  <label>
                    <input type="radio" name="resource" value="video" /> Video
                  </label>
                  <label>
                    <input type="radio" name="resource" value="conference" />
                    Conference
                  </label>
                  <label>
                    <input type="radio" name="resource" value="other" /> Some
                    other type
                  </label>
                </div>
              </div>
              <div class="flex">
                <label for="rating" class="item1"
                  >How would you rate this resource?</label
                >
                <select id="rating" class="item2">
                  <option selected>Select one...</option>
                  <option value="5star">Amazing, 5 stars</option>
                  <option value="4star">Helpful, 4 stars</option>
                  <option value="3star">OK, 3 stars</option>
                  <option value="2star">Avoid if you can, 2 stars</option>
                  <option value="1star">Pitiful, 1 star</option>
                </select>
              </div>
              <div class="flex">
                <label for="comments" class="item1"
                  >Other details or comments:</label
                >
                <textarea id="comments" class="item2"></textarea>
              </div>
              <label>
                <input id="subscribe" type="checkbox" value="subscribe" />Add me
                to your email list
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </article>
        <aside>
          <h3>Talk to us!</h3>
         <!--  <i class="fas fa-comments"></i> -->
          <address>
            Frontend Masters<br />
            Minneapolis, MN
          </address>
          <p>Email: support@frontendmasters.com</p>
          <p>
              <a
              href="https://www.frontendmasters.com"
              target="_blank"
              class="button"
              >Visit our website</a
              >
            </p>
        </aside>
    </main>
</body>
`,
styles: [
],
})
export class FormComponent {
    constructor() {}
}
