//Maneira convencional
$(document).ready(function() {
    //Armazenando a classe active dentro de váriavel
    var classActive = 'active';

    //Adicionando ao primeiro link e conteudo a classe 'active'
    $('.animais .tab-menu a').first().addClass(classActive);
    $('.animais .item').first().addClass(classActive);

    //Adicionando evento de click aos links
    $('.animais .tab-menu a').click(function(e) {

        //Prevenindo ação
        e.preventDefault();

        //Armazenando valor de href para o link interno
        var itemId = $(this).attr('href');

        //Removendo a classe ativa de todos os links e conteudos
        $('.animais .tab-menu a, .animais .item').removeClass(classActive);

        //Adicionando a classe ativa ao link clicado e ao seu devido conteudo
        $(this).addClass(classActive);
        $(itemId).addClass(classActive);
    });


    $('.florestas .tab-menu a').first().addClass(classActive);
    $('.florestas .item').first().addClass(classActive);

    $('.florestas .tab-menu a').click(function(e) {
        e.preventDefault();
        var itemId = $(this).attr('href');
        $('.florestas .tab-menu a, .florestas .item').removeClass(classActive);
        $(this).addClass(classActive);
        $(itemId).addClass(classActive);
    });
});


//Maneira otimizada

//A cada grupo data-group --- armazenar em variaveis os conteudos (target) e links (clicks)
$('[data-group]').each(function() {
    var $allTarget = $(this).find('[data-target]'),
        $allClick = $(this).find('[data-click]'),
        activeClass = 'active';

    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    $allClick.click(function(e) {
        e.preventDefault();

        var id = $(this).data('click'),
            $target = $('[data-target="' + id + '"]')

        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);

        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    })
});