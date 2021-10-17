import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { checkAuth } from '../Router'

const Navigation = () => {
    return checkAuth() ? (
        <>
        <AppBar position="relative">
            <Toolbar className="navbar">
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add">Add</Link>
                    </li>
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                          
                            window.location.replace('/login')
                            window.location.replace('/login')
                            window.location.replace('/login')
                        }}>
                        LOGOUT
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
        <div className="logged-in">
            Logged in as: username
        </div>
        </>
    ) : (
        <AppBar position="relative">
            <Toolbar className="navbar">
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
