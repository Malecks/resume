import VideoPlayer from '../../components/videoPlayer'
import img01 from './InboxIllustration.jpg'
import img02 from './Inbox02.png'
import video01 from './InboxOnboarding01_720.mov'
import video03 from './InboxOnboarding03_720.mov'

const InboxOnboardingProject = () => {
  return (
    <article className='project'>
      <header>
        <h2>Inbox Onboarding</h2>
        <h4>Creating a new onboarding experience for Shopify Inbox, within the Shopify mobile app</h4>
      </header>

      <section>
        <h3>TLDR;</h3>
        <p>
            Shopify Inbox is a tool that allows merchants to communicate with potential customers. Merchants using the Shopify Admin can install the Shopify inbox app to add a chat experience to their stores. Our goal was to clean up the installation process, and create an onboarding experience to help merchants accomplish three critical set-up steps to ensure they get the most out of Shopify Inbox.
        </p>
        <img src={img01} alt="Shopify Inbox App" />
      </section>

      <section>
        <h3>Problems identified:</h3>
        <ul>
            <li>
                App installation had multiple entry points with conflicting messaging and experiences. Confusing Inbox between a sales channel and an app, but only being available via sales channels after installation
            </li>
            <li>
                Metrics were being prioritized and taking a majority of the above the fold content even in an initial state before there are any metrics to report
            </li>
            <li>
                Merchants were not finding key actions that were identified as leading to increased sales and engagement when setting up the Shopify Inbox channel
            </li>
            <li>
                The landing page for Inbox was a directory of links that were redundant, created an underwhelming experience, and obscured value behind additional navigation
            </li>
        </ul>
        <img src={img02} alt="Previous app state" />
        <caption>The previous multiple paths for installation, and the poor overview experience</caption>
      </section>

      <section>
        <h3>Solution:</h3>
        <ul>
            <li>
                Create consistent clear messaging around a single path for installation
            </li>
            <li>
                Add prompts with key messaging for each onboarding step to set up the channel, and merchants, for maximum success
            </li>
            <li>
                Eliminate unnecessary navigation by sending merchants directly to the overview page
            </li>
            <li>
                Hide metrics until the merchant is in a position to take advantage of them, decluttering the overview page and emphasizing onboarding steps
            </li>
            <li>
                Introduce information to the channel progressively as the merchant completes setup steps
            </li>
        </ul>

        <div className='video-wrapper'>
          <VideoPlayer url={video01}/>
            <VideoPlayer url={video03}/>
          </div>
          <caption>Prototypes of the new Inbox Onboarding experience, made in Origami Stuido</caption>
      </section>
    </article>
  );
};

export default InboxOnboardingProject;