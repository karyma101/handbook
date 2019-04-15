http://www.blackcow-development.com/dev/

<script>
//Accordion at community stories
$(document).ready(
  function () {
  if($(window).width() >= 760){
    $("#person1-mobile").css('display','none');
    $("#person2-mobile").css('display', 'none');
    $("#person2-mobile").css('display', 'none');

}

$("#person1-click").click(function () {
  $("#person1-active").attr('class', 'col-md-4 com_test-title active');
  $("#person2-active").attr('class', 'col-md-4 com_test-title');
  $("#person3-active").attr('class', 'col-md-4 com_test-title');
  $("#person1").css('display', 'flex').slideDown("slow");
  $("#person2").hide();
  $("#person3").hide();
  if($(window).width() <= 760){
    $("#person1-mobile").css('display','flex').slideDown("slow");
    $("#person2-mobile").hide();
    $("#person3-mobile").hide()

  }
});


$("#person2-click").click(function () {
  $("#person1-active").attr('class', 'col-md-4 com_test-title');
  $("#person2-active").attr('class', 'col-md-4 com_test-title active');
  $("#person3-active").attr('class', 'col-md-4 com_test-title');
  $("#person2").css('display','flex').slideDown("slow");
  $("#person1").hide();
  $("#person3").hide();
  if($(window).width() <= 760){
    $("#person2-mobile").css('display','flex').slideDown("slow");
    $("#person1-mobile").hide();
    $("#person3-mobile").hide()
  }

});
$("#person3-click").click(function () {
  $("#person1-active").attr('class', 'col-md-4 com_test-title');
  $("#person2-active").attr('class', 'col-md-4 com_test-title');
  $("#person3-active").attr('class', 'col-md-4 com_test-title active');
  $("#person3").css('display', 'flex').slideDown("slow");
  $("#person1").hide();
  $("#person2").hide();
  if($(window).width() <= 760){
  
    $("#person3-mobile").css('display','flex').slideDown("slow");
    $("#person2-mobile").hide();
    $("#person1-mobile").hide()
  }

});
  });

