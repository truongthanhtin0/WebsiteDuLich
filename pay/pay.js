const x = localStorage.getItem("dataDetail");
const y = JSON.parse(x);

const VAT = (y.price * 5) / 100;
const totalPrice = y.price + VAT;

// render ra số sao
const renderStar = (star) => {
  let sao = "";
  for (let i = 0; i < star; i++) {
    sao += `<i class="fas fa-star pay__icon--star pay__icon--star-active"></i>`;
  }
  return sao;
};

//hiển thị ngày tháng ban đầu
const come = moment().startOf("day").format("L"); 
const leave = moment().add(1, "day").format("L");


//set input date và hiển thị
const handledate = (e, type) => {
  if (type === "come") {
    $(".date-come").text(e.target.value);
  localStorage.setItem("dateCome", e.target.value)
  }else{
    $(".date-leave").text(e.target.value);
      let dateCheckIn = new Date(`${localStorage.getItem("dateCome")}`);
      let dateCheckOut = new Date(`${e.target.value}`);
      let diffTime = Math.abs(dateCheckOut - dateCheckIn);
      const countDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const tempCountDay = countDay == 0 ? 1 : countDay;
      $(".diffDays").text(tempCountDay)
      $(".total-price-hotel").text(`${(y.price * tempCountDay +VAT).toLocaleString()}`)
    }  
};

const a = document.querySelector(".content__pay");

a.innerHTML += `
  <h3 class="content__title--sub">Thông tin đơn đặt phòng</h3>
  <img src=${y.url} alt="" class="content__pay--img">
  <div class="content__infor--div-sub">
    <p class="pay__hotel--title">${y.name}</p>
    <div class="content__infor--div-sub content__infor--div-sub-rate">
      ${renderStar(y.rate)}
    </div>
  </div>
  <div class="content__infor--div-sub">
    <i class="fas fa-map-marker-alt pay__icon--location"></i>
    <p class="content__pay--p">${y.address}</p>
  </div>
  <div class="content__infor--wrapper">
    <p class="content__pay--p">Giá phòng</p>
    <p class="content__pay--p">${y.price.toLocaleString()}đ/1 đêm</p>
  </div>
  <div class="content__infor--wrapper">
    <p class="content__pay--p">Ngày nhận phòng</p>
    <p class="content__pay--p date-come">${come}</p>
  </div>
  <div class="content__infor--wrapper">
    <p class="content__pay--p">Ngày trả phòng</p>
    <p class="content__pay--p date-leave">${leave}</p>
  </div>
  <div class="content__infor--wrapper">
    <p class="content__pay--p">Số đêm</p>
    <p class="content__pay--p diffDays">1</p>
  </div>
  <div class="content__infor--wrapper content__infor--wrapper-active">
    <p class="content__pay--p content__pay--p-price">Giá từ khách sạn</p>
    <p class="content__pay--p content__pay--p-price1">${y.price.toLocaleString()}đ</p>
  </div>
  <div class="content__infor--wrapper">
    <p class="content__pay--p content__pay--p-price">Thuế giá trị gia tăng VAT</p>
    <p class="content__pay--p content__pay--p-price2">${VAT.toLocaleString()}đ</p>
  </div>
  <div class="content__infor--wrapper content__infor--wrapper-active1">
    <p class="content__pay--p content__pay--p-sum">Tổng tiền:</p>
    <p class="content__pay--p content__pay--p-sum1 "><span class="total-price-hotel">${totalPrice.toLocaleString()}</span>đ</p>
  </div>
`;
