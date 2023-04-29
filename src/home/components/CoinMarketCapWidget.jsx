import { useEffect } from "react";

function CoinMarketCapWidget() {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <section className="container pb-16 mb-12">
        <div
          className="coinmarketcap-currency-widget dark:text-blue-gray-100 text-blue-gray-700 rounded-md"
          data-currencyid="23322"
          data-base="USD"
          data-secondary="BTC"
          data-ticker="true"
          data-rank="true"
          data-volume="true"
          data-statsticker="true"
          data-stats="USD"
        ></div>
      </section>
    );
  }
  
  export default CoinMarketCapWidget;