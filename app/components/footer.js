import React from 'react';

export default class Footer extends React.Component{
  render(){
    return(
      <div>
      <div class="col-md-3 text-left">
          <section id="logo-ad" class="widget widget_black_studio_tinymce">
              <div class="textwidget">
                  <p>
                      <a href="/template.html"> <img src="img/cherry_logo.png" alt="logo" width="60px" height="60" /></a>
                  </p>
                  <p>Thanks For Choosing Cherry Picker</p>
              </div>
          </section>
      </div>
      <div class="col-md-3 text-left">
          <section id="Customer-service-info" class="widget widget_black_studio_tinymce">
              <h5 class="widget-title">Customer service hours</h5>
              <div class="textwidget">
                  <p>Call us anytime cuz we go ham</p>
              </div>
          </section>
      </div>
      <div class="col-md-3 text-left">
          <section id="brief-info" class="widget widget_black_studio_tinymce">
              <h5 class="widget-title">Some more Information about cherry picker</h5>
              <div class="textwidget">
                  <p>text box</p>
              </div>
          </section>
      </div>

      <div class="col-md-3 text-left">
          <section id="social-widget" class="widget Social_Widget">
              <h5 class="widget-title">Follow us!</h5>
              <div class="socialmedia-buttons smw_left">
                  <a href="http://facebook.com" rel="nofollow" target="_blank"><img width="32" height="32" src="/img/fb.png" alt="Follow Us on Facebook" title="Follow Us on Facebook" style="opacity: 0.8; -moz-opacity: 0.8;" class="fade"></a>
                  <a href="http://plus.google.com" rel="publisher" target="_blank"><img width="32" height="32" src="/img/g+.png" alt="Follow Us on Google+" title="Follow Us on Google+" style="opacity: 0.8; -moz-opacity: 0.8;" class="fade"></a>
                  <a href="http://twitter.com" rel="nofollow" target="_blank"><img width="32" height="32" src="/img/tt.png" alt="Follow Us on Twitter" title="Follow Us on Twitter" style="opacity: 0.8; -moz-opacity: 0.8;" class="fade"></a>
                  <a href="http://linkedin.com" rel="nofollow" target="_blank"><img width="32" height="32" src="/img/in.png" alt="Follow Us on LinkedIn" title="Follow Us on LinkedIn" style="opacity: 0.8; -moz-opacity: 0.8;" class="fade"></a>
              </div>
          </section>
      </div>
      </div>
    )
  }
}
