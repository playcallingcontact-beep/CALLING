interface AvatarProps {
  image: string
  size?: number
  className?: string
}

// object-contain : jamais de recadrage, l'image entière (coiffure comprise) reste visible.
// Le fond neutre est posé par le conteneur appelant, pas ici.
export function Avatar({ image, size = 64, className = '' }: AvatarProps) {
  return (
    <img
      src={image}
      alt=""
      className={`flex-none object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
