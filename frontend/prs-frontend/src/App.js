import './App.css';
import { config } from './Config';
import { PublicClientApplication} from '@azure/msal-browser';
import React, { Component } from 'react';
import { Router } from 'react-router';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PatientsList from "./components/PatientsList";
import NotFound from "./components/NotFound";
import AddPatient from "./components/AddPatient";
import PatientVisits from "./components/PatientVisits";
import AddEditVisit from "./components/AddVisit";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isAuthenticated: false,
            user: {}
        };
        this.login = this.login.bind(this)
        this.publicClientApplication = new PublicClientApplication({
            auth: {
                clientId: config.appId,
                client_secret: config.client_secret,
                redirectUri: config.redirectUri
            },
            cache: {
                cacheLocation: "sessionStorage",
                storeAuthStateInCookie: true
            }
        });
    }

    async login() {
        try {
            await this.publicClientApplication.loginPopup({
                scopes: config.scopes,
                prompt: "select_account"
            });

            this.setState({isAuthenticated:true});
            window.location = "/home";
        }
        catch(err) {
            this.setState({
                isAuthenticated: false,
                user: {},
                error: err
            });
        }
    }

    logout() {
       this.publicClientApplication.logoutRedirect(); 
    }

    render() {
        return (
            <div className = "App">
                <header className = "App-header">
                    {this.state.isAuthenticated ?
                    <p>
                    Logged in
                    <Link to={'/home'} className="nav-link"> Home </Link>
                    </p> :
                    
                    <div class = "login">
                        <nav class="navbar navbar-expand-md navbar-custom">
                            <div class="container-fluid">
                              <a class="navbar-brand" href="#"><h1>Patient Information System</h1></a>
                            </div>
                          </nav>

                        <div class = "small-middle-container">
                            <div class = "row homerow text-center">
                                <div class = "col">
                                    <button onClick = {() => this.login()}> <h1>Hospital Staff Login Here</h1> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </header>
            </div>
        );
    }
}

export default App;