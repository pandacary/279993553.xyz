// 双语切换逻辑
const langBtn = document.querySelector('.lang-btn');
const body = document.body;

// 读取本地存储语言
let currentLang = localStorage.getItem('siteLang') || 'zh';
setLang(currentLang);

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  setLang(currentLang);
  localStorage.setItem('siteLang', currentLang);
});

function setLang(lang) {
  if(lang === 'en') {
    body.classList.add('lang-en');
    langBtn.innerText = '中文 / EN';
  } else {
    body.classList.remove('lang-en');
    langBtn.innerText = 'EN / 中文';
  }
}

// 简易滚动淡入动画
const observer = new IntersectionObserver((entries) => {
  entries.forEach(item => {
    if(item.isIntersecting) {
      item.target.style.opacity = 1;
      item.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .article-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});