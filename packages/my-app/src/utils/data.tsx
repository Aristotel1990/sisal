
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
export default function(){
    const data=[
        {
            id:0,
            label:"Create Monster",
            img:<PersonAddAltIcon/>,
            path:"/create"

        },
        {
            id:1,
            label:"Monsters List",
            img:<FormatListBulletedIcon/>,
            path:"/list"

        },
        {
            id:2,
            label:"Display",
            img:<SmartDisplayIcon/>,
            path:"/display"

        }
    ]
    return data
}

