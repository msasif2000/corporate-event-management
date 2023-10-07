
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'
import car4 from '../../assets/car4.jpg'
import car5 from '../../assets/car5.jpg'
import car6 from '../../assets/car6.jpg'
import car7 from '../../assets/car7.jpg'

const Banner = () => {
    return (
        <div className="my-8">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={car1} className="w-3/5 h-[400px] mx-auto shadow-2xl shadow-sky-300" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={car2} className="w-3/5 h-[400px] mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={car3} className="w-3/5 h-[400px] mx-auto" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={car4} className="w-3/5 h-[400px] mx-auto" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src={car5} className="w-3/5 h-[400px] mx-auto" />
                </div>
                <div id="item6" className="carousel-item w-full">
                    <img src={car6} className="w-3/5 h-[400px] mx-auto" />
                </div>
                <div id="item7" className="carousel-item w-full">
                    <img src={car7} className="w-3/5 h-[400px] mx-auto" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
                <a href="#item7" className="btn btn-xs">7</a>
            </div>
        </div>
    );
};

export default Banner;