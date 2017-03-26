import React from 'react';

export default class Footer extends React.Component{
  render(){
    return(
      <div>
      <div className="col-md-3 text-left">
          <section id="logo-ad" className="widget widget_black_studio_tinymce">
              <div className="textwidget">
                  <p>
                      <a href="#"> <img src="img/cherry_logo.png" alt="logo" width="60px" height="60" /></a>
                  </p>
                  <p>Thanks For Choosing Cherry Picker</p>
              </div>.
          </section>
      </div>
      <div className="col-md-3 text-left">
          <section id="Customer-service-info" className="widget widget_black_studio_tinymce">
              <h5 className="widget-title">Customer-service-info section</h5>
              <div className="textwidget">
                  <p>Company information</p>
              </div>
          </section>
      </div>
      <div className="col-md-3 text-left">
          <section id="brief-info" className="widget widget_black_studio_tinymce">
              <h5 className="widget-title">Some more Information about cherry picker</h5>
              <div className="textwidget">
                <hr />  <p>text box</p>
              </div>
          </section>
      </div>

      <div className="col-md-3 text-left">
          <section id="social-widget" className="widget Social_Widget">
              <h5 className="widget-title">Follow us!</h5>
              <div className="socialmedia-buttons smw_left">
                  <a href="#" rel="nofollow" target="_blank"><img width="32" height="32" src="/img/fb.png" alt="Follow Us on Facebook" title="Follow Us on Facebook" style="opacity: 0.8; -moz-opacity: 0.8;" className="fade" /></a>
                  <a href="#" rel="publisher" target="_blank"><img width="32" height="32" src="/img/g+.png" alt="Follow Us on Google+" title="Follow Us on Google+" style="opacity: 0.8; -moz-opacity: 0.8;" className="fade" /></a>
                  <a href="#" rel="nofollow" target="_blank"><img width="32" height="32" src="/img/tt.png" alt="Follow Us on Twitter" title="Follow Us on Twitter" style="opacity: 0.8; -moz-opacity: 0.8;" className="fade" /></a>
                  <a href="#" rel="nofollow" target="_blank"><img width="32" height="32" src="/img/in.png" alt="Follow Us on LinkedIn" title="Follow Us on LinkedIn" style="opacity: 0.8; -moz-opacity: 0.8;" className="fade" /></a>
              </div>
          </section>
      </div>
      </div>
    )
  }
}
