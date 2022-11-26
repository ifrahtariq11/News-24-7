import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
// type impt to import prop types
import PropTypes from 'prop-types'

export class News extends Component {
 static defaultProps={
  country:'us',
  pagesize: 5,
  category:'general'
 }
 static propTypes={
  country: PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
 }
  constructor(){
    super()
    console.log('I am constructor from news component ')
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1ca1dec2ee3431897868a4ba5df9065&page=1&pagesize=${this.props.pagesize}`
    this.setState({loading:true}) 
    let data= await fetch(url)
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading: false
    })

  }
  handleprevClick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1ca1dec2ee3431897868a4ba5df9065&page=${this.state.page -1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true}) 
    let data= await fetch(url)
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page -1,
      articles: parsedData.articles,
      loading: false})
  }
  handlenextClick=async()=>{
    if(!(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pagesize)))
    {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1ca1dec2ee3431897868a4ba5df9065&page=${this.state.page +1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true}) 
    let data= await fetch(url)
    let parsedData=await data.json();
    this.setState({
      page: this.state.page +1,
      articles: parsedData.articles,
      loading: false
    })
      
    }
  }

  render() {
    return (
      <div className='container mx-10 my-7'>
        {/* <h2 className="text-center"> News-24/7 Top Headlines</h2> */}
         <h1 className="text-center " style={{margin: '70px 10px'}} > News-24/7 Top Headlines</h1>
       
        
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url} >
            <Newsitem title={element.title.slice(0, 45)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
            </div>
          })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>&larr;Previous</button>
            <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark"onClick={this.handlenextClick}>Next&rarr;</button>
            </div>
      
      </div>
    )
  }
}

export default News