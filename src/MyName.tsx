// export function MyName ({name} : { name: string }){
//     return <div className="text-3xl font-bold underline"> My Name:{name}  </div>

interface MyNameProps {
  name: string;
  id? : string;
  password?: string;
}

export function MyName({ name,id,password }: MyNameProps) {
    return (
    <>
      <div className="text-3xl font-bold underline"> My Name: {name} </div>
    {id && <div>ID: {id} </div>}
    {password && <div>password: {password} </div>}
    </>
    );
}