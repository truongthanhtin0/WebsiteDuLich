const data = {
  hotel: [
    {
      id: 1,
      place: "Ha_Noi",
      name: "Grand Vista Hanoi Hotel",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/70518/img_max/70518_1600238873_grand_suite_1-min.jpg",
      address: "28 Thọ Xương, quận Hoàn Kiếm, Hà Nội",
      realPrice: 3096417,
      discount: "-44%",
      price: 1733994,
      restaurant: true,
      pool: true,
      parking: true,
      spa: true,
      laundry: false,
      rate: 5,
      point: 9.9,
    },
    {
      id: 2,
      place: "Ha_Noi",
      name: "Bonne Nuit Hotel",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/45558/img_max/45558_1537409736_3.jpg",
      address: "30 Cửa Đông, Hàng Mã, Hoàn Kiếm, Hà Nội",
      realPrice: 1663560,
      discount: "-55%",
      price: 648602,
      restaurant: true,
      pool: false,
      parking: false,
      spa: true,
      laundry: true,
      rate: 4,
      point: 8.5,
    },
    {
      id: 3,
      place: "Ha_Noi",
      name: "Khách sạn Tú Linh Palace",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/96/img_max/BCAAF41D2067495DAB2E_81510060.jpg",
      address: "2B Hàng Gà, Quận Hoàn Kiếm, Hà Nội",
      realPrice: 800000,
      discount: "-50%",
      price: 400000,
      restaurant: true,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 3,
      point: 7.5,
    },
    {
      id: 4,
      place: "Ha_Noi",
      name: "Hotel Bel Ami Hà Nội",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/11245/img_max/11245_1560842504_img_2651_edit.jpg",
      address: "244 Hàng Bông, Quận Hoàn Kiếm, Hà Nội",
      realPrice: 950000,
      discount: "-65%",
      price: 332500,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 7.0,
    },
    {
      id: 5,
      place: "Ha_Noi",
      name: "Hanoi Discovery Hotel",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/445/img_max/D6DDA7E033114FFCBC3D_49105261.jpg",
      address: "22 Lương Ngọc Quyến, Quận Hoàn Kiếm, Hà Nội",
      realPrice: 360000,
      discount: "-20%",
      price: 280000,
      restaurant: false,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 1,
      point: 6.5,
    },
    {
      id: 6,
      place: "Da_Nang",
      name: "Khách Sạn Mường Thanh Luxury Sông Hàn",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/759/img_max/759_1604473434__i5a0868-edit.jpg",
      address: "115 Nguyễn Văn Linh, Phường Nam Dương, Quận Thanh Khê, Đà Nẵng",
      realPrice: 3350000,
      discount: "-71%",
      price: 971500,
      restaurant: true,
      pool: true,
      parking: true,
      spa: true,
      laundry: false,
      rate: 5,
      point: 9.5,
    },
    {
      id: 7,
      place: "Da_Nang",
      name: "KHÁCH SẠN DANA MARINA ĐÀ NẴNG",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/9636/img_max/9636_1516353509__duy3088_(copy).jpg",
      address: "47 - 49 Võ Văn Kiệt, Phước Mỹ, Quận Sơn Trà, Đà Nẵng",
      realPrice: 3003650,
      discount: "-85%",
      price: 450547,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 4,
      point: 9.2,
    },
    {
      id: 8,
      place: "Da_Nang",
      name: "Khách sạn Hoàng Sa Đà Nẵng",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/458/img_max/458_1522031263_dieu0349.jpg",
      address: "54–56 Dương Đình Nghệ, Phường Phước Mỹ, Quận Sơn Trà, Đà Nẵng",
      realPrice: 810000,
      discount: "-50%",
      price: 405000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 3,
      point: 7,
    },
    {
      id: 9,
      place: "Da_Nang",
      name: "Khách sạn Nirvana",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/8258/img_max/8258_1549103778_m4310660-compressed.jpg",
      address: "31 Hà Bổng, Phường Phước Mỹ, Quận Sơn Trà, Đà Nẵng",
      realPrice: "",
      discount: "",
      price: 300000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: true,
      laundry: false,
      rate: 2,
      point: 8.8,
    },
    {
      id: 10,
      place: "Da_Nang",
      name: "Khách sạn Hà Nội Blue Đà Nẵng",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/5795/img_max/5795_1505375471_blue_hotel_(3).jpg",
      address: "28 Nguyễn Văn Thoại , Quận Sơn Trà, Đà Nẵng",
      realPrice: 550000,
      discount: "-55%",
      price: 247500,
      restaurant: false,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 1,
      point: 6.9,
    },
    {
      id: 11,
      place: "Hoi_An",
      name: "Khách sạn TUI Blue Nam Hội An",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/614623/img_max/614623_1583832833_deluxe_grdande_-_king.jpg",
      address:
        "Thôn Bình Phú, Xã Tam Tiến, Huyện Núi Thành, Tỉnh Quảng Nam, Việt Nam",
      realPrice: "",
      discount: "",
      price: 2995000,
      restaurant: true,
      pool: true,
      parking: false,
      spa: true,
      laundry: true,
      rate: 5,
      point: 9,
    },
    {
      id: 12,
      place: "Hoi_An",
      name: "River Beach Resort & Residences",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/761/img_max/761_1531121007_dbl_s.dlx.jpg",
      address: "5 Cửa Đại, Thành phố Hội An, Quảng Nam",
      realPrice: 2000000,
      discount: "-64%",
      price: 720000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 4,
      point: 8.2,
    },
    {
      id: 13,
      place: "Hoi_An",
      name: "Crony Villa",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/71756/img_max/71756_1573008871_dsc_8403.jpg",
      address: "500 Trần Nhân Tông, Cẩm Thanh, Hội An, Quảng Nam, Việt Nam",
      realPrice: 560000,
      discount: "-45%",
      price: 308000,
      restaurant: true,
      pool: true,
      parking: false,
      spa: false,
      laundry: false,
      rate: 3,
      point: 9.6,
    },
    {
      id: 14,
      place: "Hoi_An",
      name: "Khách sạn Vĩnh Huy",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/954/img_max/9A27068C651A41A99E2F_25320582.jpg",
      address: "203 Lý Thường Kiệt, Cẩm Phô, Thành phố Hội An, Quảng Nam",
      realPrice: "",
      discount: "",
      price: 299000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: true,
      laundry: false,
      rate: 2,
      point: 6.4,
    },
    {
      id: 15,
      place: "Hoi_An",
      name: "Riverside Pottery Village Homestay",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/6235/img_max/1E58022065C3474CA238_60620169.jpg",
      address: "422 Hùng Vương, Phường Thanh Hà, Thành phố Hội An, Quảng Nam",
      realPrice: 350000,
      discount: "-10%",
      price: 315000,
      restaurant: false,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 1,
      point: 8.1,
    },
    {
      id: 16,
      place: "Nha_Trang",
      name: "Khách sạn Queen Ann Nha Trang",
      url:
        "https://i.vntrip.vn/275x140/smart/https://statics.vntrip.vn/data-v2/hotels/10938/img_max/10938_1545705683_1.jpg",
      address: "100 Trần Phú, Phường Lộc Thọ, Thành phố Nha Trang, Khánh Hòa.",
      realPrice: 3320000,
      discount: "-69%",
      price: 992000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 5,
      point: 8.8,
    },
    {
      id: 17,
      place: "Nha_Trang",
      name: "Khách sạn Crown Nha Trang",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/12428/img_max/12428_1555146001__n5_0759.jpg",
      address:
        "19 Dã Tượng, Vĩnh Nguyên, Thành phố Nha Trang, Khánh Hòa, Việt Nam",
      realPrice: 1100000,
      discount: "-62%",
      price: 407000,
      restaurant: true,
      pool: false,
      parking: false,
      spa: true,
      laundry: true,
      rate: 4,
      point: 7.7,
    },
    {
      id: 18,
      place: "Nha_Trang",
      name: "Khách sạn New Sun",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/7499/img_max/7499_1537410287_41934103_2047040192274202_4045479693816692736_n.jpg",
      address:
        "2/3 Hùng Vương, phường Lộc Thọ, Thành phố Nha Trang, Khánh Hòa, Việt Nam",
      realPrice: 1080000,
      discount: "-53%",
      price: 507000,
      restaurant: true,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 3,
      point: 8.9,
    },
    {
      id: 19,
      place: "Nha_Trang",
      name: "Khách sạn Little Nha Trang",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/3302/img_max/3302_1509505644_f2.png",
      address: "26B Nguyễn Thiện Thuật , Thành Phố Nha Trang, Khánh Hòa",
      realPrice: "",
      discount: "",
      price: 220000,
      restaurant: false,
      pool: false,
      parking: false,
      spa: true,
      laundry: true,
      rate: 2,
      point: 7.9,
    },
    {
      id: 20,
      place: "Nha_Trang",
      name: "Khách sạn Queen 1 Nha Trang",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/11797/img_max/1515727664_36834979.jpg",
      address:
        "96B1/13 Trần Phú, phường Lộc Thọ, Thành Phố Nha Trang, Tỉnh Khánh Hòa",
      realPrice: "",
      discount: "",
      price: 240000,
      restaurant: false,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 1,
      point: 7.2,
    },
    {
      id: 21,
      place: "HCM",
      name: "Khách sạn Mường Thanh Luxury Sài Gòn",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/616810/img_max/616810_1597742208_257128510.jpg",
      address:
        "261C Nguyễn Văn Trỗi, Phường 10, Phú Nhuận, Thành phố Hồ Chí Minh, Vietnam",
      realPrice: 3200000,
      discount: "-50%",
      price: 1600000,
      restaurant: true,
      pool: true,
      parking: true,
      spa: true,
      laundry: false,
      rate: 5,
      point: 9.2,
    },
    {
      id: 22,
      place: "HCM",
      name: "Khách sạn The Odys Boutique",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/616573/img_max/616573_1591258017_pre6.jpg",
      address:
        "65-67-69 Nguyễn Thái Bình, Phường Nguyễn Thái Bình, Quận 1, Hồ Chí Minh, Việt Nam",
      realPrice: 2079000,
      discount: "-52%",
      price: 997000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 4,
      point: 8.8,
    },
    {
      id: 23,
      place: "HCM",
      name: "Khách sạn Aluna Bến Thành",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/56527/img_max/56527_1548837997_2_(7)_hung_hung_hung.jpg",
      address:
        "48 Nguyễn An Ninh, Phường Bến Thành, Quận 1, Hồ Chí Minh, Việt Nam",
      realPrice: 1100000,
      discount: "-62%",
      price: 407000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 3,
      point: 8.0,
    },
    {
      id: 24,
      place: "HCM",
      name: "New Star Inn Boutique Hotel",
      url:
        "https://i.vntrip.vn/275x140/smart/https://statics.vntrip.vn/data-v2/hotels/2432/img_max/C4A344DCD99F4B6BABAD_107389006.jpg",
      address: "214 Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh",
      realPrice: 700000,
      discount: "-47%",
      price: 371000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 6.7,
    },
    {
      id: 25,
      place: "HCM",
      name: "Meraki Boutique hotel",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/63151/img_max/63151_1555559446_1274981_16100817270047555455.jpg",
      address:
        "178 Bùi Viện, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh, Việt Nam",
      realPrice: "",
      discount: "",
      price: 289000,
      restaurant: false,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 1,
      point: 7.4,
    },
    {
      id: 26,
      place: "Sa_Pa",
      name: "Silk Path Grand Resort & Spa Sapa",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/616810/img_max/616810_1597742208_257128510.jpg",
      address: "Doi Quan 6, Group 10, Sapa, Lao Cai, Sa Pa, Việt Nam",
      realPrice: 5699000,
      discount: "-40%",
      price: 3419000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 5,
      point: 8.9,
    },
    {
      id: 27,
      place: "Sa_Pa",
      name: "Sapa Jade Hill Resort & Spa",
      url:
        "https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/7807/img_max/7807_1582774862_nest_villa___nest_castle.jpg",
      address: "TL152, Huyện Sa Pa, Lào Cai",
      realPrice: 2380000,
      discount: "-20%",
      price: 1904000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 4,
      point: 9.5,
    },
    {
      id: 28,
      place: "Sa_Pa",
      name: "LACASA SAPA HOTEL",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/11914/img_max/11914_1529915608_img_4469'cprs.jpg",
      address: "08B, Đường Thác Bạc, TT. Sa Pa, Sa Pa, Lào Cai, Việt Nam",
      realPrice: 1388000,
      discount: "-50%",
      price: 694000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 3,
      point: 8.8,
    },
    {
      id: 29,
      place: "Sa_Pa",
      name: "Hometravel Sapa",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/28797/img_max/1534225559_2.jpg",
      address: "242 Thạch Sơn, tt. Sa Pa, Sa Pa, Lào Cai, Việt Nam",
      realPrice: "",
      discount: "",
      price: 360000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 7.2,
    },
    {
      id: 30,
      place: "Sa_Pa",
      name: "Lotus Hotel",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/2996/img_max/003F100C54F34A52B390_15731305.jpg",
      address: "05 Mường Hoa, Cầu Mây, Huyện Sa Pa, Lào Cai",
      realPrice: "",
      discount: "",
      price: 250000,
      restaurant: false,
      pool: false,
      parking: false,
      spa: false,
      laundry: true,
      rate: 1,
      point: 8.1,
    },
    {
      id: 31,
      place: "Phu_Quoc",
      name: "Khu nghỉ dưỡng Thiên Thanh",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/3641/img_max/3641_1519894591_104_(copy).jpg",
      address: "78 Trần Hưng Đạo, Huyện Phú Quốc, tỉnh Kiên Giang",
      realPrice: 4000000,
      discount: "-10%",
      price: 3600000,
      restaurant: true,
      pool: true,
      parking: false,
      spa: true,
      laundry: true,
      rate: 5,
      point: 9.0,
    },
    {
      id: 32,
      place: "Phu_Quoc",
      name: "Khu nghỉ dưỡng Elwood Premier Phú Quốc",
      url:
        "https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/71942/img_max/71942_1569386372_swimming_pool.jpg",
      address: "Tổ 5, Ấp Ông Lang, xã Cửa Dương, H. Phú Quôc, tỉnh Kiên Giang",
      realPrice: 1750000,
      discount: "-65%",
      price: 612000,
      restaurant: true,
      pool: true,
      parking: false,
      spa: true,
      laundry: true,
      rate: 4,
      point: 9.6,
    },
    {
      id: 33,
      place: "Phu_Quoc",
      name: "Hạnh Ngọc Resort",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/6916/img_max/6916_1598860251_z2051986808427_33ddc022019611e910fde8c831b9defa.jpg",
      address: "155 Trần Hưng Đạo, Dương Đông, Huyện Phú Quốc, Kiên Giang",
      realPrice: 400000,
      discount: "-15%",
      price: 340000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 3,
      point: 7.9,
    },
    {
      id: 34,
      place: "Phu_Quoc",
      name: "Phú Quốc Villa",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/7559/img_max/7559_1562982386_2_phong_ngu_(1).jpg",
      address: "Hẻm Chùa Ông, Cửa Lấp, Dương Đông, Huyện Phú Quốc, Kiên Giang",
      realPrice: "",
      discount: "",
      price: 700000,
      restaurant: false,
      pool: true,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 9,
    },
    {
      id: 35,
      place: "Phu_Quoc",
      name: "Ý Nghĩa Bungalow",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/52256/img_max/52256_1541660230_img_9948.jpg",
      address: "Tổ 3 ấp Ông Lang, Xã Cửa Cạn, Huyện Phú Quốc, Việt Nam",
      realPrice: "",
      discount: "",
      price: 450000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 1,
      point: 6.5,
    },
    {
      id: 36,
      place: "Da_Lat",
      name: "Ladalat Hotel",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/11352/img_max/11352_1578295411_ladalat_hotel_(50).jpg",
      address: "106 Mai Anh Đào, Phường 8, Thành phố Đà Lạt, Lâm Đồng, Vietnam",
      realPrice: 1599000,
      discount: "-45%",
      price: 874500,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 5,
      point: 8.0,
    },
    {
      id: 37,
      place: "Da_Lat",
      name: "Kings Hotel Dalat",
      url:
        "https://statics.vntrip.vn/data-v2/hotels/6353/img_max/6353_1583915430_sup_twn_-_4.jpg",
      address: "10 Bùi Thị Xuân, Phường 2, Thành phố Đà Lạt, Lâm Đồng",
      realPrice: 1640000,
      discount: "-54%",
      price: 754500,
      restaurant: true,
      pool: false,
      parking: false,
      spa: true,
      laundry: true,
      rate: 4,
      point: 7.6,
    },
    {
      id: 38,
      place: "Da_Lat",
      name: "Khách sạn Golden Bee",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/11689/img_max/11689_1543460261__d7a7856-hdr.jpg",
      address:
        "17 Lê Hồng Phong, Phường 4, Thành phố Đà Lạt, Lâm Đồng, Vietnam",
      realPrice: 1350000,
      discount: "-55%",
      price: 607000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 3,
      point: 8.9,
    },
    {
      id: 39,
      place: "Da_Lat",
      name: "Khách Sạn Uyên Phương",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/11650/img_max/11650_1519780101_3c9c8326.jpg",
      address:
        "H4, Nguyễn Thị Nghĩa, Phường 2, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Đà Lạt, Việt Nam",
      realPrice: 550000,
      discount: "-40%",
      price: 330000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 8.0,
    },
    {
      id: 40,
      place: "Da_Lat",
      name: "Khách sạn Ngọc Châu",
      url:
        "https://i.vntrip.vn/275x140/smart/https://statics.vntrip.vn/data-v2/hotels/8994/img_max/8994_1539619227_2.jpg",
      address: "23 Nam Kỳ Khởi Nghĩa, Phường 1, Tp. Đà Lạt, Lâm Đồng",
      realPrice: "",
      discount: "",
      price: 190000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 1,
      point: 8.2,
    },
    {
      id: 41,
      place: "Bang_Coc",
      name: "Amari Watergate Bangkok",
      url:
        "https://i.travelapi.com/hotels/1000000/530000/527300/527254/ccc503d5_b.jpg",
      address: "847 Petchburi Road, Bangkok",
      realPrice: 2301652,
      discount: "-40%",
      price: 1624428,
      restaurant: true,
      pool: true,
      parking: true,
      spa: true,
      laundry: false,
      rate: 5,
      point: 9.0,
    },
    {
      id: 42,
      place: "Bang_Coc",
      name: "Ambassador Bangkok Hotel",
      url:
        "https://i.travelapi.com/hotels/2000000/1180000/1177700/1177622/56044ebb_b.jpg",
      address: "171 Soi 11 Sukhumvit Road, Bangkok",
      realPrice: "",
      discount: "",
      price: 994500,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 4,
      point: 8.8,
    },
    {
      id: 43,
      place: "Bang_Coc",
      name: "The Iconic Don Mueang By Andacura",
      url:
        "https://i.travelapi.com/hotels/43000000/42270000/42267800/42267764/f2684650_b.jpg",
      address: "58 Soi Chang Akat Uthit 3, Bangkok",
      realPrice: 1727000,
      discount: "-55%",
      price: 914000,
      restaurant: true,
      pool: true,
      parking: true,
      spa: true,
      laundry: false,
      rate: 3,
      point: 9.7,
    },
    {
      id: 44,
      place: "Bang_Coc",
      name: "OYO 618 At Khaosan Hostel - Adults Only",
      url:
        "https://i.travelapi.com/hotels/25000000/24410000/24404800/24404749/135814a0_b.jpg",
      address: "365/29 Thanon Phra Sumen, Bangkok",
      realPrice: 1039000,
      discount: "-48%",
      price: 582000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 7.7,
    },
    {
      id: 45,
      place: "Bang_Coc",
      name: "Terrace House 39",
      url:
        "https://i.travelapi.com/hotels/33000000/32430000/32420300/32420276/6e9b94f5_b.jpg",
      address: "51/10 Soi sukhumvit 39,Klong Tun Hue, Wattana, Bangkok",
      realPrice: 988000,
      discount: "-10%",
      price: 1044000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 8.2,
    },
    {
      id: 46,
      place: "Seoul",
      name: "Lotte Hotel Seoul",
      url:
        "https://i.travelapi.com/hotels/1000000/450000/445300/445260/1efd0536_b.jpg",
      address: "30, Eulji-ro, Jung-gu, Seoul",
      realPrice: "",
      discount: "",
      price: 4844422,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 5,
      point: 9.2,
    },
    {
      id: 47,
      place: "Seoul",
      name: "Hotel PJ Myeongdong",
      url:
        "https://i.travelapi.com/hotels/1000000/980000/975000/974958/e572aebd_b.jpg",
      address: "71, Mareunnae-ro, Jung-gu, Seoul",
      realPrice: 3026678,
      discount: "-58%",
      price: 1398325,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 4,
      point: 8.8,
    },
    {
      id: 48,
      place: "Seoul",
      name: "Noble Hotel",
      url:
        "https://i.travelapi.com/hotels/6000000/5970000/5963100/5963031/268418db_b.jpg",
      address: "19, Unni-dong, Jongro-ku, Seoul",
      realPrice: "",
      discount: "",
      price: 1475000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 3,
      point: 8.3,
    },
    {
      id: 49,
      place: "Seoul",
      name: "YaKorea Hostel Itaewon",
      url:
        "https://i.travelapi.com/hotels/6000000/5530000/5521600/5521588/01ccf4d8_z.jpg",
      address: "16-13, Hangang-daero 62na-gil,Yongsan-gu, Seoul",
      realPrice: 747314,
      discount: "-48%",
      price: 427463,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 6.5,
    },
    {
      id: 50,
      place: "Seoul",
      name: "Cocoa Guesthouse",
      url:
        "https://i.travelapi.com/hotels/11000000/10470000/10465900/10465864/aeb736c7_b.jpg",
      address: "19-9, Wausan-ro 17-gil, Mapo-gu, Seoul",
      realPrice: 770767,
      discount: "-46%",
      price: 503619,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 8.2,
    },
    {
      id: 51,
      place: "Singapore",
      name: "Pan Pacific Singapore",
      url:
        "https://i.travelapi.com/hotels/1000000/10000/6600/6594/3a31eabc_b.jpg",
      address: "7 Raffles Boulevard,Marina Square, Singapore",
      realPrice: "",
      discount: "",
      price: 6440410,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 5,
      point: 9.3,
    },
    {
      id: 52,
      place: "Singapore",
      name: "Village Hotel Bugis by Far East Hospitality (SG Clean)",
      url:
        "https://i.travelapi.com/hotels/1000000/900000/892800/892751/d12f0920_b.jpg",
      address: "390 Victoria Street, Singapore",
      realPrice: 4174235,
      discount: "-10%",
      price: 3625000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 4,
      point: 8.5,
    },
    {
      id: 53,
      place: "Singapore",
      name: "Porcelain Hotel (SG Clean)",
      url:
        "https://i.travelapi.com/hotels/5000000/4130000/4129000/4128991/d970f8d2_b.jpg",
      address: "48 Mosque Street, Singapore",
      realPrice: 2065377,
      discount: "-5%",
      price: 1910000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 3,
      point: 8.1,
    },
    {
      id: 54,
      place: "Singapore",
      name: "Arianna Hotel",
      url:
        "https://i.travelapi.com/hotels/4000000/3090000/3089700/3089603/dd473e20_b.jpg",
      address: "83 Syed Alwi Road, Singapore",
      realPrice: "",
      discount: "",
      price: 1023557,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 7.9,
    },
    {
      id: 55,
      place: "Singapore",
      name: "Backpackers' Inn Chinatown",
      url:
        "https://i.travelapi.com/hotels/9000000/8310000/8301100/8301035/11e147c2_b.jpg",
      address: "27 Mosque Street, Singapore",
      realPrice: "",
      discount: "",
      price: 805000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 8.8,
    },
    {
      id: 56,
      place: "Kuala_Lumpur",
      name: "Traders Hotel Kuala Lumpur",
      url:
        "https://i.travelapi.com/hotels/2000000/1470000/1468700/1468622/ffc1e15b_b.jpg",
      address: "Kuala Lumpur City Centre, Kuala Lumpur",
      realPrice: 2227870,
      discount: "-30%",
      price: 1715460,
      restaurant: true,
      pool: true,
      parking: true,
      spa: true,
      laundry: false,
      rate: 5,
      point: 8.9,
    },
    {
      id: 57,
      place: "Kuala_Lumpur",
      name: "Corus Hotel Kuala Lumpur",
      url:
        "https://i.travelapi.com/hotels/1000000/30000/21500/21466/8b2ebc2f_b.jpg",
      address: "Jalan Ampang, Kuala Lumpur",
      realPrice: 1412497,
      discount: "-10%",
      price: 1310000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 4,
      point: 8.2,
    },
    {
      id: 58,
      place: "Kuala_Lumpur",
      name: "MoMo's Kuala Lumpur",
      url:
        "https://i.travelapi.com/hotels/40000000/39820000/39810700/39810602/6d3591ce_b.jpg",
      address: "316 Jalan Tuanku Abdul Rahman, Kuala Lumpur",
      realPrice: "",
      discount: "",
      price: 610500,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 3,
      point: 7.9,
    },
    {
      id: 59,
      place: "Kuala_Lumpur",
      name: "My Hotel @ KL Sentral",
      url:
        "https://i.travelapi.com/hotels/9000000/8660000/8657300/8657231/e991eb8b_b.jpg",
      address: "No. 51 & 53, Jalan Thambypillai,BrickFields, Kuala Lumpur",
      realPrice: 1200000,
      discount: "40%",
      price: 720000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 7.7,
    },
    {
      id: 60,
      place: "Kuala_Lumpur",
      name: "Victory Exclusive Hotel",
      url:
        "https://i.travelapi.com/hotels/7000000/6950000/6946000/6945951/2ec3d362_b.jpg",
      address:
        "B7-B8, B, Farenheit 88, 179,Jalan Bukit Bintang, Bukit Bintang, Kuala Lumpur",
      realPrice: "",
      discount: "",
      price: 505000,
      restaurant: false,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 2,
      point: 8.3,
    },
    {
      id: 61,
      place: "Lotte_Hotel_SG",
      name: "Lotte Hotel Sài Gòn",
      url: "http://127.0.0.1:5500/Image/ks1.jpg",
      address:
        "2A-4A Đ. Tôn Đức Thắng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
      realPrice: 2905027,
      discount: "30%",
      price: 2022303,
      restaurant: true,
      pool: true,
      parking: true,
      spa: false,
      laundry: true,
      rate: 5,
      point: 9,
    },
    {
      id: 62,
      place: "Sun_River_DN",
      name: "Sun River Hotel",
      url: "http://127.0.0.1:5500/Image/ks3.jpg",
      address: "134-136 Bạch Đằng, Hải Châu 1, Hải Châu, Đà Nẵng 550000",
      realPrice: "",
      discount: "",
      price: 949000,
      restaurant: true,
      pool: false,
      parking: true,
      spa: false,
      laundry: true,
      rate: 4,
      point: 8.9,
    },
    {
      id: 63,
      place: "The_Oriental_Jade",
      name: "Khách sạn The Oriental Jade",
      url: "http://127.0.0.1:5500/Image/ks2.jpg",
      address: "94 Hàng Trống, Hoàn Kiếm, Hà Nội",
      realPrice: 1606845,
      discount: "36%",
      price: 1036258,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 5,
      point: 9,
    },
    {
      id: 64,
      place: "Elwood_PQ",
      name: "Khu nghỉ dưỡng Elwood Premier Phú Quốc",
      url:
        "https://i.vntrip.vn/275x140/smart/https://statics.vntrip.vn/data-v2/hotels/71942/img_max/71942_1572948599_garden_balcony.jpg",
      address: "Tổ 5, Ấp Ông Lang, xã Cửa Dương, H. Phú Quôc, tỉnh Kiên Giang",
      realPrice: 1750000,
      discount: "55%",
      price: 787500,
      restaurant: true,
      pool: true,
      parking: false,
      spa: true,
      laundry: true,
      rate: 4,
      point: 8.5,
    },
    {
      id: 65,
      place: "Ivy_NT",
      name: "Khách sạn Ivy Nha Trang",
      url:
        "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/69753/img_max/69753_1580543438__n5_1428-min.jpg",
      address:
        "127 Hồng Bàng, Tân Lập, Thành phố Nha Trang, Khánh Hòa 650000, Vietnam",
      realPrice: 950000,
      discount: "54%",
      price: 437000,
      restaurant: true,
      pool: true,
      parking: false,
      spa: true,
      laundry: true,
      rate: 4,
      point: 9.2,
    },
    {
      id: 66,
      place: "La_Siesta_HA",
      name: "La Siesta Resort & Spa Hội An",
      url:
        "https://i.vntrip.vn/886x290/smart/https://statics.vntrip.vn/data-v2/hotels/10399/img_max/10399_1499770312_92092527.jpg",
      address: "134 Hùng Vương, Phường Thanh Hà, Thành phố Hội An, Quảng Nam",
      realPrice: 1900000,
      discount: "10%",
      price: 1710000,
      restaurant: true,
      pool: true,
      parking: false,
      spa: true,
      laundry: true,
      rate: 5,
      point: 9.4,
    },
    {
      id: 67,
      place: "Swiss_DL",
      name: "Swiss-Belresort Tuyen Lam Dalat",
      url: "http://127.0.0.1:5500/Image/ks4.jpg",
      address:
        "số 7 và 8, KDL Hồ Tuyền Lâm, Phường 3, Thành phố Đà Lạt, Lâm Đồng 061000",
      realPrice: 3805380,
      discount: "75%",
      price: 938414,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 5,
      point: 9,
    },
    {
      id: 68,
      place: "KK_SP",
      name: "KK Sapa Hotel",
      url: "http://127.0.0.1:5500/Image/ks5.jpg",
      address: "036 đường Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai 31700",
      realPrice: 2606845,
      discount: "55%",
      price: 1173080,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 5,
      point: 9.1,
    },
    {
      id: 69,
      place: "Seashells_PQ",
      name: "Seashells Hotel & Spa Phú Quốc",
      url: "http://127.0.0.1:5500/Image/ks6.jpg",
      address: "1 Đường Võ Thị Sáu, Khu 1, Phú Quốc, tỉnh Kiên Giang",
      realPrice: 2305327,
      discount: "40%",
      price: 1383196,
      restaurant: true,
      pool: false,
      parking: true,
      spa: true,
      laundry: true,
      rate: 5,
      point: 9,
    },
  ],
};

