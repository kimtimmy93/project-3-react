import React from 'react';
import { Header, List, Button, Image } from 'semantic-ui-react';
import { NavLink }from 'react-router-dom';
import './Header.css'





const NavHeader = props => {
    const handleClick = () => {
        props.logout();
    }

    return ( 
        <Header className="navbar">
            <List className="centeritems">
             <List.Item   >
               
                 <Button basic inverted color ="Standard"><NavLink to='/'> Home </NavLink></Button>
                {
                    props.currentUser.username === 'admin' 
                    ? <Button basic inverted color ="Standard"><NavLink to='/events/new'> Create Event </NavLink></Button>
                    : ''
                }
                 <Button basic inverted color ="Standard"><NavLink to='/register'>Register</NavLink></Button>
                 <Button basic inverted color ="Standard"><NavLink to='/login'>Login</NavLink></Button>
                 <Button basic inverted color ="Standard"><NavLink to='/events'>My Events</NavLink></Button>
                 <Button basic inverted color ="Standard"><NavLink to='/logout' onClick={() => {handleClick()}}> Logout </NavLink></Button>
                 <Button className='button2' basic inverted color ="Standard"><NavLink to='/events/new'>New Event</NavLink></Button>
                 {
                    props.currentUser 
                    ? <div> {props.currentUser.username}</div>
                    : null
                }
             </List.Item>
             </List>
                <div className='divlogo'>
                <span className='logo'>Loca<span className='logoLA'>LA</span></span><br></br>
                 <div className="descript"> All Your Local Sports Events</div>
                </div>
                
        </Header>
    )
}

export default NavHeader