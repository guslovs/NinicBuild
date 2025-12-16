import Footer from "../HomePage/Footer";
import Section4Services from "../ServicesPage/Section4";
import Section1Projects from "./Section1";
import Section2Projects from "./Section2";
import Section3Projects from "./Section3";
import Section4Projects from "./Section4";
import Section5Projects from "./Section5";
import Section6Projects from "./Section6";

export default function Projects() {
  return (
    <main style={{
      paddingTop: '70px'
    }}>
      <div>
        <Section1Projects />
      </div>

      <div>
        <Section2Projects />
      </div>

      <div>
        <Section3Projects />
      </div>

      <div>
        <Section4Projects />
      </div>

      <div>
        <Section5Projects />
      </div>

      <div>
        <Section6Projects />
      </div>

      <div style={{
        paddingTop: '40px'
      }}>
        <Footer />
      </div>
    </main>
  )
}
