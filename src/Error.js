import "./error.css"

function Error(props){
    return (
        <div className="full-screen-fixed">
            <div className="error-box">
                {props.error}
            </div>
        </div>
    )
}

export default Error