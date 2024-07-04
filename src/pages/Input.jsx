import {useState} from "react";
import {db} from "../../utils/db";
import {Absen} from "../../utils/schema";
import {Link} from "react-router-dom";

const Input = () => {
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [save, setSave] = useState();

  const onSaveButton = async (e) => {
    e.preventDefault();
    const result = await db
      .insert(Absen)
      .values({
        nama: nama,
        email: email,
      })
      .returning({id: Absen.id});
    setSave(result);

    // if (result) {
    //   localStorage.setItem("nama", nama);
    //   console.log("saved");
    // }
  };

  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center text-white ">
        <form action="">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Nama"
              onChange={(e) => setNama(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="flex gap-2 justify-center mt-5">
        <button className="btn btn-primary text-white " onClick={onSaveButton}>
          save
        </button>
        <button className="btn btn-error text-white ">
          <Link to={"/"}>back</Link>
        </button>
      </div>
    </>
  );
};

export default Input;