//Hiển thị số sao (rating)
const renderRate = (rate) => {
  let star = "";
  for (let i = 0; i < rate; i++) {
    star += `<i class="fas fa-star list__item--icon-rating list__item--icon-rating-active"></i>`;
  }
  return star;
};

//chọn vùng khi click vào ảnh (HN, DN, HCM ...) để render ra hotel (HN, DN, HCM ...)
const arrPlace = (place) => {
  let newArr = data.hotel.filter((item) => item.place == place);
  return newArr;
};

// lấy node element có class .hotel__list (thẻ ul)
const hotel__list = document.querySelector(".hotel__list");

// render ra hotel
const renderHotel = (place) => {
  return arrPlace(place).map(
    (item, index) =>
      (hotel__list.innerHTML += `
      <li class="hotel__list--item" key="hotel-list-${
        item.id
      }-${index}" onclick="pay(${item.id})">
            <img src=${item.url} class="hotel__list--item-img" >
            <div class="list__item--wrapper">
              <h3 class="list__item--wrapper-title">${item.name}</h3>
              <div class="list__item--wrapper-div">
                ${renderRate(item.rate)}
              </div>
              <div class="list__item--wrapper-div">
                <i class="fas fa-map-marker-alt list__item--icon-location"></i>
                <p class="list__item__wrapper-p">${item.address}</p>
              </div>
              <div class="list__item--wrapper-div">
                ${
                  item.restaurant
                    ? '<i class="fas fa-utensils list__item--icon-hotel"></i><p class="list__item__wrapper-p">Nhà hàng</p>'
                    : ""
                }
                ${
                  item.pool
                    ? '<i class="fas fa-swimming-pool list__item--icon-hotel"></i><p class="list__item__wrapper-p">Bể bơi</p>'
                    : ""
                }
                ${
                  item.parking
                    ? '<img src="../Image/parking.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Chỗ đỗ xe</p>'
                    : ""
                }
                ${
                  item.laundry
                    ? '<img src="../Image/giatui.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Giặt ủi</p>'
                    : ""
                }
                ${
                  item.spa
                    ? '<i class="fas fa-spa list__item--icon-hotel"></i><p class="list__item__wrapper-p">Spa</p>'
                    : ""
                }
                </div>
              <div class="list__item--wrapper-div">
                <p class="list__item--point">${item.point}</p>
                <p class="list__item--evaluate">${
                  item.point >= 9
                    ? "Tuyệt vời"
                    : item.point >= 7.5
                    ? "Tốt"
                    : item.point >= 5
                    ? "Khá"
                    : "Tệ"
                }</p> 
              </div>
            </div>
            <div class="hotel__list--item-cost">
              <div class="list__item--wrapper-div">
               ${
                 item.realPrice &&
                 `<p class="hotel__list--item-realprice">${item.realPrice.toLocaleString()}đ</p>
                   <p class="hotel__list--item-discount">${item.discount}</p>
                   `
               }
              </div>
              <p class="hotel__list--item-price">${item.price.toLocaleString()}đ</p>
              <button class="hotel__list--item-btn">ĐẶT PHÒNG</button>
            </div>
          </li>
      `)
  );
};

