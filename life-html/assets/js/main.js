//ハンバーガーメニュー
const button = document.querySelector('.hamburger');
const nav = document.querySelector('.mb_nav');
const anchors = document.querySelectorAll('.mb_nav a'); // メニュー内のアンカーリンクを取得

button.addEventListener('click', function() {
  button.classList.toggle('open');
  nav.classList.toggle('open');
});
// アンカーリンクをクリックしたときにメニューを閉じる処理
anchors.forEach(anchor => {
  anchor.addEventListener('click', function() {
    button.classList.remove('open'); // ハンバーガーボタンを閉じる
    nav.classList.remove('open');   // メニューを閉じる
  });
});

//ボイスカード
const voiceSwiper = new Swiper('.voiceSwiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 50,

  navigation: {
    nextEl: '.voice-next',
    prevEl: '.voice-prev',
  },
});