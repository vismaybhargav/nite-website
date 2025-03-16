const Navbar = () => {
    return (
        <div className="sticky top-0 navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">NITE</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Leadership</a></li>
                    <li><a className="bg-primary rounded-sm">Donate</a></li>
                </ul>
            </div>
        </div>
   );
};

export default Navbar;