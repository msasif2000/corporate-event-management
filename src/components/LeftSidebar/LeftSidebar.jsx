import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('Category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl font-bold">Find Your Choice</h2>
            {
                category.map(cat => <Link to={`/eventCategory/${cat.category_id}`} key={cat.category_id} className="pl-8 text-xl flex  hover:underline hover:text-blue-600">{cat.event_name}</Link>)
            }
        </div>
    );
};

export default LeftSidebar;