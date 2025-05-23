import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import background from "../assets/images/background-pattern.jpg";
import appleLogo from "../assets/images/Apple_logo_black.png";
import xiaomiLogo from "../assets/images/Xiaomi_logo__2021-_.svg.png";
import samsungLogo from "../assets/images/samsung-logo-png-transparent.png";
import tecnoLogo from "../assets/images/Tecno_Mobile_logo.svg.png";
import oppoLogo from "../assets/images/Oppo-Logo.wine.png";
import vivoLogo from "../assets/images/Vivo_logo_2019.svg.png";
import honorLogo from "../assets/images/LOGO_Honor.svg.png";
import redmagicLogo from "../assets/images/529b1a96673f17dc600ae49633e76e47.jpg";
import nokiaLogo from "../assets/images/nokia-new-logo-2023-png-vector.svg";
import asusLogo from "../assets/images/AsusTek-black-logo.png";
import sonyLogo from "../assets/images/sony.png";
import masstelLogo from "../assets/images/Masstel-logo.png";
import phone from "../assets/images/phone3x.png";
import backgroundPhone from "../assets/images/bg-pattern-2.png";
import Products from "../components/ListProducts";
import Blogs from "../components/Blogs";
import SliderLogoBrand from "../components/SliderLogoBrand";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import ListProductCard from "../components/ListProductCard";
import ProductsCarousel from "../components/ProductsCarousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners } from "../slices/homeSlice";
import { fetchListFavorite } from "../slices/favoriteProductsSlice";
import { fetchProducts } from "../slices/productSlice";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isPercentDecrease = true;
  // const banners = [banner1, banner2, banner3];

  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.home);
  const { products, loading } = useSelector((state) => state.product);

  const sliderBanner = banners.filter((banner) =>
    banner.title.includes("Slider")
  );
  const smallBanner = banners.filter((banner) =>
    banner.title.includes("Banner")
  );

  const { listFavorite } = useSelector((state) => state.favoriteProduct);
  useEffect(() => {
    dispatch(fetchListFavorite());
    dispatch(fetchBanners());
    dispatch(fetchProducts());
  }, [dispatch]);

  const logoBrand = [
    { id: 1, name: "Apple", logo: appleLogo },
    { id: 2, name: "Xiaomi", logo: xiaomiLogo },
    { id: 3, name: "Samsung", logo: samsungLogo },
    { id: 4, name: "Tecno", logo: tecnoLogo },
    { id: 5, name: "Oppo", logo: oppoLogo },
    { id: 6, name: "Vivo", logo: vivoLogo },
    { id: 7, name: "Honor", logo: honorLogo },
    { id: 8, name: "Redmagic", logo: redmagicLogo },
    { id: 9, name: "Nokia", logo: nokiaLogo },
    { id: 10, name: "Asus", logo: asusLogo },
    { id: 11, name: "Sony", logo: sonyLogo },
    { id: 12, name: "Masstel", logo: masstelLogo },
  ];

  const convertPriceToNumber = (priceString) => {
    if (!priceString || typeof priceString !== "string") return 0;
    return Number(priceString.replace(/\./g, "").replace("đ", ""));
  };

  const getDiscountPercent = (item) => {
    const original = convertPriceToNumber(item?.product?.price_original);
    const sale = convertPriceToNumber(item?.product?.price);

    if (
      !original ||
      !sale ||
      isNaN(original) ||
      isNaN(sale) ||
      sale >= original
    )
      return null;

    // Làm tròn về phía dưới để luôn nhất quán
    return Math.floor(((original - sale) / original) * 100);
  };

  const services = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"
          />
        </svg>
      ),
      title: t("home.servicesFreeShipping"),
      description: t("home.servicesFreeShippingDesc"),
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39a10 10 0 0 0 6 1.39Zm-4.46-2.29l-2.69 2.7l-.89-.9a1 1 0 0 0-1.42 1.42l1.6 1.6a1 1 0 0 0 1.42 0L15 11a1 1 0 0 0-1.42-1.42Z"
          />
        </svg>
      ),
      title: t("home.servicesSecurePayment"),
      description: t("home.servicesSecurePaymentDesc"),
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0a1 1 0 0 0 1.42 0a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z"
          />
        </svg>
      ),
      title: t("home.servicesGuaranteedSavings"),
      description: t("home.servicesGuaranteedSavingsDesc"),
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18 7h-.35A3.45 3.45 0 0 0 18 5.5a3.49 3.49 0 0 0-6-2.44A3.49 3.49 0 0 0 6 5.5A3.45 3.45 0 0 0 6.35 7H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3Zm-7 13H8a1 1 0 0 1-1-1v-6h4Zm0-9H5v-1a1 1 0 0 1 1-1h5Zm0-4H9.5A1.5 1.5 0 1 1 11 5.5Zm2-1.5A1.5 1.5 0 1 1 14.5 7H13ZM17 19a1 1 0 0 1-1 1h-3v-7h4Zm2-8h-6V9h5a1 1 0 0 1 1 1Z"
          />
        </svg>
      ),
      title: t("home.servicesDailyDeals"),
      description: t("home.servicesDailyDealsDesc"),
    },
  ];

  const nextShop = () => {
    navigate("/products");
  };
  return (
    <>
      <section
        className="py-3"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-blocks">
                <div
                  className="banner-ad large bg-info block-1"
                  style={{ cursor: "pointer" }}
                >
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={false}
                    className="main-swiper"
                  >
                    {sliderBanner.map((banner) => (
                      <SwiperSlide key={banner.banner_id}>
                        <img
                          className="swiper-image w-100"
                          src={banner.image_url}
                          alt={banner.title}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                <h2 className="section-title">{t("home.brand")}</h2>
                <div className="d-flex align-items-center">
                  <a className="btn-link text-decoration-none">
                    {t("home.brandViewAllBrands")}
                  </a>
                  <div className="swiper-buttons">
                    <button className="swiper-prev category-carousel-prev btn btn-yellow">
                      ❮
                    </button>
                    <button className="swiper-next category-carousel-next btn btn-yellow">
                      ❯
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={2}
            navigation={{
              nextEl: ".category-carousel-next",
              prevEl: ".category-carousel-prev",
            }}
            speed={600}
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
            className="category-carousel"
          >
            {logoBrand.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <div
                  className="category-item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "230px",
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    style={{
                      maxHeight: "80px",
                      objectFit: "contain",
                      marginBottom: "20px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "18px",
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    }}
                  >
                    {item.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="d-flex justify-content-between flex-wrap mb-4">
            <h3 className="section-title cursor-pointer">
              {t("home.productsYouLiked")}
            </h3>
            <div className="d-flex align-items-center gap-3">
              <Link
                to={"/favorite-products"}
                className="btn-link text-decoration-none"
              >
                {t("home.productLikedViewAllBrands")}
              </Link>
              <div className="swiper-buttons">
                <button className="swiper-prev brand-carousel-prev btn btn-yellow">
                  ❮
                </button>
                <button className="swiper-next brand-carousel-next btn btn-yellow">
                  ❯
                </button>
              </div>
            </div>
          </div>
          {listFavorite?.data ? (
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".brand-carousel-next",
                prevEl: ".brand-carousel-prev",
              }}
              spaceBetween={20}
              speed={600}
              breakpoints={{
                0: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {listFavorite?.data?.slice(0, 5)?.map((item) => {
                const discountPercent = isPercentDecrease
                  ? getDiscountPercent(item)
                  : null;
                return (
                  <SwiperSlide key={item.product_id}>
                    <ProductsCarousel
                      item={item}
                      discountPercent={discountPercent}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="text-center text-muted py-4 fw-bold">
              Bạn chưa có sản phẩm yêu thích nào.
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <h3 className="my-5">{t("home.ourServices")}</h3>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-4 row-cols-lg-4 pt-2 pb-3">
            {services.map((service) => (
              <div className="col" key={service.id}>
                <div className=" mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark mb-2">
                      {service.icon}
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>{service.title}</h5>
                        <p className="card-text">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Products
        title={t("home.featuredProducts")}
        showHeader={true}
        padding={"py-3"}
        filter={false}
        limit={5}
        products={products}
        loading={loading}
      />

      <ListProductCard title={t("home.bestSellingProducts")} />

      <section className="py-2 mt-4">
        <div className="container-fluid">
          <div className="row">
            {smallBanner.map((banner) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={nextShop}
                  key={banner.banner_id}
                  className="col-md-6 mb-3"
                >
                  <div className="banner-ad">
                    <img
                      src={banner.image_url}
                      className="img-fluid"
                      alt={banner.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <SliderLogoBrand />

      <Blogs limit={3} showHeader={true} padding={"py-5"} />

      <section className="py-5" style={{ marginTop: 100, marginBottom: 70 }}>
        <div className="container-fluid">
          <div
            className="bg-warning py-5 rounded-5"
            style={{
              backgroundImage: `url('images/${backgroundPhone}') no-repeat`,
            }}
          >
            <div className="container mb-4">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={phone}
                    alt="phone"
                    className="image-float img-fluid"
                  />
                </div>
                <div
                  className="col-md-8"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginBottom: 50,
                  }}
                >
                  <h2 className="my-5">{t("home.moblieTitle")}</h2>
                  <p>{t("home.moblieDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
