import './ImageCollage.css'

type ImageCollageProps = {
  images: { src: string; alt: string }[]
}

export default function ImageCollage({ images }: ImageCollageProps) {
  return (
    <div className="image-collage">
      {images.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt} />
      ))}
    </div>
  )
}
