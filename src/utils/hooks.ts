import { useMediaQuery } from 'react-responsive'


export const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
export const Mobile = ({ children }: any) => {
  const isTablet = useMediaQuery({ maxWidth: 991 })
  return isTablet ? children : null
}
