
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <div className="mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <div className="mx-auto">
                {/* <Footer></Footer> */}
            </div>
        </div>
    );
};

export default Root;