import FaqsCard from "./FaqsCard"
export default function Faqs ()  {

  const faqsList = [
    {
        q: "What kind of treatments does Slimfit offer?",
        a: "Slimfit offers non-surgical weight loss programs, body sculpting, inch loss treatments, skin tightening, anti-aging facials, and personalized beauty consultations tailored to your goals."
    },
    {
        q: "Are the weight loss treatments safe?",
        a: "Absolutely! All our procedures are FDA-approved, non-invasive, and performed by trained professionals under medical supervision to ensure your safety and comfort."
    },
    {
        q: "How long does it take to see visible results?",
        a: "Most clients begin to notice results within 2 to 4 weeks, depending on the treatment type and individual body response. Regular sessions and a healthy lifestyle enhance the results."
    },
    {
        q: "Do you provide customized treatment plans?",
        a: "Yes! Every body is different. Our experts will assess your goals, lifestyle, and medical background to design a treatment plan specifically for you."
    },
    {
        q: "Can men also get treatment at Slimfit?",
        a: "Of course! Our services are designed for all genders. Whether it’s weight management or skincare, we welcome everyone."
    }
];

    return (
        <section className="leading-relaxed max-w-screen-xl mt-20 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
            <h1 className="text-4xl font-semibold tracking-tighter text-[#d6007b] lg:text-6xl text-balance">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}