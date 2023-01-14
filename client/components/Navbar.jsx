import React from 'react'
import { FaHome, FaTh } from 'react-icons/fa'
import { TbPackgeImport, TbPackgeExport, TbReportAnalytics } from 'react-icons/tb'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div name="navbar">
            <div className="navbar bg-base-100">
                <div className="navbar-start"></div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-3xl text-accent">Manage Stock Online</a>
                </div>
                <div className="navbar-end"></div>
            </div>
            <div name="menu">
                <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 w-56 p-2 rounded-box">
                    <li>
                        <Link href="/">
                            <FaHome />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <FaTh />
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/importstock">
                            <TbPackgeImport />
                            Import Stock
                        </Link>
                    </li>
                    <li>
                        <Link href="/exportstock">
                            <TbPackgeExport />
                            Export Stock
                        </Link>
                    </li>
                    <li>
                        <Link href="/report">
                            <TbReportAnalytics />
                            Report Stock
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar