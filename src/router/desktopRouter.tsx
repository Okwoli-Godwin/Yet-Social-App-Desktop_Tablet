import { createBrowserRouter, } from "react-router-dom"
import DesktopStart from "../pages/desktop/DesktopStart"
import DesktopLayOut from "../components/common/desktopLayout/DesktopLayOut"
import Signin from "../pages/Auth/Signin"


export const desktopRouter = createBrowserRouter([
    {
        path: "/",
        element: <DesktopLayOut />,
        children: [
            { index: true, element: <DesktopStart /> }
        ]

    },
    {
        path:"/sign_in",
        element:<Signin/>
    }
])