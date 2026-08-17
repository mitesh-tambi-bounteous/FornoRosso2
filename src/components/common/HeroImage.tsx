import './HeroImage.css'

type HeroImageProps = {
  src: string
  alt: string
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="hero-image">
      <img src={src} alt={alt} />
    </div>
  )
}
