interface CardProps {
  children: React.ReactNode
  className?: string
  noPad?: boolean
}

export default function Card({ children, className = '', noPad = false }: CardProps) {
  return (
    <div className={`bg-card border border-stroke rounded-xl ${noPad ? '' : 'p-6'} ${className}`}>
      {children}
    </div>
  )
}
