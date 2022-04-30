import React from "react";
class GetCert extends React.Component {
    onFetch = (e) => {
        e.preventDefault();
        console.log(`Fetch Form Submitted`);
    };
    renderFetchForm = () => {
        return (
            <div class="flex items-center h-full w-full bg-teal-lighter">
                <div class="w-full bg-transparent rounded shadow-md p-8 m-4 md:max-w-sm md:mx-auto">
                    <form
                        class="mb-4 md:flex md:flex-wrap md:justify-between"
                        onSubmit={this.onFetch}
                    >
                        <div class="flex flex-col mb-4 md:w-full">
                            <label
                                class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                                for="first_name"
                            >
                                First Name
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-darkest md:mr-2"
                                type="text"
                                name="first_name"
                                id="first_name"
                            />
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label
                                class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                                for="first_name"
                            >
                                Last Name
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-darkest md:mr-2"
                                type="text"
                                name="first_name"
                                id="first_name"
                            />
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label
                                class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                for="email"
                            >
                                Email
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-darkest"
                                type="email"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div class="flex flex-col mb-6 md:w-full">
                            <label
                                class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                for="password"
                            >
                                Password
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-darkest"
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                        <button
                            class="block bg-orange-500 hover:bg-orange-600 text-white uppercase text-lg mx-auto p-4 rounded-2xl"
                            type="submit"
                        >
                            Fetch
                        </button>
                    </form>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className="my-10 pt-20">
                <h1 class="block w-full text-center text-grey-darkest mb-6 text-4xl tracking-tight">
                    Please provide your details for{" "}
                    <span className="text-orange-500 uppercase">fetch</span> your
                    certificate .
                </h1>
                {this.renderFetchForm()}
            </div>
        );
    }
}

export default GetCert;
