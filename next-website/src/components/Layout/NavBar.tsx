import {Mwp} from '@/components/MaxWidthProvider'
import GeIcon from '../icons/geIcon'
import { ThemeToggle } from '../ThemeToggle'
import NavMenu from './NavMenu/NavMenu'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-10">
      <Mwp size="2xl" className="flex items-center justify-between">
        <GeIcon size={48} />
        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <NavMenu />
        </div>
      </Mwp>
    </nav>
  )
}