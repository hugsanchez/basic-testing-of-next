import Image from "next/image";

const IndivUser = ({user}:any) => {
  return(
    <section className="m-4 py-4">
      <div className="center">
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
    </section>
  )
}

export default IndivUser;