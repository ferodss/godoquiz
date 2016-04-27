(function($) {

  var language = "PT";

  var randomExcuses = {
    "PT" : [
      "É problema de cache, limpa o cache do seu navegador...",
      "É problema da API!",
      "Isso só acontece no retina...",
      "Foi o Pepe que fez isso ai...",
      "Is this a baby? No, it's a dog",
      "Putz, no angular é diferente, é melhor mudar a API e o layout",
      "Porra Pepe!!!",
      "Se ta no lixo é meu",
      "Isso não é impeditivo para subir",
      "Já está em live, né? Então, pode deixar para depois",
      "Ah, não tem tela",
      "Isso acontece, pq não é mobile first",
      "É melhor a API mandar tudo",
      "Ta assim desde a primeira versão"
    ],
    "ES" : [
      "Es un problema de caché, borrar la caché del navegador ...", 
      "Es el problema de la API!", 
      "Eso sólo sucede en la retina ...",
      "Fue Pepe quién lo hizo allí ...",
      "es este un bebé? no, es un perro ",
      "Putz, el ángulo es diferente, lo mejor es cambiar el API y el diseño ",
      "Maldita sea !!! Pepe ",
      "Ra Si la basura es mío ",
      "Que no lo hace esto disminuye al aumentar ",
      "Es vivo, ¿verdad? Así, se puede dejar para más adelante ",
      "Oh, no hay pantalla ",
      "Sucede, porque simplemente no es móvil en primer lugar ",
      "Mejor la API de enviar todos", 
      "Ta así desde la primera versión"
    ]
  };

  function getRandomExcuse() {
    return randomExcuses[language][Math.round(Math.random() * randomExcuses[language].length)];
  }

  $.fn.fadeTo = function(target) {
    var e = $(this);
    e.fadeOut(300, "swing", function() {
      e.html(target);
      e.fadeIn(200, "swing");
    })
  };

  $(document).keyup(function(k) {
    if (k.keyCode == 32) {
      $("h1").fadeTo(getRandomExcuse());
    }
  });

  $(".languages span").click(function(a) {
    $(".languages span").removeClass("active");
    $(a.target).addClass("active");

    language = a.target.id;

    $("h1").fadeTo(getRandomExcuse());
    changeAvatar();
  }); 

  $(".tweet").click(function(a) {
    a.preventDefault();

    var b = encodeURIComponent('"' + $("h1").html() + '" - Gere a sua desculpa completamente aleatória no');
    window.open("http://twitter.com/share?url=" + location.href + "&text=" + b + "&related=ferodss&", "twitterwindow", "height=450, width=550, top=" + ($(window).height() / 2 - 225) + ", left=" + $(window).width() / 2 + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
  });

  $(".toggle .inner").click(function(e) {
    $(".toggle").toggleClass("toggled");
    $(".avatar").toggleClass("visible");

    playCrySound ("assets/chaves.mp3");
    changeAvatar();
  });

  function playCrySound (filePath)
  {
    if ($(".toggle").hasClass ("toggled")) {
      $("body").append('<audio class="cry-audio" id="cry-audio"><source src='+ filePath +' type="audio/mpeg"></source></audio>');
      var cryAudio = $(".cry-audio").get(0);
      cryAudio.loop = true;
      cryAudio.play();
    } else {
      $(".cry-audio").get(0).pause();
      $(".cry-audio").remove();
    }
  }

  function changeAvatar () {
    var gif = language === "PT" ? 'crymode.gif' : 'elbito_crymode.gif';
    $(".avatar").css('background-image', 'url(assets/' + gif + ')');
  }

  $("h1").fadeTo(getRandomExcuse());

  $("body").toasty({
    image: "assets/toasty.png",
    sound: "assets/toasty.mp3"
  });

  var konami = new Konami(function() {
    $("body").toasty('pop');
  });

})(jQuery);
