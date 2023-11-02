$(document).ready(function(){	
var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:122,//mandatory property for decktop
		bottomMargin:300,//mandatory property for decktop
		topMarginMobileDevices:0,//mandatory property for mobile devices
		bottomMarginMobileDevices:0,//mandatory property for mobile devices
		menuInit:function (classMenu, classSubMenu){
			classMenu.find(">li").each(function(){
				var conText = $(this).find('.mText').text();
				$(">a", this).append("<div class='_area'></div><div class='_overPl'></div><div class='_overLine'></div><div class='mTextOver'>"+conText+"</div>"); 
			})
			classMenu.find(">li").each(function(){
				var conText = $(this).find('.bText').text();
				$(">a", this).append("<div class='_area'></div><div class='_overPl'></div><div class='_overLine'></div><div class='bTextOver'>"+conText+"</div>"); 
			})
		},		
		buttonOver:function (item){
			$(".mText",item).stop(true).animate({top:"160px"}, 600, 'easeOutCubic');
			$(".mTextOver", item).stop(true).delay(150).animate({ top: "33px" }, 500, 'easeOutCubic');
			$(".bText",item).stop(true).animate({top:"160px"}, 600, 'easeOutCubic');
            $(".bTextOver", item).stop(true).delay(150).animate({top:"33px"}, 500, 'easeOutCubic');
			$("._overPl", item).stop(true).animate({bottom:"0px"}, 500, 'easeOutCubic');
			$("._overLine", item).stop(true).animate({opacity:1}, 500, 'easeOutCubic');
			$("span", item).stop(true).animate({opacity:0}, 500, 'easeOutCubic');
		},
		buttonOut:function (item){
			$(".mText", item).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
			$(".mTextOver", item).stop(true).delay(20).animate({ top: "-100px" }, 400, 'easeOutCubic');
			$(".bText", item).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
			$(".bTextOver", item).stop(true).delay(20).animate({top:"-100px"}, 400, 'easeOutCubic');
			$("._overPl", item).stop(true).animate({bottom:"100px"}, 400, 'easeOutCubic');
			$("._overLine", item).stop(true).animate({opacity:0}, 500, 'easeOutCubic');
			$("span", item).stop(true).animate({opacity:1}, 500, 'easeOutCubic');
		},
		subMenuButtonOver:function (item){
			
		},
		subMenuButtonOut:function (item){
		
		},
		subMenuShow:function(subMenu){
			if(MSIE8){
				//subMenu.css({"display":"block", "margin-top":-(subMenu.outerHeight()+0)});
				subMenu.css({"display":"block", "margin-top":0});
			}else{
				//subMenu.stop(true).css({"display":"block", "margin-top":-(subMenu.outerHeight()+0)}).animate({"opacity":"1"}, 600, "easeInOutCubic");
				subMenu.stop(true).css({"display":"block", "margin-top":0}).animate({"opacity":"1"}, 600, "easeInOutCubic");
			}
		},
		subMenuHide:function(subMenu){
			if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				subMenu.stop(true).delay(300).animate({"opacity":"0"}, 600, "easeInOutCubic", function(){
					$(this).css({"display":"none"})
				});
			}
		},
		pageInit:function (pages){
		},
		currPageAnimate:function (page){

			$(".splash").stop(true).delay(100).animate({"left":-$(window).outerWidth()*2}, 500, "easeOutCubic");
			page.css({"left":$(window).width()}).stop(true).delay(100).animate({"left":0}, 900, "easeOutBack");

		},
		prevPageAnimate:function (page){

			page.stop(true).animate({"display":"block", "left":-$(window).outerWidth()*2}, 700, "easeInCubic");

		},
		backToSplash:function (){

			setTimeout(function() {
				$(".splash").css({"left":$(window).outerWidth()*2}).stop(true).delay(100).animate({"left":'50%'}, 900, "easeOutBack");
			},100);

		},
		pageLoadComplete:function (){

			setTimeout(function() {
				$('.searchButton').hoverSprite({onLoadWebSite:true});
			},400);

		},
	});
	
	////////////////// submenu hover //////////////////// 
		//$('.submenu_1 a b').css({width:'0px'})
		//$('.submenu_2 a span').css({width:'0px'})
		$('.submenu_1 a').hover(function()
			{
				//$(this).find('b').css({width:'0px', left:'-23px'}).stop().animate({width:'234px'}, 300,'easeOutCubic');	
				//$(this).find('span').css({width:'0px', left:'-23px'}).stop().animate({width:'203px'}, 300,'easeOutCubic');			
			}, function(){
				//$(this).find('b').stop().animate({width:'0px', left:'210px'}, 300,'easeOutCubic');
				//$(this).find('span').stop().animate({width:'0px', left:'180px'}, 300,'easeOutCubic');
			})
		////////////////// end submenu hover ////////////////////
	
	
})
$(window).load(function(){	
	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});

	$('.gall_spinner').hide();
    $('#bgStretch')
        .bgStretch({
            align:'leftTop',
            autoplay: false,
            navigs:$('#bgNav').navigs({prevBtn:$('.sliderPrev'), nextBtn:$('.sliderNext')})
        }).sImg({
            sleep: 1000,
            spinner:$('.gall_spinner')
        });

    $("#slider_simple1").slider_simple({
        prevBtn:$('.sliderPrev'),
         nextBtn:$('.sliderNext')
     });
	
});
//// Agregar un evento click al botón "Cancelar" del formulario de servicio
const cancelarButton = document.getElementById('cancelar');

cancelarButton.addEventListener('click', function () {
	servicioResultado.style.display = 'none';
	cancelarButton.style.display='none';
	servicioForm.style.display = '';
});

// Agregar un evento submit al formulario de servicio
const servicioResultado = document.getElementById('servicioResultado');
const servicioFormElement = document.getElementById('servicioForm');

servicioFormElement.addEventListener('submit', function (event) {
  event.preventDefault();
  servicioResultado.style.display = '';
  const nombreCliente = document.getElementById('nombreCliente').value;
  const correoCliente = document.getElementById('correoCliente').value;
  const numeroCelular = document.getElementById('numeroCelular').value;
  const servicio = document.getElementById('servicio').value;
	// se agregan las lineas para insertar registros en la bd
	fetch('http://localhost:3000/api/solicituddeservicio', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombresApellidos: nombreCliente, email: correoCliente,celular:numeroCelular,tipoServicio:servicio })
})
.then(res => res.json())
.then(res=> {
      console.log(res);
});

  const servicioInfo = `
  <table class="custom-table">
    <tbody>
      <tr>
        <td scope="row">Nombres y Apellidos</td>
		<td scope="row">Correo Electrónico</td>
		<td scope="row">Número de celular</td>
		<td scope="row">Servicio solicitado</td>
      </tr>
	  <tr>
		<td>${nombreCliente}</td>
		<td>${correoCliente}</td>
		<td>${numeroCelular}</td>
		<td>${servicio}</td>
		</tr>
    </tbody>
  </table>
  `;

  servicioResultado.innerHTML = servicioInfo;
  cancelarButton.style.display='';
  servicioForm.style.display = 'none';
});
