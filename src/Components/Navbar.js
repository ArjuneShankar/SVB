import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import svbpng from '../Assets/svbpng.png'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        { text: "Home", icon: <HomeIcon />, path: "/" },
        { text: "About", icon: <InfoIcon />, path: "/about" },
        { text: "Testimonial", icon: <CommentRoundedIcon />, path: "/testimonial" },
        { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" },
        { text: "Cart", icon: <ShoppingCartRoundedIcon />, path: "/cart" }
    ];

    return (
        <div>
            <div className='top-bar'>
                <div className='nav2'> 
                    <span>Email: your-email@example.com</span>
                <span>Phone: (123) 456-7890</span>
                </div>
           
            </div>
        <nav>
            {/* Your logo container */}
            <div className="nav-logo-container">
                <img src={svbpng} alt="" style={{ width: '100px' }} />
            </div>

            <div className="navbar-links-container">
                {menuOptions.map((item) => (
                    <Link key={item.text} to={item.path}>{item.text}</Link>
                ))}
                <button className='primary-button'>Book Now</button>
            </div>

            <div className='navbar-menu-container'>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component={Link} to={item.path}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
        </div>
    );
};

export default Navbar;
