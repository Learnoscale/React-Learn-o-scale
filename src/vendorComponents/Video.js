import React from 'react'
import Menu from './Menu'
import {Footer} from './Footer'
import { Link } from 'react-router-dom'
import './Video.css'

export default function Video() {

  return(
<>
  {/* Google Tag Manager (noscript) */}
  <noscript>
    &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N78442F"
    height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  {/* End Google Tag Manager (noscript) */}
  <Menu/>
  <section
    className="banner-area relative about-banner b-opacity"
    id="home"
    style={{
      background:
        'url("https://soe-buck-lb.storage.googleapis.com/front-end/images/books.jpg") center',
      backgroundSize: "cover"
    }}
  >
    <div className="overlay overlay-bg" />
    <div className="container-fluid">
      <div className="align-items-center justify-content-center">
        <div className="about-content col-lg-12">
          <h1 className="text-white" style={{ textTransform: "uppercase" }}>
            Videos
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" /> <Link to="/videos"> Videos</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <br />
  <div className="container2">
    <div className="row">
      <div
        className="col-md-12 col-xs-12 col-sm-12"
        style={{
          padding: 0,
          borderBottom: "1px solid #80808061",
          marginBottom: 20
        }}
        id="Hlivevideos"
      >
        <h4 style={{ margin: "10px 0px 10px 0px", textTransform: "uppercase" }}>
          Live Videos
        </h4>
      </div>
      <div className="col-md-8 col-xs-12 col-sm-12">
        <div
          className="col-md-12 col-xs-12 col-sm-12"
          style={{ padding: 0 }}
          id="livevideos"
        />
      </div>
      <div className="col-md-4 col-xs-12 col-sm-12">
        <div
          className="col-md-12 col-xs-12 col-sm-12"
          style={{
            padding: 0,
            boxShadow: "0px 1px 1px 2px #eee",
            border: "3px solid #eee"
          }}
          id="livechat"
        />{" "}
      </div>
    </div>
    <div className="row">
      <div
        className="col-md-12 col-xs-12 col-sm-12"
        style={{
          padding: 0,
          borderBottom: "1px solid #80808061",
          marginBottom: 20,
          marginTop: 20
        }}
        id="Hupcomming"
      >
        <h4 style={{ margin: "10px 0px 10px 0px", textTransform: "uppercase" }}>
          Upcoming Videos
        </h4>
      </div>
      <ul
        className="list-unstyled video-list-thumbs row"
        id="upcommingvideos"
        style={{ marginTop: 5 }}
      />
    </div>
    <div className="row" id="watchvideos" />
    <div className="row">
      <div
        className="col-md-12 col-xs-12 col-sm-12"
        style={{
          padding: 0,
          borderBottom: "1px solid #80808061",
          marginBottom: 20,
          marginTop: 20
        }}
        id="HPlaylist"
      >
        <h4 style={{ margin: "10px 0px 10px 0px", textTransform: "uppercase" }}>
          Playlist
        </h4>
      </div>
      <div className="row" id="videoplaylist" />
    </div>
    <ul
      className="list-unstyled video-list-thumbs row"
      id="allvideo"
      style={{ marginTop: 5 }}
    />
  </div>
  <Footer/>
  <Link
    to="#"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </Link>
</>

  )
}