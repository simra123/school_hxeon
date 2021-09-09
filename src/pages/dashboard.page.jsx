import React, { useState } from 'react';

import Sidebar from '../components/sidebar/sidebar.component';
import PrimarySelect from '../components/select/primary.select.component';
import Navbar from '../components/navbar.component';
import SecondaryTextField from '../components/textFields/secondary.textFields.component';
import PrimaryTextFields from '../components/textFields/primary.textFields.component';

import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { FaGraduationCap, FaSchool, FaUserGraduate, FaBirthdayCake, FaCalendarAlt } from 'react-icons/fa';

function Dashboard() {

    const [acYear, setAcYear] = useState('Select');
    const [branch, setBranch] = useState('Select');
    const [gender, setGender] = useState('Select');
    const [bloodGroup, setBloodGroup] = useState('Select');

    const [admissionDate, setAdmissionDate] = useState(null);
    const [admissionDateString, setAdmissionDateString] = useState(null);

    const acYearOptions = ["2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025", "2025-2026", "2026-2027"];
    const branchOptions = ["Icon School & College", "Oxford International"];
    const genderOptions = ["Male", "Female"];
    const bloodGroupOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    return (
        <>
            <div className="h-screen w-screen bg-gray-200">

                <Navbar />

                <Sidebar />

                <div className="w-auto bg-gray-200 ml-52 p-5" style={{ paddingTop: '16vh' }}>
                    <div className="w-auto bg-gray-50 rounded p-5 overflow-auto" style={{ height: '81vh' }}>
                        <div className="inline-flex text-xl w-full border-b-2 border-primary-purple">
                            <span className="px-2 pt-1 pb-3">
                                <FaGraduationCap />
                            </span>
                            Student Admission
                        </div>
                        <div className="w-full text-lg text-primary-purple pt-4">
                            <div className="inline-flex">
                                <span className="pt-1 px-2">
                                    <FaSchool />
                                </span>
                                Academic Details
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-5">
                            <div className="w-full">
                                <p className="py-1">
                                    Academic Year <span className="text-red-600">*</span>
                                </p>
                                <PrimarySelect id="acyear" value={acYear} options={acYearOptions} onClick={(e) => {
                                    setAcYear(e.target.innerText);
                                }} />
                            </div>
                            <div className="w-full">
                                <p className="py-1">
                                    Register No <span className="text-red-600">*</span>
                                </p>
                                <PrimaryTextFields />
                            </div>
                            <div className="w-full">
                                <p className="py-1">
                                    Roll
                                </p>
                                <PrimaryTextFields />
                            </div>
                            <div className="relative w-full">
                                <p className="py-1">
                                    Admission Date <span className="text-red-600">*</span>
                                </p>
                                <div className="inline-flex w-full border border-gray-500 rounded">
                                    <div className="w-1/4 bg-gray-200 pt-2 border-r border-gray-500">
                                        <FaCalendarAlt className="mx-auto" />
                                    </div>
                                    <div className="w-3/4">
                                        <input type="text" className="w-full rounded shadow p-1 px-4" placeholder="Select Date" readOnly value={admissionDateString} onClick={() => {
                                            document.querySelector('#admissionCalendar').classList.remove('hidden');
                                        }} />
                                        <div id="admissionCalendar" className="z-20 absolute w-auto hidden">
                                            <Calendar onChange={item => {
                                                var date = new Date(item);
                                                console.log(date.toLocaleDateString());
                                                setAdmissionDate(date);
                                                setAdmissionDateString(date.toLocaleDateString());
                                                document.querySelector('#admissionCalendar').classList.add('hidden');
                                            }} date={admissionDate} color="#3e0bec" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full">
                                <p className="py-1">
                                    Branch <span className="text-red-600">*</span>
                                </p>
                                <PrimarySelect id="branch" value={branch} options={branchOptions} onClick={(e) => {
                                    setBranch(e.target.innerText);
                                }} />
                            </div>
                        </div>
                        <div className="w-full text-lg text-primary-purple pt-4">
                            <div className="inline-flex">
                                <span className="pt-1 px-2">
                                    <FaUserGraduate />
                                </span>
                                Student Details
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 pt-5 px-5 pb-3">
                            <div className="w-full">
                                <p className="py-1">
                                    First Name <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaUserGraduate className="mx-auto" />} />
                            </div>
                            <div className="w-full">
                                <p className="py-1">
                                    Last Name <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaUserGraduate className="mx-auto" />} />
                            </div>
                            <div className="w-full">
                                <p className="py-1">
                                    Gender <span className="text-red-600">*</span>
                                </p>
                                <PrimarySelect id="gender" value={gender} options={genderOptions} onClick={(e) => {
                                    setGender(e.target.innerText);
                                }} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 px-5 pb-5">
                            <div className="w-full">
                                <p className="py-1">
                                    Blood Group <span className="text-red-600">*</span>
                                </p>
                                <PrimarySelect id="bloodGroup" value={bloodGroup} options={bloodGroupOptions} onClick={(e) => {
                                    setBloodGroup(e.target.innerText);
                                }} />
                            </div>
                            <div className="w-full">
                                <p className="py-1">
                                    Date of Birth <span className="text-red-600">*</span>
                                </p>
                                <div className="inline-flex w-full border border-gray-500 rounded">
                                    <div className="w-1/4 bg-gray-200 py-2 border-r border-gray-500">
                                        <FaBirthdayCake className="mx-auto" />
                                    </div>
                                    <div className="w-3/4">
                                        <input type="date" className="w-full p-1 text-sm bg-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;