import html from "../Assets/Images/html-solid.svg";
import css from "../Assets/Images/css-solid.svg";
import js from "../Assets/Images/js.svg";
import react from "../Assets/Images/react.svg";
import typescript from "../Assets/Images/typescript.svg";
import graphql from "../Assets/Images/graphql.svg";
import sass from "../Assets/Images/sass.svg";
import nestJs from "../Assets/Images/nestjs.svg";
import nodeJs from "../Assets/Images/nodejs.svg";
import mongoDB from "../Assets/Images/mongodb.svg";
import webAccesibility from "../Assets/Images/w3c.svg";
import API from "../Assets/Images/rest.svg";
import github from "../Assets/Images/github.svg";
import git from "../Assets/Images/git.svg";
import responsive from "../Assets/Images/responsive.svg";
import threejs from "../Assets/Images/threejs.svg";

export const skillDetails = [
    { id: 1, skill: 'HTML', image: `${html}` },
    { id: 2, skill: 'CSS', image: `${css}` },
    { id: 3, skill: 'JS', image: `${js}` },
    { id: 4, skill: 'Typescript', image: `${typescript}` },
    { id: 5, skill: 'ReactJs', image: `${react}` },
    { id: 6, skill: 'Graphql', image: `${graphql}` },
    { id: 7, skill: 'Sass', image: `${sass}` },
    { id: 8, skill: 'NodeJs', image: `${nodeJs} ` },
    { id: 9, skill: 'NestJs', image: `${nestJs}` },
    { id: 10, skill: 'MongoDB', image: `${mongoDB}` },
    { id: 11, skill: 'Web Accesibility', image: `${webAccesibility}` },
    { id: 12, skill: `Restful API's`, image: `${API}` },
    { id: 13, skill: 'Github', image: `${github}` },
    { id: 14, skill: 'Git', image: `${git}` },
    { id: 15, skill: 'Responsive', image: `${responsive}` },
    { id: 16, skill: 'ThreeJs', image: `${threejs}` },
]

export const experienceDetails = [{
    id: 1, time: 'May 2022 - present', companyName: 'Front End Engineer @ Codecraft technologies', description: `Style, develop and maintain websites such as cox edge, cox edge
portal and igoalzero`, skills: ['React JS', 'Html', 'Css', 'Javascript', 'Graphql', 'TypeScript', 'Node Js', 'MongoDB', 'Nest Js']
}, {
    id: 2, time: 'July 2020 - April 2022', companyName: 'Trainee Engineer @ Prematix Software Solutions', description: `Build, style and develop websites such as health care
application, bar management pos, retail websites`, skills: ['React JS', 'Html', 'Css', 'Javascript', 'Figma']
}]

export const workDetails = [{
    id: 1, projectName: 'Twitch - Social Media Website', description: `Twitch is something I personally created to learn API's and web
    sockets connection.It is basically a social media app where you
    can connect to friends and chat.`, skills: 'React JS, Web sockets, Node Js, Express JS, MongoDB',
    link: 'https://github.com/Shirisha5/social_media_app'
}, {
    id: 2, projectName: 'Simple Music Player', description: 'A simple music player App using React', skills: 'React Js', link: 'https://github.com/Shirisha5/react_music_player'
}, {
    id: 3, projectName: 'Simple Page Transition', description: 'A page transition website using grid styles', skills: 'Html, Js, Css', link: 'https://github.com/Shirisha5/simple_image_transition'
}, {
    id: 4, projectName: 'Cinemad - A Movie Recommendation Website', description: 'A Movie Website which displays all recent movies with rating cast and crew and few more details', skills: 'Html, Js, Css'
}, {
    id: 5, projectName: 'Personal Portfolio', description: 'A Personal porfolio describes details about me, my experinece and projects that I have worked on', skills: 'React JS', link: 'https://github.com/Shirisha5/Shirisha5.github.io'
}, {
    id: 6, projectName: 'Planets Website', description: 'A Simple 3d planets website with description', skills: 'ThreeJs, Html, Js, Css', link: 'https://github.com/Shirisha5/planets_threejs'
}]