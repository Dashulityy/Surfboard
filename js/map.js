
    let myMap;
    ymaps.ready(init);
    function init(){
        // Создание карты.
        myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            center: [55.751636, 37.578207],
            zoom: 16,
            controls: []
        });
        const coords = [
            55.752004, 37.576133
          ];
          
          const myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: './img/marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-35, -52]
          });
          
            myCollection.add(new ymaps.Placemark(coords));
          
          myMap.geoObjects.add(myCollection);
          myMap.behaviors.disable('scrollZoom');
    }