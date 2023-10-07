import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/ach.jpg'
import img2 from '../../assets/ach2.jpg'
import img3 from '../../assets/ach3.jpg'
import img4 from '../../assets/ach4.jpg'

const LeftSidebar = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className="p-2 md:flex lg:flex-col justify-between rounded bg-gradient-to-r from-emerald-100 from-10% via-red-50 via-30% to-orange-100 to-90% ...">
            <div>
                <h2 className="text-2xl font-bold">Find Your Choice</h2>
                {
                    category.map(cat => <Link to={`/eventCategory/${cat.category_id}`} key={cat.category_id} className="pl-8 text-xl flex  hover:underline hover:text-blue-600">{cat.event_name}</Link>)
                }
            </div>
            <div className="lg:pt-8">
                <h2 className="text-2xl font-bold">Our Achievement</h2>
                <div className="lg:pl-6 grid grid-cols-2 lg:grid-cols-1">
                    <img src={img1} alt="" className="w-[220px] h-[160px] m-2" />
                    <img src={img2} alt="" className="w-[220px] h-[160px] m-2" />
                    <img src={img3} alt="" className="w-[220px] h-[160px] m-2" />
                    <img src={img4} alt="" className="w-[220px] h-[160px] m-2" />
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;