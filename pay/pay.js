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

const content__pay1 = document.querySelector(".content__pay1");

content__pay1.innerHTML += `
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

const content__pay2 = document.querySelector(".content__pay2");

content__pay2.innerHTML += `
  <h3 class="content__title--sub">Thông tin khách hàng</h3>
  <div class="content__infor--wrapper">
    <p class="content__pay--p">Người đặt phòng</p>
    <p class="content__pay--p input__hoten">${localStorage.getItem("input__hoten")}</p>
  </div>
  <div class="content__infor--wrapper">
    <p class="content__pay--p">CMND/Căn cước công dân</p>
    <p class="content__pay--p input__cmnd">${localStorage.getItem("input__cmnd")}</p>
  </div>
  <div class="content__infor--wrapper">
    <p class="content__pay--p">Số điện thoại</p>
    <p class="content__pay--p input__sdt">${localStorage.getItem("input__sdt")}</p>
  </div>
  <div class="content__infor--wrapper">
    <p class="content__pay--p">Email</p>
    <p class="content__pay--p input__email">${localStorage.getItem("input__email")}</p>
  </div>
`;

const content__infor__active1 = document.querySelector(".content__infor--active1");
const content__infor__active2 = document.querySelector(".content__infor--active2");

const getDataInput = () => {
  let input__hoten = document.querySelector("#input__Hoten").value;
  localStorage.setItem("input__hoten", input__hoten);
  let input__cmnd = document.querySelector("#input__cmnd").value;
  localStorage.setItem("input__cmnd", input__cmnd);
  let input__sdt = document.querySelector("#input__sdt").value;
  localStorage.setItem("input__sdt", input__sdt);
  let input__email = document.querySelector("#input__email").value;
  localStorage.setItem("input__email", input__email);

  $(".input__hoten").text(`${localStorage.getItem("input__hoten")}`)
  $(".input__cmnd").text(`${localStorage.getItem("input__cmnd")}`)
  $(".input__sdt").text(`${localStorage.getItem("input__sdt")}`)
  $(".input__email").text(`${localStorage.getItem("input__email")}`)

  content__infor__active1.style.display = "none";
  content__infor__active2.style.display = "block";
  content__pay2.style.display = "block";
}

const active3 = document.querySelector(".content__infor--active3");
const dateCome = document.querySelector("#search__datetime--come");
const dateLeave = document.querySelector("#search__datetime--leave");


const getEvaluate = () => {
  let input__hoten = document.querySelector("#input__Hoten").value;
  localStorage.setItem("input__hoten", input__hoten);
  let input__cmnd = document.querySelector("#input__cmnd").value;
  localStorage.setItem("input__cmnd", input__cmnd);
  let input__sdt = document.querySelector("#input__sdt").value;
  localStorage.setItem("input__sdt", input__sdt);
  let input__email = document.querySelector("#input__email").value;
  localStorage.setItem("input__email", input__email);

  $(".input__hoten").text(`${localStorage.getItem("input__hoten")}`)
  $(".input__cmnd").text(`${localStorage.getItem("input__cmnd")}`)
  $(".input__sdt").text(`${localStorage.getItem("input__sdt")}`)
  $(".input__email").text(`${localStorage.getItem("input__email")}`)

  content__pay1.style.display = "none";
  dateCome.style.display = "none";
  dateLeave.style.display = "none";
  content__pay2.style.display = "block";
  active3.style.display = "block";
}

const evaluateBack = document.querySelector(".evaluate__choose--back1");

const getBack1 = () => {
  content__pay1.style.display = "block";
  dateCome.style.display = "block";
  dateLeave.style.display = "block";
  active3.style.display = "none";
  content__pay2.style.display = "none";
}

const payActive2Back = document.querySelector(".evaluate__choose--back2");

const getBack2 = () => {
  content__infor__active1.style.display = "block";
  content__infor__active2.style.display = "none";
  content__pay2.style.display = "none";
}

