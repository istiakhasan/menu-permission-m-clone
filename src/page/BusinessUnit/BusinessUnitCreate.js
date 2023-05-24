import React from "react";

const BusinessUnitCreate = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-green-600 font-semibold text-[20px] underline">Create Business Unit</h1>
      <form className="min-h-[80vh] flex flex-col justify-center">
        <div  className=" py-2 mx-auto px-2 rounded-lg w-6/12 ">
          <label className="block font-sans font-semibold mb-2"> Unit Name</label>
          <input className="border-green-600 px-3 py-1 border-[1px] w-full outline-none rounded-[4px]"  type="text" />
        </div>
        <div  className=" py-2 mx-auto px-2 rounded-lg w-6/12 ">
          <label className="block font-sans font-semibold mb-2"> Client Email</label>
          <input className="border-green-600 px-3 py-1 border-[1px] w-full outline-none rounded-[4px]"  type="text" />
        </div>
        <div  className=" py-4 mx-auto px-2 rounded-lg w-6/12 mb-1">
           <button className="bg-green-600 text-white font-semibold font-serif text-[14px] w-full py-2">Save</button>
        </div>
      </form>
    </div>
  );
};

export default BusinessUnitCreate;
