import React from 'react';
import HighlightsItem from './highlightsitem.js'

export default class Highlights extends React.Component {
  render(){
    return (
			<HighlightsItem />
// 			<div className="col-md-7 text-left mid">
// 		<h1> Highlights</h1>
// 		<div className="panel panel-default highlights">
// 				<div className="panel-body post">
// 						<div className="row">
// 								<div className="col-md-10">
// 										<div className="media">
// 												<div className="media-left media-top">
// 														<div className="cd-timeline-img">
// 																<img src="img/profile.svg" width="50" height="50" alt="Picture" />
// 														</div>
// 												</div>
// 												<div className="media-body">
// 														<a href="#">League of Games</a>
// 														<br /> Today at 3:48pm · Northampton, MA ·
// 														<span className="glyphicon glyphicon-user"></span>
// 												</div>
// 										</div>
// 								</div>
// 								<div className="col-md-2">
// 										<span className="caret pull-right"></span>
// 								</div>
// 						</div>
// 						<div className="row">
// 								<div className="col-md-12">
// 										League of Games is pleased to let everyone know that we will be having our first soccer game of the season this Saturday @ 6:00pm in the Southwest fields.
// 								</div>
// 						</div>
// 				</div>
// 				<hr />
// 				<div className="row">
// 						<div className="col-md-12 reactions">
// 								<ul className="list-inline">
// 										<li>
// 												<a href="#"><span className="glyphicon glyphicon-ok">
// 			</span> RSVP</a>
// 										</li>
// 										<li>
// 												<a href="#"><span className="glyphicon glyphicon-comment">
// 				</span> Comment</a>
// 										</li>
// 										<li>
// 												<a href="#"><span className="glyphicon glyphicon-share-alt">
// 				</span> Share</a>
// 										</li>
// 								</ul>
// 						</div>
// 				</div>
// 				<hr />
// 				<div className="panel-footer comments">
// 						<div className="row people_reacted">
// 								<div className="col-md-12">
// 										<a href="#">2 people</a> are going
// 								</div>
// 						</div>
// 						<hr />
// 						<ul className="media-list">
// 								<li className="media">
// 										<div className="media-left media-top">
// 												<div className="cd-timeline-img">
// 														<img src="img/bof.png" width="35" height="35" alt="Picture" />
// 												</div>
// 										</div>
// 										<div className="media-body">
// 												<a href="#">Fury of Balls</a> Hope no one comes!
// 												<br /><a href="#">Like</a> · <a href="#">Reply</a> · 20 hrs
// 										</div>
// 								</li>
// 								<hr />
// 								<li className="media">
// 										<div className="media-left media-top">
// 												<div className="cd-timeline-img">
// 														<img src="img/fob.png" width="35" height="35" alt="Picture" />
// 												</div>
// 										</div>
// 										<div className="media-body">
// 												<a href="#">Balls of Fury</a> #rekt
// 												<br /><a href="#">Like</a> · <a href="#">Reply</a> · 19 hrs
// 										</div>
// 								</li>
// 								<hr />
// 								<li className="media">
// 										<div className="media-left media-top">
// 												<div className="cd-timeline-img">
// 														<img src="img/you.jpeg" width="35" height="35" alt="Picture" />
// 												</div>
// 										</div>
// 										<div className="media-body">
// 												<div className="input-group">
// 														<input type="text" className="form-control send_message" placeholder="Write a comment..." />
// 														<span className="input-group-btn send_button">
// 						<button type="submit" className="btn btn-default send_button">
// 							<span className="glyphicon glyphicon-send send_icon"></span>
// 														</button>
// 														</span>
// 												</div>
// 										</div>
// 								</li>
// 						</ul>
// 				</div>
// 		</div>
// 		<div className="panel panel-default highlights">
// 				<div className="panel-body post">
// 						<div className="row">
// 								<div className="col-md-10">
// 										<div className="media">
// 												<div className="media-left media-top">
// 														<div className="cd-timeline-img">
// 																<img src="img/profile.svg" width="50" height="50" alt="Picture" />
// 														</div>
// 												</div>
// 												<div className="media-body">
// 														<a href="#">UMass Indoor Soccer (Football)</a>
// 														<br /> Yesterday at 2:05pm · Amherst, MA ·
// 														<span className="glyphicon glyphicon-user"></span>
// 												</div>
// 										</div>
// 								</div>
// 								<div className="col-md-2">
// 										<span className="caret pull-right"></span>
// 								</div>
// 						</div>
// 						<div className="row">
// 								<div className="col-md-12">
// 										Indoor at 5 today. Boyden gym.
// 								</div>
// 						</div>
// 				</div>
// 				<hr />
// 				<div className="row">
// 						<div className="col-md-12 reactions">
// 								<ul className="list-inline">
// 										<li>
// 												<a href="#"><span className="glyphicon glyphicon-ok">
// 			</span> RSVP</a>
// 										</li>
// 										<li>
// 												<a href="#"><span className="glyphicon glyphicon-comment">
// 				</span> Comment</a>
// 										</li>
// 										<li>
// 												<a href="#"><span className="glyphicon glyphicon-share-alt">
// 				</span> Share</a>
// 										</li>
// 								</ul>
// 						</div>
// 				</div>
// 				<hr />
// 				<div className="panel-footer comments">
// 						<div className="row people_reacted">
// 								<div className="col-md-12">
// 										<a href="#">13 people</a> are going
// 								</div>
// 						</div>
// 						<hr />
// 						<ul className="media-list">
// 								<li className="media">
// 										<div className="media-left media-top">
// 												<div className="cd-timeline-img">
// 														<img src="img/you.jpeg" width="35" height="35" alt="Picture" />
// 												</div>
// 										</div>
// 										<div className="media-body">
// 												<div className="input-group">
// 														<input type="text" className="form-control send_message" placeholder="Write a comment..." />
// 														<span className="input-group-btn send_button">
// 						<button type="submit" className="btn btn-default send_button">
// 							<span className="glyphicon glyphicon-send send_icon"></span>
// 														</button>
// 														</span>
// 												</div>
// 										</div>
// 								</li>
// 						</ul>
// 				</div>
// 		</div>
// </div>
    )
  }
}
