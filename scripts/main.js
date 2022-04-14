// Start dark mode if it's after 6:59:59pm
if (new Date().getHours() > 18) {
  const html = document.querySelector('html');
  html.style.backgroundColor = '#1B1212';
  html.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const content = document.getElementsByClassName('contentbody');
  content[0].style.backgroundColor = '#1B1212';
  content[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const home = document.getElementsByClassName('homeimages');
  home[0].style.backgroundColor = '#1B1212';
  home[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const welcome = document.getElementsByClassName('welcomemessage');
  welcome[0].style.backgroundColor = '#666666';
  welcome[0].style.color = 'white';
  welcome[0].style.border = '1em solid #1B1212';
}

if (new Date().getHours() > 18) {
  const nav = document.getElementsByClassName('navbar');
  nav[0].style.backgroundColor = '#343434';
  nav[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const header = document.querySelector('header');
  header.style.backgroundColor = '#28282B';
  header.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const footer = document.querySelector('footer');
  footer.style.backgroundColor = '#28282B';
  footer.style.color = 'white';
}
