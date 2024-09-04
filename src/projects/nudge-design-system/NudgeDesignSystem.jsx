import img01 from './DesignLibrary01.png'
import img02 from './DesignLibrary02.png'
import img03 from './DesignLibrary03.png'
import img04 from './DesignLibrary04.png'
import img05 from './DesignLibrary05.png'
import img06 from './DesignLibrary06.png'
import img07 from './DesignLibrary07.png'
import img08 from './DesignLibrary08.png'
// import img09 from './DesignLibrary09.png'
import img10 from './DesignLibrary10.png'
import img11 from './DesignLibrary11.png'
import img12 from './DesignLibrary12.png'


const NudgeDesignSystemProject = () => {
  return (
    <article className="project">
      <header>
        <h2>Design Library</h2>
        <h4>Building (and re-building) a comprehensive design system and library</h4>
      </header>

      <section>
        <h3>Project background</h3>
        <p>
          After transitioning to a full-time design role at Nudge, our Product team was moving faster than ever creating and planning features for the app. Similarly, our engineering team was building at an unprecedented pace - both on the mobile and backend teams. As a result, I was inundated with requests from all areas of the business to create mocks for upcoming features, and produce mocks of existing features for marketing or sales purposes.
        </p>
        <p> 
          I decided it was time to set up a design system and library in Sketch. My project goals were to:
        </p>
        <ul>
          <li>Allow for quick iteration on new designs.</li>
          <li>Ensure consistency across new and existing features.</li>
          <li>Have adaptable and easy to produce mockups for our Marketing, CS, and Sales teams.</li>
        </ul>
        <img src={img08} alt="Design Library" />
      </section>

      <section>
        <h3>Build Strategy</h3>
        <p>
          After doing some research I decided to approach the library by loosely following an Atomic Design System. I thought this system was appropriate because it would allow for cascading changes, which would ensure consistency, and allow for creating quick mocks of our features.
        </p>
        <p>
          I didn't feel that it was important to strictly follow this pattern, but I did believe it would provide an excellent starting point from which I could adapt and update to suit our own needs.
        </p>
        <p>
          After building the first series of components and screens, I decided to keep two separate libraries. The first would contain the atoms, and molecules - common items like navigation, buttons, and entry fields that are used across many different screens in the app. I named this file the 'App Components Library'. The second file would contain templates, and the organisms used to build those templates. This file was named the 'App Screens Library'. I settled on this approach for a number of reasons:
        </p>
        <ul>
          <li>Keeping atoms and molecules in one 'Components' library created an easy reference for developers to build matching components in code.</li>
          <li>When building out completely new features, importing a single 'Components' library kept things tidy, but still consistent.</li>
          <li>Separating templates and organisms into a 'Screens' library was simple for the CS and Marketing teams who didn't need or want access to smaller components.</li>
          <li>The 'Screens' library could be neatly organized by feature, allowing for quick export of product mocks.</li>
        </ul>
        <div className='image-grid'>
          <img src={img01} alt="Design Library" />
          <img src={img02} alt="Design Library" />
          <img src={img03} alt="Design Library" />
          <img src={img04} alt="Design Library" />
        </div>
        <div className='image-caption'>Various components, combining to create molecules and full screens</div>
      </section>

      <section>
        <h3>Usage and Updates</h3>
        <p>
          Creating the library required a lot of initial effort, however the impact it had on my day to day design process is almost immeasurable. It entirely eliminated the need to recreate existing components, or dig through old files to find a component I had already made. It also allowed me to view all the components in the app side by side, and share text and colour styles across all of them - ensuring consistency in designs from feature to feature.
        </p>
        <p>
          An even larger impact these libraries would have was on the rest of the company. Our engineering team was able to replicate the libraries' components in code, including the various text and colour styles. This lead to shorter development times, fewer guesses while interpreting designs, and more consistency across the app and between mobile platforms.
        </p>
        <p>
          Furthermore, our Marketing, CS, and Sales teams were able to take advantage of quick access to the flexible feature screens. Though we didn't have an in-house graphic designer, other members of the team were able to use the Sketch library to quickly update copy and images to suit their specific needs. The library also resulted in fewer 'broken' mocks, and stronger overall content produced.
        </p>
        <p>
          Finally, I was able to use our libraries to create a new type of resource for white-labeling product mockups. By leveraging our usage of colour styles in the library, I was able to create a Sketch document that will cascade changes to those colour styles through every feature mock in a way that replicates our in-app feature for white-labeling.
        </p>
        <img src={img11} alt="Design Library" />
        <div className='image-caption'>The design system was extended to our CMS backend</div>
      </section>

      <section>
        <h3>2 Years later, and the transition to Figma</h3>
        <p>
          For over 2 years using and building out the Sketch library with new features and updates had become part of my regular workflow, and its usage was widespread throughout the company. However, I was noticing that some product mockups being produced still had out of date designs or inconsistencies. After talking with our team, I discovered a few areas where they were struggling with the current implementation, and began thinking about how to best address them.
        </p>
        <p>
          Team members were often neglecting to update the library, and would frequently detach symbols from the library in order to make small adjustments to components. These changes were easy to integrate into the design system, but members of the CS or marketing teams didn't have an easy way to submit requests for those updates. Instead of starting from the library each time, they would duplicate their old files where they had made these tweaks.
        </p>
        <p>
          It was around this same time that I had begun work on our company re-brand project, and needed a lot of back-and-forth collaboration with other teams.
        </p>
        <p>
          After a lot of research, and a couple deep breaths…I decided it was time to transition the team to Figma. As I saw it, Figma would have a few key advantages over Sketch.
        </p>
        <ul>
          <li>
            <strong>Files are always up to date, and users have no need to keep out of date file versions</strong>: While Figma does support file versioning, the latest files are always distributed to the team - there's no need for me as the designer to post a new version in Slack or to a Google Drive, and to make sure everybody updates their libraries.
          </li>
          <li>
            <strong>Collaboration is key!</strong>: With Figma it's incredibly easy to invite users to view files and leave comments. This has drastically improved the process for leaving feedback on designs, requesting updates to the libraries, and even for our CS and Marketing teams to get help with their own design files.
          </li>
          <li>
            <strong>Transparency and shared files</strong>: After years of hoarding Sketch files and cautiously sending around product mocks, knowing that they would return 2 years later, out of date, in a Powerpoint presentation - I decided that transparency was the best policy, and that giving access to all of my design files would help the broader team.
          </li>
        </ul>
        <div className='image-grid'>
          <img src={img05} alt="Design Library" />
          <img src={img06} alt="Design Library" />
          <img src={img07} alt="Design Library" />
          <img src={img12} alt="Design Library" />
        </div>
        <div className='image-caption'>More components for mobile and desktop</div>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>
          I'm happy to say that the switch to Figma has been a huge success. Since the transition, I've been able to successfully recreate and improve upon the design system and extend it to our web-based CMS. We have even fewer mistakes with product mocks, and many more teammates using Figma than we ever had using Sketch. On top of that, the use of comments and other collaboration tools have transformed the process not just for providing mocks to CS and marketing, but our product process as well. We've been able to invite developers into Figma to leave feedback on designs, have PMs suggest updates, and marketing team members suggest copy edits. With Figma's introduction of Auto-layout and Variants, I've been able to further organize and update the components to become increasingly powerful and flexible.
        </p>
        <img src={img10} alt="Design Library" />
      </section>
    </article>
  );
};

export default NudgeDesignSystemProject;