import React, { useState } from 'react';

import { FiLayers, FiEdit, FiChevronRight, FiGrid } from 'react-icons/fi';
import { BiDirections } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';


import SidebarLink from './links.sidebar.component';

function Sidebar() {

    const [dashboardActive, setDashboardActive] = useState(false);
    const [branchActive, setBranchActive] = useState(false);
    const [frontendActive, setFrontendActive] = useState(false);
    const [admissionActive, setAdmissionActive] = useState(false);
    const [studentDetailsActive, setStudentDetailsActive] = useState(false);

    const [sidebarActive, setSidebarActive] = useState(true);

    function OnMouseOverSidebar() {
        let sidebar = document.querySelector('#sidebar');

        sidebar.classList.remove('animate-shrink');
        sidebar.classList.add('animate-grow');
        sidebar.style.width = '16.66%';
        setSidebarActive(true);
    }

    return (
        <div id="sidebar" className="fixed w-1/6 bg-white p-2 overflow-auto" style={{ height: '87vh', marginTop: '13vh' }}>
            <br />

            <SidebarLink title="Dashboard" icon={<FiGrid />} isActive={sidebarActive} onMouseOver={OnMouseOverSidebar} onClick={() => {
                if (dashboardActive) {
                    document.querySelector('#dashboard').classList.add('hidden');
                    setDashboardActive(false);
                } else {
                    document.querySelector('#dashboard').classList.remove('hidden');
                    setBranchActive(false);
                    setDashboardActive(true);
                }

            }} />
            <div id="dashboard" className="w-full p-3 px-4 bg-gray-100 text-sm rounded transition hidden">
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> All Branches </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Icon School & College </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Oxford International </span>
                </button>
            </div>

            <SidebarLink title="Branch" icon={<BiDirections />} isActive={sidebarActive} onMouseOver={OnMouseOverSidebar} onClick={() => {
                if (branchActive) {
                    document.querySelector('#branch').classList.add('hidden');
                    setBranchActive(false);
                } else {
                    document.querySelector('#branch').classList.remove('hidden');
                    setBranchActive(true);
                }
            }} />
            <div id="branch" className="w-full p-3 px-6 bg-gray-100 text-sm rounded transition hidden">
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> All Branches </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> All Branches </span>
                </button>
            </div>

            <SidebarLink title="Frontend" icon={<FiLayers />} isActive={sidebarActive} onMouseOver={OnMouseOverSidebar} onClick={() => {
                if (frontendActive) {
                    document.querySelector('#frontend').classList.add('hidden');
                    setFrontendActive(false);
                } else {
                    document.querySelector('#frontend').classList.remove('hidden');
                    setFrontendActive(true);
                }
            }} />
            <div id="frontend" className="w-full p-3 px-6 bg-gray-100 text-sm rounded transition hidden">
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Setting </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Menu </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Page Section </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Manage Page </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Slider </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Features </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Testimonial </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Service </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> FAQ </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Gallery Department </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Gallery </span>
                </button>
            </div>

            <SidebarLink title="Admission" icon={<FiEdit />} isActive={sidebarActive} onMouseOver={OnMouseOverSidebar} onClick={() => {
                if (admissionActive) {
                    document.querySelector('#admission').classList.add('hidden');
                    setAdmissionActive(false);
                } else {
                    document.querySelector('#admission').classList.remove('hidden');
                    setAdmissionActive(true);
                }
            }} />
            <div id="admission" className="w-full p-3 px-6 bg-gray-100 text-sm rounded transition hidden">
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Create Admission </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Online Admission </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Multiple Import </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Department </span>
                </button>
            </div>

            <SidebarLink title="Student Details" icon={<FaGraduationCap />} isActive={sidebarActive} onMouseOver={OnMouseOverSidebar} onClick={() => {
                if (studentDetailsActive) {
                    document.querySelector('#student-details').classList.add('hidden');
                    setStudentDetailsActive(false);
                } else {
                    document.querySelector('#student-details').classList.remove('hidden');
                    setStudentDetailsActive(true);
                }
            }} />
            <div id="student-details" className="w-full p-3 px-6 bg-gray-100 text-sm rounded transition hidden">
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Student List </span>
                </button>
                <button className="inline-flex w-full text-left p-1">
                    <span className="pt-1 text-primary-purple"><FiChevronRight /></span>
                    <span className="px-2"> Login Deactivate </span>
                </button>
            </div>

        </div>
    );

}

export default Sidebar;