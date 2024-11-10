// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const formatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogItemDetails: formatedData, isLoading: false})
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  renderBlogDetailsView = () => {
    const {blogItemDetails} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogItemDetails
    return (
      <div className="blog-item-details-container">
        <h1 className="details-title">{title}</h1>
        <div className="avatar-author-container">
          <img src={avatarUrl} alt={author} className="blog-item-avatar" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="details-image" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="details-container">
        {isLoading ? this.renderLoadingView() : this.renderBlogDetailsView()}
      </div>
    )
  }
}

export default BlogItemDetails
