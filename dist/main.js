const command = document.getElementById('input');
const history = document.getElementById('history');
const home = document.getElementById('home');
const aboutme = document.getElementById('aboutme');
const projects = document.getElementById('projects');
const resume = document.getElementById('resume');


function addelement(value) {
    if (history.childElementCount <= 25) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${value}`));
        history.appendChild(li);
        command.value = '';
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${value}`));
        history.firstElementChild.remove();
        history.appendChild(li);
        command.value = '';
    }
}

function logKey(e) {
    if (e.code === 'Enter') {
        value = command.value;
        switch (value) {
            case 'help':
                addelement(`$ ${value}`);
                addelement(`navigation commands`);
                addelement(`\u00A0home`);
                addelement(`\u00A0about-me`);
                addelement(`\u00A0projects`);
                addelement(`\u00A0resume`);
                break;
            case 'home':
                addelement(`$ ${value}`);
                addelement(`navigating to ${value}`);
                home.scrollIntoView();
                break;
            case 'about-me':
                addelement(`$ ${value}`);
                addelement(`navigating to ${value}`);
                aboutme.scrollIntoView();
                break;
            case 'projects':
                addelement(`$ ${value}`);
                addelement(`navigating to ${value}`);
                projects.scrollIntoView();
                break;
            case 'resume':
                addelement(`$ ${value}`);
                addelement(`navigating to ${value}`);
                resume.scrollIntoView();
                break;
            case '':
                addelement(`$ ${value}`);
                break;
            default:
                addelement(`$ ${value}`);
                addelement(`${value}: command not found`);
                break;
        }
    }
}

command.addEventListener('keydown', logKey);
