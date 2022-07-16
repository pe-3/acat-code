import acatReq from 'acat-req'
const reqs = [
    {
        url: 'apple',
        name: 'apple',
    },
    {
        url: 'banana',
        name: 'banana',
    }
]

const baseOpt = {
    baseURL: 'http://127.0.0.1:8000',
}

export default acatReq(reqs, baseOpt);