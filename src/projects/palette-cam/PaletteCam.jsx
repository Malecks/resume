import img01 from './PaletteCam.png'
import img02 from './PaletteCam2.png'
import img03 from './PaletteCam3.png'
import img04 from './PaletteCam4.png'
import img05 from './PaletteCamFeatured.png'

const PaletteCamProject = () => {
  return (
    <div className='project'>
      <img src={ img01 } alt="Palette Cam" width={'800px'}/>
      <h2>
        Palette Cam - iOS App
      </h2>
      <h4>
        Over 300,000 downloads, and a 4.6 rating on the iOS App store
      </h4>

      <section>
        <h3>tldr;</h3>
        <p>
          Palette Cam is an iOS app that helps you create colour palettes from photos. I designed and built Palette Cam during my time at the Lighthouse Labs iOS Development bootcamp in Toronto, ON. and maintained the app for a few years afterward. Palette Cam is still available on the iOS App store today, and continues to receive steady downloads and positive ratings from happy users.
        </p>
        <img src={ img05 } alt="Palette Cam" width={'800px'}/>
      </section>

      <section>
        <h3>Impact and Usage</h3>
        <ul>
          <li>Over 300,000 downloads on the iOS App store</li>
          <li>An average 4.6 star rating from over 1,200 reviews in all territories</li>
          <li>Featured on the App Store in the 'Kick-Start your Brand(ing)' story</li>
          <li>$0 spent on marketing or ads</li>
        </ul>
        <div>
          <blockquote>
            Love it ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
            <p>This app is great to get colour schemes from photos that I have taken and incorporate into my own artwork. — cor.rob</p>
          </blockquote>
          <blockquote>
            Prettiest app I've ever used ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
            <p>I love the design of this app. It's so easy to use and great for inspiration! — ColorGal95</p>
          </blockquote>
          <blockquote>
            Great app. Simple to use. ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
            <p>Great little colour sampling app. Simple, quick interface... — Pulpoco</p>
          </blockquote>
        </div>
      </section>

      <section>
        <h3>Project Goals</h3>
        <ol>
          <li>
            <strong>The app should be about utility</strong>: Similar to a flashlight, calculator, or ruler app - I wanted Palette Cam to focus on a single promise and deliver it seamlessly without feature bloat.
          </li>
          <li>
            <strong>Focus on design and ease of use, to provide the best possible experience</strong>: I wanted to lean on my experience as a designer to help Palette Cam stand out from other colour apps and provide a bug-free, interaction-rich, joyful experience.
          </li>
          <li>
            <strong>Be ready for the App Store</strong>: This goal was maybe the most ambitious as it wasn't a requirement for the Lighthouse Labs demo, but as a personal goal I had wanted to come out of my time in the bootcamp with an app that I could show friends and employers, ready to be downloaded to their own devices.
          </li>
        </ol>
        <img src={ img02 } alt="Palette Cam" width={'800px'}/>
      </section>

      <section>
        <h3>Technologies Used</h3>
        <p>
          When I first launched Palette Cam shortly after graduating Lighthouse Labs, I relied solely on technology provided by Apple, and a single API from Flikr for the photo feed. Palettes were stored quickly in User Preferences, and I used standard UICollectionViews and other UIKit elements throughout to keep things lightweight and straightforward.
        </p>
        <img src={ img04 } alt="Palette Cam" width={'800px'}/>
        <p>
          Though even as I began to work full-time as a developer, I continued to work on Palette Cam in my spare time. The app became a sort of testing ground for things I was curious about, and since launching I've introduced several new technologies and updates to the original app.
        </p>
        <ul>
          <li><strong>IGListKit</strong>: I picked up this tech knowing that it was overkill for my simple app (a common theme). However, the promise of easy-to-implement collection views, and auto-diffing with animations was really appealing so I used Palette Cam as a testing bed before eventually introducing it to my work at Nudge as well!</li>
          <li><strong>Realm</strong>: I wanted a replacement for the quick and dirty solution of storing Palette objects in User Preferences, and Realm provided an easy and free solution to real-time data storage.</li>
          <li><strong>Unsplash</strong>: I've updated the inspiration page to use an infinitely scrolling feed of photos from the Unsplash API to ensure users can start with the best quality photos.</li>
          <li><strong>In-App Reviews</strong>: Another instance of testing on Palette Cam before bringing it to Nudge - the use of in-app reviews contributed to a massive influx of user feedback on both the Palette Cam and Nudge apps, which each maintain a 4.6+ rating.</li>
          <li><strong>SwiftUI</strong>: As soon as SwiftUI was announced at WWDC in 2019, I knew I would eventually want to rewrite Palette Cam to take advantage of its easy-to-build views and animations. After struggling through early betas and an immature platform, a rebuild has finally started to take shape. More importantly though, I've learned that SwiftUI is an incredible tool for prototyping in my day-to-day design work!</li>
        </ul>
        <img src={ img03 } alt="Palette Cam" width={'800px'}/>
      </section>
    </div>
  );
};

export default PaletteCamProject;