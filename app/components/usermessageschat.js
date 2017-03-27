import React from 'react';
// import MessageChatItem from './messagechatitem.js'

export default class UserMessagesChat extends React.Component{
  render(){
    return(
      <div>
        <div className="col-md-7 text-left">
          <p>
          <h2>Messages</h2>
          </p>
          <div className="panel panel-default messages">
            <div className="panel-body">
              <Message_Chat_Item  user='LingoDaddy24' status='● Online' message='Hey you! Are you coming to the game?'
                ><Message_Chat_Item />
              <hr />
              <div className="media">
                <div className="media-left media-top">
                  <img src="img/you.jpeg" width="40" height="40"  alt="Picture" />
                </div>
                <div className="media-body">
                  <a href="#">You</a>
                  <br />Not feeling well today... Probably not coming
                  <font color="grey" >
                    <p className="timestamp pull-right">
                      <span className="glyphicon glyphicon-time"></span>
                      2 minutes ago
                    </p>
                  </font>
                </div>
              </div>
              <hr />
              <div className="media">
                <div className="media-left media-top">
                  <img src="img/cherry.png" width="40" height="40"  alt="Picture" />
                </div>
                <div className="media-body">
                  <a href="#">LingoDaddy24</a>
                  <span className="green">● Online</span>
                  <br />Damn dude hope you feel better soon!
                  <font color="grey" >
                    <p className="timestamp pull-right">
                      <span className="glyphicon glyphicon-time"></span>
                      About a minute ago
                    </p>
                  </font>
                </div>
              </div>
              <hr />
              <div className="media">
                <div className="media-left media-top">
                  <img src="img/you.jpeg" width="40" height="40"  alt="Picture" />
                </div>
                <div className="media-body">
                  <a href="#">You</a>
                  <br />Thanks! You guys are probably gonna get rekt without me though :p
                  <font color="grey" >
                    <p className="timestamp pull-right">
                      <span className="glyphicon glyphicon-time"></span>
                      A few seconds ago
                    </p>
                  </font>
                </div>
              </div>
              <hr />
              <font color="grey" >
                <p className="typing">
                  LingoDaddy24 is typing...
                </p>
              </font>
              <form className="navbar-form pull-right" role="search">
                <div className="input-group">
                  <input type="text" className="form-control send_message" placeholder="Type your message..." />
                  <span className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                  <span className="glyphicon glyphicon-send"></span>
                  </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
