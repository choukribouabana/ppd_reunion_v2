// @flow
import React, { Component } from 'react';
import moment from 'moment';
//import { ReactAgendaCtrl, guid , getUnique , getLast , getFirst} from "./page_agenda/index";
import { guid, getUnique , getLast , getFirst }  from "./page_agenda/helpers";
import ReactAgenda from "./page_agenda/reactAgenda";
import ReactAgendaCtrl from "./page_agenda/reactAgendaCtrl"
import ModalView from "./page_agenda/Modal/Modal"
import ReservationService from "../../services/reservation.service";
import AuthService from "../../services/auth.service";
import PrimarySearchAppBar from "../page_accueil/PrimarySearchAppBar";
var now = new Date();

require('moment/locale/fr.js');
var colors= {
    'color-1':"rgba(102, 195, 131 , 1)" ,
    "color-2":"rgba(242, 177, 52, 1)" ,
    "color-3":"rgba(235, 85, 59, 1)" ,
    "color-4":"rgba(70, 159, 213, 1)",
    "color-5":"rgba(170, 59, 123, 1)"
}


/*var items = [
  {
    name          : 'Meeting , dev staff!',
      salle : '1',
    startDateTime : "2021-05-30T12:57:11.633Z",
    endDateTime   : "2021-05-30T13:57:11.633Z",
    classes       : 'color-1 color-4'
  }
  ,
  {
   __id            :guid(),
    name          : 'Conference , plaza',
      salle : '3',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11 , 0),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 14 ,30),
    classes       : 'color-4'
  },
  {
   __id            :'event-4',
    name          : 'Customers issues review',
      salle : '4',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+2, 10, 0),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+2, 15, 0),
    classes       : 'color-3'

  },
  {
    __id           :'event-5',
    name          : 'Group activity',
      salle : '5',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 10, 0),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 16, 30),
    classes       : 'color-4'
  },
  {
    __id           :'event-6',
    name          : 'Fun Day !',
      salle : '6',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+7, 9, 14),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+7, 17),
    classes       : 'color-3'
  }
];*/

export default class Admin_agenda extends Component {
    constructor(props){
        super(props);



        this.state = {
            items:[],
            loaded: false,
            selected:[],
            cellHeight:(60 / 4),
            showModal:false,
            locale:"fr",
            rowsPerHour:4,
            numberOfDays:4,
            startDate: new Date()
        }
        this.handleRangeSelection = this.handleRangeSelection.bind(this)
        this.handleItemEdit = this.handleItemEdit.bind(this)
        this.zoomIn = this.zoomIn.bind(this)
        this.zoomOut = this.zoomOut.bind(this)
        this._openModal = this._openModal.bind(this)
        this._closeModal = this._closeModal.bind(this)
        this.addNewEvent = this.addNewEvent.bind(this)
        this.removeEvent = this.removeEvent.bind(this)
        this.editEvent = this.editEvent.bind(this)
        this.changeView = this.changeView.bind(this)
        this.handleCellSelection = this.handleCellSelection.bind(this)

    }

    componentDidMount(){
        this.fetch();
    }
    fetch = () => {
        const currentUser = AuthService.getCurrentUser();
        ReservationService.getlisteReservations().then(res => {
            /*var mm = 0;
            for (var i = res.data.length -1; i >=0 ; i--){
                if (res.data[i].idUser.localeCompare(currentUser.id)){
                    res.data.splice(i, 1);
                    mm ++;
                }
            }*/
            for (var i = 0; i < res.data.length; i++) {
                res.data[i].startDateTime = new Date(res.data[i].startDateTime);
                res.data[i].endDateTime = new Date(res.data[i].endDateTime);
            }

            this.setState({
                items: res.data,
                loaded: true,
            });
        });
    }


    componentWillReceiveProps(next , last){
        if(next.items){

            this.setState({items:next.items})
        }
    }
    handleItemEdit(item, openModal){

        if(item && openModal === true){
            this.setState({selected:[item] })
            return this._openModal();
        }



    }
    handleCellSelection(item, openModal) {

        if(this.state.selected && this.state.selected[0] === item){
            return  this._openModal();
        }
        this.setState({selected:[item] })

    }

