import React from 'react';
import { FaAd, FaCalculator, FaHome, FaList, FaSass, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className='flex'>
            {/* Dashboard Side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-4'>
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalculator></FaCalculator>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart {cart.length}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaAd></FaAd>
                            Add a Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaList></FaList>
                            My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                           Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaSass></FaSass>
                           Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;