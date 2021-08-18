import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile'
import PrivMessages from './PrivMessages'


function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/sign-up' component={Signup} />
                <Route path='/log-in' component={Login} />
                <Route path='/log-out' component={Logout} />
                <Route path='/profile' component={Profile} />
                <Route path='/private-messages' component={PrivMessages} />
                <Route exact path='/' component={HomePage} />
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