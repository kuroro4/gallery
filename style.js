window.addEventListener("load", function(){

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);

    const area  = document.querySelector(".js-area");
    const items = document.querySelectorAll(".js-item");
    const num   = items.length;

    //位置とscaleを指定
    items.forEach((item, i) => {
      gsap.set(item, {
        zIndex : num - i,
      });
    });
    gsap.set(".js-waku01", {
      scale: 0.9,
    });
    gsap.set(".js-waku02", {
      scale: 0.3,
    });
    gsap.set(".js-item04", {
      scale: 0, width: "50%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item05", {
      scale: 0, width: "50%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item06", {
      scale: 0, width: "50%", height: "45%", left: "14.5%", top: "30%",
    });
    gsap.set(".js-item07", {
      scale: 0, width: "50%", height: "45%", left: "14.5%", top: "30%",
    });
    gsap.set(".js-item00", {
      scale: 0, width: "100%", height: "100%", left: 0, top: 0,
    });
  
    //タイムライン
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: area, //トリガー
        start: "top top", //開始位置
        end: "+=4000", //終了位置
        scrub: true, //ピン留め
        pin: true, //スクロール量に応じて動かす
      }
    });
  
    //要素を順に拡大する
    tl.to(".js-waku01", { scale: 1.2, duration: 0.5})
      .to(".js-waku02", { scale: 1.2, duration: 1}, "<" )
      .to(".js-item04", { scale: 1, left: "0.5%", top: "5%", duration: 1 },"-=0.5")
      .to(".js-item04", { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(".js-item05", { scale: 1, left: "25.5%", top: "45%", duration: 1 }, "-=0.5")
      .to(".js-item05", { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(".js-item06", { scale: 1, left: "10.5%", top: "5%", duration: 1 },"-=0.5")
      .to(".js-item06", { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(".js-item07", { scale: 1, left: "40.5%", top: "25%", duration: 1 }, "-=0.5")
      .to(".js-item07", { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(".js-item00", { scale: 1, duration: 1 }, "-=0.5")
  });
