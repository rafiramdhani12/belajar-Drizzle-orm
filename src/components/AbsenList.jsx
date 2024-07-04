/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";

const Home = ({absen, onDelete}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black">
      <div className="w-full max-w-4xl p-6 mt-10 bg-white shadow-md rounded-lg">
        <table className="table w-full">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {absen.map((absen) => (
              <tr key={absen.id}>
                <th>{absen.id}</th>
                <td>{absen.nama}</td>
                <td>{absen.email}</td>
                <td className="flex gap-2">
                  {" "}
                  <Link to={`/update/${absen.id}`}>
                    <button className="btn btn-info btn-sm text-white">
                      Update
                    </button>
                  </Link>
                  <button
                    className="btn btn-error btn-sm text-white"
                    onClick={() => onDelete(absen.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/input" className="mt-10">
        <button className="btn btn-secondary text-white">
          daftar dulu rek
        </button>
      </Link>
    </div>
  );
};

export default Home;
