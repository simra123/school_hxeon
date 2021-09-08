import React, { useState } from 'react';

import { FiChevronDown } from 'react-icons/fi';

function PrimarySelect(props) {

    const [active, setActive] = useState(false);

    const iconId = `${props.id}icon`;
    const optionsId = `${props.id}options`;

    return (
        <button className="relative w-full border rounded p-1 bg-white shadow border-gray-500" onClick={() => {
            if (active) {
                document.querySelector(`#${iconId}`).classList.remove('rotate-180');
                document.querySelector(`#${optionsId}`).classList.add('hidden');
                setActive(false);
            } else {
                document.querySelector(`#${iconId}`).classList.add('rotate-180');
                document.querySelector(`#${optionsId}`).classList.remove('hidden');
                setActive(true);
            }

        }}>
            <span className="float-left px-1">
                {props.value}
            </span>
            <span id={iconId} className="float-right p-1 transition transform">
                <FiChevronDown />
            </span>
            <br />
            <div id={optionsId} className="absolute max-h-40 z-20 w-full bg-gray-100 -ml-1 mt-2 border rounded text-left overflow-auto hidden">
                {
                    props.options.map(option => {
                        return (
                            <>
                                <button className="p-1 w-full hover:bg-white" onClick={props.onClick}>
                                    {option}
                                </button>
                                <hr />
                            </>
                        );
                    })
                }
            </div>
        </button>
    );
}

export default PrimarySelect;