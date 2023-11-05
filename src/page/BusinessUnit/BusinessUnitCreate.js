import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";

const BusinessUnitCreate = () => {
  const formik = useFormik({
    validate:(values)=>{
      const errors={}
      if(values.label===""){
           errors.label="Branch Name is required"
      }
      if (!values.accountOwnerEmail) {
        errors.accountOwnerEmail = 'Email is Required';
      } 
      return errors
    },
    initialValues: {
      label: "",
      accountOwnerEmail: "",
    },
    onSubmit:(values)=>{
      fetch('http://localhost:8080/api/v1/branch',{
        method:"POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(values)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data?.status){
          toast.success(data?.message)
          formik.resetForm()
        }
      })
      .catch(error=>{
        toast.error('Something went wrong')
      })
    }
  });
  return (
    <div className="container mx-auto">
      <h1 className="text-green-600 font-semibold text-[20px] underline">
        Create Business Unit
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="min-h-[80vh] flex flex-col justify-center"
      >
        <div className=" py-2 mx-auto px-2 rounded-lg w-6/12 ">
          <label className="block font-sans font-semibold mb-2">
            {" "}
            Unit Name
          </label>
          <input 
            name="label"
            onChange={formik.handleChange}
            value={formik.values.label}
            className="border-green-600 px-3 py-1 border-[1px] w-full outline-none rounded-[4px]"
            type="text"
          />
         {formik.errors.label ? <p className="text-red-500"><small>{formik?.errors?.label}</small></p>:null}
        </div>
        <div className=" py-2 mx-auto px-2 rounded-lg w-6/12 ">
          <label className="block font-sans font-semibold mb-2">
            {" "}
            Client Email
          </label>
          <input
            name="accountOwnerEmail"
            onChange={formik.handleChange}
            value={formik.values.accountOwnerEmail}
            className="border-green-600 px-3 py-1 border-[1px] w-full outline-none rounded-[4px]"
            type="text"
          />
          {formik.errors.accountOwnerEmail ? <p className="text-red-500"><small>{formik?.errors?.accountOwnerEmail}</small></p>:null}
        </div>
        <div className=" py-4 mx-auto px-2 rounded-lg w-6/12 mb-1">
          <button type="submit" className="bg-green-600 text-white font-semibold font-serif text-[14px] w-full py-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessUnitCreate;
