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
                            <label class="formLabelClass" for="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="John Doe"
                                class="formInputClass"
                            />
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label class="formLabelClass" for="university">
                                University
                            </label>
                            <input
                                type="text"
                                name="university"
                                id="university"
                                placeholder="BML Munjal University"
                                class="formInputClass"
                            />
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label class="formLabelClass" for="event_code">
                                Event Code
                            </label>
                            <input
                                type="text"
                                name="event_code"
                                id="eventCode"
                                placeholder="U_1223432"
                                class="formInputClass"
                            />
                        </div>
                        <div class="flex flex-col mb-6 md:w-full">
                            <label class="formLabelClass" for="participant_id">
                                Participant ID
                            </label>
                            <input
                                type="text"
                                name="participant_id"
                                id="participantCode"
                                placeholder="P_1223432"
                                class="formInputClass"
                            />
                        </div>
                        <button class="orangeButton" type="submit">
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
                    <span className="text-orange-500 uppercase">fetch</span>{" "}
                    your certificate .
                </h1>
                {this.renderFetchForm()}
            </div>
        );
    }
}

export default GetCert;
