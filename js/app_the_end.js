
//корзина
/* $("#result").on("click",".tag",function() {
    console.log($(this).text());
  });*/

$("#result").on("click",".add",function() {
//  $('.add').click(function() {
    var caunts=Number($('#cadr_number').html());
    caunts=caunts+1;
    var conut= $('[data-role="container"]').css("height");
    conut=Number(conut.substr( 0,conut.length - 2));
    if (conut+80 > 270 ) {
        conut=230;
    }
    else {
        conut=conut+80;
    };
    $('#cadr_number').html(caunts);
    //var blok= $(this).closest(".panel");
    //console.log();
    $('[data-role="container"]').css({'height': ''+conut+'px'});
    $('#card').append('<a class="list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">\n' +
        '                      <div class="media">\n' +
        '                        <div class="media-left p-r-10">\n' +
        '                         <img class="card-img-top" src="'+$(this).attr('src')+'">\n' +
        '                        </div>\n' +
        '                        <div class="media-body">\n' +
        '                          <h6 class="media-heading">'+$(this).attr('data-name')+'</h6>\n' +
        '                          <time class="media-meta" datetime="2017-06-12T20:50:48+08:00">'+$(this).attr('data-price')+'</time>\n' +
        '                        </div>\n' +
        '                      </div>\n' +
        '                    </a>');
    //console.log(conut);
});

//каталог

//работа с получение категорий

