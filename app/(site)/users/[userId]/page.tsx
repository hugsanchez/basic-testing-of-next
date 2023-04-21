import { getUserById, getUsers } from "@/prisma/user/user";


export async function generateStaticParams() {
  const { users } = await getUsers();

  // return users?.map((user) => {
  //   userId: user.id
  // });
  return[
    {userId: '1'},
    {userId: '2'},
    {userId: '3'}
  ]

}

import IndivUser from "./user";
const Page = async({ params }:any) => {
  //const { user } = await getUserById(params.userId);
  let data = [
    {
      id:1,
      name:'mario',
      email:'mario@test.com',
      imgUrl:'https://github.com/hugsanchez.png',
      tweets: [
        {
          id:1,
          body: 'hello',
          likes: 3,
          userId: 1
        },
        {
          id:2,
          body: 'world',
          likes: 4,
          userId: 1
        }
      ]
    },
    {
      id:2,
      name:'luigi',
      email:'luigi@test.com',
      imgUrl:'/#'
    },
    {
      id:3,
      name:'DK',
      email:'DK@test.com',
      imgUrl:'/#'
    },
  ];



  const user = data[params.userId - 1];
  return (
    <IndivUser user={user}></IndivUser>
  )
}

export default Page;