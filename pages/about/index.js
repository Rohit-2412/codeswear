import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-12">
                <h1 className="text-6xl font-bold text-gray-800 text-center mb-10">
                    About Us
                </h1>
                <div className="flex flex-wrap">
                    <div className="lg:w-1/2 px-4 w-fit">
                        <img
                            className="w-full h-auto rounded-xl shadow-lg"
                            src="https://img.freepik.com/free-photo/young-female-sitting-shopping-cart_651396-210.jpg?w=740&t=st=1686473164~exp=1686473764~hmac=4b541e07bc84d20c74610e2ecfa4d52d829027c3a28427f94359d011872cf6b5"
                            alt="About Codeswear"
                        />
                    </div>
                    <div className="lg:w-1/2 px-4 mt-6 lg:mt-0 flex flex-col items-center justify-between gap-10">
                        <p className="text-2xl font-semibold leading-relaxed text-justify">
                            Welcome to Codeswear.com, your go-to online store
                            for stylish and trendy apparel with a touch of
                            attitude. We specialize in providing unique and
                            high-quality clothing items that express your
                            passion for coding and technology.
                        </p>
                        <p className="text-xl leading-relaxed text-justify">
                            At CodeSwear, we believe in embracing your inner
                            geek and making a statement with your fashion
                            choices. Our collection features a wide range of
                            designs, from witty coding puns to sleek and
                            minimalistic tech-inspired graphics. We carefully
                            select premium fabrics to ensure comfort and
                            durability, so you can proudly wear your coding
                            spirit.
                        </p>
                        <p className="text-lg leading-relaxed text-justify">
                            Our mission is to create a community of like-minded
                            individuals who share a love for coding and want to
                            showcase their unique style. We are constantly
                            exploring new ideas and collaborating with talented
                            designers to bring you fresh and exciting designs
                            that reflect the latest trends in the tech world.
                        </p>
                        <p className="text-lg leading-relaxed text-justify">
                            Customer satisfaction is our top priority. We strive
                            to provide exceptional service and a seamless
                            shopping experience. Our friendly support team is
                            always ready to assist you with any inquiries or
                            concerns you may have. Your feedback is valuable to
                            us as we continuously work to improve and exceed
                            your expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
