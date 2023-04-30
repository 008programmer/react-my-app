

export default function ProjectName(){
    return <div>{process.env.NEXT_PUBLIC_AppName ?? 'No Name'}</div>
}