

export default function ProjectName(){
    return <div>{process.env.AppName ?? 'No Name'}</div>
}