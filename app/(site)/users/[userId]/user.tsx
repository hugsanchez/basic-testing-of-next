import Image from "next/image";
import Tweet from "./tweet";

const IndivUser = ({user}:any) => {
  return(
    <section className="my-6 mx-8 flex gap-20">
      <div>
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={user?.imgUrl}
            alt={user?.name}
            style={{ objectFit:'cover'}}
            fill
          ></Image>
        </div>
        <h1 className="text-xl font-bold">{user?.name}</h1>
        <p className="text-sm text-stone-400">{user?.email}</p>
      </div>
      <div className="grow">
        <h2 className="text-2xl font-semibold tracking-tight"></h2>
        <ul>
          {user.tweets.map(tweet => (
            <Tweet key={tweet.id} tweet= {tweet}></Tweet>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default IndivUser;