function CategoreShow(e,uid) {

    //console.log($(this).attr('data-name'));
    Animation('#result');
    /*$.ajax({
      type: "POST",
      dataType: 'json',
      data: "primer=" + uid,
     // url: 'lol.php',
      url: 'dev/caregori.php',
      success: function(data) {
        $(".active").text(e);
        $('#result').html(data);
      }
    });*/
    $.ajax({
        type: "POST",
        dataType: "json",
        data: "cat=" + uid,
        // url: 'lol.php',
        url: 'dev/caterori.php',
        success: function(data) {
            Bild_Blok(data,'#result');
        }
    });
    //$.getJSON('dev/caterori.php?cat='+uid, function(data){
    //Bild_Blok(data,"#result");


};
function PageCatalog1(uid) {
    PagePorfile(uid);
    // console.log($(this).attr('data-name'));
    var data= '<div class="page vertical-align text-xs-center layout-full" data-animsition-in="fade-in" data-animsition-out="fade-out">\n' +
        '  <div class="page-content vertical-align-middle">\n' +
        '    <i class="icon wb-tadpole icon-spin page-maintenance-icon" aria-hidden="true" style="font-size: 64px;"></i>\n' +
        '  </div>\n' +
        '</div>\n';
    //  $('#result').html(data);
    /* $.ajax({
       type: "POST",
       data: "primer=" + uid,
       url: 'app/profile.php',
       success: function(data) {
         $(".active").text('Продукты такие');
         $('#result').html(data);
         var arr = ["Яблоко", "Апельсин", "Груша"];


       }
     });*/
};
function PageCatalog(uid) {
    /*  $.ajax({
        //type: "POST",

        data: "uid=" + uid,

        //data: data,
        //url: 'app/json_profile.php',
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
        success: function(data) {
          console.log(data);
        }
      });*/
    //console.log(uid);
    $.ajax({
        type: "POST",
        dataType: "json",
        data: "cat=" + uid,
        // url: 'lol.php',
        url: 'dev/profile.php',
        success: function(data) {
            //console.log(data);
            PageProfiles(data,'#result');
        }
    });
    //$.getJSON('/app/profile.json', function(data){



};
function Animation(id) {
    var data= ' <div class="example-loading example-well h-150 vertical-align text-xs-center">\n' +
        '                  <div class="loader vertical-align-middle loader-grill"></div>\n' +
        '                </div>';
    $(id).html(data);
}
function Bild_Blok(data,id) {
    //alert(typeof data);
    var items = [];
    $.each(data, function(key, val){
        items.push(
            '<div class="col-xxl-3 col-lg-6 col-xs-12" >\n' +
            '    <!-- Example Heading With Desc -->\n' +
            '    <div class="panel">\n' +
            '      <div class="panel-heading">\n' +
            '        <h3 class="panel-title" data-name="Печенье шт"><a href="javascript:PageCatalog(\''+val.id+'\')">'+val.name+'<small></small></a>\n' +
            '        </h3><div class="panel-actions panel-actions-keep">\n' +
            '          <span class="tag tag-primary"></span>\n' +
            '          <span class="tag tag-pill tag-danger"></span>\n' +
            '        </div>\n' +
            '      </div>\n' +
            '      <div class="panel-body">\n' +
            '        <!--<img class="card-img-top" src="https://cdn.retailrocket.net/api/1.0/partner/54f030e51e99470d74ea0931/item/137759/picture/?format=png&width=250&height=250&scale=both">-->\n' +
            '        <img class="card-img-top" src="'+val.img+'">\n' +
            '\n' +
            '        <h6>'+val.about+'</h6>\n' +
            '      </div>\n' +
            '      <div class="panel-footer">\n' +
            '        <div class="row">\n' +
            '          <div class="col-md-6">\n' +
            '            <div class="form-group">\n' +
            '              <button data-price="'+val.price+'" data-name="'+val.name+'" src="'+val.img+'" data-action="6bd356d1-c64b-11de-8a41-001cc07d7dd0" class="add btn btn-outline-success btn-sm btn-block">В корзину</button>\n' +
            '            </div> <!-- form-group// -->\n' +
            '          </div>\n' +
            '          <div class="col-md-6 text-right">\n' +
            '            <button data-action="Печенье шт" class=" info btn btn-outline-info btn-sm btn-block">Подробнее</button>\n' +
            '          </div>\n' +
            '\n' +
            '        </div>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '    <!-- End Example Heading With Desc -->\n' +
            '  </div>');
    });
    $(id).html(items);

}
function PageProfiles(dat,id) {
    var data=dat[0];
    var blok='<div class="row">\n' +
        '  <div class="col-xs-4 item-photo">\n' +
        '    <img style="max-width:100%;" id="img" src="'+data.img+'" />\n' +
        '  </div>\n' +
        '  <div class="col-xs-5" style="border:0px solid gray">\n' +
        '    <!-- Datos del vendedor y titulo del producto -->\n' +
        '    <h3 name="name">'+data.name+'</h3>\n' +
        '    <!-- Precios -->\n' +
        '    <h6 class="title-price"><small data-categoru="categoru-tipe">Свежая родукция</small></h6>\n' +
        '    <h3 style="margin-top:0px;" data-price="price">U$S 399</h3>\n' +
        '\n' +
        '    <!-- Detalles especificos del producto -->\n' +
        '    <div class="section">\n' +
        '      <h6 class="title-attr" style="margin-top:15px;" ><small>COLOR</small></h6>\n' +
        '      <div>\n' +
        '        <div class="attr" style="width:25px;background:#5a5a5a;"></div>\n' +
        '        <div class="attr" style="width:25px;background:white;"></div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '    <div class="section" style="padding-bottom:5px;">\n' +
        '      <h6 class="title-attr"><small>Краткие характеристики</small></h6>\n' +
        '      <div id="characteristics">\n' +
        '        <div class="attr2">16 GB</div>\n' +
        '        <div class="attr2">32 GB</div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '    <div class="section" style="padding-bottom:20px;">\n' +
        '      <h6 class="title-attr"><small>Количество</small></h6>\n' +
        '      <div>\n' +
        '\n' +
        '      </div>\n' +
        '    </div>\n' +
        '\n' +
        '    <!-- Botones de compra -->\n' +
        '    <div class="section" style="padding-bottom:20px;">\n' +
        '      <button class="btn btn-success"><span style="margin-right:20px" class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>В корзину</button>\n' +
        '      <h6><a href="#"><span class="glyphicon glyphicon-heart-empty" style="cursor:pointer;"></span>*****Сравнение ******</a></h6>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '\n' +
        '  <div class="col-xs-9">\n' +
        '    <h6>Описание товаров</h6>\n' +
        '  </div>\n' +
        '</div>';
    $(id).html(blok);
}