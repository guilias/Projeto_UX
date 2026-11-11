const sidebar = document.querySelector('#sidebar');
const menuButton = document.querySelector('#menu-button');

document.querySelectorAll('.filter').forEach((filter) => {
  filter.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
  });
});

if (menuButton && sidebar) {
  menuButton.addEventListener('click', () => sidebar.classList.toggle('open'));
}
