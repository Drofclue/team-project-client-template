import React from 'react';
import Message_Chat_Item from './messagechatitem.js';
// import MessageChatItem from './messagechatitem.js'

export default class UserMessagesChat extends React.Component{
  render(){
    return(
      <div>
        <div className="col-md-7 text-left">
          <h2>Messages</h2>
          <div className="panel panel-default messages">
            <div className="panel-body">
              <Message_Chat_Item avatar='img/cherry.png' user='LingoDaddy24' status=' ● Online' message='Hey you! Are you coming to the game?' timestamp='12:43PM'/>
              <hr />
              <Message_Chat_Item avatar='img/you.jpeg' user='You' message='Not feeling well today... Probably not coming' timestamp='2 minutes ago'/>
              <hr />
              <Message_Chat_Item avatar='img/cherry.png' user='LingoDaddy24' status=' ● Online' message='Damn dude hope you feel better soon!' timestamp='About a minute ago'/>
              <hr />
              <Message_Chat_Item avatar='img/you.jpeg' user='You' message='Thanks! You guys are probably gonna get rekt without me though :p' timestamp='A few seconds ago'/>
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
