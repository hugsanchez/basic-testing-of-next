import { getUsers } from "@/prisma/user/user";
import Link from "next/link";

export const revalidate = 0;

const Users = async() => {
  //const { users } = await getUsers();
  let users = [
    {
      id:1,
      name:'mario',
      email:'mario@test.com',
      imgUrl:'#'
    },
    {
      id:2,
      name:'luigi',
      email:'luigi@test.com',
      imgUrl:'#'
    },
    {
      id:3,
      name:'DK',
      email:'DK@test.com',
      imgUrl:'#'
    },
  ]
  return (
    <section className="fixed h-full w-1/4 bg-stone-800">
      <div className="center py-4">
        <h2 className="mb-4 text-xl  border-b border-stone-800 font-medium text-white">Users ???</h2>
        <ul className="flex flex-col text-sm text-white list-none gap-1 list-inside">
          {users?.map(user => (
            <li key={user.id} className="text-base">
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Users;