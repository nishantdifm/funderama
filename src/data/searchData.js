export const searchableItems = [
  {
    title: "ALL YOU NEED TO KNOW ABOUT SBA 7(a) Loan",
    link: "/blog/all-you-need-to-know-about-sba-7a-loan",
    image: "/images/customer-centric-lending-solutions.jpeg",
    desc: "ALL YOU NEED TO KNOW ABOUT SBA 7(a) Loan The SBA 7(A) is one of a few loaning programs the U.S. Small Business Administration offers to support mother and pop organizations gain admittance to capital. As opposed to loaning to business people legitimately, the SBA goes about as an underwriter on a controlled credit through business banks…",
    content: "The SBA 7(A) is one of a few loaning programs the U.S. Small Business Administration offers to support mother and pop organizations gain admittance to capital. SBA 7(a) loan mitigates risk, interest rates, eligibility, loan amounts up to $2 million, working capital, debt refinancing."
  },
  {
    title: "ALL YOU NEED TO KNOW ABOUT SBA LOANS",
    link: "/blog/all-you-need-to-know-about-sba-loans",
    image: "/images/big-business-starts-small.jpeg",
    desc: "ALL YOU NEED TO KNOW ABOUT SBA LOANS SBA The Small Business Administration (SBA) Is an expansion of the US government whose principal reason for existing is to help business people through different programs. The most engaging and notable program of the SBA is its loan program, intended to assist with raising capital for…",
    content: "Small Business Administration SBA loans government-sponsored loans 7(a), CDC/504 term loans, Microloans, disaster loans, personal credit score, collateral, net worth, requirements, personal financial statement form 413."
  },
  {
    title: "DOES MY BUSINESS QUALIFY FOR MCA?",
    link: "/blog/does-my-business-qualify-for-mca",
    image: "/images/mca-advanced-explained.png",
    desc: "Credit: www.become.com DOES MY BUSINESS QUALIFY FOR MCA? There are organizations that are not qualified for a bank advance – either those are excessively little or basically don't satisfy the required terms. What's more, what at that point, where to discover capital at this point? Fortunately, there is a possibility for those private companies too…",
    content: "Merchant Cash Advance MCA credit card sales factor rate holdback rate fast working capital unexpected operational expenses small business financing alternative funding Funderama."
  },
  {
    title: "PAYCHECK PROTECTION PROGRAM",
    link: "/blog/paycheck-protection-program",
    image: "/images/free-consultation.jpeg",
    desc: "PAYCHECK PROTECTION PROGRAM CARES ACT The Coronavirus Aid, Relief, and Economic Security Act, also called the CARES Act, is a $2.2 trillion monetary boost bill passed by the 116th U.S. Congress and marked into law by President Donald Trump in March 2020 in light of the monetary fallout of the COVID-19 pandemic in the United States…",
    content: "Paycheck Protection Program PPP CARES Act small business loans SBA 100% government guarantee payroll costs forgiveness application procedure."
  },
  {
    title: "SMALL BUSINESS ADMINISTRATION",
    link: "/blog/small-business-administration",
    image: "/images/sba-loans.jpeg",
    desc: "SMALL BUSINESS ADMINISTRATION Since 1953, the SBA has attempted to touch off change and flash activity so small business can unquestionably begin, develop, grow, or recover. Made in 1953, the U.S. Small Business Administration (SBA) keeps on helping entrepreneurs and small business seek after the American dream…",
    content: "Small Business Administration SBA 7(a) flagship loan up to $5 million, 504 loan for land machinery facilities, microloans up to $50,000, disaster loans, SBA guarantee."
  },
  {
    title: "What is MCA",
    link: "/blog/what-is-mca",
    image: "/images/quick-financing.jpeg",
    desc: "MERCHANT CASH ADVANCE A merchant cash advance (MCA) was initially organized as a singular amount installment to a business in return for an endless supply of future Mastercard and additionally charge card deals. The term is currently usually used to depict an assortment of independent company financing choices…",
    content: "Merchant Cash Advance MCA how it works debit and credit card sales factor rate holdback rate advantages seasonal businesses process applying approval Funderama."
  },
  {
    title: "Quick Financing",
    link: "/quick-financing",
    image: null,
    desc: "Loans For Convenience Stores Gas stations Grocery Stores Liquor Stores Pharmacies Restaurants Trucking Small Business Loans Working capital Merchant cash advance Equipment financing Line of credit SBA loans Commercial real estate loans",
    content: "Quick Financing fast funding business loan solutions commercial lending convenient fast merchant cash advance SBA financing."
  },
  {
    title: "SBA Loans",
    link: "/sba-loans",
    image: null,
    desc: "Small Business Administration (SBA) loans are government-backed loans that offer low interest rates and long repayment terms to help small businesses start, grow, or expand. Fast approvals and flexible terms with Funderama.",
    content: "SBA Loans government-backed loan solutions 7a loans 504 financing low interest rates flexible repayment terms Funderama LLC."
  },
  {
    title: "Contact",
    link: "/contact",
    image: null,
    desc: "+1-877-991-2355 Customer Care apply@funderamallc.com Support & information 19355 TURNBERRY WAY SUITE 27D AVENTURA, FLORIDA 33180 Office location Feel Free to Contact Us If you have any queries please connect with us.",
    content: "Contact Funderama LLC customer care email phone number address Aventura Florida request a call-back appointment."
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
    image: null,
    desc: "INTRODUCTION Funderama LLC (website URL address: https://funderamallc.com/) appreciates your business and the trust you place in us. We are committed to protecting and respecting your privacy.",
    content: "Privacy Policy terms and conditions personal data collection cookies security rights Funderama LLC."
  },
  {
    title: "Blog",
    link: "/blog",
    image: null,
    desc: "Latest news, updates, and articles on small business administration, merchant cash advance, SBA loans, and business financing from Funderama.",
    content: "Blog news articles small business SBA loans merchant cash advance financing advice."
  },
  {
    title: "Home",
    link: "/",
    image: null,
    desc: "Customer-centric lending solutions. At FunderamaLLC, our focus is towards the customers gaining an upper hand on business financing deals. Making the right choices and being able to get the right kind of merchant cash advance or an SBA loan.",
    content: "Customer-centric lending solutions welcome to FunderamaLLC SBA loans merchant cash advance make an appointment why choose Funderama."
  }
];

export function searchSite(query) {
  if (query === null || query === undefined) {
    return searchableItems;
  }

  const q = query.trim().toLowerCase();
  if (!q) {
    return searchableItems;
  }

  const words = q.split(/\s+/).filter(Boolean);
  const matched = [];

  for (const item of searchableItems) {
    const title = (item.title || "").toLowerCase();
    const desc = (item.desc || "").toLowerCase();
    const content = (item.content || "").toLowerCase();

    let score = 0;
    if (title === q) score += 100;
    else if (title.startsWith(q)) score += 50;
    else if (title.includes(q)) score += 30;

    if (words.every((w) => title.includes(w))) score += 20;
    if (desc.includes(q)) score += 10;
    if (content.includes(q)) score += 5;

    if (words.some((w) => desc.includes(w) || content.includes(w))) {
      score += 1;
    }

    if (score > 0) {
      matched.push({ item, score });
    }
  }

  matched.sort((a, b) => b.score - a.score);
  return matched.map((m) => m.item);
}

