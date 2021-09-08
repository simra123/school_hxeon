import React, { useState } from 'react';

import Dropdown from './dropdown.component';
import PurpleLogoWhite from '../images/purple-logo.jpg';

import { FiUser, FiKey, FiMail, FiBriefcase, FiLogOut, FiGrid, FiMenu, FiSearch, FiBell, FiFlag, FiCalendar, FiMessageSquare } from 'react-icons/fi';
import { BiFullscreen } from 'react-icons/bi';

import ProfileDropdownImage from '../images/profileImage.webp';

function Navbar() {

    const [profileDropdownActive, setProfileDropdownActive] = useState(false);

    const profileDropdownSectionOneLinks = ["Profile", "Reset Password", "Mailbox"];
    const profileDropdownSectionOneUrls = ["/dashboard/profile", "/dashboard", "/dashboard"];
    const profileDropdownSectionOneIcons = [<FiUser />, <FiKey />, <FiMail />];

    const profileDropdownSectionTwoLinks = ["Global Settings"];
    const profileDropdownSectionTwoUrls = ["/dashboard"];
    const profileDropdownSectionTwoIcons = [<FiBriefcase />];

    const profileDropdownSectionThreeLinks = ["Logout"];
    const profileDropdownSectionThreeUrls = ["/dashboard"];
    const profileDropdownSectionThreeIcons = [<FiLogOut />];

    return (
        <div className="fixed inline-flex w-full bg-white shadow-lg" style={{ height: '13vh' }}>
            <div className="w-1/6 p-3 inline-flex">
                <img src={PurpleLogoWhite} alt="" className="h-16 w-16" />
            </div>
            <div className="inline-flex w-5/6">
                <div className="w-1/6 p-6">
                    <div className="grid grid-cols-3 gap-2">
                        <button className="bg-white rounded-md text-center p-1 text-xl text-gray-500 border border-purple-200" onClick={() => {
                            // let sidebar = document.querySelector('#sidebar');

                            // if (sidebarActive) {
                            //     sidebar.classList.remove('animate-grow');
                            //     sidebar.classList.add('animate-shrink');
                            //     sidebar.style.width = '5%';
                            // } else {
                            //     sidebar.classList.remove('animate-shrink');
                            //     sidebar.classList.add('animate-grow');
                            //     sidebar.style.width = '16.66%';
                            // }
                        }}>
                            <FiMenu className="mx-auto" />
                        </button>
                        <button className="bg-white rounded-md text-center p-1 text-xl text-gray-500 border border-purple-200">
                            <BiFullscreen className="mx-auto" />
                        </button>
                        <button className="bg-white rounded-md text-center p-1 text-xl text-gray-500 border border-purple-200 py-2">
                            <FiGrid className="mx-auto" />
                        </button>
                    </div>
                </div>
                <div className="w-2/6 py-5">
                    <div className="inline-flex w-full border border-purple-200 text-gray-400 rounded-2xl bg-white px-3">
                        <div className="w-1/12 text-xl px-2 py-3">
                            <FiSearch />
                        </div>
                        <input type="search" className="appearance-none w-11/12 px-5 font-light focus:outline-none text-black" placeholder="Search" />
                    </div>
                </div>
                <div className="flex w-3/6 p-5 float-right text-right justify-items-end">
                    <div className="grid grid-cols-5 gap-4 text-right text-md text-gray-500 ml-auto">
                        <button className="relative p-3 border border-purple-200 rounded-md">
                            <FiCalendar />
                        </button>
                        <button className="relative p-3 border border-purple-200 rounded-md">
                            <FiFlag />
                        </button>

                        <Dropdown id="notificationDropdown" titleIcon={<FiBell />} headerTitle="Jennifer Adams" headerSubTitle="Super Admin" withImage={false} headerImage={<FiMessageSquare />} sectionOneLinks={profileDropdownSectionOneLinks} sectionOneUrls={profileDropdownSectionOneUrls} sectionOneIcons={profileDropdownSectionOneIcons} sectionTwoLinks={profileDropdownSectionTwoLinks} sectionTwoIcons={profileDropdownSectionTwoIcons} sectionTwoUrls={profileDropdownSectionTwoUrls} sectionThreeLinks={profileDropdownSectionThreeLinks} sectionThreeIcons={profileDropdownSectionThreeIcons} sectionThreeUrls={profileDropdownSectionThreeUrls} onClick={() => {
                            let dropdown = document.querySelector('#profileDropdown');

                            if (profileDropdownActive) {
                                dropdown.classList.remove('block');
                                dropdown.classList.add('hidden');

                                setProfileDropdownActive(false);
                            } else {
                                dropdown.classList.remove('hidden');
                                dropdown.classList.add('block');

                                setProfileDropdownActive(true);
                            }
                        }} />
                        <button>|</button>
                        <Dropdown id="profileDropdown" title="Profile" titleIcon={<FiUser />} headerTitle="Jennifer Adams" headerSubTitle="Super Admin" withImage={true} headerImage={ProfileDropdownImage} sectionOneLinks={profileDropdownSectionOneLinks} sectionOneUrls={profileDropdownSectionOneUrls} sectionOneIcons={profileDropdownSectionOneIcons} sectionTwoLinks={profileDropdownSectionTwoLinks} sectionTwoIcons={profileDropdownSectionTwoIcons} sectionTwoUrls={profileDropdownSectionTwoUrls} sectionThreeLinks={profileDropdownSectionThreeLinks} sectionThreeIcons={profileDropdownSectionThreeIcons} sectionThreeUrls={profileDropdownSectionThreeUrls} onClick={() => {
                            let dropdown = document.querySelector('#profileDropdown');

                            if (profileDropdownActive) {
                                dropdown.classList.remove('block');
                                dropdown.classList.add('hidden');

                                setProfileDropdownActive(false);
                            } else {
                                dropdown.classList.remove('hidden');
                                dropdown.classList.add('block');

                                setProfileDropdownActive(true);
                            }
                        }} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;