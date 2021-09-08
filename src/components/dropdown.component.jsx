import React from 'react';

import { Link } from 'react-router-dom';

function DropDown(props) {

    return (
        <>
            <button className="relative p-3 border border-purple-200 rounded-md transition duration-1000" onClick={props.onClick}>
                {props.titleIcon}
            </button>
            <div id={props.id} className="absolute top-20 right-5 max-w-xs bg-gray-100 border rounded-lg text-left p-4 shadow hidden transition">
                <div className="grid grid-cols-3 pb-3">
                    <div>
                        <img src={props.headerImage} alt="profile" className="w-20 h-20 rounded-2xl" />
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">{props.headerTitle}</p>
                        <p className="text-sm">{props.headerSubTitle}</p>
                    </div>
                </div>
                <hr />
                {/* Section One */}
                {
                    props.sectionOneLinks.map((link, index) => {
                        return (
                            <Link to={props.sectionOneUrls[index]} className="w-full inline-flex p-2 px-4">
                                <span className="text-xl mt-1">
                                    {props.sectionOneIcons[index]}
                                </span>
                                <span className="px-2"></span>
                                {link}
                            </Link>
                        );
                    })
                }
                <hr />
                {
                    props.sectionTwoLinks.map((link, index) => {
                        return (
                            <Link to={props.sectionTwoUrls[index]} className="w-full inline-flex p-2 px-4">
                                <span className="text-xl mt-1">
                                    {props.sectionTwoIcons[index]}
                                </span>
                                <span className="px-2"></span>
                                {link}
                            </Link>
                        );
                    })
                }
                <hr />
                {
                    props.sectionThreeLinks.map((link, index) => {
                        return (
                            <Link to={props.sectionThreeUrls[index]} className="w-full inline-flex p-2 px-4">
                                <span className="text-xl mt-1">
                                    {props.sectionThreeIcons[index]}
                                </span>
                                <span className="px-2"></span>
                                {link}
                            </Link>
                        );
                    })
                }
            </div>
        </>
    );
}

export default DropDown;