function onClickPlace(place) {
  location.replace("http://127.0.0.1:5500/detail/detail.html");
  localStorage.setItem("place", place);
}

renderHotel(localStorage.getItem("place"));

const pay = (id) => {
  const dataDetail = data.hotel.find((item) => item.id == id);
  location.replace("http://127.0.0.1:5500/pay/pay.html");
  localStorage.setItem("dataDetail", JSON.stringify(dataDetail));
};

const starNumber = (number) => {
  let rate = data.hotel.filter(
    (item) => item.rate == number && item.place == localStorage.getItem("place")
  );
  let a = "";
  rate.map((item, index) => {
    a += `
        <li class="hotel__list--item" key="hotel-list-${
          item.id
        }-${index}" onclick="pay(${item.id})">
        <img src=${item.url} class="hotel__list--item-img" >
        <div class="list__item--wrapper">
        <h3 class="list__item--wrapper-title">${item.name}</h3>
        <div class="list__item--wrapper-div">
        ${renderRate(item.rate)}
        </div>
        <div class="list__item--wrapper-div">
                <i class="fas fa-map-marker-alt list__item--icon-location"></i>
                <p class="list__item__wrapper-p">${item.address}</p>
                </div>
                <div class="list__item--wrapper-div">
                ${
                  item.restaurant
                    ? '<i class="fas fa-utensils list__item--icon-hotel"></i><p class="list__item__wrapper-p">Nhà hàng</p>'
                    : ""
                }
                ${
                  item.pool
                    ? '<i class="fas fa-swimming-pool list__item--icon-hotel"></i><p class="list__item__wrapper-p">Bể bơi</p>'
                    : ""
                }
                ${
                  item.parking
                    ? '<img src="../Image/parking.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Chỗ đỗ xe</p>'
                    : ""
                }
                ${
                  item.laundry
                    ? '<img src="../Image/giatui.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Giặt ủi</p>'
                    : ""
                }
                ${
                  item.spa
                    ? '<i class="fas fa-spa list__item--icon-hotel"></i><p class="list__item__wrapper-p">Spa</p>'
                    : ""
                }
                </div>
                <div class="list__item--wrapper-div">
                <p class="list__item--point">${item.point}</p>
                <p class="list__item--evaluate">${
                  item.point >= 9
                    ? "Tuyệt vời"
                    : item.point >= 7.5
                    ? "Tốt"
                    : item.point >= 5
                    ? "Khá"
                    : "Tệ"
                }</p> 
                  </div>
                  </div>
                  <div class="hotel__list--item-cost">
                  <div class="list__item--wrapper-div">
                  ${
                    item.realPrice &&
                    `<p class="hotel__list--item-realprice">${item.realPrice.toLocaleString()}đ</p>
                   <p class="hotel__list--item-discount">${item.discount}</p>
                   `
                  }
               </div>
               <p class="hotel__list--item-price">${item.price.toLocaleString()}đ</p>
               <button class="hotel__list--item-btn">ĐẶT PHÒNG</button>
               </div>
               </li>
               `;
    return (hotel__list.innerHTML = a);
  });
};

