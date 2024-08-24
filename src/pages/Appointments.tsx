import { Avatar, Button } from "rsuite";
import { SideNav } from "../components/SideNavBar";

export const Appointments = () => (
  <>
    <div className="flex h-screen mb-10">
      <div className="justify-center">
        <SideNav />
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Dr. Lisa Adams</h1>

        <div className="flex">
          <div className="border rounded-md p-12 w-3/4 my-5 flex">
            <div>
              <h1 className="text-lg">10</h1>
              <h1 className="text-base font-light">Active Patients</h1>
            </div>
          </div>

          <div className="border rounded-md p-12 w-3/4 my-5 flex">
            <div>
              <h1 className="text-lg">0</h1>
              <h1 className="text-base font-light">New messages</h1>
            </div>
          </div>

          <div className="border rounded-md p-12 w-3/4 my-5 flex">
            <div>
              <h1 className="text-lg">4</h1>
              <h1 className="text-base font-light">Upcomming appointments</h1>
            </div>
          </div>

          <div className="border rounded-md p-12 w-3/4 my-5 flex">
            <div>
              <h1 className="text-lg">2</h1>
              <h1 className="text-base font-light">Tasks</h1>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-2">Caseload</h2>

        <div>
          <h1 className="text-lg font-semibold mt-5 mb-3"> Vitals Monitor</h1>
          <div className="flex mx-5 my-3">
            <Avatar
              circle
              size="lg"
              src="https://i.pravatar.cc/150?u=1"
              alt="Avatar"
            />
            <div className="mx-5">
              <h2 className="text-lg font-medium"> Jane Smith </h2>
              <h2 className="text-base font-medium"> Room 002 </h2>
            </div>
          </div>
          <div className="flex mx-5 my-3">
            <Avatar
              circle
              size="lg"
              src="https://i.pravatar.cc/150?u=1"
              alt="Avatar"
            />
            <div className="mx-5">
              <h2 className="text-lg font-medium"> Jane Smith </h2>
              <h2 className="text-base font-medium"> Room 002 </h2>
            </div>
          </div>
          <div className="flex mx-5 my-3">
            <Avatar
              circle
              size="lg"
              src="https://i.pravatar.cc/150?u=1"
              alt="Avatar"
            />
            <div className="mx-5">
              <h2 className="text-lg font-medium"> Jane Smith </h2>
              <h2 className="text-base font-medium"> Room 002 </h2>
            </div>
          </div>
          <div className="flex mx-5 my-3">
            <Avatar
              circle
              size="lg"
              src="https://i.pravatar.cc/150?u=1"
              alt="Avatar"
            />
            <div className="mx-5">
              <h2 className="text-lg font-medium"> Jane Smith </h2>
              <h2 className="text-base font-medium"> Room 002 </h2>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-lg font-semibold mt-5 mb-3">
            Upcomming appointments
          </h1>

          <div className="flex mx-5 my-3">
            <Avatar
              circle
              size="lg"
              src="https://i.pravatar.cc/150?u=1"
              alt="Avatar"
            />
            <div className="mx-5">
              <h2 className="text-lg font-medium"> Jane Smith </h2>
              <h2 className="text-base font-medium"> Room 002 </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
