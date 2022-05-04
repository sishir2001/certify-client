import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { connect } from "react-redux";
import { signedOut } from "./actions";

function Dropdown(props) {
    function onSignOut() {
        console.log("Signed Out clicked");
        // TODO : call the signout feature
        props.signedOut();
    }
    console.log(props);
    return (
        <div className="text-left">
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-left rounded-md bg-amber-100 bg-opacity-20 px-4 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Hi,{props.username}
                        <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-orange-200 hover:text-orange-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56  divide-y divide-gray-100 rounded-md bg-amber-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={onSignOut}
                                        className={`${
                                            active
                                                ? "bg-orange-500 text-white"
                                                : "text-gray-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <DeleteActiveIcon
                                                className="mr-2 h-5 w-5 text-orange-400"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <DeleteInactiveIcon
                                                className="mr-2 h-5 w-5 text-orange-400"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Sign Out
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
        </svg>
    );
}

function DeleteActiveIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
        </svg>
    );
}

export default connect(null, { signedOut })(Dropdown);
