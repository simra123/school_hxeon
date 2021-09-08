import React from 'react';

import { FiPlus } from 'react-icons/fi';

function SidebarLink(props) {

    if (props.isActive) {
        return (
            <>
                <button className="inline-flex w-full p-3 text-gray-700 text-md" onClick={props.onClick}>
                    <span className="pt-1 px-2 text-primary-purple">
                        {props.icon}
                    </span>
                    {props.title}
                    {/* <div className="w-1/6 text-center text-md text-primary-purple pt-1">
                        {props.icon}
                    </div>
                    <div className="w-4/6 p-1 font-normal text-gray-700 text-left text-sm link-text">
                        {props.title}
                    </div> */}
                    <span className="ml-auto pt-1">
                        <FiPlus />
                    </span>
                </button>
            </>
        );
    } else {
        return (
            <button className="inline-flex w-full p-3" onMouseOver={props.onMouseOver}>
                <div className="text-center text-2xl text-purple-500">
                    {props.icon}
                </div>
            </button>
        );
    }


}

export default SidebarLink;