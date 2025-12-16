import Footer from "./Footer";
import Section1Services from "./Section1";
import Section2Services from "./Section2";
import Section3Services from "./Section3";
import Section4Services from "./Section4";
import Section5Services from "./Section5";
import Section6Services from "./Section6";
import Section7Services from "./Section7";

export default function Services() {
  return (
    <main style={{
      backgroundColor: '#2C2C2C',
      paddingTop: '70px'
    }}>
      <div>
        <Section1Services />
      </div>

      <div>
        <Section2Services />
      </div>

      <div>
        <Section3Services />
      </div>

      <div>
        <Section4Services />
      </div>

      <div>
        <Section5Services />
      </div>

      <div>
        <Section6Services />
      </div>

      <div>
        <Section7Services />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  )
}