const priceHotel1 = (x) => {
  let price = data.hotel.filter((item) => item.price < x && item.place == localStorage.getItem("place"));
  let a = "";
  price.map((item, index) => {
    a += `
        <li class="hotel__list--item" key="hotel-list-${
          item.id
        }-${index}" onclick="pay(${item.id})">
        <img src=${item.url} class="hotel__list--item-img" >
        <div class="list__item--wrapper">
        <h3 class="list__item--wrapper-title">${item.name}</h3>
        <div class="list__item--wrapper-div">
        ${renderRate(item.rate)}
        </div>
        <div class="list__item--wrapper-div">
                <i class="fas fa-map-marker-alt list__item--icon-location"></i>
                <p class="list__item__wrapper-p">${item.address}</p>
                </div>
                <div class="list__item--wrapper-div">
                ${
                  item.restaurant
                    ? '<i class="fas fa-utensils list__item--icon-hotel"></i><p class="list__item__wrapper-p">Nhà hàng</p>'
                    : ""
                }
                ${
                  item.pool
                    ? '<i class="fas fa-swimming-pool list__item--icon-hotel"></i><p class="list__item__wrapper-p">Bể bơi</p>'
                    : ""
                }
                ${
                  item.parking
                    ? '<img src="../Image/parking.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Chỗ đỗ xe</p>'
                    : ""
                }
                ${
                  item.laundry
                    ? '<img src="../Image/giatui.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Giặt ủi</p>'
                    : ""
                }
                ${
                  item.spa
                    ? '<i class="fas fa-spa list__item--icon-hotel"></i><p class="list__item__wrapper-p">Spa</p>'
                    : ""
                }
                </div>
                <div class="list__item--wrapper-div">
                <p class="list__item--point">${item.point}</p>
                <p class="list__item--evaluate">${
                  item.point >= 9
                    ? "Tuyệt vời"
                    : item.point >= 7.5
                    ? "Tốt"
                    : item.point >= 5
                    ? "Khá"
                    : "Tệ"
                }</p> 
                  </div>
                  </div>
                  <div class="hotel__list--item-cost">
                  <div class="list__item--wrapper-div">
                  ${
                    item.realPrice &&
                    `<p class="hotel__list--item-realprice">${item.realPrice.toLocaleString()}đ</p>
                   <p class="hotel__list--item-discount">${item.discount}</p>
                   `
                  }
               </div>
               <p class="hotel__list--item-price">${item.price.toLocaleString()}đ</p>
               <button class="hotel__list--item-btn">ĐẶT PHÒNG</button>
               </div>
               </li>
               `;
    return (hotel__list.innerHTML = a);
  });
};

