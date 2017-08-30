function contentTabs(){
    // Находим все кнопки табов и раздаем первой класс активности

    var tabsButtons = document.getElementsByClassName('tabs_buttons')[0].getElementsByTagName('li');
    tabsButtons[0].className += "active";

    // Находим все контейнеры табов и раздаем первому класс активности

    var tabsContainers = document.getElementsByClassName('tab_box');
    tabsContainers[0].className += " active";

    // Считаем и раскидываем порядковые классы контейнеров

    for (var i = 0; i < tabsContainers.length; i++) {
        tabsContainers[i].setAttribute('data-tab','tab_' + i);  
    } 

    // Считаем и раскидываем порядковые классы кнопок

    for (var i = 0; i < tabsButtons.length; i++) {
        tabsButtons[i].setAttribute('data-tab','tab_' + i); 
        
        // Назначаем события переключения таба
        tabsButtons[i].addEventListener("click", function(e){
            // Узнаем какой таб нам сейчас нужен
            var currentTab = (this.getAttribute('data-tab'));

            // Проходимся по контейнерам и выбираем из них соответствующий
            for (var i = 0; i < tabsContainers.length; i++) {

                // Делаем неактивным класс всех кнопкок
                tabsButtons[i].classList.remove("active");

                // Скрываем ненужные и показываем нужный
                tabsContainers[i].classList.remove("active");
                if(tabsContainers[i].getAttribute('data-tab') == currentTab){
                    tabsContainers[i].className += " active";
                }
            }
            // Добавляем класс активной кнопке
            this.className = ('active');
        });
    } 
}

contentTabs();