const navbars = ['details', 'credit', 'debit', 'investment', 'food', 'bill']
export default function Navbar({
  select,
  setSelect,
}: {
  select: string
  setSelect: (name: string) => void
}) {
  return (
    <div className="flex my-5 w-fit  divide-x rounded-sm flex-1 bg-black/[0.045] text-sm border-separate border border-black/[0.085] divide-black/[0.085] backdrop-blur-md  text-white">
      {navbars.map((name, i) => (
        <p
          onClick={() => setSelect(name)}
          className={` px-5 border-separate  py-2  cursor-pointer ${
            select == name && 'bg-black/[0.085] '
          }`}
          key={`${i}-${name}`}
        >
          {name.slice(0, 1).toUpperCase() + name.slice(1)}
        </p>
      ))}
    </div>
  )
}
