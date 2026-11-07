const SITE = {
  phone: "",
  whatsapp: "",
  email: "",
  address: "Near Indralaya Highlands / Hotel Ambesy, Ujjain–Indore Road, Ujjain, Madhya Pradesh 456001, India",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Shri+Krishna+Villa+Homestay%2C+Ujjain%2C+Madhya+Pradesh+456001"
};

const navItems = [
  ["Home", "index.html", "home"],
  ["About", "about.html", "about"],
  ["Rooms", "rooms.html", "rooms"],
  ["Gallery", "gallery.html", "gallery"],
  ["Amenities", "amenities.html", "amenities"],
  ["Location", "location.html", "location"],
  ["Reviews", "reviews.html", "reviews"],
  ["FAQ", "faq.html", "faq"]
];

const pageInfo = {
  about: {
    title: "A welcoming homestay in Ujjain",
    subtitle: "About Shri Krishna Villa Homestay",
    description: "A peaceful, family-friendly place to settle in during your visit to Ujjain.",
    content: `<div class="row gy-5 align-items-center"><div class="col-lg-6"><img class="page-image" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Comfortable shared living area, illustrative placeholder" loading="lazy"><p class="fine-print mt-2">Illustrative image · replace with a property photograph.</p></div><div class="col-lg-6"><p class="eyebrow">A home with a warm welcome</p><h2>Comfort and care, at your own pace.</h2><p>Shri Krishna Villa Homestay is a welcoming base for pilgrims, families, couples, solo travellers, students and professionals visiting Ujjain. We believe a good stay begins with clean, comfortable surroundings and thoughtful, personal hospitality.</p><p>Set on Ujjain–Indore Road near Indralaya Highlands and Hotel Ambesy, the homestay offers a convenient starting point for exploring the city. Whether you are here for a temple visit, a short break or a longer stay, we invite you to make yourself at home.</p><p class="policy-note">Please confirm room facilities, security arrangements and any specific requirements directly with the host before booking.</p><a class="button button-dark mt-3" href="contact.html">Enquire about a stay <span aria-hidden="true">↗</span></a></div></div>`
  },
  rooms: {
    title: "Rooms & Rates",
    subtitle: "Find a stay that feels right",
    description: "Explore room options at Shri Krishna Villa Homestay. Rates, occupancy and facilities are confirmed by the host.",
    content: `<p class="policy-note mb-4">Room photos are illustrative placeholders. All room configurations, capacity, bed type, amenities and rates must be confirmed with the host. No rates or availability are confirmed on this website.</p><div class="row g-4">${[
      ["Deluxe Room", "A furnished room for a quiet short stay.", "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85"],
      ["Family Room", "A shared space to make family visits more comfortable.", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"],
      ["Long-Stay Room", "Ask about arrangements for a longer visit or work stay.", "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=85"]
    ].map(([name, text, image]) => `<div class="col-md-6 col-lg-4"><article class="page-card p-0 overflow-hidden"><img class="page-image" style="height:240px" src="${image}" alt="${name} interior, illustrative placeholder" loading="lazy"><div class="p-4"><p class="eyebrow">Stay option</p><h2 class="h3">${name}</h2><p>${text}</p><ul class="small text-secondary ps-3"><li>Capacity: confirm with host</li><li>Bed type: confirm with host</li><li>Bathroom and amenities: confirm with host</li></ul><div class="d-flex align-items-center justify-content-between mt-3"><span class="rate-placeholder">Starting from ₹___<small>/night</small></span><a class="round-link" href="contact.html?room=${encodeURIComponent(name)}" aria-label="Enquire about ${name}">↗</a></div></div></article></div>`).join("")}</div><div class="text-center mt-5"><a class="button button-dark" href="contact.html">Ask about your dates <span aria-hidden="true">↗</span></a></div>`
  },
  gallery: {
    title: "Gallery",
    subtitle: "A glimpse of the homestay",
    description: "Explore rooms, shared spaces, the exterior and nearby Ujjain — with illustrative images ready to be replaced.",
    content: `<p class="policy-note mb-4">All images below are illustrative placeholders, not photographs of the property or confirmed local landmarks. Replace them with verified homestay and destination photographs.</p><div class="gallery-filters" role="group" aria-label="Filter gallery images">${["All", "Rooms", "Common Areas", "Dining", "Exterior", "Nearby Ujjain"].map((category, index) => `<button type="button" data-gallery-filter="${category}" aria-pressed="${index === 0}">${category}</button>`).join("")}</div><div class="page-gallery">${[
      ["photo-1600607687939-ce8a6c25118c", "Reception & lounge", "Common Areas"],
      ["photo-1611892440504-42a792e24d32", "Bedrooms", "Rooms"],
      ["photo-1620626011761-996317b8d101", "Bathrooms", "Rooms"],
      ["photo-1600566753086-00f18fb6b3ea", "Dining area", "Dining"],
      ["photo-1600607687920-4e2a09cf159d", "Exterior & garden", "Exterior"],
      ["photo-1600210492486-724fe5c67fb0", "Common spaces", "Common Areas"],
      ["photo-1600210491892-03d54c0aaf87", "Family & group stays", "Rooms"],
      ["photo-1577083552431-6e5fd01aa342", "Nearby Ujjain · placeholder", "Nearby Ujjain"],
      ["photo-1564769625905-50e93615e769", "Nearby Ujjain · placeholder", "Nearby Ujjain"]
    ].map(([id, label, category]) => {
      const src = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;
      return `<button type="button" data-gallery-category="${category}" data-gallery-image="${src}" data-gallery-caption="${label} · illustrative placeholder" aria-label="Enlarge ${label} image"><img src="${src}" alt="${label}, illustrative placeholder" loading="lazy"></button>`;
    }).join("")}</div>`
  },
  amenities: {
    title: "Amenities",
    subtitle: "The essentials for an easy stay",
    description: "A practical guide to the comforts available at Shri Krishna Villa Homestay. Confirm all facilities with the host.",
    content: `<p class="policy-note mb-4">The following are requested or expected amenity categories. Confirm current availability, charges and arrangements directly with the host before arrival.</p><div class="row g-3">${[
      ["Furnished rooms", "Furnished accommodation; room-specific details to be confirmed."],
      ["Private bathrooms", "Ask the host to confirm the bathroom setup for your room."],
      ["Security", "Ask about security measures and CCTV coverage before booking."],
      ["Drinking water", "Confirm drinking-water arrangements with the host."],
      ["Linen", "Confirm linen provision and replacement arrangements."],
      ["Food options", "Ask about pure-vegetarian food options and meal timings."],
      ["Family stays", "Children and family groups are welcome; confirm suitable rooms."],
      ["Flexible stays", "Enquire about short stays, extended stays and check-in needs."],
      ["Wi-Fi & parking", "Availability and any applicable charges must be confirmed."]
    ].map(([title, text]) => `<div class="col-sm-6 col-lg-4"><article class="page-card"><span class="feature-icon" aria-hidden="true">✳</span><h2 class="h3">${title}</h2><p>${text}</p></article></div>`).join("")}</div>`
  },
  location: {
    title: "Location & Nearby Attractions",
    subtitle: "Discover the sacred city",
    description: "Find us near Indralaya Highlands and Hotel Ambesy on Ujjain–Indore Road, Ujjain.",
    content: `<div class="row g-4"><div class="col-lg-7"><div class="map-frame"><iframe title="Map of Ujjain–Indore Road, Ujjain" src="https://www.google.com/maps?q=Ujjain-Indore%20Road%2C%20Ujjain%2C%20Madhya%20Pradesh%20456001&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><span class="map-note">Approximate area only · confirm exact pin</span></div><p class="fine-print mt-2">Map shows the general area, not a verified property pin. Please confirm the exact location with your host.</p></div><div class="col-lg-5"><p class="eyebrow">Find your way</p><h2>Near Indralaya Highlands / Hotel Ambesy</h2><address class="address-block">${SITE.address}</address><a class="button button-dark" href="${SITE.mapUrl}" target="_blank" rel="noopener noreferrer">Open directions <span aria-hidden="true">↗</span></a></div></div><h2 class="mt-5">Ujjain, at your own pace.</h2><p class="text-secondary">Travel times below are deliberately left as placeholders. Traffic, routes and schedules vary; confirm current travel times with your host or local transport provider.</p><div class="row g-3 mt-2">${[
      ["Mahakaleshwar Jyotirlinga", "Travel time: confirm locally"],
      ["Ram Ghat", "Travel time: confirm locally"],
      ["Harsiddhi Temple", "Travel time: confirm locally"],
      ["Kal Bhairav Temple", "Travel time: confirm locally"],
      ["Sandipani Ashram", "Travel time: confirm locally"],
      ["Ujjain Junction", "Travel time: confirm locally"],
      ["Local transport", "Availability and fares: confirm locally"]
    ].map(([name, time]) => `<div class="col-sm-6 col-lg-4"><article class="page-card"><h2 class="h3">${name}</h2><p>${time}</p></article></div>`).join("")}</div>`
  },
  reviews: {
    title: "Guest Reviews",
    subtitle: "Thoughtful words from fellow travellers",
    description: "Sample testimonial layouts — replace all review content with verified guest feedback before publishing.",
    content: `<p class="policy-note mb-4">The testimonials below are fictional examples to demonstrate the design. They are not real guest reviews and should be replaced or removed before the site goes live.</p><div class="row g-4">${[
      ["“A peaceful place to come back to after visiting the temples. The room felt welcoming and the hosts were attentive.”", "Aarav & family", "Indore", "★★★★★"],
      ["“We appreciated the calm surroundings and convenient location for our Ujjain visit. Communication was thoughtful.”", "Meera S.", "Bhopal", "★★★★★"],
      ["“A comfortable base for our family trip. We had a relaxed stay and felt well looked after.”", "Rohan & family", "Ahmedabad", "★★★★☆"]
    ].map(([quote, name, city, stars]) => `<div class="col-md-6 col-lg-4"><article class="page-card"><div class="stars" aria-label="${stars.length} star rating">${stars}</div><blockquote class="mt-3 mb-4" style="font-family:var(--serif);font-size:1.2rem;line-height:1.6">${quote}</blockquote><strong>${name}</strong><p>${city} · sample review</p></article></div>`).join("")}</div>`
  },
  contact: {
    title: "Contact & Book Now",
    subtitle: "Start a conversation",
    description: "Share your dates and stay requirements. This is an enquiry only; the host will confirm availability, room details and rates.",
    content: `<div class="row gy-5 gx-lg-5"><div class="col-lg-7"><form class="enquiry-form" id="enquiry-form" novalidate><p class="eyebrow">Stay enquiry</p><h2 class="h3 mb-4">Tell us a little about your visit.</h2><div id="form-status" class="form-status alert alert-warning" role="status" aria-live="polite" hidden></div><div class="row g-3"><div class="col-md-6"><label class="form-label" for="guest-name">Your name *</label><input class="form-control" id="guest-name" name="name" autocomplete="name" required minlength="2" maxlength="80"></div><div class="col-md-6"><label class="form-label" for="guest-phone">Phone number *</label><input class="form-control" id="guest-phone" name="phone" type="tel" autocomplete="tel" required pattern="[+0-9() .-]{7,20}" title="Enter a valid phone number, using 7 to 20 digits or common phone characters."></div><div class="col-md-6"><label class="form-label" for="guest-email">Email address *</label><input class="form-control" id="guest-email" name="email" type="email" autocomplete="email" required maxlength="120"></div><div class="col-md-6"><label class="form-label" for="guest-count">Number of guests *</label><input class="form-control" id="guest-count" name="guests" type="number" min="1" max="30" step="1" required></div><div class="col-md-6"><label class="form-label" for="check-in">Check-in date *</label><input class="form-control" id="check-in" name="checkIn" type="date" required></div><div class="col-md-6"><label class="form-label" for="check-out">Check-out date *</label><input class="form-control" id="check-out" name="checkOut" type="date" required></div><div class="col-12"><label class="form-label" for="room-type">Room type *</label><select class="form-select" id="room-type" name="roomType" required><option value="">Select a room option</option><option>Deluxe Room</option><option>Family Room</option><option>Long-Stay Room</option><option>Not sure yet</option></select></div><div class="col-12"><label class="form-label" for="special-requests">Special requests</label><textarea class="form-control" id="special-requests" name="specialRequests" maxlength="1000" placeholder="Share any requirements that would help us respond."></textarea></div><div class="col-12"><button class="button button-dark" type="submit">Prepare enquiry <span aria-hidden="true">↗</span></button><p class="fine-print mt-3 mb-0">No payment is taken. This demo form does not transmit or store your details, and submitting it is not a booking confirmation.</p></div></div></form></div><div class="col-lg-5"><p class="eyebrow">We’re here to help</p><h2>Prefer to speak with someone?</h2><p class="text-secondary">Business contact details have not been provided yet. Use the enquiry form or add verified phone, WhatsApp and email details before publishing.</p><div class="d-flex flex-wrap gap-2">${contactLink("whatsapp", "WhatsApp enquiry", "contact-action")} ${contactLink("phone", "Call the homestay", "contact-action")}</div><address class="address-block mt-4">${SITE.address}</address><a class="text-link" href="${SITE.mapUrl}" target="_blank" rel="noopener noreferrer">Open Google Maps <span aria-hidden="true">↗</span></a><p class="fine-print mt-4">Check-in from 10:00 AM · Check-out by 9:00 AM. 24-hour check-in may be available by prior arrangement; confirm directly with the host.</p></div></div>`
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "A little more clarity before your visit",
    description: "Please confirm property-specific policies and arrangements directly with the host.",
    content: `<div class="content-narrow mx-auto"><div class="accordion-elegant">${[
      ["What are check-in and check-out times?", "Check-in is from 10:00 AM and check-out is by 9:00 AM. 24-hour check-in availability may be possible by arrangement; please confirm in advance."],
      ["What is the cancellation policy?", "Cancellation terms can vary by reservation. Ask the host for the applicable policy in writing before confirming."],
      ["Is parking available?", "Parking availability and any charges are not confirmed here. Please check with the host before arrival."],
      ["Are meals available?", "Ask the host about meal availability, timings and pure-vegetarian food options."],
      ["Can visitors come to the property?", "Visitor rules are set by the host. Please confirm the policy before inviting visitors."],
      ["What identification is required?", "Guests may be asked for valid government-issued identification at check-in. Confirm accepted documents with the host."],
      ["How can I pay?", "Payment methods and timing should be confirmed directly with the host. This website does not process payments."],
      ["Is Wi-Fi available?", "Wi-Fi availability and performance are not confirmed. Please ask the host if it is important to your stay."],
      ["Can I book for a group?", "Group enquiries are welcome. Share your group size, dates and room needs so the host can advise on suitability."],
      ["How do I confirm rates and availability?", "Submit an enquiry with your dates and group size or contact the host directly. Enquiries do not guarantee availability or constitute a confirmed booking."]
    ].map(([question, answer]) => `<details class="faq-item"><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div></div>`
  },
  privacy: {
    title: "Privacy Policy",
    subtitle: "Your information, treated with care",
    description: "A plain-language privacy notice for enquiries submitted through this website.",
    content: `<div class="content-narrow mx-auto"><p class="policy-note">This is a starter policy for a static enquiry website. Review it and update it to reflect the actual operator, hosting provider, analytics and contact practices before publishing.</p><h2>Information you provide</h2><p>The enquiry form asks for your name, phone number, email address, travel dates, group size, room preference and optional message. The current website does not send or store this form data. A successful form interaction only means your browser validated the fields; it does not mean your enquiry was delivered.</p><h2>Third-party services</h2><p>This site may load fonts from Google Fonts, styles from Bootstrap’s CDN, images hosted by Unsplash, and map content from Google Maps. Those providers may receive technical information such as your IP address when your browser requests their content. Review each provider’s policies and use locally hosted assets if that does not suit your needs.</p><h2>Contact and data requests</h2><p>Add the homestay’s verified contact details and a process for privacy requests before publishing this policy. Do not send sensitive identity or payment information through the demo enquiry form.</p><h2>Updates</h2><p>Update this notice whenever the site’s data practices change. Add the policy’s effective date when the operator approves it.</p></div>`
  },
  terms: {
    title: "Terms & Conditions",
    subtitle: "Important information for visitors",
    description: "Website terms and booking enquiry information for Shri Krishna Villa Homestay.",
    content: `<div class="content-narrow mx-auto"><p class="policy-note">This is a general website-information draft, not legal advice. The property operator should review and adapt it before publication.</p><h2>Enquiries are not bookings</h2><p>Submitting this website’s form is an enquiry only. It does not confirm a reservation, room availability, rate or service. The host must confirm all details directly with the guest.</p><h2>Rates and facilities</h2><p>Room names, photographs, capacities, facilities, travel times and other descriptive details may be placeholders. Confirm current information, applicable charges and policies directly with the property before making travel arrangements.</p><h2>Payments and cancellations</h2><p>This website does not process payments. Payment terms, cancellation conditions, check-in arrangements, identification requirements, visitor rules and other stay conditions are determined by the host and should be agreed directly before booking.</p><h2>External links</h2><p>Links to map and third-party services are provided for convenience. Their content, availability and policies are managed by those providers.</p><h2>Contact</h2><p>Add the property operator’s verified contact details and any applicable jurisdiction and effective date before publishing.</p></div>`
  }
};

function contactLink(kind, label, className = "") {
  const value = SITE[kind];
  if (value) {
    const href = kind === "phone" ? `tel:${value}` : kind === "email" ? `mailto:${value}` : `https://wa.me/${value.replace(/\D/g, "")}`;
    return `<a class="${className}" href="${href}" ${kind === "whatsapp" ? 'target="_blank" rel="noopener noreferrer"' : ""}>${label}</a>`;
  }
  return `<a class="${className}" href="contact.html" aria-label="${label} — business contact details to be added" title="Verified business contact details to be added">${label}</a>`;
}

