import React from 'react';

const StylistData = ({ stylist }) => {
    return (
        <div>
            <div>Name: {`${stylist.stylist_name}`}</div>
            <div>Location: {stylist.location}</div>
            <div>Bio: {stylist.bio}</div>
            <div>Phone: {stylist.phone_number}</div>
        </div>
    );
}

export default StylistData;