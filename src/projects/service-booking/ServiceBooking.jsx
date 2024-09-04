import cover from './ServiceBookingCover.png'
import img01 from './ServiceBooking1.png'
import img02 from './ServiceBooking2.png'
import speedy01 from './SpeedyEights1.png'
import speedy02 from './SpeedyEights2.png'
import speedy03 from './SpeedyEights3.png'
import speedy04 from './SpeedyEights4.png'
import research from './CompetitorResearch.png'
import time01 from './Time1.png'
import time02 from './Time2.png'

const ServiceBookingProject = () => {
  return (
    <article className='project'>
      <header>
        <h2>Service Booking</h2>
        <h4>Designing a health care service booking feature at League</h4>
      </header>

      <section>
        <h3>My Role</h3>
        <p>
          In April 2021, I undertook a project with League to design a 'Service Booking' feature in collaboration with Loblaw Companies Ltd., Maple, and Lifemark. The goal was to enable users to seamlessly book various health services offered by Maple and Lifemark through the PC Health mobile app.
        </p>
        <img src={cover} alt="Service booking" />
      </section>

      <section>
        <h3>Achievements</h3>
        <ul>
          <li>Led research efforts, gathering requirements from partners and user feedback.</li>
          <li>Crafted a user flow prioritizing online vs. in-person appointments, leveraging iterative design.</li>
          <li>Produced high-fidelity screens to guide the team and enhance collaboration.</li>
          <li>Played a pivotal role in achieving project milestones within an aggressive 6-month timeline.</li>
          <li>Facilitated productive communication and consensus among cross-functional teams.</li>
        </ul>
        <div className='image-grid'>
          <img src={speedy01} alt="Service booking" />
          <img src={speedy02} alt="Service booking" />
          <img src={speedy03} alt="Service booking" />
          <img src={speedy04} alt="Service booking" />
        </div>
        <div className='image-caption'>Speedy 8's: results from a cross-functional workshop</div>
        <img src={research} alt="Competitor research" />
        <div className='image-caption'>Competitor research</div>

      </section>

      <section>
        <h3>Results</h3>
        <ul>
          <li>Successfully launched the Service Booking feature, meeting key goals and attracting new users.</li>
          <li>Provided a flexible platform for partner integration, enhancing revenue opportunities.</li>
          <li>Contributed to PC Health's marketing campaigns through improved service offerings.</li>
          <li>Identified areas for design enhancement post-launch, ensuring continuous improvement.</li>
        </ul>
        <div className='image-grid'>
          <img src={img01} alt="Service booking" />
          <img src={img02} alt="Service booking" />
          <img src={time01} alt="Service booking" />
          <img src={time02} alt="Service booking" />
        </div>
        <div className='image-caption'>A selection of screens from the final feature</div>
      </section>

      <section>
        <h3>Lessons Learned</h3>
        <ul>
          <li>Emphasized the need for comprehensive written requirements to complement design.</li>
          <li>Recommended establishing clear stakeholder sign-off and a change log for smoother development.</li>
          <li>Highlighted the importance of alignment between partners and consistent requirement delivery.</li>
        </ul>
      </section>
    </article>
  );
};

export default ServiceBookingProject;