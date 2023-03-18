import React from "react";
import s from "./ProfileInfo.module.css"


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log("this:",this)
        this.setState({ editMode: true })  //setState асинхронний і робиться після того як завершиться все в цьому методі
        // this.state.editMode=true
        // this.forceUpdate()  //старатись уникати
    }
    deactivateEditMode() {
        this.setState({ editMode: false })  //setState асинхронний і робиться після того як завершиться все в цьому методі
        // this.state.editMode=true
        // this.forceUpdate()  //старатись уникати
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => { this.activateEditMode() }}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;