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
import QDetail from "../QDetail/QDetail";
import QDescribe from "../QDetail/QDescribe/QDescribe";
import Qcomment from "../QDetail/Qcomment/Qcomment";
import Qhistory from "../QDetail/Qhistory/Qhistory";
import DiscussDetail from "../DiscussDetail/DiscussDetail";
import EditArtical from "../EditArtical/EditArtical";

const routes = [
    {
        path: "/",
        element: <Index />,
    },
    {
        path: '/EditArtical',
        element: <EditArtical />
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
    },
    {
        path: "/QDetail",
        element: <QDetail />,
        children: [
            {
                path: 'QDescribe',
                element: <QDescribe />
            },
            {
                path: 'Qcomment',
                element: <Qcomment />
            },
            {
                path: 'Qhistory',
                element: <Qhistory />
            }
        ],
    },
    {
        path: '/DisscussDetail',
        element: <DiscussDetail />
    }
]
export default routes