import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import './index.css'

const UserInfo = () => (
  <div className="user-info-container">
    <div>
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
)

export default UserInfo
