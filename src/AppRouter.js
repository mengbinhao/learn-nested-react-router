import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => {
  return <h4>我是首页</h4>
}

const Video = () => {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/video/">video1</Link>
          </li>
          <li>
            <Link to="/video/video2/">video2</Link>
          </li>
          <li>
            <Link to="/video/video3/">video3</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h4>video page</h4>
          <Route path="/video/" exact component={Video1}></Route>
          <Route path="/video/video2/" component={Video2}></Route>
          <Route path="/video/video3/" component={Video3}></Route>
        </div>
      </div>
    </div>
  )
}

const Video1 = () => {
  return <h4>Video1</h4>
}

const Video2 = () => {
  return <h4>Video2</h4>
}

const Video3 = () => {
  return <h4>Video3</h4>
}

const Audio = () => {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/audio/">audio1</Link>
          </li>
          <li>
            <Link to="/audio/audio2/">audio2</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h4>video page</h4>
          <Route path="/audio/" exact component={Audio1}></Route>
          <Route path="/audio/audio2/" component={Audio2}></Route>
        </div>
      </div>
    </div>
  )
}

const Audio1 = () => {
  return <h4>Audio1</h4>
}

const Audio2 = () => {
  return <h4>Audio2</h4>
}

const AppRouter = () => {
  let routeConfig = [
    { path: '/', title: 'blog', exact: true, component: Index },
    { path: '/video/', title: 'video', exact: false, component: Video },
    { path: '/audio/', title: 'audio', exact: false, component: Audio }
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h6>一级导航</h6>
          <ul>
            {routeConfig.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="rightMain">
          {routeConfig.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.component}
              ></Route>
            )
          })}
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
