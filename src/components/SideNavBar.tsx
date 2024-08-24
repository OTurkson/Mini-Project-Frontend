import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import HomeIcon from "@rsuite/icons/legacy/Home";
import ProfileIcon from "@rsuite/icons/legacy/Profile";
import { NavLink } from "react-router-dom";

export const SideNav = () => (
  <div style={{ width: 240 }}>
    <Sidenav defaultOpenKeys={["3", "4"]}>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" icon={<HomeIcon />} as={NavLink} to="/">
            Home
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<GroupIcon />} as={NavLink} to="/patients">
            Patients
          </Nav.Item>
          <Nav.Item eventKey="3" icon={<DashboardIcon />} as={NavLink} to="/appointments">
            Appointments
          </Nav.Item>
          <Nav.Item eventKey="4" icon={<ProfileIcon />} as={NavLink} to="/profile">
            Profile
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);
