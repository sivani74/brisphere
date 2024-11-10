// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, author, title, topic, avatarUrl, imageUrl} = blogDetails

  return (
    <Link className="blog-list-link-item" to={`/blogs/${id}`}>
      <li className="blog-list-item">
        <img src={imageUrl} alt={title} className="blog-list-image" />
        <div className="blog-title-container">
          <p className="blog-item-topic">{topic}</p>
          <h1 className="blog-item-title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={author} className="blog-item-avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
