function Form({ fields }) {
    //Step 3
    return (
        <section className="form-section">
            <form>
                {fields.map((field, index) => (
                    <div className="input-container">
                        <label>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                        />
                    </div>
                ))}
                <input type="submit" />
            </form>
        </section>

    )
}

export default Form
