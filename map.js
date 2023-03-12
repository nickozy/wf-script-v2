var myMap;
var placemarkCollections = {};
var placemarkList = {};
const collectionItems = [...document.querySelectorAll(".collection-item")];

const shopList = collectionItems.reduce((acc, item) => {
  const city = item.dataset.city; // Получить имя города из атрибута data-city элемента коллекции
  const name = item.innerText; // Получить имя магазина из текста элемента коллекции
  const coordinates = [
    parseFloat(item.dataset.latitude),
    parseFloat(item.dataset.longitude),
  ]; // Получить координаты магазина для данного города и имени

  // Найти объект города в массиве acc
  const cityObj = acc.find((cityObj) => cityObj.cityName === city);

  // Если город уже есть в массиве acc, добавить новый магазин в его список магазинов
  if (cityObj) {
    cityObj.shops.push({ coordinates, name });
  }
  // Иначе создать новый объект города с единственным магазином и добавить его в массив acc
  else {
    acc.push({
      cityName: city,
      shops: [{ coordinates, name }],
    });
  }

  return acc;
}, []);

console.log(shopList); // Вывести список магазинов в консоль

// Список городов и магазинов в них
// var shopList = [
//   {
//     cityName: "Москва",
//     shops: [
//       {
//         coordinates: [55.72532368326033, 37.748675112058876],
//         name: "Рязанский проспект, 6Ас21",
//       },
//       {
//         coordinates: [55.701677873469, 37.57358050756649],
//         name: "Ленинский проспект, 47с2",
//       },
//     ],
//   },
//   {
//     cityName: "Санкт-Петербург",
//     shops: [
//       {
//         coordinates: [59.863210042666125, 30.37903938671841],
//         name: "Будапештская улица, 36к2",
//       },
//       {
//         coordinates: [59.99486277158917, 30.406505207030918],
//         name: "проспект Непокорённых",
//       },
//     ],
//   },
// ];

ymaps.ready(init);

function init() {
  // Создаем карту
  myMap = new ymaps.Map("map", {
    center: [56, 37],
    zoom: 8,
    controls: ["zoomControl"],
    zoomMargin: [20],
  });

  for (var i = 0; i < shopList.length; i++) {
    // Добавляем название города в выпадающий список
    // $("select#cities").append(
    //   '<option value="' + i + '">' + shopList[i].cityName + "</option>"
    // );

    // Создаём коллекцию меток для города
    var cityCollection = new ymaps.GeoObjectCollection();

    for (var c = 0; c < shopList[i].shops.length; c++) {
      var shopInfo = shopList[i].shops[c];

      var shopPlacemark = new ymaps.Placemark(shopInfo.coordinates, {
        hintContent: shopInfo.name,
        balloonContent: shopInfo.name,
      });

      if (!placemarkList[i]) placemarkList[i] = {};
      placemarkList[i][c] = shopPlacemark;

      // Добавляем метку в коллекцию
      cityCollection.add(shopPlacemark);
    }

    placemarkCollections[i] = cityCollection;

    // Добавляем коллекцию на карту
    myMap.geoObjects.add(cityCollection);
  }

  $("select#cities").trigger("change");
}

// Переключение города
$(document).on("change", $("select#city"), function () {
  var cityId = $("select#cities").val();

  // Масштабируем и выравниваем карту так, чтобы были видны метки для выбранного города
  myMap
    .setBounds(placemarkCollections[cityId].getBounds(), {
      checkZoomRange: true,
    })
    .then(function () {
      if (myMap.getZoom() > 15) myMap.setZoom(15); // Если значение zoom превышает 15, то устанавливаем 15.
    });

  $("#shops").html("");
  for (var c = 0; c < shopList[cityId].shops.length; c++) {
    $("#shops").append(
      '<li value="' +
        shopList[cityId] +
        '">' +
        shopList[cityId].shops[c].name +
        "</li>"
    );
  }
});

// Клик на адрес
$(document).on("click", "#shops li", function () {
  var cityId = $("select#cities").val();
  var shopId = $(this).val();

  placemarkList[cityId][shopId].events.fire("click");
});

//
//
//
//
//
//
//
//
//
//
//

$(".open-map").click(function () {
  //Забираем координаты из кнопки
  var loc = $(this).attr("data-coord");
  loc = JSON.parse(loc);
  //Увеличиваем карту до нужного размера
  myMap.setZoom(16, { smooth: true, centering: true });
  //Перемещаем карту к нужной метке
  myMap.panTo(loc);
  placemarkList[cityId][shopId].events.fire("click");
});

//
//
//
//
//
//
