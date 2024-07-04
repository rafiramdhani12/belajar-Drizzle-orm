import {Link} from "react-router-dom";

/* eslint-disable react/prop-types */
const AbsenItem = ({absen, onDelete}) => {
  return (
    <>
      <div>
        <table></table>
        <h1>
          {absen.id} {absen?.nama} || {absen.email}
        </h1>
        <Link to={`/update/:id`}>
          <button>update</button>
        </Link>
        <button onClick={() => onDelete(absen.id)}>Delete</button>
      </div>
    </>
  );
};

export default AbsenItem;
