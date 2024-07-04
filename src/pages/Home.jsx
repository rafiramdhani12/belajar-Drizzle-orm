import {useEffect, useState} from "react";
import {db} from "../../utils/db";
import {Absen} from "../../utils/schema";

import AbsenList from "../components/AbsenList";

import {eq} from "drizzle-orm";

function Home() {
  const [absen, setAbsen] = useState([]);
  useEffect(() => {
    GetAbsen();
  }, []);

  const GetAbsen = async () => {
    const result = await db.select().from(Absen).limit(20);
    setAbsen(result);
  };

  const DeleteAbsen = async (id) => {
    try {
      await db.delete(Absen).where(eq(Absen.id, id)); // Menggunakan db.delete dengan benar
      GetAbsen(); // Refresh data after delete
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  return (
    <>
      {/* drilling props */}
      <AbsenList absen={absen} onDelete={DeleteAbsen} />

      {/* <div>
        {absen.map((absen) => (
          <h1 key={absen.id}>
            {absen.nama} || {absen.email}
          </h1>
        ))}
      </div> */}
    </>
  );
}

export default Home;
