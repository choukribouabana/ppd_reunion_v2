// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {guid , getUnique , getLast , getFirst } from './helpers.js';
import Rdate from 'react-datetime';
import './reactAgendaCtrl.css';
import axios from "axios";
import AuthService from "../../../services/auth.service";
import ReservationService from "../../../services/reservation.service";
import SallesService from "../../../services/salles.service";

var now = new Date();


export default class ReactAgendaCtrl extends Component {
  constructor() {
    super();
    this.state = {
      listesalle: [],
      editMode: false,
      showCtrl: false,
      multiple: {},
      name: '',
      salle: 0,
      classes: 'priority-1',
      startDateTime: now,
      endDateTime: now
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.addEvent = this.addEvent.bind(this)
    this.updateEvent = this.updateEvent.bind(this)
    this.dispatchEvent = this.dispatchEvent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
 }

  componentDidMount() {
    SallesService.getlistesalle().then(res => {
      this.setState({listesalle: res.data})
    })

  if (this.props.itemColors) {
    this.setState({
      classes: Object.keys(this.props.itemColors)[0]
    })

  }
  setTimeout(function() {
    if(this.refs.eventName){
        this.refs.eventName.focus()
    }

  }.bind(this), 50);



  if (!this.props.selectedCells) {
    let start = now
    let endT = moment(now).add(15, 'Minutes');
    return this.setState({editMode: false, name: '', salle: 0, startDateTime: start, endDateTime: endT});
  }

  if (this.props.selectedCells && this.props.selectedCells[0] && this.props.selectedCells[0].__id) {

    let start = moment(this.props.selectedCells[0].startDateTime);
    let endT = moment(this.props.selectedCells[0].endDateTime);

    return this.setState({editMode: true, name: this.props.selectedCells[0].name,salle: this.props.selectedCells[0].salle, classes: this.props.selectedCells[0].classes, startDateTime: start, endDateTime: endT});

  }

  if (this.props.selectedCells && this.props.selectedCells.length === 1) {
    let start = moment(getFirst(this.props.selectedCells));
    let endT = moment(getLast(this.props.selectedCells)).add(15, 'Minutes');
    return this.setState({editMode: false, name: '', salle: 0, startDateTime: start, endDateTime: endT});
  }

  if (this.props.selectedCells && this.props.selectedCells.length > 0) {
    let start = moment(getFirst(this.props.selectedCells));
    let endT = moment(getLast(this.props.selectedCells)) || now;
    this.setState({editMode: false, name: '', salle:0, startDateTime: start, endDateTime: endT});
  }

}

  handleChange(event) {
    if(event.target.tagName === 'BUTTON'){
      event.preventDefault();
    }

    var data = this.state;
    data[event.target.name] = event.target.value;

    this.setState(data);
  }

  handleChangeSalle(event) {

    this.setState({salle: parseInt(event.target.value, 10)});

  }


  handleDateChange(ev, date) {
    var endD = moment(this.state.endDateTime)
  var data = this.state;
  data[ev] = date;

  if(ev === 'startDateTime' && endD.diff(date)< 0 ){
    data['endDateTime'] = moment(date).add(15 , 'minutes');
  }

  this.setState(data);

  }
  async fun1(obj){
    var boool = false;
    await ReservationService.getlisteReservations().then(res => {
      for (var i = res.data.length -1; i >=0 ; i--){
        if (Number(res.data[i].salle) === Number(obj.salle)){
          if((obj.startDateTime > new Date(res.data[i].startDateTime) &&
          obj.startDateTime < new Date(res.data[i].endDateTime)) || (obj.endDateTime > new Date(res.data[i].startDateTime) &&
              obj.endDateTime < new Date(res.data[i].endDateTime)) || (obj.startDateTime < new Date(res.data[i].startDateTime) &&
              obj.endDateTime > new Date(res.data[i].endDateTime))) {
            boool = true;
            alert("This is already a booking from "+res.data[i].startDateTime.toString()+
            " To : "+res.data[i].endDateTime.toString());
          }

        }
      }
    })
    return boool;
  }
  async fun2(obj){
    axios.post("http://localhost:8080/reservations/", obj)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
  }

async dispatchEvent(obj) {
  var newAdded = []
  var items = this.props.items;
  if (obj['multiple']) {
    var array = obj['multiple']
    Object.keys(array).forEach(function(key) {
      var newAr = array[key].filter(function(val, ind) {
        return array[key].indexOf(val) == ind;
      })
      var start = newAr[0];
      var endT = newAr[newAr.length - 1] || now;
      var lasobj = {
        __id: guid(),
        name: obj.name,
        salle: obj.salle,
        startDateTime: new Date(start),
        endDateTime: new Date(endT),
        classes: obj.classes
      }

      items.push(lasobj)
      newAdded.push(lasobj)
    }.bind(this));
    return this.props.Addnew(items, newAdded)
  }

  obj.__id = guid();

  const bl = await this.fun1(obj);
  if (!bl){
    await this.fun2(obj);
    items.push(obj);
    this.props.Addnew(items, obj);
  }




}

addEvent(e) {
  const currentUser = AuthService.getCurrentUser();

  if (this.state.name.length < 1) {
    return;
  }

  if(this.props.selectedCells && this.props.selectedCells.length > 0){

    var obj = this.props.selectedCells.reduce((r, v, i, a, k = v.substring(0, 10)) => ((r[k] = r[k] || []).push(v), r), {});

    if (Object.values(obj).length > 1) {
      var newObj = {
        name: this.state.name,
        salle: this.state.salle,
        idUser: currentUser.id,
        startDateTime: new Date(this.state.startDateTime),
        endDateTime: new Date(this.state.endDateTime),
        classes: this.state.classes,
        multiple: obj
      }

      return this.dispatchEvent(newObj);

    }

  }

  var newObj = {
    name: this.state.name,
    salle: this.state.salle,
    idUser: currentUser.id,
    startDateTime: new Date(this.state.startDateTime),
    endDateTime: new Date(this.state.endDateTime),
    classes: this.state.classes
  }
  this.dispatchEvent(newObj);
}

updateEvent(e) {
  if (this.props.selectedCells[0].__id && this.props.items) {

    var newObj = {
      __id: this.props.selectedCells[0].__id,
      name: this.state.name,
      salle: this.state.salle,
      startDateTime: new Date(this.state.startDateTime),
      endDateTime: new Date(this.state.endDateTime),
      classes: this.state.classes
    }
    var items = this.props.items
    for (var i = 0; i < items.length; i++) {
      if (items[i].__id === newObj.__id)
        items[i] = newObj;
      }
    if (this.props.edit) {
      this.props.edit(items, newObj);
    }

  }

}


handleSubmit(e) {
  e.preventDefault();
  /*const reser = {
    name: "bouabanachoukri",
    salle: "4125"
  };

  axios.post("http://localhost:8080/reservations/", reser)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })*/
  this.addEvent(e);


}

handleEdit(e) {
  e.preventDefault();
  this.updateEvent(e);
}



render() {
  var itc = Object.keys(this.props.itemColors)
  var colors = itc.map(function(item, idx) {

    return <div style={{
      background: this.props.itemColors[item]
    }} className="agendCtrls-radio-buttons" key={item}>
      <button name="classes"  value={item} className={this.state.classes === item?'agendCtrls-radio-button--checked':'agendCtrls-radio-button'} onClick={this.handleChange.bind(this)}/>
    </div>
  }.bind(this))

  const divStyle = {};

  if (this.state.editMode) {

    var select = this.props.selectedCells[0];

    return (

      <div className="agendCtrls-wrapper" style={divStyle}>
        <form onSubmit={this.handleEdit}>
          <div className="agendCtrls-label-wrapper">
            <div className="agendCtrls-label-inline">
              <label>Event name</label>
              <select name="salle" autoFocus ref="eventName" className="agendCtrls-event-input" value={this.state.salle} onChange={this.handleChangeSalle.bind(this)} placeholder="Salle">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value={this.state.listesalle[0].numsalle}>{this.state.listesalle[0].numsalle}</option>
              </select>
            </div>
            <div className="agendCtrls-label-inline">
              <label>salle</label>
              <select name="salle" autoFocus ref="eventName" className="agendCtrls-event-input" value={this.state.salle} onChange={this.handleChangeSalle.bind(this)} placeholder="Salle">
                {this.state.listesalle.map(item => (
                    <option className="agendCtrls-event-input" value={item.numsalle}>{item.numsalle}</option> ))
                }
              </select>
            </div>

            <div className="agendCtrls-label-inline ">
              <label>Color</label>
              <div className="agendCtrls-radio-wrapper">
                {colors}</div>
            </div>
          </div>
          <div className="agendCtrls-timePicker-wrapper">
            <div className="agendCtrls-time-picker">
              <label >Start Date</label>
              <Rdate value={this.state.startDateTime} onChange={this.handleDateChange.bind(null, 'startDateTime')} input={false} viewMode="time" ></Rdate>
            </div>
            <div className="agendCtrls-time-picker">
              <label >End Date</label>
              <Rdate value={this.state.endDateTime} onChange={this.handleDateChange.bind(null, 'endDateTime')} input={false} viewMode="time" ></Rdate>
            </div>
          </div>

          <input type="submit" value="Save"/>
        </form>
      </div>
    );

  }

  return (
    <div className="agendCtrls-wrapper" style={divStyle}>
      <form onSubmit={this.handleSubmit}>
        {/*<p>
        {
          this.state.listesalle.map(item => (
              <div class="row padding">
                <div class="alert alert-info rounded-pill" role="alert">
                  <div>{item.numsalle}</div>
                </div>
              </div>
          ))
          JSON.stringify(this.state.listesalle[0])
        }</p>*/}

        <div className="agendCtrls-label-wrapper">
          <div className="agendCtrls-label-inline">
            <label>Event name</label>
            <input type="text" ref="eventName" autoFocus name="name" className="agendCtrls-event-input" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Event Name"/>
          </div>
          <div className="agendCtrls-label-inline">
            <label>salle</label>
            <select name="salle" autoFocus ref="eventName" className="agendCtrls-event-input" value={this.state.salle} onChange={this.handleChangeSalle.bind(this)} placeholder="Salle">
              {this.state.listesalle.map(item => (
                  <option className="agendCtrls-event-input" key={item.numsalle} value={item.numsalle}>{item.numsalle}</option> ))
              }
            </select>
          </div>
          <div className="agendCtrls-label-inline">
            <label>Color</label>
            <div className="agendCtrls-radio-wrapper">
              {colors}</div>
          </div>
        </div>
        <div className="agendCtrls-timePicker-wrapper">
          <div className="agendCtrls-time-picker">
            <label >Start Date</label>
            <Rdate value={this.state.startDateTime} onChange={this.handleDateChange.bind(null, 'startDateTime')} input={false} viewMode="time" ></Rdate>
          </div>
          <div className="agendCtrls-time-picker">
            <label >End Date</label>
            <Rdate value={this.state.endDateTime} onChange={this.handleDateChange.bind(null, 'endDateTime')} input={false} viewMode="time" ></Rdate>
          </div>
        </div>

        <input type="submit" value="Save"/>
      </form>

    </div>
  );
}
}


ReactAgendaCtrl.propTypes = {
  items: PropTypes.array,
  itemColors: PropTypes.object,
  selectedCells: PropTypes.array,
  edit: PropTypes.func,
  Addnew: PropTypes.func

};

ReactAgendaCtrl.defaultProps = {
  items: [],
  itemColors: {},
  selectedCells: []
  }
