import Footer from "./Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from './Section3'
import Section4 from "./Section4";

export default function HomePage() {
  return (
    <>
      <div>
        <Section1 />
      </div>

      <div>
        <Section2 />
      </div>

      <div>
        <Section3 />
      </div>

      <div>
        <Section4 />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
