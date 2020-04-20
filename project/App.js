import React from "react"
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Nav from "./component/Nav";
import Menu from "./component/Menu";
import Home from './views/home.js'
import Course from './views/course.js'
import User from './views/user.js'
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <header className={'headerBox'}>
                        <Nav></Nav>
                    </header>
                    <main className={'mainBox'}>
                        {/*有<Switch>标签，则其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配；*/}
                        <Switch>
                            <Route path={'/home'} component={Home}></Route>
                            <Route path={'/course'} component={Course}></Route>
                            <Route path={'/user'} component={User}></Route>
                            <Redirect to={'/home'}></Redirect>
                        </Switch>
                    </main>
                    <footer className={'footerBox'}>
                        <Menu></Menu>
                    </footer>
                </Router>
            </div>
        )
    }
}
export default App;
