import {Query} from "./index"
// get all movies
const all = async () => Query("SELECT * FROM movies")
// get one movies
const get =  async (id) => Query("SELECT * FROM movies WHERE id = ?", [id])

//make movies
const post = async (name, date, role ) => Query("insert into movies(name, date, role) values(?, ?, ?)", 
[name, date, role])

// update movies
const put = async (id, name, date, role) => Query("UPDATE movies SET name = ?, date = ?, role = ? WHERE id = ?", [id, name, role, date]);

// delete movie
const deleteMovie =  async (id) => Query("DELETE FROM movies WHERE id = ?", [id])

export default{
    all,
    get,
    post, 
    put, 
    deleteMovie,
   
}