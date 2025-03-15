import React, {useState} from 'react'
import './Dashboard.css'
import LogoutIcon from '@mui/icons-material/Logout';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import Conservation from '../Conversation/Conservation';
import Chats from '../Chats/Chats';

const Dashboard = () => {
   const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  return (
    <div className='dashboard'>
      <div className='dashboard-card'>
        <div className='dashboard-conversations'>
          <div className='dashboard-conv-block'>

            <div className='dashboard-title-block'>
              <div> Chat </div>
              <LogoutIcon sx={{fonstsize:"32px", cursor:"pointer"}} />
            </div>

            <div className='searchBoxDiv'>
              <input type='text' placeholder='Search' className='searchBox' />
              <button type='submit' className='searchIcon'><PersonSearchRoundedIcon/></button>
            </div>

            <div className='conv-block'>

              <Conservation/>
              <Conservation/>
              <Conservation/>
              <Conservation/>
              <Conservation/>
              <Conservation/>
              <Conservation/>
              <Conservation/>
              <Conservation/>

            </div>

          </div>
        </div>

        {
          selectedUserDetails ?<Chats/>: <div className='noChatSelected'>
            <img src='https://cdni.iconscout.com/illustration/premium/thumb/people-chatting-on-phone-8044282-6369994.png' className='noChatImage' /> 
            <div> No Chat Selected </div>
          </div>
        }
        

      </div>
    </div>
  )
}

export default Dashboard