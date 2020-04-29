import React from 'react';
import {connect} from "react-redux";

class NavBarComponent extends React.Component {
    render() {
        return (
            <h1>NavBarHere</h1>
        )
    }
}

const stateToPropertyMapper = (state) => ({});
const dispatchToPropertyMapper = (dispatch) => ({});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(NavBarComponent)