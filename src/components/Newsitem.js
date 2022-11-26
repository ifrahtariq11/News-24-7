import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className="my-3">
      <div className="card " style={{width: '18rem'}}>
      <img src={!imageUrl?'https://cmg-cmg-tv-10090-prod.cdn.arcpublishing.com/resizer/4VZNb8QWYXS446UEj9zwxi-jXCM=/1440x810/filters:format(jpg):quality(70)/d1hfln2sfez66z.cloudfront.net/09-06-2022/t_f480c8c7c7304879a7745f178b1b25bb_name_Float_Plane_Crash_frame_2329.jpeg':imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-footer"> <small className="text-muted">By {!author?'Unknown': author} on {new Date(date).toGMTString()}</small> </p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
      </div>
      
    )
  }
}

export default Newsitem