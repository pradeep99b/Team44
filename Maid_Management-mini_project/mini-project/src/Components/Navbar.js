
// import React, { useState } from "react";
// import Logo from "../Assets/Logo.svg";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//     },
//     {
//       text: "Services",
//       icon: <CleaningServicesIcon />,
//     },
//   ];

//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={Logo} alt="Company Logo" />
//       </div>
//       <div className="navbar-links-container">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#testimonials">Testimonials</a>
//         <a href="#contact">Contact</a>
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
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
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CommentIcon from "@mui/icons-material/Comment";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      link: "/about",
    },
    {
      text: "Login",
      icon: <PhoneRoundedIcon />,
      link: "/Login",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/contact",
    },
    {
      text: "Services",
      icon: <CleaningServicesIcon />,
      link: "/services",
    },
    {
      text: "Testimonials",
      icon: <CommentIcon />,
      link: "/testimonial",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <Link to="/">
          <img src={Logo} alt="Company Logo" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Login">Login</Link>
        <Link to="/testimonial">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="navbar-menu-container">
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
                <ListItemButton component={Link} to={item.link}>
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
  );
};

export default Navbar;
