import "./assets/styles/App.css"
import theatre from "./assets/images/theatre.jpeg"
import park from "./assets/images/park.jpeg"
import sports from "./assets/images/sports.jpeg"
import avatar from "./assets/images/avatar.png"

function App() {
  return ( 
    <>
        <main className="homebg">
            <div>
              <h1>
                Visit  Torshov
              </h1>
              <div>
              Enjoy culture and sports in this vibrant district close to the center of Oslo.
              </div>
            </div>
        </main>
        <main className="activities">
          <h2>Top three activities to do at Torshov</h2>
          <div>
            <div>
              <img src={theatre} alt="" />
              <h3>Attend a show or a concert</h3>
              <p>The Torshov Theatre is a great place to spend your night out.</p>
            </div>
            <div>
              <img src={park} alt="" />
              <h3>Go for a piknic in the local park</h3>
              <p>The Torshov Park is perfect for piknic, getting some tan, or just chilling out.</p>
            </div>
            <div>
              <img src={sports} alt="" />
              <h3>Play sports at the Lilleborg field</h3>
              <p>Play volleyball, football, basket ball or lift some weights.</p>
            </div>
          </div>
        </main>
        <main className="guide">
            <div className="borderBlue">
              <div className="innerContent">
                <img src={avatar} alt="" />
                <div>
                  <h2>Your guide</h2>
                  <p><i>“I have lived at Torshov for over 30 years, so I can show you all of its best parts and hidden secrets.”</i></p>
                  <h3>Mubarokah Ismail</h3>
                </div>
              </div>
            </div>
        </main>
    </>
   );
}

export default App;