import DiscoverItem from '../DiscoverItem'

import './index.css'

const discoverList = [
  {
    id: 1,
    title: 'Arjun Raghav',
    avatarUrl:
      'https://res.cloudinary.com/ddv6mvzyc/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1731245472/asian-man-head-silhoutte-face-fashion-icon-beautiful-280567634_mkkule.jpg',
    starUrl:
      'https://res.cloudinary.com/ddv6mvzyc/image/upload/v1731245381/rating-sticker-icon-with-four-gold-stars-white-background-flat-design-white-background_630277-199_fmfzrs.jpg',

    topic:
      'I am writing this after reflecting on my one month stay with Bricabin in Ladakh.Right from picking up us from the airport to dropping us back there after a month, urgan was very responsible and took good care of my friends.',
  },
  {
    id: 2,
    title: 'Arjun Raghav',
    avatarUrl:
      'https://res.cloudinary.com/ddv6mvzyc/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1731245472/asian-man-head-silhoutte-face-fashion-icon-beautiful-280567634_mkkule.jpg',
    starUrl:
      'https://res.cloudinary.com/ddv6mvzyc/image/upload/v1731245381/rating-sticker-icon-with-four-gold-stars-white-background-flat-design-white-background_630277-199_fmfzrs.jpg',

    topic:
      'I am writing this after reflecting on my one month stay with Bricabin in Ladakh.Right from picking up us from the airport to dropping us back there after a month, urgan was very responsible and took good care of my friends.',
  },
  {
    id: 3,
    title: 'Arjun Raghav',
    avatarUrl:
      'https://res.cloudinary.com/ddv6mvzyc/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1731245472/asian-man-head-silhoutte-face-fashion-icon-beautiful-280567634_mkkule.jpg',
    starUrl:
      'https://res.cloudinary.com/ddv6mvzyc/image/upload/v1731245381/rating-sticker-icon-with-four-gold-stars-white-background-flat-design-white-background_630277-199_fmfzrs.jpg',

    topic:
      'I am writing this after reflecting on my one month stay with Bricabin in Ladakh.Right from picking up us from the airport to dropping us back there after a month, urgan was very responsible and took good care of my friends.',
  },
  {
    id: 4,
    title: 'Arjun Raghav',
    avatarUrl:
      'https://res.cloudinary.com/ddv6mvzyc/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1731245472/asian-man-head-silhoutte-face-fashion-icon-beautiful-280567634_mkkule.jpg',
    starUrl:
      'https://res.cloudinary.com/ddv6mvzyc/image/upload/v1731245381/rating-sticker-icon-with-four-gold-stars-white-background-flat-design-white-background_630277-199_fmfzrs.jpg',

    topic:
      'I am writing this after reflecting on my one month stay with Bricabin in Ladakh.Right from picking up us from the airport to dropping us back there after a month, urgan was very responsible and took good care of my friends.',
  },
]

const Discover = () => (
  <div>
    <div className="discover-container">
      <h1 className="heading">Discover</h1>
      <ul className="blogs-list-container">
        {discoverList.map(eachTodo => (
          <DiscoverItem key={eachTodo.id} todoDetails={eachTodo} />
        ))}
      </ul>
    </div>
  </div>
)

export default Discover
