import Head from "next/head";
import Ad from "../components/ad";
import Header from "../components/header";
import Footer from "../components/footer";

const data = [
  {
    title: "BMW M5 Competition",
    image:
      "https://mobistatic4.focus.bg/mobile/photosmob/199/1/big1/11681392318747199_ak.jpg",
    path: "/bmwm5cs", // <-- Change to my path (this is for test)
    price: "195 000 лв",
    millage: "30 000 км",
    city: "София, гр.София",
  },
  {
    title: "Audi Rs7 CARBON PERFORMANCE ",
    image:
      "https://cdn2.focus.bg/mobile/photosmob/532/1/big1/11680971651349532_GJ.jpg",
    path: "https://www.mobile.bg/pcgi/mobile.cgi?act=4&adv=11680971651349532&slink=t3wxoj", // <-- Change to my path (this is for test)
    price: "114 000 лв",
    millage: "194 000 км",
    city: "София, гр.София",
  },
  {
    title: "Mercedes-Benz S 63 AMG",
    image:
      "https://mobistatic1.focus.bg/mobile/photosmob/818/1/big1/11668593966789818_zk.jpg",
    path: "https://www.mobile.bg/pcgi/mobile.cgi?act=4&adv=11668593966789818&slink=t3x7fi", // <-- Change to my path (this is for test)
    price: "165 000 лв",
    millage: "125 000 км",
    city: "Перник, гр.Перник",
  },
  {
    title: "BMW 335D",
    image:
      "https://mobistatic4.focus.bg/mobile/photosmob/259/1/big1/11689270401957259_Aq.jpg",
    path: "https://www.mobile.bg/pcgi/mobile.cgi?act=4&adv=11689270401957259&slink=t3x83e", // <-- Change to my path (this is for test)
    price: "12 500 лв",
    millage: "260 000 км",
    city: "Стара Загоре, гр.Чирпан",
  },
  {
    title: "Audi A6 Avant 4.0 TDI",
    image:
      "https://mobistatic3.focus.bg/mobile/photosmob/300/1/big1/11689749135614300_xj.jpg",
    path: "https://www.mobile.bg/pcgi/mobile.cgi?act=4&adv=11689749135614300", // <-- Change to my path (this is for test)
    price: "57 900 лв",
    millage: "97 900 км",
    city: "Стара Загоре, гр.Стара Загора",
  },
  {
    title: "Dodge Challenger 6.4L",
    image:
      "https://mobistatic2.focus.bg/mobile/photosmob/128/1/big/11562435975034128_qa.jpg",
    path: "https://www.mobile.bg/pcgi/mobile.cgi?act=4&adv=11562435975034128&slink=t41jfa", // <-- Change to my path (this is for test)
    price: "119 900 лв",
    millage: "3500 км",
    city: "Извън страната, Германия",
  },
  {
    title: "Dodge Challenger 6.4L V8",
    image:
      "https://mobistatic4.focus.bg/mobile/photosmob/683/1/big/11562513829070683_Xu.jpg",
    path: "https://www.mobile.bg/pcgi/mobile.cgi?act=4&adv=11562513829070683&slink=t41kxj", // <-- Change to my path (this is for test)
    price: "134 900 лв",
    millage: "10 км",
    city: "Извън страната, Германия",
  },
  {
    title: "Lamborghini Huracan LP610 V10",
    image:
      "https://mobistatic1.focus.bg/mobile/photosmob/698/1/big1/11688985233490698_up.jpg",
    path: "https://www.mobile.bg/pcgi/mobile.cgi?act=4&adv=11688985233490698&slink=t41lhl", // <-- Change to my path (this is for test)
    price: "321 000 лв.",
    millage: "32 100 км",
    city: "София, гр.София",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>CarSite</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="https://images.unsplash.com/photo-1646029642262-022158ff5794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        />
      </Head>
      <main>
        <div className="container">
          <div className="ads">
            {data.map((ads) => {
              return (
                <Ad
                  title={ads.title}
                  image={ads.image}
                  path={ads.path}
                  price={ads.price}
                  millage={ads.millage}
                  city={ads.city}
                ></Ad>
              );
            })}
            {data.map((ads) => {
              return (
                <Ad
                  title={ads.title}
                  image={ads.image}
                  path={ads.path}
                  price={ads.price}
                  millage={ads.millage}
                  city={ads.city}
                ></Ad>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
