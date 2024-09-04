import VideoPlayer from '../../components/videoPlayer'

import img01 from './BFCMTab.png'
import img02 from './BFCMTakeover.png'
import img03 from './BFCMEvent.png'
import video01 from './BFCM23_720.mov'
import video02 from './BFCM23_02_720.mov'

const ShopifyBFCMProject = () => {
  return (
    <article className='project'>
      <header>
        <h2>Shopify BFCM '23</h2>
        <h4>Analytics and countdown experience for the Black Friday / Cyber Monday weekend on Shopify mobile</h4>
      </header>

      <section>
        <h3>TLDR;</h3>
        <p>I took on the role as 'Project Champion' and lead the creation of an analytics feature to help merchants track key metrics during the Black Friday / Cyber Monday weekend on Shopify mobile.</p>
        <p>80% of Shopify mobile users regularly engage with metrics on the Home tab of the app. However, there is no way for merchants to track the BFCM period specifically, and the pre-set time periods do not line up with a long weekend event.</p>
        <p>This presented an opportunity to add value for merchants during a critical sales period, lean into our mobile app as a companion platform for established merchants, and create some excitement and marketing opportunities that showcase mobile capabilities</p>
        
        <div className='video-wrapper'>
          <VideoPlayer url={video01} />
          <VideoPlayer url={video02} />
          </div>
          <div className='image-caption'>A late prototype (left) and the final product (right)</div>
      </section>

      <section>
        <h3>Opportunities and principles</h3>
        <ul>
            <li>
                Make it easy for merchants to track BFCM metrics from the Home tab on mobile
            </li>
            <li>
                Build BFCM momentum and engagement amongst maturing merchants
            </li>
            <li>
                Enhance the exisiting app experience, don't disrupt it
            </li>
            <li>
                Invest in a unique and interactive experience
            </li>
        </ul>
      </section>

      <section>
        <h3>My Role</h3>
        <ul>
            <li>
                Generating buy-in and excitement amongst key stakeholders
            </li>
            <li>
                Early prototyping and exploration
            </li>
            <li>
                Creating a project brief and video walkthroughs at key project stages
            </li>
            <li>
                Discovery and alignment with concurrent BFCM projects across Shopify
            </li>
            <li>
                Writing weekly updates to track progress and identify risks
            </li>
            <li>
                Prototyping animations and interaction
            </li>
            <li>
                Presenting designs and key decisions to senior leadership team
            </li>
            <li>
                Moving the project through lifecycle stages from conception to build
            </li>
            <li>
                Pairing closely with developers on implementation
            </li>
        </ul>
        <img src={img01} alt="BFCM '23 on Shopify mobile" />
        <caption>The final designs</caption>
      </section>

      <section>
        <h3>Prototyping</h3>
        <p>Learning from the previous year, I made sure to get ahead of what would be a tight timeline by prototyping various solutions early.</p>
        <p>One early idea was to leverage Apple's Live activities for realtime tracking of metrics. I put together a prototype using SwiftUI that allowed us to see a complete picture of how the API works, what an experience using live activities might look like, and most importantly, what it's limitations were.</p>
        <p>I discovered that although we might be able to create a novel implementation, Live activities were not a perfect fit for our goals.</p>
        <ul>
            <li>Live activities had an 8 hour maximum duration</li>
            <li>Users needed to take an action to start the activity</li>
            <li>It would mean a significant throwaway investment of time and code</li>
        </ul>

        <p>Instead of Live activities, I revisited our principles, and came up with a solution that built upon our existing home metrics experience</p>
        <ul>
            <li>Take a pattern that merchants are familiar with</li>
            <li>Add to it in a useful way</li>
            <li>Invest time saved into a high-quality countdown experience</li>
        </ul>
        <img src={img02} alt="BFCM '23 on Shopify mobile" />
        <caption>An early prototype using SwiftUI and Live activities</caption>
      </section>

      <section>
        <h3>Solution</h3>
        <p>
            The solution included a 48 hour countdown to the BFCM weekend that built excitement with a highly polished design and a unique parallax effect. We made sure that our efforts were visually aligned with other concurrent BFCM projects, and in some cases were able to lead teams to create their own version of the feature using our research and principles.
        </p>
        <p>
            After the 48 hour countdown, as BFCM started for merchants, the countdown changed to display key metrics with a timeframe scoped to the BFCM weekend. This was in addition to the existing timeframes merchants were used to. We signified the special nature of this timeframe by implementing a dark theme and unique visual treatment.
        </p>
      </section>

      <section>
        <h3>Results</h3>
        <p>Thanks to early preparation and the efforts of our developers, we launched in time for BFCM and met all of our stretch goals.</p>
        <ul>
            <li>The feature was mounted over 4 million times</li>
            <li>It was interacted with 16 million times</li>
            <li>The BFCM analytics page was opened 420 thousand times</li>
            <li>And the BFCM timeframe was the most popular, with 33% of users selecting it as their default for the weekend</li>
        </ul>
        <p>And some Shopify stats...</p>
        <ul>
            <li>Shopify merchants reached a record $9.3 billion in sales</li>
            <li>Shopify saw peak sales per minute of $4.2 million</li>
            <li>17,500+ entrepreneurs made their first sale on Shopify.</li>
            <li>More than 55,000 merchants had their highest-selling day ever on Shopify.</li>
        </ul>
        <p>
            Crucially, we also released with no major issues or reported incidents. This was a result of regular testing in the leadup to an early release, and ensured that our merchants were in great shape for a very important sales weekend!
        </p>
        <img src={img03} alt="BFCM '23 on Shopify mobile" />
        <caption>BFCM '23 event in the iOS App store</caption>
      </section>
    </article>
  );
};

export default ShopifyBFCMProject;