import React from "react";
import { useForm } from "react-hook-form";

const FormBook = () => {
  const { register, handleSubmit, errors} = useForm();

  function onSubmit(data, e) {
    e.preventDefault();
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-md-5">
      <div className="form-group">
        <label html-for="title">Title</label>
        <input name="title" id="title"  type="text" className="form-control"
               ref={register({ required: true })}
        />
        {errors.title && "Title is required."}
      </div>
      <div className="form-group">
        <label html-for="desc">Description</label>
        <textarea name="desc" id="title" type="text" className="form-control"
                  ref={register({ required: true })}
        />
        {errors.desc && "Description  is required."}
      </div>

      <div className="form-group">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default FormBook;