const priceHotel2 = (x,y) => {
  let price = data.hotel.filter((item) => item.price >= x && item.price <= y && item.place == localStorage.getItem("place"));
  let a = "";
  price.map((item, index) => {
    a += `
        <li class="hotel__list--item" key="hotel-list-${
          item.id
        }-${index}" onclick="pay(${item.id})">
        <img src=${item.url} class="hotel__list--item-img" >
        <div class="list__item--wrapper">
        <h3 class="list__item--wrapper-title">${item.name}</h3>
        <div class="list__item--wrapper-div">
        ${renderRate(item.rate)}
        </div>
        <div class="list__item--wrapper-div">
                <i class="fas fa-map-marker-alt list__item--icon-location"></i>
                <p class="list__item__wrapper-p">${item.address}</p>
                </div>
                <div class="list__item--wrapper-div">
                ${
                  item.restaurant
                    ? '<i class="fas fa-utensils list__item--icon-hotel"></i><p class="list__item__wrapper-p">Nhà hàng</p>'
                    : ""
                }
                ${
                  item.pool
                    ? '<i class="fas fa-swimming-pool list__item--icon-hotel"></i><p class="list__item__wrapper-p">Bể bơi</p>'
                    : ""
                }
                ${
                  item.parking
                    ? '<img src="../Image/parking.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Chỗ đỗ xe</p>'
                    : ""
                }
                ${
                  item.laundry
                    ? '<img src="../Image/giatui.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Giặt ủi</p>'
                    : ""
                }
                ${
                  item.spa
                    ? '<i class="fas fa-spa list__item--icon-hotel"></i><p class="list__item__wrapper-p">Spa</p>'
                    : ""
                }
                </div>
                <div class="list__item--wrapper-div">
                <p class="list__item--point">${item.point}</p>
                <p class="list__item--evaluate">${
                  item.point >= 9
                    ? "Tuyệt vời"
                    : item.point >= 7.5
                    ? "Tốt"
                    : item.point >= 5
                    ? "Khá"
                    : "Tệ"
                }</p> 
                  </div>
                  </div>
                  <div class="hotel__list--item-cost">
                  <div class="list__item--wrapper-div">
                  ${
                    item.realPrice &&
                    `<p class="hotel__list--item-realprice">${item.realPrice.toLocaleString()}đ</p>
                   <p class="hotel__list--item-discount">${item.discount}</p>
                   `
                  }
               </div>
               <p class="hotel__list--item-price">${item.price.toLocaleString()}đ</p>
               <button class="hotel__list--item-btn">ĐẶT PHÒNG</button>
               </div>
               </li>
               `;
    return (hotel__list.innerHTML = a);
  });
};

