
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  //ドロワーメニュー
  $(".js-hamburger,.js-sp-nav").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger,.js-body").removeClass("is-active");
      $(".js-header").removeClass("is-color");
      $(".js-sp-nav").fadeOut();
    } else {
      $(".js-hamburger,.js-body").addClass("is-active"); /* js-body:ドロワー表示中に背景を固定し、スクロールさせない */
      $(".js-header").addClass("is-color");
      $(".js-sp-nav").fadeIn();
    }
  });

  //resizeイベント
  $(window).resize(function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  });

  function closeDrawer() {
    $(".js-hamburger,.js-body").removeClass("is-active");
    $(".js-sp-nav").fadeOut();
  }

  var swiper = new Swiper(".js-top-mv-swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  var swiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    // Optional parameters
    slidesPerView: 1.2645,
    spaceBetween: 24,

    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 3.483,
        spaceBetween: 40
      },
    },

    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }
  });

  //ページトップ
  $(function(){
    var pagetop = $('.js-page-top');
    // ボタン非表示
    pagetop.hide();
    // スクロールしたらボタン表示
    $(window).scroll(function () {
      if ($(this).scrollTop() > $('.js-top-mv').height()) {
            pagetop.fadeIn();
      } else {
            pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
    // フッター手前でストップ
    $(".js-page-top").hide();
    $(window).on("scroll", function () {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      var footHeight = $(".js-footer").innerHeight();

      var windowWidth = window.innerWidth;
      var breakPoint = 768;

      if (windowWidth >= breakPoint) {
        if (scrollHeight - scrollPosition <= footHeight) {
      // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
          $(".js-page-top").css({
            position: "absolute",
            bottom: footHeight + 20,
          });
        } else {
          $(".js-page-top").css({
            position: "fixed",
            bottom: "20px",
          });
        }
        } else {
          if (scrollHeight - scrollPosition <= footHeight) {
            // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
                $(".js-page-top").css({
                  position: "absolute",
                  bottom: footHeight + 15,
                });
              } else {
                $(".js-page-top").css({
                  position: "fixed",
                  bottom: "15px",
                });
          }
        }
    });
  });

  //要素の取得とスピードの設定
  var box = $(".js-colorbox"),
  speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
  $(this).append('<div class="color"></div>');
  var color = $(this).find($(".color")),
    image = $(this).find("img");
  var counter = 0;

  image.css("opacity", "0");
  color.css("width", "0%");
  //inviewを使って背景色が画面に現れたら処理をする
  color.on("inview", function () {
    if (counter == 0) {
      $(this)
        .delay(200)
        .animate({ width: "100%" }, speed, function () {
          image.css("opacity", "1");
          $(this).css({ left: "0", right: "auto" });
          $(this).animate({ width: "0%" }, speed);
        });
      counter = 1;
    }
  });
});

});
