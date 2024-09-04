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

        </p>
        <img src={img03} alt="Shopify Nav and IA revamp" />
      </section>

      <section>
        <h3>Problems identified</h3>
        <p>
          The Shopify mobile app lacked clear hierarchy and structure, particularly when switching between stores and accounts. Settings were scattered across different tabs, and accounts and stores are intertwined unintuitively. Many important workflows were hidden behind a bloated 'Store' tab which has no equivalent on the web app. And finally, there was an awkward behaviour to enable and disable your stores on the app.
        </p>
        <ul>
            <li>
              App lacks clear hierarchy and structure
            </li>
            <li>
              The ‘Store’ tab is bloated and inconsistent
            </li>
            <li>
              Does not align with the navigational structure on web
            </li>
            <li>
              Enabling and disabling your stores is confusing
            </li>
        </ul>
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
        <img src={img01} alt="Previous app state" />
        <div className='image-caption'>
          The previous state of the app. Account and store settings were jumbled, with unintuitive paths to switch between them or access settings.
        </div>
      </section>


      <img src={img02} alt="Previous app state" />
      <div className='image-caption'>Visualizing how we wanted to group like content together, and reduce the complexity of 'adding or removing' stores.</div>

      <section>
        <h3>My Role: UX Lead</h3>
        <ul>
            <li>
              Work closely with the project champion and project manager as a trifecta member
            </li>
            <li>
              Middle to late stage feature design
            </li>
            <li>
              Interaction prototyping
            </li>
            <li>
              Presenting and generating alignment with key stakeholders and senior leadership
            </li>
            <li>
              Documenting and illustrating key decisions
            </li>
            <li>
              Closely pairing with developers on implementation details
            </li>
            <li>
              Pairing with teams on connecting work to provide context and direction
            </li>
        </ul>
      </section>
      <div className='video-wrapper'>
          <VideoPlayer url={video01} />
          <VideoPlayer url={video02} />
      </div>
      <div className='image-caption'>Prototypes of the new Inbox Onboarding experience, made in Origami Stuido</div>
    </article>
  );
};

export default NavIA;