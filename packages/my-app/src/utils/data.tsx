
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import Error from "../pages/Error";
export default function(){
    const data=[
        {
            id:0,
            label:"Create Monster",
            img:<DashboardIcon/>,
            component:<Welcome/>,
            path:"/create"

        },
        {
            id:1,
            label:"Monsters List",
            img:<PhonePausedIcon/>,
            component:<Home/>,
            path:"/list"

        },
        {
            id:2,
            label:"Subscription",
            img:<SubscriptionsIcon/>,
            component:<Error/>,
            path:"/error"

        }
    ]
    return data
}

