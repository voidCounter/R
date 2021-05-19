import aaron from '../../../images/projects/aaron-header.jpg';
import bookscaper from '../../../images/projects/bookscaper.jpg';
import someTodo from '../../../images/projects/some-todo.jpg';
import fcfutaleufu from '../../../images/projects/fc-futaleufu.jpg';
const projectsData = [
    {
        title: 'AAron-Stanley: A photographer portfolio',
        frontEnd: ['React.js', 'HTML5', 'CSS3', 'BootStrap', 'Material UI'],
        backEnd: ['MongoDB', 'FireBase', 'Express.js'],
        features: [
            "A photography service management website built with React.js, Express.js and MongoDB.",
            "Used React, Material UI, CSS3 to create the stunning UI.",
            "Separate admin and customer dashboard have been implemented. Hence Customers can't enter the admin dashboard.",
            'Implemented a firebase authentication system. The Dashboard will divert automatically after getting logged in.',
            "In the admin dashboard, an admin can regulate the customers.' orders, make anyone admin using email, add new services on the UI and manage existing services dynamically.",
            'In the user dashboard, a user can buy existing services, track the orders and give reviews dynamically.',
            'The Stripe payment method has been implemented in the user dashboard.',
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
            'An online bookstore built with React.js and Express.js.',
            'Implemented a firebase authentication system to manage the customers.',
            "No separate admin dashboard hasn't been created. Users have access to the common dashboard.",
            'Users can manage the existing books in the store. They can delete books and add new books.',
            'All the books data is being stored in MongoDB. They are being loaded based on requests. ',
            'Users can see their past ordered books in the orders section.',
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
            'A simple UI created with pure CSS3 and Vanilla.js.',
            'KeyPress event added to add todos flawlessly.',
            'Done and Delete option added to modify a single todo.',
            'A progress bar is added to track the remaining todos.',
            'Option to change UI colour has been added.'

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
            'A simple UI created with pure CSS3 and Vanilla.js.',
            'Used Realistic images of the players.',
            'Images are hosted at the imgbb website.',
            'Users can hire any player, the price is shown at a fixed display at the bottom of the viewport.',
            'Responsiveness added using CSS3 media queries.'

        ],
        github: 'https://github.com/rohittz/fc-futaleufu',
        website: 'https://fc-futaleufu-rohittz.netlify.app/',
        image: fcfutaleufu,
    }


];
export default projectsData;