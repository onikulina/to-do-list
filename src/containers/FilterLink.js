import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import { FlatButton } from "material-ui";

class FilterLink extends React.PureComponent {

    handleFilterClick = (e) => {
        e.preventDefault();
        this.props.onClick();
    }

    render() {
        const { active, text } = this.props;

        return (
            <FlatButton onClick={this.handleFilterClick} label={text} disabled={active} data-test={`filter-${text}`}/>
        );
    }
}

FilterLink.propTypes = {
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
