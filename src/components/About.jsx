import React from 'react';

const About = () => (
  <div className="about">
    <img src="https://image.ibb.co/iuRjkF/portrait.png" className="portrait" />
    <h3 className="title">Lorem ipsum dolor</h3>
    <p className="about_text">
      Consectetur adipiscing elit. Nam quis risus congue, cursus lacus ac, sollicitudin massa. Cras pellentesque purus sem, faucibus elementum nulla sagittis sit amet. Sed blandit congue augue, ut feugiat elit faucibus non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porttitor enim vitae nisi porta sodales in in erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque imperdiet lorem vitae tempor euismod. Curabitur sit amet purus vel risus posuere commodo. Curabitur pretium orci velit, eu condimentum massa rhoncus quis.
      Sed ultrices viverra scelerisque. Proin sagittis sapien sem. Praesent ut quam vitae dolor dignissim tempus sed nec velit. Suspendisse pellentesque porta nibh, ut lobortis tellus vestibulum id. Sed vulputate, turpis quis bibendum maximus, tortor nisl rhoncus nibh, quis molestie tortor augue at elit. Vivamus ut lectus risus. Praesent pellentesque magna non ornare tincidunt. Nullam varius mi sed mauris dapibus, at volutpat tellus dignissim. Cras ultrices ex in libero auctor, sit amet cursus urna auctor. Ut augue neque, mollis ut posuere non, vestibulum eu quam.
    </p>
    <a href="https://www.linkedin.com/in/hugodolemieux/" className="linkedin link">
      <img src="http://soc-sec.net/wp-content/uploads/2011/04/linkedin-logo.gif" className="link_logo" />
      <div className="link_text">LinkedIn</div>
    </a>
    <a href="https://github.com/Hugodol/" className="github link">
      <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" className="link_logo" />
      <div className="link_text">Github</div>
    </a>
  </div>
);

export default About;
