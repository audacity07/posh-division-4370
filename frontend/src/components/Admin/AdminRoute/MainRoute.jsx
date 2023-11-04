import {Routes,Route} from "react-router-dom"
import Admin from "../admin"
import Activity from "../Activity"
import UserUpdate from "../userUpdate"
import ActivityUpdate from "../activityUpdate"
import AddActivity from "../../addActivity"

function MainRoute(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Admin />} />
            <Route path="/adminActivity" element={<Activity />} />
            <Route path="/userupdate/:id" element={<UserUpdate />}></Route>
            <Route path="activity/add" element={<AddActivity />} ></Route>
            <Route path="/activityupdate/:id" element={<ActivityUpdate />} ></Route>
        </Routes>
        </>
    )
}
export default MainRoute