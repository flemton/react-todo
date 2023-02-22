import { useState } from "react"
const  = () => {
  const [fname, setFname] = useState("")
  return (
    <>
      <h1>Controlled Form</h1>
      <form>
        <label>
          First Name: <input type="text" value={fname} />
        </label>
      </form>
    </>
  );
};
export default Form;
