import { useState } from "react";
import { formList } from "../utiil/formInuts";

const Form = () => {
  const [obj, setobj] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, seterror] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setobj((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(obj).some((value) => value == "")) {
      seterror(true);
    } else {
      console.log(obj);
      seterror(false);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            {formList.map((elem, i) => (
              <div key={i} className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  {elem.label}
                </label>
                <input
                  onChange={handleChange}
                  type={elem.type}
                  name={elem.name}
                  id={elem.className}
                  placeholder={elem.placeholder}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            ))}

            {error && (
              <div className="text-red-400 text-l">
                Pls flll alll the details
              </div>
            )}
            <div>
              <button
                onClick={handleSubmit}
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
