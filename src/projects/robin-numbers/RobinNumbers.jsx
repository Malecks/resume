import React from 'react';

const RobinNumbersProject = () => {
  return (
    <div>
      <img src="RobinNumbers1.gif" alt="Robin numbers" />

      <blockquote>
        Custom number animations in Origami studio
      </blockquote>

      <section>
        <h3>Project Overview</h3>
        <p>
          In the leadup to BFCM 2023, I was exploring a variety of screens and features that would be displaying numerical data. We wanted some of the key metrics to have a noticeable and exciting animation when they updated. I was prototyping a lot of these features in Origami studio and decided to create a custom component to handle this type of animation.
        </p>
      </section>

      <section>
        <h3>Solution</h3>
        <ul>
          <li><strong>Reusable</strong>: by creating a custom component, I was able to use and re-use it across many different iterations of the larger feature prototype</li>
          <li><strong>Detached</strong>: I was able to iteratively increase the complexity, and isolate the complex logic and individual layers from the rest of the project</li>
          <li><strong>Handy for developers</strong>: the component was easy to share with developers and provided a template for how to implement the animation in code</li>
        </ul>
        <img src="RobinNumbers3.png" alt="Robin numbers" />
      </section>

      <section>
        <h3>How it works</h3>

        <h4>Setup</h4>
        <ul>
          <li>The component takes a number of inputs: font, font size, color, number of digits, a prefix such as '$'</li>
          <li>You can lock it to a specified number of digits</li>
          <li>You can add a separator such as ',' for long numbers</li>
          <li>Each digit is its own component</li>
          <li>Each digit animates separately by scrolling up or down</li>
          <li>Together they create a fluid animation reminiscent of a mechanical device</li>
        </ul>

        <h4>Math</h4>
        <ul>
          <li>The component takes in an arbitrary value</li>
          <li>I use a log operation to determine the number of digits</li>
          <li>Then a series of mod operations break the total value into individual digits</li>
          <li>I loop over each digit and enable or disable them, and set the value for each and they animate individually in place</li>
        </ul>
        <img src="RobinNumbers2.gif" alt="Robin numbers" />
      </section>
    </div>
  );
};

export default RobinNumbersProject;