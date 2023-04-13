import Users from "./users";
const UsersLayout = async({ children}: {
  children: React.ReactNode
}) => {
  return(
    <section className="flex">
      <aside className="w-1/4">
        <Users/>
      </aside>
      <main>
        {children}
      </main>
    </section>
  )
}

export default UsersLayout;