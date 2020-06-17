import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions'; //this action is a now a prop which is why we're destructuring in our function component

const Logs = ({log: {logs, loading}, getLogs}) => { //destructuring log and loading from logs
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if(loading || logs === null) {
        return <PreLoader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>) : (logs.map(log => <LogItem log={log} key={log.id}/>))}
        </ul>
    )
};

Logs.propTypes = {
    log: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    log: state.log //'log' is the name of the prop and the log property of state.log correlates to the 'log' property in combineReducer in index.js
});

export default connect(mapStateToProps, {getLogs})(Logs); //need to add any actions that we're using as second parameter to connect()
