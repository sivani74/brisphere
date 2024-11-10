// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formatedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: formatedData, isLoading: false})
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  renderBlogsListView = () => {
    const {blogsList} = this.state
    return (
      <ul className="blogs-list-container">
        {blogsList.map(eachItem => (
          <BlogItem key={eachItem.id} blogDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? this.renderLoadingView() : this.renderBlogsListView()}
      </div>
    )
  }
}

export default BlogList
