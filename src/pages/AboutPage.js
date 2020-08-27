import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hello my name is Jessamine and I am a full stack developer with
          experience in JavaScript, jsQuery, SQL, MongoDB, CSS and React.
        </p>

        <p>
          My dream is to work on code for a company and be a strong supporter of
          their advancement and positive growth in tech and culture.
        </p>

        <p>
          I'm constantly learning new things. currently those things include
          gaining more experience with MongoDB, React, Express JS, and Node JS.
        </p>

        <p>
          My latest project, Covid Corner, is a real-time statistics app for
          Covid-19 statistics, Symptom Checker, and contains articles from the
          NY Times. You can check it out{" "}
          <a
            href="https://covidcorner.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , or on the homepage. It is built with React and MySQL. It is my first
          project utilizing Material UI.
        </p>

        <p>
          When I'm not learning something new chances are I'm paddle-boarding
          with my dog, planting, painting, or attending a yoga class.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
