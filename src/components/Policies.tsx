import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PolicyItem {
  title: string;
  content: string;
}

const policies: PolicyItem[] = [
  {
    title: 'Service Fee, Labor & Setup',
    content: `All quoted service fees cover planning coordination, event setup, styling, and labor provided by Audrey's Event Planning & Treatmaking. Service fees are calculated based on the scope of the event, number of guests, hours required, and services selected. Setup and breakdown time are included in the quoted labor hours. Any additional hours beyond the agreed-upon timeline will be billed at an hourly rate. Setup begins at the agreed-upon time; early arrival or extended access to the venue must be arranged in advance and may incur additional fees.`,
  },
  {
    title: 'Tip Jar & Gratuity Structure',
    content: `Gratuity is never required but always deeply appreciated by our team. A tip jar may be present at your event for guests who wish to contribute. Tips collected go directly to the event staff who served your event. Suggested gratuity for exceptional service is 15–20% of the total service fee. For large-scale events with multiple staff members, gratuity may be distributed evenly among the team. You are welcome to tip individually if preferred. Gratuity is entirely at your discretion and has no bearing on the quality of service provided.`,
  },
  {
    title: 'Payment Policy',
    content: `A non-refundable retainer of 50% of the total event cost is due at the time of booking to secure your event date. The remaining balance is due in full no later than 2 weeks prior to the event date. Accepted payment methods include Zelle, Venmo, Cash App, and cash. Personal checks are not accepted. Failure to submit full payment by the due date may result in cancellation of services without refund of the retainer. Invoices will be sent electronically via email. All prices are subject to change until a signed contract and retainer are received.`,
  },
  {
    title: 'Event Services Agreement',
    content: `By submitting this inquiry and signing the contract, the client agrees to all terms and conditions outlined by Audrey's Event Planning & Treatmaking. The contract constitutes a binding agreement between the client and the company. Services rendered are as outlined in the signed contract; any changes or additions to services after signing are subject to availability and additional fees. Audrey's Event Planning & Treatmaking reserves the right to decline service or terminate a contract in the event of non-payment, abusive conduct, or circumstances beyond our control. The client is responsible for ensuring venue access, permits, and any required permissions are in place prior to the event date.`,
  },
  {
    title: 'Retainer & Payment Terms',
    content: `The retainer fee secures your event date and initiates the planning process. This amount is applied toward your total balance and is non-refundable under any circumstances, including cancellation, date changes, or unexpected personal events. The retainer is a commitment on both sides — once received, we begin sourcing materials, coordinating vendors, and reserving staff. Full payment must be received no later than 14 days before your event. Events with less than 14 days' notice require full payment at the time of booking. Late payments may result in service cancellation without refund.`,
  },
  {
    title: 'Non-Refundable Payments',
    content: `All payments made to Audrey's Event Planning & Treatmaking — including retainers, deposits, and final balances — are strictly non-refundable. This policy exists because food, supplies, florals, décor, and materials are ordered and purchased specifically for your event well in advance. In the event of a client cancellation for any reason, including illness, family emergency, weather, or personal circumstances, no refund will be issued. We strongly recommend event insurance to protect your investment. In the rare event that we must cancel due to circumstances on our end (emergencies, illness, natural disaster), we will make every effort to refer a qualified replacement or reschedule at no additional charge.`,
  },
  {
    title: 'Guest Count & Changes',
    content: `Guest counts must be finalized no later than 14 days before the event. Increases in guest count after this deadline may not be accommodated and, if accepted, will result in additional charges. Decreases in guest count do not result in price reductions or refunds, as supplies are purchased based on the original count. Changes to event details such as time, location, or service type must be submitted in writing and are subject to availability and additional fees. We reserve the right to adjust pricing based on material costs, travel requirements, or scope changes.`,
  },
  {
    title: 'Alcohol Service & Responsibility',
    content: `Audrey's Event Planning & Treatmaking does not provide, purchase, or serve alcohol at any event. If alcohol is present at your event, it is the sole responsibility of the client and/or venue to ensure compliance with California law. This includes verifying that all guests consuming alcohol are of legal drinking age (21+) and that no alcohol is served to visibly intoxicated individuals. The client assumes full liability for any incidents related to alcohol consumption at their event. Our staff is not responsible for monitoring or managing alcohol service. Events held at licensed venues must comply with that venue's alcohol policies.`,
  },
  {
    title: 'Transportation & Driving',
    content: `Audrey's Event Planning & Treatmaking is not responsible for the transportation of guests to or from any event. We do not provide shuttle services, rideshare coordination, or designated driver arrangements. Clients are responsible for communicating transportation logistics to their guests. If our staff is required to transport supplies or equipment, a travel fee may be applied depending on the distance from our base location in Riverside, CA. We are not liable for any accidents, delays, or incidents that occur during client or guest transportation.`,
  },
  {
    title: 'Liability for Guests',
    content: `The client assumes full responsibility for the conduct and safety of their guests throughout the event. Audrey's Event Planning & Treatmaking is not liable for personal injury, property damage, or any incident involving guests. Any damage caused to rental items, décor, or venue property by guests will be the financial responsibility of the client. We reserve the right to halt or discontinue services if guest conduct becomes unsafe, disruptive, or threatening to our staff. Our team's safety is paramount, and we will not hesitate to remove ourselves from any situation that poses a risk to our wellbeing.`,
  },
  {
    title: 'Access, Setup & Timing',
    content: `The client is responsible for ensuring our team has timely and unobstructed access to the event venue at the agreed-upon setup time. Delayed access that results in a shortened setup window does not reduce the contracted service fee. If venue access is delayed by more than 1 hour, additional overtime fees may apply. Our team will arrive at the scheduled setup time and requires a clean, accessible space to work. Parking accommodations for our team and vehicles should be arranged by the client. Any setup that requires special equipment, permits, or access instructions must be communicated no later than 7 days before the event.`,
  },
  {
    title: 'Alcohol Liability Policy (California)',
    content: `In compliance with California law, Audrey's Event Planning & Treatmaking assumes no liability for alcohol-related incidents at any event we service. California Business and Professions Code Section 25602 outlines the responsibilities of hosts and servers regarding alcohol service. As a non-licensed alcohol provider, we are not responsible for any claims, damages, injuries, or losses arising from the consumption of alcohol at client events. Clients hosting events where alcohol is served are strongly encouraged to consult with their venue and obtain appropriate event liability insurance that covers alcohol-related incidents. By signing our contract, the client acknowledges and accepts full responsibility for alcohol-related risks and waives any claims against Audrey's Event Planning & Treatmaking related to alcohol service or consumption.`,
  },
];

export default function Policies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="policies" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-gold mb-3 font-medium">Transparency & Trust</p>
          <h2 className="text-5xl md:text-6xl font-script text-blush mb-4">Policies & Agreement</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Please review our policies before submitting your inquiry. Tap any section to expand.
          </p>
        </div>

        <div className="space-y-3">
          {policies.map((policy, i) => (
            <div
              key={policy.title}
              className="border border-champagne/60 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gradient-to-r hover:from-blush/5 hover:to-champagne/10 transition-all duration-200"
              >
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blush/10 text-gold text-xs font-medium flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="font-medium text-gray-700 text-sm sm:text-base">{policy.title}</span>
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-1 bg-gradient-to-br from-blush/5 to-champagne/5 border-t border-champagne/30">
                  <p className="text-sm text-gray-600 leading-relaxed">{policy.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-br from-blush/5 to-champagne/10 rounded-3xl p-8 border border-champagne/40">
          <p className="text-sm text-gray-500 mb-2 leading-relaxed">
            Questions about our policies?
          </p>
          <a
            href="tel:9516679011"
            className="inline-block btn-primary text-sm px-10 py-3 mt-2"
          >
            Call 951-667-9011
          </a>
        </div>
      </div>
    </section>
  );
}