const priceHotel3 = (x) => {
  let price = data.hotel.filter((item) => item.price > x && item.place == localStorage.getItem("place"));
  let a = "";
  price.map((item, index) => {
    a += `
        <li class="hotel__list--item" key="hotel-list-${
          item.id
        }-${index}" onclick="pay(${item.id})">
        <img src=${item.url} class="hotel__list--item-img" >
        <div class="list__item--wrapper">
        <h3 class="list__item--wrapper-title">${item.name}</h3>
        <div class="list__item--wrapper-div">
        ${renderRate(item.rate)}
        </div>
        <div class="list__item--wrapper-div">
                <i class="fas fa-map-marker-alt list__item--icon-location"></i>
                <p class="list__item__wrapper-p">${item.address}</p>
                </div>
                <div class="list__item--wrapper-div">
                ${
                  item.restaurant
                    ? '<i class="fas fa-utensils list__item--icon-hotel"></i><p class="list__item__wrapper-p">Nhà hàng</p>'
                    : ""
                }
                ${
                  item.pool
                    ? '<i class="fas fa-swimming-pool list__item--icon-hotel"></i><p class="list__item__wrapper-p">Bể bơi</p>'
                    : ""
                }
                ${
                  item.parking
                    ? '<img src="../Image/parking.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Chỗ đỗ xe</p>'
                    : ""
                }
                ${
                  item.laundry
                    ? '<img src="../Image/giatui.svg" alt="" class="list__item--icon-hotel"><p class="list__item__wrapper-p">Giặt ủi</p>'
                    : ""
                }
                ${
                  item.spa
                    ? '<i class="fas fa-spa list__item--icon-hotel"></i><p class="list__item__wrapper-p">Spa</p>'
                    : ""
                }
                </div>
                <div class="list__item--wrapper-div">
                <p class="list__item--point">${item.point}</p>
                <p class="list__item--evaluate">${
                  item.point >= 9
                    ? "Tuyệt vời"
                    : item.point >= 7.5
                    ? "Tốt"
                    : item.point >= 5
                    ? "Khá"
                    : "Tệ"
                }</p> 
                  </div>
                  </div>
                  <div class="hotel__list--item-cost">
                  <div class="list__item--wrapper-div">
                  ${
                    item.realPrice &&
                    `<p class="hotel__list--item-realprice">${item.realPrice.toLocaleString()}đ</p>
                   <p class="hotel__list--item-discount">${item.discount}</p>
                   `
                  }
               </div>
               <p class="hotel__list--item-price">${item.price.toLocaleString()}đ</p>
               <button class="hotel__list--item-btn">ĐẶT PHÒNG</button>
               </div>
               </li>
               `;
    return (hotel__list.innerHTML = a);
  });
};


