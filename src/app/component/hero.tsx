export default function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                      }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl">NITE</h1>
                    <p className="mb-5">
                        A non profit focused on empowering our community
                        through teaching Neurodivergent individuals STEM topics
                    </p>
                    {/*<button className="btn btn-primary">Get Started</button>*/}
                </div>
            </div>
        </div>
    );
}