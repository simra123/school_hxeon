import React from 'react';

function SecondaryTextField(props) {
    return (
        <div className="inline-flex w-full border border-gray-500 shadow rounded">
            <div className="w-1/4 bg-gray-200 py-2 border-r border-gray-500">
                {props.icon}
            </div>
            <div className="w-3/4">
                <input type="text" className="w-full p-1 px-4 rounded focus:outline-none" />
            </div>
        </div>
    );
}

export default SecondaryTextField;