import Photo from './photo.tsx'
export default function PhotoSection() {
    return (<>
        <div className="absolute text-2xl top-0 left-0">Title</div>
        <div className="w-full h-[20vh] grid grid-cols-4 grid-rows-4 border">
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
        </div>

        </>
    )
}