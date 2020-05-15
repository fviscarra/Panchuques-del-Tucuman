const app = document.getElementById('app');

const header = document.createElement('div');
header.className = 'container-fluid';
header.id = 'header';
const logo = document.createElement('div');
logo.className = 'logo';
const img = new Image();
img.src = 'imgen/logo.png';
logo.appendChild(img);
header.appendChild(logo);
app.appendChild(header);
const ul = document.createElement('ul');
ul.className = 'nav justify-content-end';
header.appendChild(ul);
const li = document.createElement('li');
li.className = 'nav-item';
ul.appendChild(li);
const a = document.createElement('a');
a.className = 'nav-link active'; 
a.textContent = 'home';
a.href = '#header';
li.appendChild(a);





const container = document.createElement('div');
container.className= 'container';
app.appendChild(container);



