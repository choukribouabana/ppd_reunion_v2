import React, { Component  } from 'react';
import ReservationService from "./services/reservation.service";

class GetReservations extends Component {
    constructor(props) {
        super(props);
        this.state= {
            reservations : [],
            loaded : false
        }
    }

    async componentDidMount(){
    this.fetch();
}

fetch = () => {
    ReservationService.getlisteReservations().then(res => {
        //console.log(res.data);
        this.setState({
            reservations: res.data,
            loaded : true, });
    });
}

    render() {
        return(
            <div>
                {
                    this.state.reservations.map(reservation =>(
                        <div>
                    <p>{reservation.name}</p>
                    <p>{reservation.salle}</p>
                    <p>{reservation.startDateTime}</p>
                    <p>{reservation.endDateTime}</p>
                    <p>{reservation.classes}</p>
                            </div>

                    ))

                }
            </div>
        )
    }
}

export default GetReservations
