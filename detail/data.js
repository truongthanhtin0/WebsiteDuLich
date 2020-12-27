const data = {
  hotel: [
    {
      id: 1,
      place: "Ha_Noi",
      name: "Grand Vista Hanoi Hotel",
      url: "https://statics.vntrip.vn/data-v2/hotels/70518/img_max/70518_1600238873_grand_suite_1-min.jpg",
      address: "28 Thọ Xương, quận Hoàn Kiếm, Hà Nội",
      realPrice: "3.096.417đ",
      discount: "-44%",
      price: "1.733.994đ",
      restaurant: true,
      pool: true,
      parking: true,
      spa: true,
      laundry: false,
      rate: 5,
      point: 9.9,
    },
    {
      id: 1,
      place: "Ha_Noi",
      name: "Bonne Nuit Hotel",
      url: "https://statics.vntrip.vn/data-v2/hotels/45558/img_max/45558_1537409736_3.jpg",
      address: "30 Cửa Đông, Hàng Mã, Hoàn Kiếm, Hà Nội",
      realPrice: "1.663.560đ",
      discount: "-55%",
      price: "648.602đ",
      restaurant: true,
      pool: false,
      parking: false,
      spa: true,
      laundry: true,
      rate: 4,
      point: 8.5,
    },
    {
      id: 1,
      place: "Ha_Noi",
      name: "Khách sạn Tú Linh Palace",
      url: "https://statics.vntrip.vn/data-v2/hotels/96/img_max/BCAAF41D2067495DAB2E_81510060.jpg",
      address: "2B Hàng Gà, Quận Hoàn Kiếm, Hà Nội",
      realPrice: "800.000đ",
      discount: "-50%",
      price: "400.000đ",
      restaurant: true,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 3,
      point: 7.5,
    },
    {
      id: 1,
      place: "Ha_Noi",
      name: "Hotel Bel Ami Hà Nội",
      url: "https://statics.vntrip.vn/data-v2/hotels/11245/img_max/11245_1560842504_img_2651_edit.jpg",
      address: "244 Hàng Bông, Quận Hoàn Kiếm, Hà Nội",
      realPrice: "950.000đ",
      discount: "-65%",
      price: "332.500đ",
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 7.0,
    },
    {
      id: 1,
      place: "Ha_Noi",
      name: "Hanoi Discovery Hotel",
      url: "https://statics.vntrip.vn/data-v2/hotels/445/img_max/D6DDA7E033114FFCBC3D_49105261.jpg",
      address: "22 Lương Ngọc Quyến, Quận Hoàn Kiếm, Hà Nội",
      realPrice: "360.000",
      discount: "-20%",
      price: "280.000đ",
      restaurant: false,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 1,
      point: 6.5,
    }
  ]
};
{/* <i class="fas fa-star list__item--icon-rating list__item--icon-rating-active"></i>
                <i class="fas fa-star list__item--icon-rating list__item--icon-rating-active"></i>
                <i class="fas fa-star list__item--icon-rating list__item--icon-rating-active"></i>
                <i class="fas fa-star list__item--icon-rating list__item--icon-rating-active"></i>
                <i class="fas fa-star list__item--icon-rating"></i> */}
 const renderRate = (rate) => {
   let star ="";
   for(let i = 0; i< rate ; i++){
    star +=`<i class="fas fa-star list__item--icon-rating list__item--icon-rating-active"></i>`
   }
   return star;
 }
const a = document.querySelector(".hotel__list");
console.log(data.hotel);
const renderHotel = () => {
  return data.hotel.map(
    (item, index) =>
      (a.innerHTML += `
      <li class="hotel__list--item">
            <img src=${item.url} class="hotel__list--item-img">
            <div class="list__item--wrapper">
              <h3 class="list__item--wrapper-title">${item.name}</h3>
              <div class="list__item--wrapper-div">
                ${
                  renderRate(item.rate)
                }
              </div>
              <div class="list__item--wrapper-div">
                <i class="fas fa-map-marker-alt list__item--icon-location"></i>
                <p class="list__item__wrapper-p">${item.address}</p>
              </div>
              <div class="list__item--wrapper-div">
                ${item.restaurant ? '<i class="fas fa-utensils list__item--icon-hotel"></i><p class="list__item__wrapper-p">Nhà hàng</p>' : ""}
                ${item.pool ? '<i class="fas fa-swimming-pool list__item--icon-hotel"></i><p class="list__item__wrapper-p">Bể bơi</p>' : ""}
                ${item.parking ? '<img src="../Image/parking.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Chỗ đỗ xe</p>' : ""}
                ${item.laundry ? '<img src="../Image/giatui.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Giặt ủi</p>' : ""}
                ${item.spa ? ' <i class="fas fa-spa list__item--icon-hotel"></i><p class="list__item__wrapper-p">Spa</p>' : ""}
                </div>
              <div class="list__item--wrapper-div">
                <p class="list__item--point">${item.point}</p>
                <p class="list__item--evaluate">${item.point>=9 ? "Tuyệt vời" : item.point>=7.5? "Tốt" :item.point>=5? "Khá" : "Tệ"}</p> 
              </div>
            </div>
            <div class="hotel__list--item-cost">
              <div class="list__item--wrapper-div">
                <p class="hotel__list--item-realprice">${item.realPrice}</p>
                <p class="hotel__list--item-discount">${item.discount}</p>
              </div>
              <p class="hotel__list--item-price">${item.price}</p>
            </div>
          </li>
      `
    )
  );
};

renderHotel();
