import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize';

const TechItem = ({ tech, deleteTech }) => {

    const onDelete = () => {
        deleteTech(tech.id);
        M.toast({html: `${tech.firstName} ${tech.lastName} has been deleted as a tech`})
    }

    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text" onClick={onDelete}>delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null, { deleteTech })(TechItem)
