import Header from "./components/Header";
import CheckoutItem from "./components/CheckoutItem";
import Details from "./components/Details";
import AdditionalInfo from "./components/AdditionalInfo";
import SelectPaymentMode from "./components/SelectPaymentMode";
import FAQ from "./components/FAQ";
import TrustBooster from "./components/TrustBooster";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <>
      <section className="max-w-xs mx-auto lg:max-w-5xl">
        <Header />
      </section>
      <section className="flex flex-col border-b-2 max-w-xs mx-auto lg:py-4 lg:flex-row-reverse lg:justify-between lg:max-w-5xl">
        <article className="lg:border-l">
          <CheckoutItem />
        </article>
        <article className="flex-1 lg:max-w-3xl lg:pr-6">
          <Details />
          <AdditionalInfo />
          <SelectPaymentMode />
        </article>
      </section>
      <section className="flex flex-col max-w-xs mx-auto lg:border-b lg:pt-4 lg:flex-row lg:justify-between lg:max-w-5xl">
        <FAQ />
        <Chat />
      </section>
      <section className="max-w-xs mx-auto lg:max-w-5xl">
        <TrustBooster />
      </section>
      <section className="bg-black">
        <Footer />
      </section>
    </>
  );
}
