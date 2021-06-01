import React, { Component  } from 'react';
import ReservationService from "./services/reservation.service";
import AuthService from "./services/auth.service"

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
        const currentUser = AuthService.getCurrentUser();
        return(
            /*<div>
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
            </div>*/
            <div>
                <p>{JSON.stringify(currentUser)}</p>
                <p>{currentUser.id}</p>
                {/*<p>{currentUser._id}</p>
                <p>{currentUser.password}</p>
                <p>{currentUser.roles}</p>*/}
            </div>

        )
    }
}

export default GetReservations
