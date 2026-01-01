type PhotoProps = {
    url: string;
}

export default function Photo({ url }: PhotoProps){
    return (
        <img src={url} alt="Photo" className="w-full h-64 object-cover"/>
    )
} 