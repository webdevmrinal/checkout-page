import Header from "./components/Header";
import CheckoutItem from "./components/CheckoutItem";
import Details from "./components/Details";
import AdditionalInfo from "./components/AdditionalInfo";
import SelectPaymentMode from "./components/SelectPaymentMode";
import FAQ from "./components/FAQ";
import TrustBooster from "./components/TrustBooster";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="border-b-2">
        <CheckoutItem />
      </section>
      <section>
        <Details />
      </section>
      <section>
        <AdditionalInfo />
      </section>
      <section className="border-b-2">
        <SelectPaymentMode />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <TrustBooster />
      </section>
      <section className="bg-black">
        <Footer />
      </section>
    </>
  );
}
