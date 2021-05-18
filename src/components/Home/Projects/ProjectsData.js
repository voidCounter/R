import aaron from '../../../images/projects/aaron-dashboard.png';
import bookscaper from '../../../images/projects/bookscaper.jpg';
import someTodo from '../../../images/projects/some-todo.png';
import fcfutaleufu from '../../../images/projects/fc-futaleufu.png';
const projectsData = [
    {
        title: 'AAron-Stanley: A photographer portfolio',
        frontEnd: ['React.js', 'HTML5', 'CSS3', 'BootStrap'],
        backEnd: ['MongoDB', 'FireBase', 'Express.js'],
        features: [
            'Built React application for photographers to maintain cilents with ease.',
            'Implemented a firebase authentication system.',
            'Implemented admin dashboard to regulate clients’ bookings and stripe payment method.',
            'Used React, CSS3, JavaScript, Material UI for creating radiant front-end design.',
            'Used Express, MongoDB for back-end development.',
            'Deployed to firebase and Heroku is functioning at the backend.'
        ],
        github: 'https://github.com/rohittz/photographer-portfolio',
        website: 'https://aaron-stanley.web.app/',
        image: aaron,
    },
    {
        title: 'BookScaper: An online bookstore',
        frontEnd: ['React.js', 'HTML5', 'CSS3', 'BootStrap'],
        backEnd: ['MongoDB', 'FireBase', 'Express.js'],
        features: [
            'An online bookstore built with React and Express.',
            'Implemented a firebase authentication system to deal with customers’ orders.',
            'Implemented admin dashboard to regulate clients’ bookings and stripe payment method.',
            'Implemented admin dashboard to manage available books in the store.',
            'Used React, CSS3 for designing the website.',
            'Deployed to firebase and Heroku is operating at the back-end.'
        ],
        github: 'https://github.com/rohittz/bookscaper',
        website: 'https://bookscaper.web.app/',
        image: bookscaper,
    },
    {
        title: 'Some-todo: A todo application',
        frontEnd: ['HTML', 'CSS3', 'JavaScript'],
        backEnd: ['JavaScript'],
        features: [
            'A simple UI created with pure CSS3 and Vanilla.js',
            'KeyPress event added to add todos flawlessly',
            'Done and Delete option added to modify a single todo',
            'A pregress bar is added to track the remaining todos',
            'Option to change UI color has been added'

        ],
        github: 'https://github.com/rohittz/some-todo',
        website: 'https://rohittz.github.io/some-todo/',
        image: someTodo,
    },
    {
        title: 'Fc-Futaleufu',
        frontEnd: ['React.js', 'CSS3', 'BootStrap'],
        backEnd: ['JavaScript'],
        features: [
            'A simple UI created with pure CSS3 and Vanilla.js',
            'Used Realistic images of the players.',
            'Images are hosted at imgbb website.',
            'Users can hire any player, the price is shown at a fixed display at the bottom of the viewport.',
            'Responsiveness added using CSS3 media-queries.'

        ],
        github: 'https://github.com/rohittz/fc-futaleufu',
        website: 'https://fc-futaleufu-rohittz.netlify.app/',
        image: fcfutaleufu,
    }


];
export default projectsData;