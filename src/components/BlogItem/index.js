// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, topic, imageUrl} = blogDetails

  return (
    <li className="blog-list-item">
      <img src={imageUrl} alt={title} className="blog-list-image" />
      <h1 className="blog-item-title">{title}</h1>

      <p className="blog-item-topic">{topic}</p>
    </li>
  )
}

export default BlogItem
