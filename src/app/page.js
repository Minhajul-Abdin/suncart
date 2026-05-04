import Tips from "@/components/homepage/Tips.jsx";
import Banner from "../components/homepage/Banner.jsx";
import TopProducts from "../components/homepage/TopProducts.jsx";
import Brands from "@/components/homepage/Brands.jsx";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopProducts />
      <Tips/>
      <Brands/>
    </div>
  );
}
