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
                    ? <Button className='button2' basic inverted color ="Standard"><NavLink to='/events/new'>New Event</NavLink></Button>
                    : ''
                }
                {
                    !props.logged
                    ? <Button basic inverted color  ="Standard"><NavLink to='/register'>Register</NavLink></Button>
                    : ''  
                }
                {
                    !props.logged
                    ? <Button basic inverted color ="Standard"><NavLink to='/login'>Login</NavLink></Button>
                    : ''
                }
                {
                    props.logged
                    ? <Button basic inverted color ="Standard"><NavLink to='/events'>My Events</NavLink></Button>
                    : ''
                }
                {
                    props.logged
                    ?<Button basic inverted color ="Standard"><NavLink to='/logout' onClick={() => {handleClick()}}> Logout </NavLink></Button>
                    : ''
                 }
                 {
                    props.currentUser 
                    ? <div class="welcome"> Welcome {props.currentUser.username}</div>
                    : ''
                }
             </List.Item>
             </List>
                <div className='divlogo'>
                <span className='logo'>Loca<span className='logoLA'>LA</span></span><br></br>
    
                </div>
                <div className="descript"> All Your Local Sports Events</div>
                
        </Header>
    )
}

export default NavHeader