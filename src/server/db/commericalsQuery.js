import {Query} from "./index"

const all = async () => Query("SELECT * from commercials");

const get = async (id) => Query("SELECT * from commercials where id = ?", [id]);

const post = async (name, company) => Query("INSERT into commercials(name, company) values(?, ?)", [name, company])

const put = async (name, company, id) => Query("UPDATE commercials SET name = ?, company = ?  WHERE id = ?", [name, company, id])

const deleteCommercials = async (id) => Query("DELETE FROM commercials WHERE id = ?", [id])

export default{
    all,
    get,
    post,
    put,
    deleteCommercials
}