    zoomIn(){
        var num = this.state.cellHeight + 15
        this.setState({cellHeight:num})
    }
    zoomOut(){
        var num = this.state.cellHeight - 15
        this.setState({cellHeight:num})
    }


    handleDateRangeChange (startDate, endDate) {
        this.setState({startDate:startDate })

    }

    handleRangeSelection (selected) {


        this.setState({selected:selected , showCtrl:true})
        this._openModal();

    }

    _openModal(){
        this.setState({showModal:true})
    }
    _closeModal(e){
        if(e){
            e.stopPropagation();
            e.preventDefault();
        }
        this.setState({showModal:false})
        window.location.reload(false);
    }

    handleItemChange(items , item){

        this.setState({items:items})
    }

    handleItemSize(items , item){

        this.setState({items:items})

    }

    removeEvent(items , item){

        this.setState({ items:items});
    }

    addNewEvent (items , newItems){

        this.setState({showModal:false ,selected:[] , items:items});
        this._closeModal();
    }
    editEvent (items , item){

        this.setState({showModal:false ,selected:[] , items:items});
        this._closeModal();
    }

    changeView (days , event ){
        this.setState({numberOfDays:days})
    }


    render() {


        var AgendaItem = function(props){
            console.log( ' item component props' , props)
            return <div style={{display:'block', position:'absolute' , background:'#FFF'}}>{props.item.name} <button onClick={()=> props.edit(props.item)}>Edit </button></div>
        }
        return (

            <div className="content-expanded ">
                <PrimarySearchAppBar/>
                {/*<div>{
            this.state.items.map(item => (
                <p>{item.startDateTime}</p>
            ))
        }
        </div>*/}
                {/*<div>{
              this.state.items.map(item => (
                  <p>{item.startDateTime.toString()}</p>
              ))
          }
          </div>*/}
                <div className="control-buttons">
                    <button  className="button-control" onClick={this.zoomIn}> <i className="zoom-plus-icon"></i> </button>
                    <button  className="button-control" onClick={this.zoomOut}> <i className="zoom-minus-icon"></i> </button>
                    <button  className="button-control" onClick={this._openModal}> <i className="schedule-icon"></i> </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 7)}> {moment.duration(7, "days").humanize()}  </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 4)}> {moment.duration(4, "days").humanize()}  </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 3)}> {moment.duration(3, "days").humanize()}  </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 1)}> {moment.duration(1, "day").humanize()} </button>
                </div>
                {/*<div>
              {JSON.stringify(this.state.items[0])}
          </div>*/}
                <ReactAgenda
                    minDate={new Date(now.getFullYear(), now.getMonth()-3)}
                    maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
                    startDate={this.state.startDate}
                    startAtTime={8}
                    endAtTime={23}
                    cellHeight={this.state.cellHeight}
                    locale="fr"
                    items={this.state.items}
                    numberOfDays={this.state.numberOfDays}
                    headFormat={"ddd DD MMM"}
                    rowsPerHour={this.state.rowsPerHour}
                    itemColors={colors}
                    helper={true}
                    //itemComponent={AgendaItem}
                    view="calendar"
                    autoScale={false}
                    fixedHeader={true}
                    onRangeSelection={this.handleRangeSelection.bind(this)}
                    onChangeEvent={this.handleItemChange.bind(this)}
                    onChangeDuration={this.handleItemSize.bind(this)}
                    onItemEdit={this.handleItemEdit.bind(this)}
                    onCellSelect={this.handleCellSelection.bind(this)}
                    onItemRemove={this.removeEvent.bind(this)}
                    onDateRangeChange={this.handleDateRangeChange.bind(this)} />
                {
                    this.state.showModal? <ModalView clickOutside={this._closeModal} >
                        <div className="modal-content">
                            <ReactAgendaCtrl items={this.state.items} itemColors={colors} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent}  />

                        </div>
                    </ModalView>:''
                }


            </div>

        );
    }
}
