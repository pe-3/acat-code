import React, { Component } from 'react'
import './Resume.css'
export default class Resume extends Component {
    render() {
        return (
            <div className='css-1cynnc9-layer1-CardContainer'>
                <p className='css-1ubvqxx-CardHeader'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" ><path fillRule="evenodd" d="M19.227 10.768l-7.502 7.502a3.9 3.9 0 01-5.517-5.516l7.502-7.502a2.267 2.267 0 113.207 3.206l-7.51 7.501a.634.634 0 11-.896-.895l6.93-6.922a1 1 0 10-1.414-1.415l-6.93 6.922a2.634 2.634 0 103.724 3.725l7.51-7.502a4.267 4.267 0 10-6.035-6.035L4.794 11.34a5.9 5.9 0 108.345 8.345l7.502-7.502a1 1 0 00-1.414-1.414z" clipRule="evenodd"></path></svg>
                    <span>附件简历</span>
                </p>
                <div className="css-ii34ak-Container e10n1ezv0"><div className="css-1le0wck-Tip e10n1ezv1">您还未上传过附件简历</div><div ><button width="100%" className="evjpzb02 css-1vx0c7w-BaseButtonComponent-PrimaryButton ery7n2v0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0"><path fillRule="evenodd" d="M19 15a1 1 0 112 0v3.333C21 19.821 19.742 21 18.222 21H5.778C4.258 21 3 19.821 3 18.333V15a1 1 0 112 0v3.333c0 .354.334.667.778.667h12.444c.444 0 .778-.313.778-.667V15zm-6-9.586V14a1 1 0 11-2 0V5.414l-2.46 2.46A1 1 0 117.126 6.46l4.167-4.167a1 1 0 011.414 0l4.167 4.167a1 1 0 01-1.414 1.414L13 5.414z" clipRule="evenodd"></path></svg><span>上传简历</span></button></div></div>
                <div className="css-bk2vgr-Text e14sfv9l1">支持DOC、DOCX、PDF格式简历文件，最大不超过 2M</div>
            </div>
        )
    }
}
