import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import {db} from "../../utils/db";
import {Absen} from "../../utils/schema";
import {eq} from "drizzle-orm";

const Update = () => {
  const {id} = useParams();
  const [editData, setEditData] = useState({});

  const handleEditChange = (e) => {
    const {name, value} = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const UpdateAbsen = async (id, newData) => {
    try {
      console.log("Updating ID:", id);
      console.log("New Data:", newData);
      await db.update(Absen).set(newData).where(eq(Absen.id, id));
      console.log("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center text-white">
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
              name="nama"
              className="grow"
              placeholder="Nama"
              onChange={handleEditChange}
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
              name="email"
              className="grow"
              placeholder="Email"
              onChange={handleEditChange}
            />
          </label>
        </form>
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <button
          className="btn btn-info text-white"
          onClick={() => UpdateAbsen(id, editData)}>
          Update
        </button>
        <button className="btn btn-error text-white">
          <Link to={"/"}>Back</Link>
        </button>
      </div>
    </>
  );
};

export default Update;
