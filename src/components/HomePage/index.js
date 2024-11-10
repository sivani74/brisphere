import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import './index.css'

const HomePage = () => (
  <>
    <div className="user-info-container">
      <div className="work-container">
        <h1>Work from Ladakh</h1>
        <p>Indias first tourism ecosystem</p>
        <div>
          <FaFacebook />
          <AiFillInstagram />
        </div>
      </div>
      <img
        className="profile-img"
        src="https://res.cloudinary.com/ddv6mvzyc/image/upload/v1731071947/Valley-Taurus-Mountains-Turkey_aucsye.jpg"
        alt="profile"
      />
    </div>
    <div className="booking-container">
      <div className="check-container">
        <h5>CHECK-IN</h5>
        <input type="date" />
      </div>
      <div className="check-container">
        <h5>CHECK-OUT</h5>
        <input type="date" />
      </div>
      <div className="check-container">
        <h5>ROOMS</h5>
        <p>- 1 +</p>
      </div>
      <div className="check-container">
        <button type="button" className="loc-btn">
          Book
        </button>
      </div>
    </div>
    <div className="adress-container">
      <h1 className="title">Brisphere</h1>
      <p>Spituk, Ladakh,</p>
      <p>India 194101</p>
      <p>+91 - 7764997033</p>
      <p>amit.jha6700@gmail.com</p>
      <button type="button" className="loc-btn">
        Location
      </button>
    </div>
  </>
)

export default HomePage
