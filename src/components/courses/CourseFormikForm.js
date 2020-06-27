import React from "react"
import PropTypes from "prop-types"
import {ErrorMessage, Field, Form, Formik} from "formik"
import * as yup from "yup"

const initialValues = {
  title: "",
  authorId: "",
  category: "",
}

const validationSchema = yup.object().shape({
  title: yup.string(),
  authorId: yup.string().required(),
  category: yup.string().required(),
})

const CourseFormikForm = ({course, authors, handleSubmit, saving, errors}) => {
  return (
    <>
      <h1>{course.id ? "Edit" : "Add"} course</h1>
      <Formik
        initialValues={{
          ...(course
            ? course
            : {
                ...initialValues,
                authorId: authors.length ? authors[0].id : "",
              }),
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {formik => {

          return (
            <Form>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />

              <Field as="select" name="authorId">
                {authors.map(author => (
                  <option value={author.id} key={author.id}>
                    {author.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="authorId" component="div" />

              <Field type="text" name="category" />
              <ErrorMessage name="category" component="div" />

              <button
                className="btn btn-primary btn-lg"
                disabled={saving}
                type="submit"
              >
                {saving ? "Saving" : "Save"}
              </button>
            </Form>
          )
        }}
      </Formik>
    </>

    // <form data-testid={"course-form"} onSubmit={handleSubmit} className="col-md-4">
    //   <h1>{course.id ? "Edit" : "Add"} course</h1>
    //
    //   {errors.onSave && (
    //     <div className="alert alert-danger">{errors.onSave}</div>
    //   )}
    //
    //   <TextInput
    //     name="title"
    //     label="title"
    //     handleChange={handleChange}
    //     value={course.title}
    //     error={errors.title}
    //   />
    //
    //   <SelectInput
    //     name="authorId"
    //     title="authorId"
    //     defaultOption="Select Author"
    //     value={course.authorId || ""}
    //     handleChange={handleChange}
    //     error={errors.authorId}
    //     options={authors.map(author => ({
    //       value: author.id,
    //       text: author.name,
    //     }))}
    //   />
    //
    //   <TextInput
    //     name="category"
    //     label="category"
    //     handleChange={handleChange}
    //     value={course.category}
    //     error={errors.category}
    //   />
    //
    //   <button className="btn btn-primary btn-lg" disabled={saving}>
    //     {saving ? "Saving" : "Save"}
    //   </button>
    // </form>
  )
}

CourseFormikForm.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
}
export default CourseFormikForm
