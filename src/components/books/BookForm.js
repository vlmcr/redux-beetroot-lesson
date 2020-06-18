import React, {useEffect, useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {default as Select} from "react-select"
import {mapToArr} from "../../utils"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {addBook} from "../../actions"

const FormBook = ({categories, addBook, match, book = {}, ...rest}) => {
  const [redirect, setRedirect] = useState(false)
  const {
    register,
    handleSubmit,
    errors,
    control,
    setError,
    getValues,
    setValue
  } = useForm()

  const options = [{value: "-1", label: "Choose category"}]
  categories.map(cat => options.push({value: cat._id, label: cat.title}))

  useEffect(() => {
    if (Object.keys(book).length) {
      Object.keys(book).forEach(key => {
        if (key === 'categoryId') {
          const catOpt = options.find(opt => opt.value === book.categoryId)
          setValue(key, catOpt)
        } else {
          setValue(key, book[key])
        }
      })
    }
  }, [book, setValue, options])

  function onSubmit(data, e) {
    e.preventDefault()
    if (errors.categoryId) {
      setError("categoryId")
      return;
    }
    const _id = book._id ? book._id : null;
    data = {...data, categoryId: data.categoryId.value, _id};
    addBook(data)
    setRedirect(true)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-md-5">
      {redirect && <Redirect to="/" />}
      <div className="form-group">
        <label html-for="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          className="form-control"
          ref={register({required: true})}
        />
        {errors.title && "Title is required."}
      </div>
      <div className="form-group">
        <label html-for="desc">Description</label>
        <textarea
          name="desc"
          id="title"
          type="text"
          className="form-control"
          ref={register({required: true})}
        />
        {errors.desc && "Description  is required."}
      </div>

      <div className="form-group">
        <Controller
          as={<Select options={options} />}
          control={control}
          rules={{required: true}}
          onChange={([selected]) => selected}
          name="categoryId"
          defaultValue={options[0]}
        />
        {errors.categoryId && "Categories  is required."}
      </div>

      <div className="form-group">
        <button
          onClick={() => {
            const {categoryId} = getValues()
            if (categoryId.value === "-1") {
              setError("categoryId", "No choose category")
            }
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

function mapStateToProps({categoriesBooks, books}, props) {
  let book = {}

  if (props.match.params.id) {
    book = books.filter(item => item._id === props.match.params.id)[0]
  }

  return {
    categories: mapToArr(categoriesBooks.categories),
    book
  }
}

export default connect(mapStateToProps, {addBook})(FormBook)
