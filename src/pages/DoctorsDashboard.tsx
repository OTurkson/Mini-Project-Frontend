import { Avatar, Button } from "rsuite";
import { SideNav } from "../components/SideNavBar";

export const DoctorsDash = () => (
  <>
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Good Morning, Lisa</h1>
        <h2 className="text-base font-semibold">Today</h2>
        <div className="border rounded-md p-12 w-3/4 my-5 flex">
          <div>
            <h1 className="text-lg"> You have 6 tasks today</h1>
            <h1 className="text-base font-light">
              Start with the most urgent one
            </h1>
          </div>
          <Button appearance="primary" className="ml-72" size="md">
            Start Task
          </Button>
        </div>
        <h2 className="text-lg font-semibold mb-2">Current Shift</h2>
        <h2 className="text-lg font-medium">Day Shift</h2>
        <h2 className="text-base font-extralight">7:30am - 9:00am</h2>
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
            {" "}
            Medication Timeline
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
      </div>
    </div>
  </>
);
