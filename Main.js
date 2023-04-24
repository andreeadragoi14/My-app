import './App.css';
import {useReducer} from "react";
import {Routes, Route} from 'react-router-dom';
import ConfirmedBooking from './ConfirmeBooking';

const reducer = (state, action) => {
  if (action.type ==='select-time') return {availableTimes: state.availableTimes - 1}
  if (action.type ==='select-time') return {availableTimes: state.availableTimes + 1}
  return state;
}

function submitForm(formData) {
return(
  submitAPI((formData)=== true);
)
}

function Main(props) {
  const initialState = (availableTimes)
  const [state, dispatch] = userReducer(reducer, initialState);

  return (
 <Routes>
    <Route path="/" element={<HomePage />}>Home</Route>
    <Route path="/about" element={<About />}>About</Route>
    <Route path="/menu" element={<Menu />}>Menu</Route>
    <Route path="/reservations" element={<Reservations />}>Reservations</Route>
    <Route path="/order-online" element={<OrderOnline />}>Order online</Route>
    <Route path="/login" element={<Login />}>Login</Route>
    <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
 </Routes>
  )
}

export default Main;