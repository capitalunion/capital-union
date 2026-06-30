
const NAV_HTML = `
<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <div>
        CAPITAL UNION
        <span class="brand-sub">VENTILATION SYSTEMS</span>
      </div>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMain">
      <ul class="navbar-nav ms-auto me-3 gap-1">
        <li class="nav-item"><a class="nav-link" href="index.html" data-i18n="nav_home">Главная</a></li>
        <li class="nav-item"><a class="nav-link" href="services.html" data-i18n="nav_services">Услуги</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html" data-i18n="nav_contact">Контакты</a></li>
      </ul>
      <div class="nav-controls">
        <button class="lang-btn lang-btn-ru">РУС</button>
        <button class="lang-btn lang-btn-kk">ҚАЗ</button>
        <button class="theme-btn"><span class="theme-icon">🌙</span></button>
      </div>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="footer-brand">CAPITAL <span>UNION</span></div>
        <p class="footer-desc" data-i18n="footer_desc">Производитель и монтажник профессиональных систем вентиляции в Казахстане.</p>
      </div>
      <div class="col-lg-2 col-md-6">
        <div class="footer-heading" data-i18n="footer_links">Ссылки</div>
        <ul class="footer-links">
          <li><a href="index.html" data-i18n="nav_home">Главная</a></li>
          <li><a href="services.html" data-i18n="nav_services">Услуги</a></li>
          <li><a href="contact.html" data-i18n="nav_contact">Контакты</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="footer-heading" data-i18n="astana_office">Офис Астана</div>
        <div class="footer-contact-item"><span class="ico">📍</span><span>пр. Кабанбай Батыра 75А, Астана</span></div>
        <div class="footer-contact-item"><span class="ico">👤</span><span><strong>Муратов Денислам</strong> -- <span data-i18n="director">Директор</span><br>+7 (705) 800-64-64</span></div>
        <div class="footer-contact-item"><span class="ico">👤</span><span><strong>Бухаров Меирбек</strong> -- <span data-i18n="chief_engineer">Главный инженер</span><br>+7 (747) 693-22-04</span></div>
        <div class="footer-contact-item"><span class="ico">✉️</span><a href="mailto:capitalunion2024@mail.ru" style="color:rgba(255,255,255,0.65)">capitalunion2024@mail.ru</a></div>
        <div class="footer-contact-item"><span class="ico">✉️</span><a href="mailto:Denislam.Muratov@gmail.com" style="color:rgba(255,255,255,0.65)">Denislam.Muratov@gmail.com</a></div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="footer-heading" data-i18n="karaganda_office">Производство Карагандa</div>
        <div class="footer-contact-item"><span class="ico">📍</span><span>Район Казыбек би, Саранское шоссе 8А, Карагандa</span></div>
        <div class="footer-contact-item"><span class="ico">👤</span><span><strong>Нурмагамбетов Алишер</strong> -- <span data-i18n="production_manager">Заведующий производством</span><br>+7 (747) 557-07-92</span></div>
         
      </div>
    </div>
    <hr class="footer-divider">
    <div class="footer-bottom">
      <span>© Capital Union. <span data-i18n="footer_copy">Все права защищены.</span></span>
      <span>🇰🇿 Казахстан</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin',
    '<div class="cursor-dot"></div><div class="cursor-ring"></div>'
  );
  const navEl = document.getElementById('navbar-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  const footEl = document.getElementById('footer-placeholder');
  if (footEl) footEl.outerHTML = FOOTER_HTML;
  document.body.insertAdjacentHTML('beforeend', '<button id="scrollTopBtn" title="Наверх">▲</button>');
  document.body.insertAdjacentHTML('beforeend', '<div class="cu-toast"></div>');
});