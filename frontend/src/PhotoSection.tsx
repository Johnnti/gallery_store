import Photo from './Photo'

type ImageModule = { default: string }

export default function PhotoSection() {
    const imageModules = import.meta.glob<ImageModule>('./assets/*.jpg', { eager: true })
    const images = Object.values(imageModules).map((mod) => mod.default)

    return (
        <div className="relative mx-auto p-4">
            <h1 className="text-2xl">Title</h1>
            <div className="grid grid-cols-1">
                <div className="rounded-lg shadow-md">
                {images.map((url, i) => (
                    <Photo url={url} key={i} />
                ))}
                </div>
            </div>
        </div>
    )
}