import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import drumMachine from './img/drumMachine.png';
import localWeather from './img/localWeather.png';
import pomodoro from './img/pomodoro.png';
import randomQuote from './img/randomQuote.png';
import twitch from './img/twitch.png';
import wikipedia from './img/wikipedia.png';
import CV from './TYJ_CV_2018_FE_v2.pdf';

const projects = [
   {
    name: "The Path to this world",
    src: wikipedia,
    intro:"Knowledge is the path to this world. The path has no end. Wikipedia is the entry. This newly-desiged wikipedia interface makes your searching journey easier.",
    skill: ["Javascript ES6","Wikipedia API"],
    href: "/the-path-to-the-world/index.html"
  },

   {
    name: "Shakespear's twitter",
    src: randomQuote,
    intro: "If Shakespear has a twitter account, how will it look like?",
    skill: ["React", "Twitter API"],
    href: "/shakespears-twitter/index.html"
  },

 {
    name: "Whiplash",
    src: drumMachine,
    intro:'Do you like the movie "Whiplash"? This application lets you play drums by your keyboard!',
    skill: ["React"],
    href: "/whiplash/index.html"
  },

   {
    name: "Love rival",
    src: twitch,
    intro:"My husband watches live stream on Twitch every day. I built a website which collects his favorite streamers.",
    skill: ["Javascript ES6", "Twitch API"],
    href: "/love-rival/index.html"
  },

   {
    name: "Londoner's everyday topic",
    src: localWeather,
    intro:"Feel difficult to initiate a conversation? Check London's weather on this website.",
    skill: ["Javascript ES6", "Weather API"],
    href: "/londoner-everyday-topic/index.html"
  },

   {
    name: "Fitness timer",
    src: pomodoro,
    intro:"I go to workout studio every weekdays. I built a fitness timer for myself, so I can train myself at home.",
    skill: ["React"],
    href: "/fitness-timer"
  }
];

// class Skill extends React.Component {
//   const skill =
//   render(){
//
//     return(
//
//     )
//   }
// }

class Project extends React.Component {
  render(){
    const skills = this.props.skill;
    const skill_list = skills.map((skill,idx)=> <span key={idx.toString()}>{skill}</span>);
    return(
      <div className="container-list-project">
        <img className="project-screenshot" alt={this.props.name} src={this.props.src} />
        <div className="container-project-desc">
          <div className="top">
            <h1>{this.props.name}</h1>
            <div>{skill_list}</div>
          </div>

          <div className="bottom">
            <p>{this.props.intro}</p>
            <a className="link-project" href={this.props.href} target="_blank" rel="noopener noreferrer">visit website</a>
          </div>
        </div>
      </div>
    )
  }
}


class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.renderProject = this.renderProject.bind(this);
    this.clickNav = this.clickNav.bind(this);

  }

  renderProject(i){
    const link = process.env.NODE_ENV === "development" ? "https://atangyj.github.io" + projects[i].href : projects[i].href;
    return (
      <Project key={i.toString()} name = {projects[i].name} src={projects[i].src} intro={projects[i].intro} skill={projects[i].skill} href={link}/>
    )
  }


  clickNav(e){
      const name = e.target.classList.value;
      const ele = document.querySelector(".container-"+name);

      ele.scrollIntoView();
      ele.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  render(){
    return(
      <div className="container">
        <header>

          <h1 className="header-title">Hi, I'm Alice.</h1>
          <p>I'm a London-based web developer and I bring easy-to-use interface to the daily life by JavaScript and React. I'd managed and designed a phone number identification App at <a target="_blank" href="https://whoscall.com/en-US/" rel="noopener noreferrer">Gogolook</a>. I'd also researched decision-making behavior at <a target="_blank" href="http://gibms.mc.ntu.edu.tw/Eng/" rel="noopener noreferrer">Brain & Mind Lab</a>. Welcome to look at my projects.</p>

          <nav className="clear">
            <ul>
              <li className="projects" onClick={this.clickNav}>Project</li>
              <li><a className="link-resume" href={CV} target="_blank" rel="noopener noreferrer">Resume</a></li>
              <li className="contact" onClick={this.clickNav}>Contact</li>
            </ul>
          </nav>

        </header>


        <div className="container-projects">
            {this.renderProject(0)}
            {this.renderProject(1)}
            {this.renderProject(2)}
            {this.renderProject(3)}
            {this.renderProject(4)}
            {this.renderProject(5)}
        </div>
        <div className="container-contact">
          <h1>Welcom to say hi to me at <a href="mailto:atangyj@gmail.com">atangyj@gmail.com</a></h1>
          <h1>Find me on <a href="www.linkedin.com/in/aliceYJ">LinkedIn</a></h1>
          <h1>View my code on <a href="https://github.com/atangyj">github</a></h1>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));

window.onscroll = function(){fixHeader()};

const nav = document.querySelector('nav');
const sticky = nav.offsetTop;

function fixHeader(){
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
