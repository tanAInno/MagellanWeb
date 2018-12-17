import React, {Component} from 'react';
import '../css/App.css'
import { connect } from 'react-redux'
import SCP from 'react-progressbar-semicircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Monitor extends Component{

    renderPMNumber(PM){
        if(PM <= 35){
            return(
                <div className="data-number-green">
                    {PM}
                </div>
            )
        }
        else{
            return(
                <div className="data-number-red">
                    {PM}
                </div>
            )
        }
    }

    renderCO2Number(CO2){
        return(
            <div className="data-number-green">
                {CO2}
            </div>
        )
    }

    renderTempNumber(Temp){
        if(Temp >= 23 && Temp <= 27){
            return(
                <div className="data-number-green">
                    {Temp}
                </div>
            )
        }
        else{
            return(
                <div className="data-number-red">
                    {Temp}
                </div>
            )
        }
    }

    renderHumNumber(Humid){
        if(Humid >= 30 && Humid <= 70){
            return(
                <div className="data-number-green">
                    {Humid}
                </div>
            )
        }
        else{
            return(
                <div className="data-number-red">
                    {Humid}
                </div>
            )
        }
    }

    renderPMStatus(PM){
        if(PM <= 35){
            return(
                <div className="data-status-good">
                    Good
                </div>
            )
        }
        else{
            return(
                <div className="data-status-bad">
                    Bad
                </div>
            )
        }
    }

    renderCO2Status(CO2){
        return(
            <div className="data-status-good">
                Good
            </div>
        )
    }

    renderTempStatus(Temp){
        if(Temp >= 23 && Temp <= 27){
            return(
                <div className="data-status-good">
                    Good
                </div>
            )
        }
        else{
            return(
                <div className="data-status-bad">
                    Bad
                </div>
            )
        }
    }

    renderHumStatus(Humid){
        if(Humid >= 30 && Humid <= 70){
            return(
                <div className="data-status-good">
                    Good
                </div>
            )
        }
        else{
            return(
                <div className="data-status-bad">
                    Bad
                </div>
            )
        }
    }

    renderProgress(data){
        if(window.innerWidth < 1024){
            return(
                <SCP
                    percentage={data}
                    stroke="#A239CA"
                    background="#0e0b16"
                    strokeWidth="15"
                    diameter="200"/>
            )
        }
        else if(window.innerWidth >= 1024 && window.innerWidth < 1366){
            return(
                <SCP
                    percentage={data}
                    stroke="#A239CA"
                    background="#0e0b16"
                    strokeWidth="15"
                    diameter="205"/>
            )
        }
        else{
            return(
                <SCP
                    percentage={data}
                    stroke="#A239CA"
                    background="#0e0b16"
                    strokeWidth="20"
                    diameter="270"/>
            )
        }
    }

    render () {
        return (
            <div className="content">
                <div className="device-name">DHT21Temp/Hum</div>
                <div className="content-row">
                    <div className="circle-box">
                        <div className="progress">
                            {this.renderProgress(this.props.MonitorReducer.data1.PM2_5)}
                        </div>
                        {this.renderPMNumber(this.props.MonitorReducer.data1.PM2_5)}
                        <div className="data-header">
                            <FontAwesomeIcon icon="wind" className="icon"/> PM2_5
                        </div>
                        {this.renderPMStatus(this.props.MonitorReducer.data1.PM2_5)}
                    </div>
                    <div className="circle-box" style={{marginLeft: '3%', marginRight: '3%'}}>
                        <div className="progress">
                            {this.renderProgress((this.props.MonitorReducer.data1.Temperature/50)*100)}
                        </div>
                        {this.renderTempNumber(this.props.MonitorReducer.data1.Temperature)}
                        <div className="data-header">
                            <FontAwesomeIcon icon="thermometer-half" className="icon"/> Temperature
                        </div>
                        {this.renderTempStatus(this.props.MonitorReducer.data1.Temperature)}
                    </div>
                    <div className="circle-box">
                        <div className="progress">
                            {this.renderProgress(this.props.MonitorReducer.data1.Humidity)}
                        </div>
                        {this.renderHumNumber(this.props.MonitorReducer.data1.Humidity)}
                        <div className="data-header">
                            <FontAwesomeIcon icon="tint" className="icon"/> Humidity
                        </div>
                        {this.renderHumStatus(this.props.MonitorReducer.data1.Humidity)}
                    </div>
                </div> 
                <div className="device-name">IAQ</div>
                <div className="content-row">
                    <div className="circle-box">
                        <div className="progress">
                            {this.renderProgress(this.props.MonitorReducer.data2.PM2_5)}
                        </div>
                        {this.renderPMNumber(this.props.MonitorReducer.data2.PM2_5)}
                        <div className="data-header">
                            <FontAwesomeIcon icon="wind" className="icon"/> PM2_5
                        </div>
                        {this.renderPMStatus(this.props.MonitorReducer.data2.PM2_5)}
                    </div>
                    <div className="circle-box" style={{marginLeft: '1%', marginRight: '1%'}}>
                        <div className="progress">
                            {this.renderProgress(this.props.MonitorReducer.data2.CO2/50)}
                        </div>
                        {this.renderCO2Number(this.props.MonitorReducer.data2.CO2)}
                        <div className="data-header">
                            <FontAwesomeIcon icon="cloud" className="icon"/> CO2
                        </div>
                        {this.renderCO2Status(this.props.MonitorReducer.data2.CO2)}
                    </div>
                    <div className="circle-box" style={{marginRight: '1%'}}>
                        <div className="progress">
                            {this.renderProgress((this.props.MonitorReducer.data2.Temperature/50)*100)}
                        </div>
                        {this.renderTempNumber(this.props.MonitorReducer.data2.Temperature)}
                        <div className="data-header">
                            <FontAwesomeIcon icon="thermometer-half" className="icon"/> Temperature
                        </div>
                        {this.renderTempStatus(this.props.MonitorReducer.data2.Temperature)}
                    </div>
                    <div className="circle-box">
                        <div className="progress">
                            {this.renderProgress(this.props.MonitorReducer.data2.Humidity)}
                        </div>
                        {this.renderHumNumber(this.props.MonitorReducer.data2.Humidity)}
                        <div className="data-header">
                            <FontAwesomeIcon icon="tint" className="icon"/> Humidity
                        </div>
                        {this.renderHumStatus(this.props.MonitorReducer.data2.Humidity)}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default connect(state => state)(Monitor)