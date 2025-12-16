import Section1AboutUs from "./Section1"
import Section2AboutUs from "./Section2"
import Section3AboutUs from "./Section3"
import Section4AboutUs from "./Section4"
import Fotter from '../HomePage/Footer'

export default function About() {
  return (
    <main style={{
      backgroundColor: '#F2F2F2',
      paddingTop: '70px'
    }}>
      <div>
        <Section1AboutUs />
      </div>

      <div>
        <Section2AboutUs />
      </div>

      <div>
        <Section3AboutUs />
      </div>

      <div>
        <Section4AboutUs />
      </div>

      <div>
        <Fotter />
      </div>
    </main>
  )
}
