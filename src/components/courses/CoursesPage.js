import React, {useState} from "react"

const initForm = {
  title: "",
}

const CoursesPage = () => {
  const [form, setForm] = useState(initForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            value={form.title}
            name="title"
            id="title"
            type="text"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  )
}

export default CoursesPage