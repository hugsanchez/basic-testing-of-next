import { getUserById } from "@/prisma/user/user";

import IndivUser from "./user";
const Page = async({ params }:any) => {
  //const { user } = await getUserById(params.userId);
  let data = [
    {
      id:1,
      name:'mario',
      email:'mario@test.com',
      imgUrl:'https://github.com/hugsanchez.png'
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
  ]

  const user = data[params.userId - 1];
  return (
    <IndivUser user={user}></IndivUser>
  )
}

export default Page;