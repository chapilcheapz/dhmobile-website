import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ThanksYou = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNextPageOrderHistory = () => {
    navigate("/order-history");
  };

  return (
    <>
      <div className="container-fluid">
        <div
          className=" col-md-4 bg-white shadow-md p-5"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            border: "none",
            marginTop: 20,
            marginBottom: 50,
          }}
        >
          <div className="mb-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={85}
              height={85}
              style={{ color: "#198754" }}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
          <div className="text-center">
            <h1>{t("thanksYou.paymentSuccess")}</h1>
            <p>
              {t("thanksYou.thankYouMessage")}
              <br />
              {t("thanksYou.thankYouMessage2")}
            </p>
            <Link to={"/"}>
              <button className="btn btn-outline-success mt-3">
                {t("thanksYou.backToHome")}
              </button>
            </Link>
            <button
              style={{ marginLeft: 5 }}
              className="btn btn-outline-danger mt-3"
              onClick={handleNextPageOrderHistory}
            >
              {t("thanksYou.trackOrder")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThanksYou;
