import Nav from "../components/nav"
import Header from "../components/header";
import BookingForm from "../components/bookingform";


function Reservations() {
    return (
        <div class="wrapper">
        <Header></Header>
        <Nav></Nav>
        <h1 id="pagetitle">Reservations</h1>
        <div id="bookform">
        <BookingForm></BookingForm>
        </div>
        </div>
        )
};

export default Reservations;