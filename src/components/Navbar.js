import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-current="page" href="/" aria-disabled="true">disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>

          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{ height: '25px', width: '25px',cursor: 'pointer',border:'1px solid black' }}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{ height: '25px', width: '25px',cursor: 'pointer',border:'1px solid black' }}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{ height: '25px', width: '25px',cursor: 'pointer',border:'1px solid black' }}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{ height: '25px', width: '25px',cursor: 'pointer',border:'1px solid black' }}></div>
            <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{ height: '25px', width: '25px',cursor: 'pointer',border:'1px solid white' }}></div>
            <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{ height: '25px', width: '25px',cursor: 'pointer',border:'1px solid white' }}></div>
            <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{ height: '25px', width: '25px',cursor: 'pointer',border:'1px solid white' }}></div>
          </div>  

          <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode3} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable LightSalmon</label>
          </div>
          <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable DarkCyan</label>
          </div>
          {/* <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div> */}
        </div>
      </div>
    </nav>
  )
}
