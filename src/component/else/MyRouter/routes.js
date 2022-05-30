import Index from "../Index/Index";
import Learn from "../Learn/Learn";
import Qall from "../Qlist/Qall";
import Disscuss from "../Disscuss/Disscuss";
import Competition from "../Competiton/Competition";
import Self from "../Self/Self";
const routes = [
    {
        path:"/",
        element:<Index/>,
    },
    {
        path:"/Learn",
        element:<Learn/>,
    },
    {
        path:"/Qlist",
        element:<Qall/>,
    },
    {
        path:"/Disscuss",
        element:<Disscuss/>,
    },
    {
        path:"/Competition",
        element:<Competition/>,
    },
    {
        path:"/Self",
        element:<Self/>,
    }
]
export default routes