$(document).ready(()=> {
const iPhoneX = window.matchMedia("(max-width: 375px)");
const iPad = window.matchMedia("(max-width: 768px)");
const iPadPro = window.matchMedia("(max-width: 1024px)");
const responsive = (...args) => {
  if (iPhoneX.matches) {
//HOME, READ MORE
$("#about").css("display","none")
$(".home-testimonial-gradient").css("display","none")
$(".home-community-logos > p").css("display","none")
$("section.home-community").css({"height":"700px","background-position":"-266px"})
$(".yellow_border").css({"position":"relative","top":"-8px","height":"8px","width":"100%","background-color":"#c2d500"})
$('#slant-2').css("background","linear-gradient(318deg, rgba(220, 222, 229, 0), rgba(13, 76, 195, 0.94) 48%, rgba(13, 76, 195, 0.94) 62%, #0043c1)")
$(".home-testimonial").css({"height":"373px","background-attachment":"scroll","background-position":"-100px 58px","background-size":"604px","background-repeat":"no-repeat"})
$("#testimonial_quote").css({"position":"relative"})
$(".home_read_mobile").css({"height":"541px","background":"white","position":"relative","top":"45px"})
$(".home_read_text_box").css({"text-align":"center","margin-bottom":"35px","margin-top":"15px"})
$(".home_read_text_box > h5").css({"font-size":"24px","letter-spacing":"1.2px","color":"#002f87"})
$(".home_read_text_p > p").css({"font-size":"10px","letter-spacing":".2px","line-height":"1.4","color":"#494b50","width":"349px","margin-left":"15px","margin-bottom":"21px"})
$(".home_read_text_p > a").css({"font-size":"10px","letter-spacing":"1.2px","line-height":"1","color":"#002f87","border":"2px solid #2e29a5","border-radius":"3px","padding":"3%"})
$("#watch-video").css({"top":"-200px"})


$("body").css({"max-width":"100%","margin":"0","padding":"0","overflow-x":"hidden"})
$("div.landing-page").css("margin-top","-145px");
$(".featured-title").css({"font-size":"50px", "line-height": "1.1" })
$(".home-banner-logo").css({"width": "190px","height":"auto","margin-bottom": "44px","margin-top":"210px"});
$("header").css("margin-top", "60px","overflow","hidden");
$("#work-with-us").css({"border": "2px solid white","margin-top":"-60px"})
$('#bg-vid').css("display","none")
$(".blue-slant").css({"clip-path": "polygon(110% 0, 100% 0, 100% 100%, 0% 100%)","-webkit-clip-path":"polygon(0% 0, 100% 0, 100% 100%, 0% 100%)","-moz-clip-path":"polygon(110% 0, 100% 0, 100% 100%, 0% 100%)", "left":"0"})
$("section.home-banner").css({"background-image": "url('https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')", "background-size": "cover"});   
$("h2.text-yellow").css({"width": "181px","margin-top":"250px"})
$(".home-community-logos > p").css({"margin-top":"20px"})
$(".vh25").css({"position":"relative","left":"10px"})
$(".vh25 > div:nth-child(1)").css({"position": "relative","top":"-205px","left":"-35px"})
$(".vh25 > div:nth-child(1) > img").css("width","88.7px")
$(".vh25 > div:nth-child(2)").css({"position": "relative","top":"-280px","left":"132px"})
$(".vh25 > div:nth-child(2) > img").css("width","126.7px")
$(".vh25 > div:nth-child(3)").css({"position": "relative","top":"-295px","left":"-37px"})
$(".vh25 > div:nth-child(3) > img").css("width","137.7px")
$(".vh25 > div:nth-child(4)").css({"position": "relative","top":"-368px","left":"133px"})
$(".vh25 > div:nth-child(4)> img").css({"width":"108.7px","height":"21.4px"})
$(".vh25 > div:nth-child(5)").css({"position": "relative","top":"-395px","left":"57px"})
$(".vh25 > div:nth-child(5)> img").css({"height":"50.4px","width":"87px"})
$("#testimonial").css({"font-size": "18px","letter-spacing":"2.2px","line-height":"1.44","position":"relative","top":"-180px","left":"-1px","width":"330px"})
$("#quote").css({"font-size": "14px","letter-spacing":".3px","line-height":"1.44","position":"relative","top":"-224px","right":"0px"})
$('.home-featured-properties').css("height","609.2px")
$('.home-feat-swiper-button-next, .home-com-swiper-button-next, .home-feat-swiper-button-prev, .home-com-swiper-button-prev').css({"width": "37.6px","height":"30px"})
$('.home-com-swiper-button-next, .home-com-swiper-button-prev').css({"top": "40%"})
$('.view-property-btn').css({"font-size": "10px","width":"190px","color":"#c2d500"}) 
$('div.property_p > p').css({"font-size": "12px","width":"270px","color":"white"})
$('.feat-loc-slide-info').css({"top": "48%"})
$('.logo_tag > a > h6').css({"font-size": "12px"})
$('.home-investor-links').css({"height": "528px"})
$('.logo_container').css({"position": "relative","top":"30px","left":"3px"})
$(".logo_container > div:nth-child(1)").css({"position": "relative","top":"0","left":"-80px"})
$(".logo_container > div:nth-child(1) > a > h6").text("CORPORATE")
$(".logo_container > div:nth-child(2)").css({"position": "relative","top":"-105px","left":"80px"})
$(".logo_container > div:nth-child(2) > a > h6").text("STOCK")
$(".logo_container > div:nth-child(3)").css({"position": "relative","top":"-60px","left":"-80px"})
$(".logo_container > div:nth-child(3) > a > h6").text("ANNUAL")
$(".logo_container > div:nth-child(4)").css({"position": "relative","top":"-165px","left":"80px"})
$(".logo_container > div:nth-child(4) > a > h6").text("FINANCIAL")
$(".logo_container > div:nth-child(5)").css({"position": "relative","top":"-120px","left":"0"})
$(".home-filters-container").css("display","none")
$('#home_lease').css({"font-size":"40px","margin-bottom":"0"})
$('#home_com').css({"margin-top":"-30px"})
$('.home-com-image').css({"width":"286px","height":"220px","margin-left":"29px","margin-top":"20px"})
//NAVBAR
$("#logo_navbar").css({"width": "30px","margin-bottom":"15px"})
$('#nav_bar_top').css({"position":"fixed","top":"0px","width":"375px","height":"60px","margin-top":"0"})
$('.text-right > li').css({"color":"red","display":"block","margin-bottom":"15px","cursor":"pointer"})
$('.text-right > li > a').css({"display":"none","letter-spaing":"2px","color":"#494b50","font-size":"32px"})
$('.text-right > li:nth-child(1) > a').css({"position":"relative","top":"50px","right":"-280px"})
$('.text-right > li:nth-child(2)').css("width","350px")
$('.text-right > li:nth-child(2) > a').css({"position":"relative","top":"50px","right":"-243px",})
$('.text-right > li:nth-child(3) > a').css({"position":"relative","top":"50px","right":"-274px"})
$('.text-right > li:nth-child(4) > a').css({"position":"relative","top":"50px","right":"-305px"})
$('.text-right > li:nth-child(5) > a').css({"position":"relative","top":"50px","right":"-291px","color":"#002f87"})
$('#backdrop').css({"position":"fixed","top":"408px","right":"-9px","display":"none","clip-path":"polygon(7% 0, 100% 0, 100% 100%, 0 100%)"})
$('.footer-social_two > a').css({"color":"#002f87","margin-right":"15px"})
$('.footer-social_two').css({"position":"fixed","top":"520px","right":"0","display":"none"})
$('.text-right').css({"position":"fixed","top":"30px","right":"200px"})
$('.mobile_menu').css({"position":"fixed","top":"60px","left":"0","background-color":"white","width":"375px","height":"803px","display":"none"}) 



//HAMBURGER MENU
$('.hamburger-menu').css({"position":"fixed","top":"20px","right":"17px","color":"#002f87","font-size":"30px"})
$('.gap').css({"position":"fixed","top":"24px","right":"18px","background-color":"#002f87","height":"19px","width":"26.3px","display":"none"})

$('.hamburger-menu').click(()=>{
//change button color
 $('.gap').toggle()
 $('.mobile_menu').toggle()
 $('.text-right > li > a').toggle()
 $('#backdrop').toggle()
 $('.footer-social_two').toggle()
})

$('.home-about-top').css("height","383px")
$('#invest-h').css({"width": "384px","font-size": "29px","color": "#c2d500","line-height":"1.13","margin-top":"40px"})
$('#invest-p').css({"font-size":"12px","line-height":"1.5","width":"260px","letter-spacing":".2px"})
$('#invest-btn').css({"margin-bottom":"50px", "font-size":"10px","width":"144px","height":"40px","padding":"3.3%"})
$('.home-about').css({"background-size":"cover"})
$('.about-blurb-container').css({"width":"100%"})
$('.text-yellow').css({"font-size":"40px", "line-height":"1.1"})
$(".landing-page #head").css({"font-size":"24px","margin-top":"30px"});
$('div.text-white > p').css({"font-size":"12px", "line-height":"1.5", "width":"350px","letter-spacing":"0.2px"})
$('#text-box').css({"position":"relative","top":"-200px"})
$('#community-btn').css({"width":"190px","height":"14px", "font-size":"8px","position":"relative","left":"50%","transform":"translate(-50%,-50%)", "border":"2px solid #c2d500", "margin-top":"35px","margin-bottom":"30px","padding-bottom":"24.281px"})

// community,featured-properties
$('.page-header').css({"height":"220px"})
$('.featured_props').css({"height":"520px","background-size":"520px","background-size":"cover"})
$('#header_text').css({"font-size":"60px"})
$('#top_community_text_box').css({"position":"relative","top":"20px"})
$('#top_community_text_box h1').css({"font-size":"24px"})
$('#head_1, .acq_head > h2').css({"font-size":"40px","line-height":"1.13","letter-spacing":"2px","width":"300px","position":"relative","top":"-60px"})
$( "#featured-properties-p p:nth-child(2), #communities-story > p" ).css({"position":"relative","top":"-100px","font-size":"12px","left":"0","line-height":"1.5","letter-spacing":".2px","width":"370px"});
$('#intro_section').css("height","350px")
$('#properties-h h6').css({"font-size":"14px","text-align":"center"})
$('#properties-h h3').css({"font-size":"32px","text-align":"center"})
$('#properties-h a').css({"width":"140px","font-size":"10px","position":"relative","left":"90px","border":"2px solid #c2d500"})
$('#properties-p p').css({"text-align":"center","font-size":"12px","width":"312px","line-height":"1.67"})
$('#sub_menu').css({"display":"none"})
$('#tiny_p').css({"height":"60px"})
$('#tiny_p li').css({"padding":"0"})
$('#tiny_p li a').css({"font-size":"10px","margin-right":"5px","top":"3px"})
//COMMUNITY => STORY
$('#communities-story > h2').css({"letter-spacing":"0","font-size":"40px"})
$('#communities-story > p').css("width","331px")
//footer responsive

$('#footer_logo').css({"width":"158px","height":"17px"})
$('.footer-social').css({"margin-bottom":"25px"})
$('#footer_p p').css({"font-size":"10px","margin-bottom":"5px"})
$('#footer_a').css({"position":"relative","left":"20px","margin":"25px 0"})
$('#footer_a li').css({"padding":"1%","margin":"0"})
$('#footer_a li a').css({"font-size":"10px","margin-right":"25px"})

//WHO WE ARE => CAREER
$('.careers-description').css("height","1040px")
$('#who_career_mobile').addClass("careers-description-mobile")
$('#menu_light').css({"height":"60px","width":"414px"})
$('#menu_light').addClass("without-sub-menu-light")
$('#header_two').css({"font-size":"40px","position":"relative","top":"-61px","letter-spacing":"1.13"})
$('#now-hiring-p p').css({"font-size":"12px","line-height":"1.5","position":"relative","top":"-150px","margin-bottom":"30px","width":"360px","letter-spacing":".2px"})

$('#job_titles').css({"position":"relative","top":"-120px"})
$('#job_title > h6').css({"font-size":"12px","letter-spacing":"1.7","width":"177px"})
$('#job_title > h6').addClass("career-item-mobile")
$('.career-item').css({"margin-top":"0"})
$('#who_career_content').css({"position":"relative","top":"-340px"})
$('#who_career_text_box').css({"position":"relative","top":"-340px"})
$('.who_career_loc').css("margin-top","30px")
$('.who_career_loc > img').css({"position":"absolute","top":"30px","width":"11.2px","height":"16px"})
$('.who_career_loc > p').css({"position":"absolute","top":"32px", "left":"30px","font-size":"11px"})
$('#career_img img').css({"width":"121.4px","height":"91.2px","position":"relative","top":"-156px"})
$('h3.text-blue').css({"font-size":"32px","line-height":"1.13","letter-spacing":"1.6px","color":"#002f87","margin-left":"10px"})
$('#career_content p').css({"font-size":"12px","line-height":"1.67","letter-spacing":".2px","color":"#494b50","width":"355px","height":"75px","margin-bottom":"40px","margin-left":"10px"})
$('#item_text p').css({"font-size":"12px","line-height":"1.5","letter-spacing":".2px","color":"#494b50","width":"320px","height":"82px","position":"relative","left":"18px","top":"-30px"})
$('#img_container').css({"position":"relative","top":"-20px","left":"-13px"})
$('#culture_benefit').css({"position":"relative","top":"-20px"})
$('.career_perks').css({"height":"150px"})
$('.career_perks > img').css({"position":"relative","left":"-49px"})
$('.career_perks > h6').css({"position":"relative","left":"-43px"}) 
$('section.careers-description::before').css({"position":"relative","top":"-389px","clip-path":"polygon(0 36%, 100% 0, 100% 100%, 0% 100%)"})

//WHO WE ARE => STORY
$('#who_quote').addClass("dist_quote_mobile")
$('.video-player-overlay').css({"height":"280px"})
$('#who_story_h2').css({"font-size":"40px","line-height":"1.13","letter-spacing":"2px","color":"#002f87","width":"330px","position":"relative","top":"-70px","left":"-2px"})
$('#who_story_p, #who_team_p, .acq > p, .who-culture-content > p, #who_culture_join > p').css({"font-size":"12px","line-height":"1.5","letter-spacing":".2px","color":"#002f87","width":"355px","height":"51px","position":"relative","top":"-100px","left":"-2px","color":"#494b50"})
$('.who-culture-content > p').css("top","20px")
$('#who_story_quote').css({"font-size":"15px","line-height":"1.6","letter-spacing":"2px","color":"#002f87","width":"337px","position":"relative","top":"-100px","left":"24px","color":"#002f87"})
$('#who_story_quote_name').css({"font-size":"11px","color":"#494b50","height":"40px","position":"relative","top":"-95px","right":"0","margin-bottom":"70px"})
$('#who_story_main').css({"height":"100px"})
$('#who_story_img').css({"max-width":"325px","height": "256.8px","position":"relative","top":"-316px"})
$('#who_story_head').css({"position":"relative","top":"-285px","left":"-10px"})
$('#who_story_text_box img').css({"position":"relative","top":"-268px"})
$('#who_story_text_box_2').css({"margin-bottom":"-52px"})
$('#who_story_text_box_2 h6').css({"position":"relative","top":"-307px","left":"60px","font-size":"14px","width":"332px"})
$('#who_story_text_box_2 p').css({"position":"relative","top":"-342px","left":"60px","font-size":"11px","width":"294px","line-height":"1.6"})
$('#who_story_dis').css({"height":"560px"})
$('.dist-item').css({"margin-bottom":"40px"})
$('#who_story_container').css({"right":"0"})
$('#who_story_container > div:nth-child(2)').css({"position":"relative","top":"-25px"})
$('#who_story_container > div:nth-child(3)').css({"position":"relative","top":"60px"})
$('#who_story_container > div:nth-child(4)').css({"position":"relative","top":"75px"})
$('.play-icon > img').css({"width":"82px","height":"82px"})
$('.intro-story').css({"padding-bottom":"120px"})
$('.hero-clip').css({"clip-path":"polygon(0 0, 101% 0, 65% 100%, 0% 100%)"})

//WHO WE ARE => CULTURE
$('#who_culture_section').addClass("culture-description-mobile")
$('#who_culture_bg').css({"width":"800px","background-position":"178px 108px"})
$('#who_culture_section').css("height","300px")
$('.culture-quote').css({"position":"relative","top":"-300px"})
$('.culture-quote > p:nth-child(1)').css({"font-size":"10px","width":"220px","position":"relative","top":"65px","left":"-7px"})
$('.culture-quote > p:nth-child(2)').css({"font-size":"9px","position":"relative","top":"30px","left":"-8px"})
$('#who_culture_join > h2').css({"font-size":"40px","position":"relative","top":"-75px"})
$('#who_culture_join > p').css({"top":"-120px"})
$('#culture_quote_box').addClass("culture-quote-mobile")
$('#who_culture_text_box').css({"margin-top":"-30px"})
$('#who_culture_text_box > div > img').css({"position":"relative","left":"-59px"})
$('#who_culture_text_box > div > h6').css({"position":"relative","left":"-54px"})
$('div.who_culture_benefits > p').css({"font-size":"12px","text-align":"left","margin-left":"9px","margin-top":"-25px","margin-bottom":"20px","width":"350px"})
$('.who_culture_work').css({"bottom":"0","left":"0","height":"300px","background-size":"cover","margin-top":"-141px"})
$('#who_our_team > a').css({"top":"60%","left":"50%","transform":"translate(-50%,-50%)"})
$('#who_our_team > p').css({"position":"relative","top":"20px","letter-spacing":"2px"})
$('.who_culture_work > a').css({"top":"60%","left":"50%","transform":"translate(-50%,-50%)"})
$('.who_culture_work > p').css({"position":"relative","top":"104px","letter-spacing":"2px"})
//CHANGING THE INNER TEXT FOR MOBILE VIEW

// Stuff I mathew have added to experiment with using this method... community stories mobile "john Doe" 
$('.stories-box > #job_story').css("width","69%") 
$('.story-text-box').css({"height":"310px","margin-bottom":"45px"})
$('.com_story_feat_property > .container').css("height","360px") 
$('p.small-p').css("left","55px")
$('h6.text-blue').css("left","55px")
// who we are our team -
$('p#who_team_p').css("width","342px")

$('.who-culture-content > p:nth-child(2)').text("People want to come work for us because they’ve heard it’s actually different here. We take pride in our diverse array of hometowns, resumes, and education histories. We’re 106 people who speak 31 different languages.")
$('.who-culture-content > p:nth-child(2)').css("margin-bottom","50px")
$('.who-culture-content > p:nth-child(3)').text("Our culture doesn’t only serve shareholders or tenants or the community. Our design actually serves all of them at the same time.")
$('.who-culture-content > p:nth-child(3)').css("margin-bottom","30px")
$('.who-culture-content > p:nth-child(4)').text("You might ask, how could putting that much effort in be profitable? And the answer actually lies right within the question. Because we do put in that much effort, we actually get the desired results. Is it easy? No. Would we change it? Never.")

$('.who-culture-content').css({"position":"relative","top":"-365px"})
$('#who_story, #who_team').css({"font-size":"40px","width":"334px","color":"#002f87","top":"-80px"})
$('#who_cornerstone').css({"position":"relative","top":"-110px"})
$('.cornerstone-item > h6').css({"font-size":"14px"})
$('.who_culture_story > p').css({"font-size":"10px","margin-top":"-26px"})
$('.culture-gallery').css({"top":"-420px","left":"8px"})
$('.culture_gallery > img').css({"max-width":"115px","height":"91.2px"}) 
$('.culture-gallery > div:nth-child(2) > img').css("margin-left","-8px")
$('.culture-gallery > div:nth-child(3) > img').css("margin-left","-18px")
$('.culture-join-team').css({"position":"relative","background-color":"white"})
////WHO WE ARE => OUR TEAM
$('#who_team').css({"letter-spacing":"0","width":"337px"})
$('.ctu-ultimate-style-1-tabs').css("background-image","url(./media/bg.png)")
$('.ctu-ultimate-wrapper-1').css("margin-top","-100px")
$('.ctu-ultimate-style-1-tabs > p:nth-child(4)').css("font-size","12px")
//ACQ
$('.acq_p > p').css({"font-size":"12px"})
$('#acq_intro').css('padding-bottom','0')
$('.acq_cri').css('margin-top','-150px')
$('.acq > p').css('margin-bottom','60px')
$('.acq:nth-child(6) > p').css('margin-top','30px')
//CONTACT US
$('#page_content p').css({"margin-top":"-41px","font-size":"12px","width":"341px","line-height":"1.5"})
//$('#page_content p').css({"margin-top":"-41px","font-size":"12px","width":"341px","line-height":"1.5"})

//FOOTER
$('.bg-grey').css("height","346px")
  } else if (iPad.matches) {
$('.hamburger-menu').css({"display":"none"})
$('#slant-2').css({"display":"none"})
$('.footer-social_two').css({"display":"none"})
$(".home_read_mobile").css({"display":"none"})
  } else if (iPadPro.matches) {
$('.hamburger-menu').css({"display":"none"})
$('#slant-2').css({"display":"none"})
$('.footer-social_two').css({"display":"none"})
$(".home_read_mobile").css({"display":"none"})
  } else {
$('.hamburger-menu').css({"display":"none"})
$('#slant-2').css({"display":"none"})
$('.footer-social_two').css({"display":"none"})
$(".home_read_mobile").css({"display":"none"})
}
};

responsive();



})

</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js"></script>