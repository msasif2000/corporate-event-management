import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import gif1 from '../../assets/image2.gif'

const About = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="my-12 lg:mx-24 md:mx-8 flex lg:flex-row flex-col-reverse gap-3 items-center"> 
                <p className=" border-2 p-3  rounded-lg mb-2">At <span className="font-bold text-xl text-orange-600">Corporate Event Management</span>, we are dedicated to crafting unforgettable experiences that go beyond the ordinary. With a passion for perfection and an unwavering commitment to excellence, we specialize in curating corporate events that leave a lasting impression. Our team of seasoned professionals brings creativity, precision, and attention to detail to every project, ensuring that each event is unique, seamless, and tailored to your company`s vision.

                    With years of experience in the industry, we have successfully orchestrated a wide range of events, from grand conferences and trade shows to intimate team-building workshops and award ceremonies. Our mission is to transform your ideas into reality, providing end-to-end event solutions that exceed your expectations. Whether you`re aiming to inspire, celebrate, educate, or simply connect, Corporate Event Management is your trusted partner in achieving your corporate event goals.

                    We understand that every event is an opportunity to showcase your brand and achieve your objectives. That`s why we listen closely to your needs, collaborate closely with your team, and execute flawlessly, ensuring that your event not only meets but exceeds your goals. With a commitment to innovation and a dedication to excellence, Corporate Event Management is your partner in creating remarkable corporate experiences.</p>

                    <img src={gif1} alt=""  className="w-[400px] h-[400px] mx-auto rounded-lg"/>
            </div>
        </div>
    );
};

export default About;