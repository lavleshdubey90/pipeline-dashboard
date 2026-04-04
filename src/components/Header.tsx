import Breadcrumb from "@/components/Breadcrumb";

const Header: React.FC = () => {
  return (
    <header className='border border-base-300 w-full rounded-box p-2 lg:p-4 bg-base-200'>
      <nav className="flex justify-between items-center">
        <Breadcrumb />

        {/* Logged In User */}
        <div className="flex items-center gap-2">
          <div className="avatar avatar-placeholder">
            <div className="bg-base-300 text-base-content w-12 rounded-full">
              <span className="text-sm font-bold">SD</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm truncate">Sarah Doe</h3>
            <div className="text-xs text-base-content/60">sarah.doe@example.com</div>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header;