import React from "react";
import Qlist from "../Qlist/Qlist";
import Index from "../Index/Index";
class Router extends React.Component {
    state = {
        $path: '',
    }
    constructor(props) {
        super(props);
        this.init();
        window.onhashchange = () => {
            this.setState({
                $path: this.getComponentChain()[1],
            })
        }
    }

    static defaultProps = {
        routes: [
            {
                name: "Qlist",
                path: "/Qlist",
                component: Qlist,
            },
            {
                name: "Index",
                component: Index,
            },
        ]
    }
    init() {
       
        let { routes } = this.props;
        this.routerObj = {};
        for (let i in routes) {
            if (!routes[i].path) {
                let r = routes[i];
                let newProp = 'undefined';
                Object.assign(this.routerObj, {
                    [newProp]: {
                        component: r.component,
                        path: r.path,
                    }
                })
                continue;
            }
            let r = routes[i];
            let newProp = r.name;
            if (!r.name) {
                throw new Error('The name attribute of the route cannot be undefined or null');
            }
            Object.assign(this.routerObj, {
                [newProp]: {
                    component: r.component,
                    path: r.path,
                }
            })
        }
    }
    componentDidMount() {
        this.setState({
            $path: String(this.getComponentChain()[1]),
        })
    }
    getPath() {
        let hash = window.location.hash;
        if (hash.indexOf('#') === -1) {
            return '';
        }
        if (hash.indexOf('?') === -1) {
            return hash.substr(hash.indexOf('#') + 1);
        }
        return hash.substr(hash.indexOf('#') + 1, hash.indexOf('?') - 1);
    }
    getComponentChain() {
        let path = this.getPath();
        return path.split('/');
    }
    render() {
        let { routerObj } = this;
        let { $path } = this.state;
        if (routerObj[$path]) {
            let RouterC = routerObj[$path].component;
            return <RouterC />;
        }
        return (
            <div className='emptyRouter'>404 {routerObj.$path} is not fund</div>
        )
    }
}


export default Router