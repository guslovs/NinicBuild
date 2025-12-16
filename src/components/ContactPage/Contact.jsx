import Footer from "./Footer";
import Section1Contact from "./Section1";
import Section2Contact from "./Section2";

export default function Contact() {
  return (
    <main style={{
      paddingTop: '70px',
      backgroundColor: '#1F51FF'
    }}>
      <div>
        <Section1Contact />
      </div>

      <div>
        <Section2Contact />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  )
}
