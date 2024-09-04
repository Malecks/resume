import VideoPlayer from '../../components/videoPlayer'

import img01 from './NavIA01.png'
import img02 from './NavIA02.png'
import img03 from './NavIA03.png'
import video01 from './NavIAVideo01_720.mov'
import video02 from './NavIAVideo02_720.mov'

const NavIA = () => {
  return (
    <article className='project'>
      <header>
        <h2>Navigation overhaul</h2>
        <h4>Updating the navigation and information architecture for the Shopify mobile app</h4>
      </header>

      <section>
        <h3>TLDR;</h3>
        <p>
          This project sought to re-define the navigation and IA across the whole of the Shopify mobile app. With considered updates, we removed unintuitive behaviours, introduced functionality for multi-tasking, easy account and store switching, and created a polished and extensible foundation for future feature work.
        </p>
        <img src={img03} alt="Shopify Nav and IA revamp" />
        <div className='image-caption'>The updated navigation and IA.</div>
      </section>

      <section>
        <h3>My Role: UX Lead</h3>
        <ul>
          <li>Feature design in Figma, interaction design and prototyping in Origami</li>
          <li>Working cross-functionally with the engineering and product managers as a trifecta member. Presenting and generating alignment with key stakeholders and senior leadership.</li>
          <li>Pairing closely with developers on implementation details. Documenting and illustrating key decisions.</li>
          <li>Connecting with teams across Shopify to provide context and direction on interconnected projects.</li>
        </ul>
      </section>

      <section>
        <h3>Problems identified</h3>
        <p>
          The Shopify mobile app lacked clear hierarchy and structure, particularly when switching between stores and accounts. Settings were scattered across different tabs, and accounts and stores were intertwined unintuitively. Many important workflows were hidden behind a bloated 'Store' tab which has no equivalent on the web app. And finally, there was an awkward behaviour to enable and disable your stores on the app.
        </p>
        <img src={img01} alt="Previous app state" />
        <div className='image-caption'>
          The previous state of the app. Account and store settings were jumbled, with unintuitive actions to switch between them or access settings.
        </div>
        <img src={img02} alt="Previous app state" />
        <div className='image-caption'>Visualizing how we wanted to group content, and reduce the complexity of 'adding or removing' stores.</div>
      </section>

      <section>
        <h3>Goals</h3>
        <ul>
            <li>
              Introduce a top level account management area
            </li>
            <li>
              Create a strong and expansible foundation for navigating the mobile app
            </li>
            <li>
              Alignment with web admin
            </li>
        </ul>
      </section>

      <section>
        <h3>Solution</h3>
        <p>
          Our solution involved creating a new idiom in the app of surfaces. The main surface would include all of the features of your store that users were accustomed to: their home tab, analytics, products etc. Accounts and stores were moved to a new side-drawer, creating an elevated surface for contextual information. We also removed the 'Store' tab, and replaced it with a sheet where you can find additional features neatly organized. We styled this bottom sheet to act as an extension of the tab bar, and engineered it to allow for easy multitasking by maintining a unique back-stack for each tab.
        </p>
        <ul>
          <li>Completed several rounds of user testing with internal and external merchants</li>
          <li>Gathered insights on key workflows and merchant statistics, enabling us to track store and account switching and critical user tasks</li>
          <li>Enabling up to 10 stores is done automatically on log-in, keeping performance high, covering 99.99% of merchants, and providing intuitive fallbacks</li>
          <li>Released on-time to positive reviews and customer feedback</li>
        </ul>

        <div className='video-wrapper'>
            <VideoPlayer url={video01} />
            <VideoPlayer url={video02} />
        </div>
        <div className='image-caption'>Switching between stores and accounts in the side drawer and multi-tasking across features with the bottom sheet.</div>
      </section>
    </article>
  );
};

export default NavIA;