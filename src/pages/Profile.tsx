import { Avatar, Button, Divider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { SideNav } from "../components/SideNavBar";
import { Link } from "react-router-dom";
import BookAppointment from "./BookAppointment";

export const Profile = () => (
  <div className="flex h-screen">
    <SideNav />

    {/* Main content container */}
    <div className="flex flex-col items-center w-full bg-gray-50 overflow-auto">
      <div className="w-full max-w-4xl mt-8 p-6 bg-white shadow-md rounded-lg">
        {/* Profile Header */}
        <div className="flex items-center">
          <Avatar
            circle
            size="lg"
            src="https://i.pravatar.cc/150?u=doctor"
            alt="Doctor Avatar"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-semibold">Dr. Lisa Anderson</h1>
            <h2 className="text-base text-gray-600">Cardiologist</h2>
            <div className="text-sm text-gray-500">
              10 years of experience | Works at City Hospital
            </div>
          </div>
        </div>

        <Divider className="my-6" />

        {/* Personal Info */}
        <div>
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div className="border p-4 rounded-md">
              <h3 className="font-semibold">Contact Information</h3>
              <p className="mt-2">Email: lisa.anderson@cityhospital.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: 123 City Hospital Road, NY</p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-semibold">General Info</h3>
              <p className="mt-2">Gender: Female</p>
              <p>Age: 39</p>
              <p>Languages: English, Spanish</p>
            </div>
          </div>
        </div>

        <Divider className="my-6" />

        {/* Availability Section */}
        <div>
          <h2 className="text-xl font-semibold">Availability</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-md">
              <h3 className="font-semibold">Next Available Date</h3>
              <input
                title="Date"
                type="date"
                className="mt-2 w-full p-2 border rounded-md"
              />
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-semibold">Schedule an Appointment</h3>
              <input
                type="text"
                placeholder="Reason for Appointment"
                className="mt-2 w-full p-2 border rounded-md"
              />

              <Link to="/book-appointment">
                <Button className="mt-4" appearance="primary" block>
                  Request Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Divider className="my-6" />

        {/* Upcoming Appointments */}
        <div>
          <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
          <div className="mt-4 space-y-4">
            <div className="border p-4 rounded-md">
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="mt-2">Date: Aug 25, 2024 | Time: 10:00 AM</p>
              <Button appearance="link">View Details</Button>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="mt-2">Date: Aug 26, 2024 | Time: 1:00 PM</p>
              <Button appearance="link">View Details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
