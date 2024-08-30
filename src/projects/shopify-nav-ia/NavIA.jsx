import VideoPlayer from '../../components/videoPlayer'

// import img01 from './InboxIllustration.jpg'
// import img02 from './Inbox02.png'
// import video01 from './InboxOnboarding01_720.mov'
// import video03 from './InboxOnboarding03_720.mov'

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
            The Shopify mobile app lacked clear hierarchy and structure, particularly when switching between stores and accounts.
        </p>
        {/* <img src={img01} alt="Shopify Inbox App" /> */}
      </section>

      <section>
        <h3>Problems identified</h3>
        <ul>
            <li>
              App lacks clear hierarchy and structure
            </li>
            <li>
              The ‘Store’ tab is bloated and inconsistent
            </li>
            <li>
              Difficult to move back and forth between different areas in the app
            </li>
            <li>
              Moving between accounts and stores is varied and unclear
            </li>
            <li>
              Does not align with the navigational structure on web
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
        {/* <img src={img02} alt="Previous app state" /> */}
        <caption>The previous multiple paths for installation, and the poor overview experience</caption>
      </section>

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

        <div className='video-wrapper'>
          <VideoPlayer url={""} />
          <VideoPlayer url={""} />
        </div>
        <caption>Prototypes of the new Inbox Onboarding experience, made in Origami Stuido</caption>
      </section>
    </article>
  );
};

export default NavIA;