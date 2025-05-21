function Form({ fields, handleChange, handleFormSubmit }) {
    return (
        <form onSubmit={handleFormSubmit}>
            {fields.map((field, index) => (
                <div key={index} className="input-container">
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                        value={FormData[field.name]}
                    />
                </div>
            ))}
            <input type="submit" />
        </form>

    )
}

export default Form
