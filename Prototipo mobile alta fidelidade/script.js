document.addEventListener('DOMContentLoaded', () => {
  const openSidebarBtn = document.getElementById('open-sidebar-btn');
  const closeSidebarBtn = document.getElementById('close-sidebar-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toast = document.getElementById('toast-notification');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  if (openSidebarBtn) openSidebarBtn.addEventListener('click', openSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  const navItems = document.querySelectorAll('.nav-item');
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const screens = document.querySelectorAll('.screen-page');

  function navigateTo(targetScreenId) {
    navItems.forEach(nav => {
      if (nav.getAttribute('data-target') === targetScreenId) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    });

    screens.forEach(screen => {
      if (screen.id === targetScreenId) {
        screen.classList.add('active');
      } else {
        screen.classList.remove('active');
      }
    });

    closeSidebar();
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navigateTo(item.getAttribute('data-target'));
    });
  });

  sidebarItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = item.getAttribute('data-target');
      if (target) navigateTo(target);
    });
  });

  document.querySelectorAll('[data-target]').forEach(element => {
    element.addEventListener('click', (e) => {
      const target = element.getAttribute('data-target');
      if (target && !element.classList.contains('nav-item') && !element.classList.contains('sidebar-item')) {
        e.preventDefault();
        navigateTo(target);
      }
    });
  });

  const publishBtn = document.querySelector('.btn-publish-action');
  const draftBtn = document.querySelector('.btn-draft-action');
  const saveProfileBtn = document.querySelector('.btn-save-profile');

  if (publishBtn) {
    publishBtn.addEventListener('click', () => {
      showToast('✓ Avaliação publicada com sucesso!');
    });
  }

  if (draftBtn) {
    draftBtn.addEventListener('click', () => {
      showToast('✓ Salvo nos rascunhos!');
    });
  }

  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
      showToast('✓ Perfil atualizado!');
    });
  }

  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      const parent = e.target.parentElement;
      const siblings = parent.querySelectorAll('.filter-chip');
      siblings.forEach(s => s.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
});