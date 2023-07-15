import { Outlet } from 'react-router-dom'
import LeftSidebar from '../../Static/LeftSidebar'
import { RightSidebar } from '../../Static'

const DesktopLayOut = () => {
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <LeftSidebar />
            <Outlet />
            <RightSidebar />
        </div>
    )
}

export default DesktopLayOut