import Header from "./components/Header";
import CheckoutItem from "./components/CheckoutItem";
import Details from "./components/Details";
import AdditionalInfo from "./components/AdditionalInfo";
import SelectPaymentMode from "./components/SelectPaymentMode";
import FAQ from "./components/FAQ";

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
    </>
  );
}
