import React from 'react';
import LeftNavBar from '../components/leftnavbar.js';
import Footer from '../components/footer.js';
import RightSideBar from '../components/rightsidebar.js';
import {getUserData} from '../server';
import ErrorBanner from '../components/errorbanner.js';

export default class Origin extends React.Component {
  constructor(props) {
    super(props);
  }

  refresh() {
    getUserData("1", (userData) => {
      this.setState({user: userData});
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          {(this.state !== null) ? <LeftNavBar userData={this.state.user}/> : null }
          <div className="col-md-7 text-left">
            <ErrorBanner />
          {
            this.props.children
          }
          </div>
          {(this.state !== null) ? <RightSideBar userData={this.state.user}/> : null }
        </div>
        <Footer />
      </div>
    )
  }
}
