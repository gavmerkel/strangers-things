import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile'
import PrivMessages from './PrivMessages'
import { EmptyHeader, UnauthenticatedHeader, AuthenticatedHeader } from './Headers'


function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  return (
    <div>
        <Router>
            <Switch>
                <Route path='/home'>
                  <HomePage 
                  AuthenticatedHeader={<AuthenticatedHeader/>} 
                  UnauthenticatedHeader={<UnauthenticatedHeader/>}
                  isUserLoggedIn={isUserLoggedIn}
                  />
                </Route>

                <Route path='/sign-up'>
                  <Signup 
                  EmptyHeader={<EmptyHeader/>}
                  />
                </Route>

                <Route path='/log-in'>
                  <Login 
                  EmptyHeader={<EmptyHeader/>}
                  />
                </Route>

                <Route path='/log-out'>
                  <Logout 
                  EmptyHeader={<EmptyHeader/>}
                  />
                </Route>

                <Route path='/profile'>
                  <Profile 
                  AuthenticatedHeader={<AuthenticatedHeader/>}
                  isUserLoggedIn={isUserLoggedIn}
                  />
                </Route>

                <Route path='/private-messages'>
                  <PrivMessages AuthenticatedHeader={<AuthenticatedHeader/>}
                  isUserLoggedIn={isUserLoggedIn}
                  />
                </Route>

                <Route exact path='/'>
                  <Redirect to='/home' />
                </Route>
            </Switch>
        </Router>
    </div>
  )
}

//Login Logout Profile Posts Home PrivMessages

export default App;

// function App() {
//     return (

//       <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        
//         <div className="w-100" style={{ maxWidth: "400px" }}>

//           <Router>

//               <Switch>

//                 <PrivateRoute exact path='/' component={Dashboard} />
//                 <PrivateRoute path='/update-profile' component={UpdateProfile} />
//                 <Route path='/signup' component={Signup} />
//                 <Route path='/login' component={Login} />
//                 <Route path='/forgot-password' component={ForgotPassword} />

//               </Switch>

//           </Router>

//         </div>

//       </Container>

//     )
//   }