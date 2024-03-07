/***
 * Container with gold gradient background
 */
export default function GoldSection({children}:{children: React.ReactNode}) {
  return (
    <div className="bg-gradient-to-r from-gold-1 to-gold-2">
      {children}
    </div>
  )
}