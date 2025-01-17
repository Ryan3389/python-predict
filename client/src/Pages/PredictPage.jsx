import Form from "../components/Form"
function PredictPage() {
    // Step 1: Write function to handle state update
    // Step 2: Write function to handle form state submit (put state in body)
    // Step 3: Pass handle form submit as prop to form component
    // Step 4: Add function to onsubmit in form element
    const fields = [
        { name: "years", type: "text", label: "Years", placeholder: "24" },
        { name: "games", type: "text", label: "Games", placeholder: "162" },
        { name: "hits", type: "text", label: "hits", placeholder: "1000" },
        { name: "doubles", type: "text", label: "Doubles", placeholder: "162" },
        { name: "home runs", type: "text", label: "Home Runs", placeholder: "24" },
        { name: "RBI", type: "text", label: "RBI", placeholder: "162" },
        { name: "batting average", type: "text", label: "Batting Average", placeholder: "162" },
    ]
    return (
        <section className="form-section">
            <Form
                fields={fields}
            />
        </section>
    )
}

export default PredictPage
// import Form from "../components/Form"
// function PredictPage() {
//     // Step 1: Get form state in handle change function
//     // Step 2: Pass form state as a prop in form component
//     // Step 3: See form component
//     return (
//         <section className="form-section">
//             <form>
//                 <Form
//                     label="Years"
//                     inputType="text"
//                 />
//                 <Form
//                     label="Games"
//                     inputType="text"
//                 />
//                 <Form
//                     label="Hits"
//                     inputType="text"
//                 />
//                 <Form
//                     label="Doubles"
//                     inputType="text"
//                 />
//                 <Form
//                     label="Home Runs"
//                     inputType="text"
//                 />
//                 <Form
//                     label="RBI"
//                     inputType="text"
//                 />
//                 <Form
//                     label="Batting Average"
//                     inputType="text"
//                 />
//                 <input type="submit" />
//             </form>
//         </section>
//     )
// }

// export default PredictPage