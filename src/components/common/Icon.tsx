import type { ReactElement } from 'react'

export type IconName =
  | 'arrow-right'
  | 'flame'
  | 'truck'
  | 'plus'
  | 'star'
  | 'shield'
  | 'compass'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'shopping-cart'

const paths: Record<IconName, ReactElement> = {
  'arrow-right': (
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  flame: (
    <path
      d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-1-2-1-3 2 1 3 3 3 5a5 5 0 0 1-10 0c0-4 3-6 3-10Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  truck: (
    <path
      d="M2 8h11v8H2zM13 11h4l3 3v2h-7zM6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  plus: <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />,
  star: (
    <path
      d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9L6 21l1.6-7L2.2 9.2l7.1-.6L12 2Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  shield: (
    <path
      d="M12 3 5 6v6c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 6-6 2 2-6 6-2Z" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path
      d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  twitter: (
    <path
      d="M21 5.5a8.4 8.4 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.8A11.7 11.7 0 0 1 2.3 4.3a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 1 18.4a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5A8.4 8.4 0 0 0 21 5.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  'shopping-cart': (
    <>
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path
        d="M2 3h2l2.6 12.4A2 2 0 0 0 8.6 17H18a2 2 0 0 0 2-1.6L21.5 8H6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
}

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

export default function Icon({ name, size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
