import React, {Component} from 'react';
import './css/App.css'
import { connect } from 'react-redux'
import { setData1,setData2 } from './actions/MonitorAction'
import axios from 'axios'
import Monitor from './tabs/Monitor'
import History from './tabs/History'
import { Tabs,TabLink,TabContent } from 'react-tabs-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faThermometerHalf, faWind, faCloud } from '@fortawesome/free-solid-svg-icons'

library.add(faTint,faThermometerHalf,faWind,faCloud)

class App extends Component {

    state = {
        now: new Date()
    }

    componentDidMount(){
        this.getData1()
        this.getData2()
        this.get_interval = setInterval(() => {
            this.getData1()
            this.getData2()
            this.setState({now : new Date()})
        }, 4000)
    }

    pad = (n) => {
        return (n < 10) ? ("0" + n) : n;
    }

    componentWillUnmount(){
        clearInterval(this.get_interval)
        clearInterval(this.post_interval)
    }

    async getData1(){
        await fetch("http://203.154.132.69:5000/aismagellan/things")
        .then(response => 
            response.json()).then(json => {
                this.props.dispatch(setData1(json))
        }).catch(error => console.log(error))
    }

    async getData2(){
        await fetch("http://203.154.132.69:5000/aismagellan/things2")
        .then(response => 
            response.json()).then(json => {
                this.props.dispatch(setData2(json))
        }).catch(error => console.log(error))
    }

    render () {
        return (
            <Tabs className="app-container"
                activeLinkStyle={{borderBottom: "5px solid #4716F6"}}>
                <div className="app-wrapper">
                    <div className="banner">
                        <TabLink className="header-text-wrapper" to="monitor">
                            Monitoring
                        </TabLink>
                        <TabLink className="header-text-wrapper" to="report">
                            Report
                        </TabLink>
                        <TabLink className="header-text-wrapper" to="history">
                            History
                        </TabLink>
                    </div>
                    <TabContent for="monitor">
                        <Monitor/>
                    </TabContent>
                    <TabContent for="report">
                    </TabContent>
                    <TabContent for="history">
                        <History update={() => {this.forceUpdate()}}/>
                    </TabContent>
                </div>
            </Tabs>
        )
    }

}

export default connect(state => state)(App)
