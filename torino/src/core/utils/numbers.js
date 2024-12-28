//shorten the tour id
const shortenId = (text) => text.split("-").slice(0, 2).join("");

//convert english number to persian number
const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

//conver persian number to english
const p2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

//seprate the persian number by 3
const sp = (number) => {
  if (number) {
    const seperatedNumber = number
      .toString()
      .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
    const joinedNumber = seperatedNumber.join(",");
    return e2p(joinedNumber);
  }
};

//secure the user phone number
const securePhone = (mobile) => {
  const result = mobile.slice(-2) + `*`.repeat(5) + mobile.slice(0, 2);
  return e2p(result);
};

export { e2p, p2e, sp, shortenId, securePhone };
