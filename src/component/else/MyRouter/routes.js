import Index from "../Index/Index";
import Learn from "../Learn/Learn";
import Qall from "../Qlist/Qall";
import Disscuss from "../Disscuss/Disscuss";
import Competition from "../Competiton/Competition";
import Self from "../Self/Self";
import Task from '../Learn/Task/Task.js'
import Today from '../Learn/Today/Today'
import Important from '../Learn/Important/Important'
import Plan from '../Learn/Plan/Plan'
import Distributed from '../Learn/Distributed/Distributed'

const routes = [
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/Learn",
        element: <Learn />,
        children: [
            {
                path: 'Task',
                element: <Task />,
            },
            {
                path: 'Today',
                element: <Today />
            },
            {
                path: 'Important',
                element: <Important />
            },
            {
                path: 'Plan',
                element: <Plan />
            },
            {
                path: 'Distributed',
                element: <Distributed />
            },
        ],
    },
    {
        path: "/Qlist",
        element: <Qall />,
    },
    {
        path: "/Disscuss",
        element: <Disscuss />,
    },
    {
        path: "/Competition",
        element: <Competition />,
    },
    {
        path: "/Self",
        element: <Self />,
    }
]
export default routes