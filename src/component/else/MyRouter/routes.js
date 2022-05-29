import Index from "../Index/Index";
import Learn from "../Learn/Learn";
import Qlist from "../Qlist/Qlist";
import Disscuss from "../Disscuss/Disscuss";
import Competition from "../Competiton/Competition";

export default [
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
        element:<Qlist/>,
    },
    {
        path:"/Disscuss",
        element:<Disscuss/>,
    },
    {
        path:"/Competition",
        element:<Competition/>,
    },
]