function renderChrome(page) {
  const header = document.querySelector("#site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<div class="container header-inner"><a class="brand" href="index.html" aria-label="Shri Krishna Villa Homestay home"><span class="brand-mark" aria-hidden="true">श्री</span><span class="brand-copy"><strong>Shri Krishna Villa</strong><small>Homestay · Ujjain</small></span></a><button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation"><span aria-hidden="true">☰</span></button><nav class="main-nav" id="primary-navigation" aria-label="Main navigation">${navItems.map(([label, url, key]) => `<a href="${url}" ${page === key ? 'aria-current="page"' : ""}>${label}</a>`).join("")}<a class="nav-booking" href="contact.html">Check Availability</a></nav></div>`;
  }
  const footer = document.querySelector("#site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `<div class="container"><div class="row g-4 footer-top"><div class="col-md-6 col-lg-4"><a class="brand footer-brand" href="index.html"><span class="brand-mark" aria-hidden="true">श्री</span><span class="brand-copy"><strong>Shri Krishna Villa</strong><small>Homestay · Ujjain</small></span></a><p class="footer-blurb">A peaceful, family-friendly home away from home in the sacred city of Ujjain.</p></div><div class="col-6 col-md-3 col-lg-2"><h2 class="footer-title">Explore</h2><div class="footer-links"><a href="about.html">About Us</a><a href="rooms.html">Rooms & Rates</a><a href="gallery.html">Gallery</a><a href="amenities.html">Amenities</a><a href="location.html">Location</a></div></div><div class="col-6 col-md-3 col-lg-2"><h2 class="footer-title">Helpful</h2><div class="footer-links"><a href="reviews.html">Guest Reviews</a><a href="faq.html">FAQs</a><a href="contact.html">Contact / Book Now</a><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms</a></div></div><div class="col-md-6 col-lg-4"><h2 class="footer-title">Get in touch</h2><div class="footer-contact"><span>${SITE.address}</span>${contactLink("phone", "Call the homestay")} ${contactLink("whatsapp", "WhatsApp enquiry")} ${contactLink("email", "Email the homestay")}<a href="${SITE.mapUrl}" target="_blank" rel="noopener noreferrer">Google Maps ↗</a></div><p class="fine-print mt-2" style="color:rgba(255,255,255,.48)">Phone, WhatsApp and email details to be added by the property.</p></div></div><div class="footer-bottom"><span>© <span id="current-year"></span> Shri Krishna Villa Homestay · Ujjain</span><div class="footer-legal"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="contact.html">Enquire now</a></div></div></div>`;
    const year = footer.querySelector("#current-year");
    if (year) year.textContent = new Date().getFullYear();
  }
}

function renderPageContent(page) {
  const config = pageInfo[page];
  const main = document.querySelector("#main-content");
  if (!config || !main) return;
  document.title = `${config.title} | Shri Krishna Villa Homestay Ujjain`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = config.description;
  main.innerHTML = `<section class="page-hero"><div class="container"><p class="eyebrow">${config.subtitle}</p><h1>${config.title}</h1><p>${config.description}</p></div></section><section class="page-content"><div class="container">${config.content}</div></section><section class="closing-cta"><div class="container closing-inner"><div><p class="eyebrow eyebrow-light">Plan your Ujjain visit</p><h2>Let’s find the right stay for you.</h2><p>Ask about your dates, room needs and any special requirements.</p></div><a class="button button-gold" href="contact.html">Send an enquiry <span aria-hidden="true">↗</span></a></div></section>`;
}

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-navigation");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    nav.classList.toggle("is-open", open);
  });
  nav.addEventListener("click", event => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      nav.classList.remove("is-open");
    }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      nav.classList.remove("is-open");
      toggle.focus();
    }
  });
}

function initReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(item => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

function initGallery() {
  const filters = document.querySelectorAll("[data-gallery-filter]");
  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      const selected = filter.dataset.galleryFilter;
      filters.forEach(item => item.setAttribute("aria-pressed", String(item === filter)));
      document.querySelectorAll(".page-gallery [data-gallery-category]").forEach(item => {
        item.hidden = selected !== "All" && item.dataset.galleryCategory !== selected;
      });
    });
  });
  const dialog = document.querySelector("#gallery-lightbox");
  if (!dialog) return;
  const image = dialog.querySelector("img");
  const caption = dialog.querySelector("p");
  document.querySelectorAll("[data-gallery-image]").forEach(button => {
    button.addEventListener("click", () => {
      image.src = button.dataset.galleryImage;
      image.alt = button.querySelector("img")?.alt || button.dataset.galleryCaption || "Gallery image";
      caption.textContent = button.dataset.galleryCaption || "";
      dialog.showModal();
    });
  });
  dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
}

function initReviews() {
  const reviews = [
    { quote: "“A peaceful place to come back to after visiting the temples. The room felt welcoming and the hosts were attentive.”", name: "Aarav & family", city: "Indore · Sample review", initial: "A" },
    { quote: "“We appreciated the calm surroundings and convenient location for our Ujjain visit. Communication was thoughtful.”", name: "Meera S.", city: "Bhopal · Sample review", initial: "M" },
    { quote: "“A comfortable base for our family trip. We had a relaxed stay and felt well looked after.”", name: "Rohan & family", city: "Ahmedabad · Sample review", initial: "R" }
  ];
  let index = 0;
  const update = () => {
    const review = reviews[index];
    document.querySelector("#review-quote").textContent = review.quote;
    document.querySelector("#review-name").textContent = review.name;
    document.querySelector("#review-city").textContent = review.city;
    document.querySelector(".review-avatar").textContent = review.initial;
    document.querySelector("#review-count").textContent = `0${index + 1} / 0${reviews.length}`;
  };
  document.querySelector("#review-prev")?.addEventListener("click", () => { index = (index + reviews.length - 1) % reviews.length; update(); });
  document.querySelector("#review-next")?.addEventListener("click", () => { index = (index + 1) % reviews.length; update(); });
}

function initEnquiryForm() {
  const form = document.querySelector("#enquiry-form");
  const status = document.querySelector("#form-status");
  if (!form || !status) return;
  const params = new URLSearchParams(window.location.search);
  const room = params.get("room");
  if (room && form.elements.roomType) form.elements.roomType.value = room;
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const checkIn = form.elements.checkIn;
  const checkOut = form.elements.checkOut;
  checkIn.min = localToday;
  checkOut.min = localToday;
  const dayAfter = date => {
    const next = new Date(`${date}T12:00:00`);
    next.setDate(next.getDate() + 1);
    return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}-${String(next.getDate()).padStart(2, "0")}`;
  };
  checkIn.addEventListener("change", () => {
    checkOut.min = checkIn.value ? dayAfter(checkIn.value) : localToday;
    if (checkOut.value && checkIn.value && checkOut.value <= checkIn.value) checkOut.value = "";
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    status.hidden = true;
    status.className = "form-status alert alert-danger";
    if (!form.reportValidity()) {
      status.textContent = "Please check the highlighted fields and try again.";
      status.hidden = false;
      return;
    }
    if (checkOut.value <= checkIn.value) {
      checkOut.setCustomValidity("Check-out must be after check-in.");
      checkOut.reportValidity();
      checkOut.setCustomValidity("");
      status.textContent = "Please choose a check-out date that is after check-in.";
      status.hidden = false;
      return;
    }
    status.className = "form-status alert alert-warning";
    status.textContent = "Your details have been checked in this browser, but this demo site does not send or store enquiries. Please contact the homestay by phone or WhatsApp once verified business contact details are added.";
    status.hidden = false;
    status.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function initContactActions() {
  document.querySelectorAll('a[aria-label*="business contact details to be added"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const form = document.querySelector("#enquiry-form");
      if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.href = "contact.html";
    });
  });
}

const currentPage = document.body.dataset.page || "home";
renderChrome(currentPage);
if (currentPage !== "home") renderPageContent(currentPage);
initNavigation();
initReveals();
initGallery();
initReviews();
initEnquiryForm();
initContactActions();
