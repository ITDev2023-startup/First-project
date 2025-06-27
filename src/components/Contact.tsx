import img from "./Images/HI.png";

function Contact() {
  return (
    <>
      <div className="flex w-full p-5 gap-7">
        <div className="w-[50%]">
          <img src={img} width={450} />
        </div>
        <div className="w-[50%]">
          <h2 className="text-blue-700 text-[180%] font-medium font-sans">
            Who We Are
          </h2>
          <div className="leading-6 font-serif font-light text-gray-500 mt-3 text-[100%]">
            <p>
              At Kaamwali Bai, we’re on a mission to simplify the way families
              find trusted domestic help. We offer a fully digital maid service
              experience that is fast, secure, and tailored to your home’s
              unique needs.
            </p>
            <p className="mt-2">
              Whether you need assistance with cleaning, cooking, baby care, or
              mother care, our platform connects you with trained and verified
              professionals who are ready to support you. From onboarding to
              booking, every step is managed online, making the process
              convenient and stress-free for busy households.
            </p>
            <p className="mt-2">
              We prioritize your safety and satisfaction. That’s why every maid
              on our platform goes through a third-party background check,
              identity verification, and skill assessment before being listed.
              No middleman, no guesswork—just reliable help at your fingertips.
            </p>
            <p className="mt-2">
              With affordable pricing, flexible plans, and a dedicated support
              team, Kaamwali Bai is trusted by 1,000+ happy families across
              Mumbai and beyond.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
