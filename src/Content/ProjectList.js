import profolio_img from 'Content/Images/profolio.png';
import tipstip_img from 'Content/Images/tipstip.png';
import checklist_img from 'Content/Images/checklist.png';
const ProjectList = [
    {
        title: 'CheckList',
        img: checklist_img,
        date: 'Jul, 2021',
        body: 
        "This beautiful checklist helps to manage your tasks based on different master list",
        app_link: 'https://timlaitw.github.io/React-Checklist/',
        git_link: 'https://github.com/TimLaiTW/React-Checklist'
    },
    {
        title: 'Profolio',
        img: profolio_img,
        date: 'May, 2021',
        body: 
        "Second iteration of my personal website built with React and hosted on GitHub Pages.",
        app_link: '#',
        git_link: '#'
    },
    {
        title: 'Tips tip',
        img: tipstip_img,
        date: 'Feb, 2021',
        body: 
        "This app calculates the subtotal before approximate sales tax automatically based on the user's current location and displays the tax, tips, total amount and the amount for each person in your group.",
        app_link: 'https://timlaitw.github.io/React-Tips-Calculator/',
        git_link: 'https://github.com/TimLaiTW/React-Tips-Calculator'
    }
]
export default ProjectList;