import './index.css'

const DiscoverItem = props => {
  const {todoDetails} = props
  const {id, title, avatarUrl, starUrl, topic} = todoDetails

  return (
    <li className="discover-item">
      <div className="blog-item-container">
        <div className="author-info">
          <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
          <div>
            <p className="author-name">{title}</p>
            <img className="star-img" src={starUrl} alt={`star${id}`} />
          </div>
        </div>
        <p className="blog-item-topic">{topic}</p>
      </div>
    </li>
  )
}

export default DiscoverItem
