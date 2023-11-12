import img01 from './Analytics01.png'
import img02 from './Analytics02.png'
import img03 from './Analytics03.png'
import img04 from './Analytics04.png'
import img05 from './Analytics05.png'
import img06 from './Analytics06.png'
import img07 from './Analytics07.png'
import img08 from './Analytics08.png'
import img09 from './Analytics09.png'

const NudgeAnalyticsDashboardProject = () => {
    return (
      <article className="project">
        <header>
          <h2>Analytics Dashboard</h2>
          <h4>Revamping the Nudge analytics dashboard for speed and clarity</h4>
        </header>
  
        <section>
          <h3>Project Overview</h3>
          <p>
            The Nudge Analytics Dashboard project sought to transform the user experience and effectiveness of analytics within the Nudge CMS platform. The aim was to provide clearer, actionable insights to program managers and CS teams by reimagining the existing dashboard layout and addressing performance and usability issues.
          </p>
          <img src={img01} alt="Analytics cover" />
        </section>
  
        <section>
          <h3>Key Problems Identified</h3>
          <ol>
            <li>Slow loading times due to multiple charts and elements.</li>
            <li>Complex and opaque metrics leading to confusion.</li>
            <li>Low discoverability of relevant dashboards.</li>
          </ol>
          <div className='image-grid'>
            <img src={img02} alt="Previous dashboard" />
            <img src={img04} alt="Previous dashboard" />
            <img src={img03} alt="Previous dashboard" />
            <img src={img09} alt="Analytics flow chart" />
          </div>
          <caption>Previous dashbords, and a flow chart</caption>
        </section>

        <section>
          <h3>Proposed Solution</h3>
          <ul>
            <li>
              <strong>Organized Dashboards</strong>: Reorganized dashboards by in-app features for intuitive navigation, allowing program managers to gain insights into specific program areas quickly.
            </li>
            <li>
              <strong>Focused Pages</strong>: Limited dashboards to 6 charts or tables per page to reduce load times and cognitive load, enhancing usability.
            </li>
            <li>
              <strong>Progressive Hierarchy</strong>: Introduced a natural hierarchy for insights, emphasizing general performance and content stats, while enabling exploration of more complex data.
            </li>
            <li>
              <strong>Accessible Exports</strong>: Provided upfront access to data tables for exporting, catering to unique or one-time analysis requests.
            </li>
          </ul>
          <div className='image-grid'>
            <img src={img05} alt="Analytics" />
            <img src={img08} alt="Analytics" />
            <img src={img07} alt="Analytics" />
            <img src={img06} alt="Analytics" />
          </div>
          <caption>Examples of the updated dashboards</caption>
        </section>

        <section>
          <h3>My Role</h3>
          <p>
            I led the design efforts for this project, addressing user needs and technical challenges. Responsibilities included conducting user research, creating modular graph components, and crafting polished screens that depict the ideal state of Nudge's analytics.
          </p>
        </section>
  
        <section>
          <h3>Achievements</h3>
          <ul>
            <li>Conducted user interviews to identify pain points and gather insights.</li>
            <li>Designed modular graph components for consistency and ease of use.</li>
            <li>Developed an intuitive dashboard layout, improving user access and discoverability.</li>
            <li>Emphasized user-centric hierarchy for insights, enhancing relevance and actionable data.</li>
          </ul>

        </section>
  
        <section>
          <h3>Outcomes</h3>
          <p>
            The revamped Nudge Analytics Dashboard promises to provide program managers and CS teams with a more seamless, insightful experience. By prioritizing usability and performance, this redesign is poised to enhance decision-making and optimize operations, aligning with Nudge's commitment to empower users with data-driven insights.
          </p>
        </section>
      </article>
    );
  };
  
export default NudgeAnalyticsDashboardProject;