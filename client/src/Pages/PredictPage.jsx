import Form from "../components/Form"
import { useState } from "react"
function PredictPage() {
    const [formState, setFormState] = useState({
        YRS: null,
        G: null,
        H: null,
        doubles: null,
        HR: null,
        RBI: null,
        BA: null

    })
    // Step 1: Write function to handle state update
    // Step 2: Write function to handle form state submit (put state in body)
    // Step 3: Pass handle form submit as prop to form component
    // Step 4: Add function to onsubmit in form element

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            })
            if (!response.ok) {
                throw new Error("Failed to submit form")
            }

            const data = await response.json()

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const fields = [
        { name: "YRS", type: "text", label: "Years", placeholder: "24" },
        { name: "G", type: "text", label: "Games", placeholder: "162" },
        { name: "H", type: "text", label: "hits", placeholder: "1000" },
        { name: "doubles", type: "text", label: "Doubles", placeholder: "162" },
        { name: "HR", type: "text", label: "Home Runs", placeholder: "24" },
        { name: "RBI", type: "text", label: "RBI", placeholder: "162" },
        { name: "BA", type: "text", label: "Batting Average", placeholder: "162" },
    ]

    return (
        <section className="form-section">
            <Form
                fields={fields}
                formData={formState}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
            />

            <article className="results-article">
                <h2>Results</h2>
                <div className="results-div"></div>
            </article>
        </section>
    )
}

export default PredictPage
